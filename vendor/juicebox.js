/* Module header based on https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        if(!root) root = window;   // Neccessary for Babel transform, which changes "this" to void
        root.hic = factory();
    }
 }(this, function () {
//
//     // Just return a value to define the module export.
//     // This example returns an object, but the module
//     // can return a function as the exported value.
//     return igv;
//
// }));



/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

// Modified for encapsulation in igv module
// * no exports
// * no global definition
// * noConflict not supported (as _ is encapsulated its not needed)

var $, jQuery;

(function (global, factory) {


    $ = factory(global);
    jQuery = $;


// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (window) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
    var deletedIds = [];

    var document = window.document;

    var slice = deletedIds.slice;

    var concat = deletedIds.concat;

    var push = deletedIds.push;

    var indexOf = deletedIds.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var support = {};


    var
        version = "1.12.4",

        // Define a local copy of jQuery
        jQuery = function (selector, context) {

            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init(selector, context);
        },

        // Support: Android<4.1, IE<9
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

        // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,

        // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function (all, letter) {
            return letter.toUpperCase();
        };

    jQuery.fn = jQuery.prototype = {

        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // Start with an empty selector
        selector: "",

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function () {
            return slice.call(this);
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function (num) {
            return num != null ?

                // Return just the one element from the set
                (num < 0 ? this[num + this.length] : this[num]) :

                // Return all the elements in a clean array
                slice.call(this);
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function (elems) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            ret.context = this.context;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        each: function (callback) {
            return jQuery.each(this, callback);
        },

        map: function (callback) {
            return this.pushStack(jQuery.map(this, function (elem, i) {
                return callback.call(elem, i, elem);
            }));
        },

        slice: function () {
            return this.pushStack(slice.apply(this, arguments));
        },

        first: function () {
            return this.eq(0);
        },

        last: function () {
            return this.eq(-1);
        },

        eq: function (i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },

        end: function () {
            return this.prevObject || this.constructor();
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: deletedIds.sort,
        splice: deletedIds.splice
    };

    jQuery.extend = jQuery.fn.extend = function () {
        var src, copyIsArray, copy, name, options, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) ||
                        (copyIsArray = jQuery.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = jQuery.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend({

        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function (msg) {
            throw new Error(msg);
        },

        noop: function () {
        },

        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        isFunction: function (obj) {
            return jQuery.type(obj) === "function";
        },

        isArray: Array.isArray || function (obj) {
            return jQuery.type(obj) === "array";
        },

        isWindow: function (obj) {
            /* jshint eqeqeq: false */
            return obj != null && obj == obj.window;
        },

        isNumeric: function (obj) {

            // parseFloat NaNs numeric-cast false positives (null|true|false|"")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            // adding 1 corrects loss of precision from parseFloat (#15100)
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
        },

        isEmptyObject: function (obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },

        isPlainObject: function (obj) {
            var key;

            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }

            try {

                // Not own constructor property must be Object
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {

                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }

            // Support: IE<9
            // Handle iteration over inherited properties before own properties.
            if (!support.ownFirst) {
                for (key in obj) {
                    return hasOwn.call(obj, key);
                }
            }

            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.
            for (key in obj) {
            }

            return key === undefined || hasOwn.call(obj, key);
        },

        type: function (obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[toString.call(obj)] || "object" :
                typeof obj;
        },

        // Workarounds based on findings by Jim Driscoll
        // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
        globalEval: function (data) {
            if (data && jQuery.trim(data)) {

                // We use execScript on Internet Explorer
                // We use an anonymous function so that context is window
                // rather than jQuery in Firefox
                (window.execScript || function (data) {
                    window["eval"].call(window, data); // jscs:ignore requireDotNotation
                })(data);
            }
        },

        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function (string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },

        nodeName: function (elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },

        each: function (obj, callback) {
            var length, i = 0;

            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }

            return obj;
        },

        // Support: Android<4.1, IE<9
        trim: function (text) {
            return text == null ?
                "" :
                (text + "").replace(rtrim, "");
        },

        // results is for internal usage only
        makeArray: function (arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret,
                        typeof arr === "string" ?
                            [arr] : arr
                    );
                } else {
                    push.call(ret, arr);
                }
            }

            return ret;
        },

        inArray: function (elem, arr, i) {
            var len;

            if (arr) {
                if (indexOf) {
                    return indexOf.call(arr, elem, i);
                }

                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

                for (; i < len; i++) {

                    // Skip accessing in sparse arrays
                    if (i in arr && arr[i] === elem) {
                        return i;
                    }
                }
            }

            return -1;
        },

        merge: function (first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;

            while (j < len) {
                first[i++] = second[j++];
            }

            // Support: IE<9
            // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
            if (len !== len) {
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }

            first.length = i;

            return first;
        },

        grep: function (elems, callback, invert) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function (elems, callback, arg) {
            var length, value,
                i = 0,
                ret = [];

            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }

                // Go through every key on the object,
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }

            // Flatten any nested arrays
            return concat.apply([], ret);
        },

        // A global GUID counter for objects
        guid: 1,

        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function (fn, context) {
            var args, proxy, tmp;

            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }

            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }

            // Simulated bind
            args = slice.call(arguments, 2);
            proxy = function () {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };

            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

            return proxy;
        },

        now: function () {
            return +(new Date());
        },

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
    /* jshint ignore: start */
    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
    }
    /* jshint ignore: end */

// Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

    function isArrayLike(obj) {

        // Support: iOS 8.2 (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = jQuery.type(obj);

        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj;
    }

    var Sizzle =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        (function (window) {

            var i,
                support,
                Expr,
                getText,
                isXML,
                tokenize,
                compile,
                select,
                outermostContext,
                sortInput,
                hasDuplicate,

                // Local document vars
                setDocument,
                document,
                docElem,
                documentIsHTML,
                rbuggyQSA,
                rbuggyMatches,
                matches,
                contains,

                // Instance-specific data
                expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function (a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                    }
                    return 0;
                },

                // General-purpose constants
                MAX_NEGATIVE = 1 << 31,

                // Instance methods
                hasOwn = ({}).hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
                // Use a stripped-down indexOf as it's faster than native
                // http://jsperf.com/thor-indexof-vs-for/5
                indexOf = function (list, elem) {
                    var i = 0,
                        len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i;
                        }
                    }
                    return -1;
                },

                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

                // Regular expressions

                // http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = "[\\x20\\t\\r\\n\\f]",

                // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

                // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
                    // Operator (capture 2)
                    "*([*^$|!~]?=)" + whitespace +
                    // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
                    "*\\]",

                pseudos = ":(" + identifier + ")(?:\\((" +
                    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                    // 1. quoted (capture 3; capture 4 or capture 5)
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                    // 2. simple (capture 6)
                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                    // 3. anything else (capture 2)
                    ".*" +
                    ")\\)|)",

                // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),

                matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                        "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                        "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                    // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },

                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,

                rnative = /^[^{]+\{\s*\[native \w/,

                // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                rsibling = /[+~]/,
                rescape = /'|\\/g,

                // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function (_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 0x10000;
                    // NaN means non-codepoint
                    // Support: Firefox<24
                    // Workaround erroneous numeric interpretation of +"0x"
                    return high !== high || escapedWhitespace ?
                        escaped :
                        high < 0 ?
                            // BMP codepoint
                            String.fromCharCode(high + 0x10000) :
                            // Supplemental Plane codepoint (surrogate pair)
                            String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                },

                // Used for iframes
                // See setDocument()
                // Removing the function wrapper causes a "Permission Denied"
                // error in IE
                unloadHandler = function () {
                    setDocument();
                };

// Optimize for push.apply( _, NodeList )
            try {
                push.apply(
                    (arr = slice.call(preferredDoc.childNodes)),
                    preferredDoc.childNodes
                );
                // Support: Android<4.0
                // Detect silently failing push.apply
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ?

                        // Leverage slice if possible
                        function (target, els) {
                            push_native.apply(target, slice.call(els));
                        } :

                        // Support: IE<9
                        // Otherwise append directly
                        function (target, els) {
                            var j = target.length,
                                i = 0;
                            // Can't trust NodeList.length
                            while ((target[j++] = els[i++])) {
                            }
                            target.length = j - 1;
                        }
                };
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, nidselect, match, groups, newSelector,
                    newContext = context && context.ownerDocument,

                    // nodeType defaults to 9, since context defaults to document
                    nodeType = context ? context.nodeType : 9;

                results = results || [];

                // Return early from calls with invalid selector or context
                if (typeof selector !== "string" || !selector ||
                    nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

                    return results;
                }

                // Try to shortcut find operations (as opposed to filters) in HTML documents
                if (!seed) {

                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;

                    if (documentIsHTML) {

                        // If the selector is sufficiently simple, try using a "get*By*" DOM method
                        // (excepting DocumentFragment context, where the methods don't exist)
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                            // ID selector
                            if ((m = match[1])) {

                                // Document context
                                if (nodeType === 9) {
                                    if ((elem = context.getElementById(m))) {

                                        // Support: IE, Opera, Webkit
                                        // TODO: identify versions
                                        // getElementById can match elements by name instead of ID
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }

                                    // Element context
                                } else {

                                    // Support: IE, Opera, Webkit
                                    // TODO: identify versions
                                    // getElementById can match elements by name instead of ID
                                    if (newContext && (elem = newContext.getElementById(m)) &&
                                        contains(context, elem) &&
                                        elem.id === m) {

                                        results.push(elem);
                                        return results;
                                    }
                                }

                                // Type selector
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;

                                // Class selector
                            } else if ((m = match[3]) && support.getElementsByClassName &&
                                context.getElementsByClassName) {

                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }

                        // Take advantage of querySelectorAll
                        if (support.qsa && !compilerCache[selector + " "] &&
                            (!rbuggyQSA || !rbuggyQSA.test(selector))) {

                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector;

                                // qSA looks outside Element context, which is not what we want
                                // Thanks to Andrew Dupont for this workaround technique
                                // Support: IE <=8
                                // Exclude object elements
                            } else if (context.nodeName.toLowerCase() !== "object") {

                                // Capture the context ID, setting it first if necessary
                                if ((nid = context.getAttribute("id"))) {
                                    nid = nid.replace(rescape, "\\$&");
                                } else {
                                    context.setAttribute("id", (nid = expando));
                                }

                                // Prefix every selector in the list
                                groups = tokenize(selector);
                                i = groups.length;
                                nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                                while (i--) {
                                    groups[i] = nidselect + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");

                                // Expand context for sibling selectors
                                newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                                    context;
                            }

                            if (newSelector) {
                                try {
                                    push.apply(results,
                                        newContext.querySelectorAll(newSelector)
                                    );
                                    return results;
                                } catch (qsaError) {
                                } finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                }

                // All others
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }

            /**
             * Create key-value caches of limited size
             * @returns {function(string, object)} Returns the Object data after storing it on itself with
             *    property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
             *    deleting the oldest entry
             */
            function createCache() {
                var keys = [];

                function cache(key, value) {
                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        // Only keep the most recent entries
                        delete cache[keys.shift()];
                    }
                    return (cache[key + " "] = value);
                }

                return cache;
            }

            /**
             * Mark a function for special use by Sizzle
             * @param {Function} fn The function to mark
             */
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }

            /**
             * Support testing using an element
             * @param {Function} fn Passed the created div and expects a boolean result
             */
            function assert(fn) {
                var div = document.createElement("div");

                try {
                    return !!fn(div);
                } catch (e) {
                    return false;
                } finally {
                    // Remove from its parent by default
                    if (div.parentNode) {
                        div.parentNode.removeChild(div);
                    }
                    // release memory in IE
                    div = null;
                }
            }

            /**
             * Adds the same handler for all of the specified attrs
             * @param {String} attrs Pipe-separated list of attributes
             * @param {Function} handler The method that will be applied
             */
            function addHandle(attrs, handler) {
                var arr = attrs.split("|"),
                    i = arr.length;

                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }

            /**
             * Checks document order of two siblings
             * @param {Element} a
             * @param {Element} b
             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
             */
            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                        (~b.sourceIndex || MAX_NEGATIVE) -
                        (~a.sourceIndex || MAX_NEGATIVE);

                // Use IE sourceIndex if available on both nodes
                if (diff) {
                    return diff;
                }

                // Check if b follows a
                if (cur) {
                    while ((cur = cur.nextSibling)) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }

                return a ? 1 : -1;
            }

            /**
             * Returns a function to use in pseudos for input types
             * @param {String} type
             */
            function createInputPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for buttons
             * @param {String} type
             */
            function createButtonPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for positionals
             * @param {Function} fn
             */
            function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                    argument = +argument;
                    return markFunction(function (seed, matches) {
                        var j,
                            matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length;

                        // Match elements found at the specified indexes
                        while (i--) {
                            if (seed[(j = matchIndexes[i])]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }

            /**
             * Checks a node for validity as a Sizzle context
             * @param {Element|Object=} context
             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
             */
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }

// Expose support vars for convenience
            support = Sizzle.support = {};

            /**
             * Detects XML nodes
             * @param {Element|Object} elem An element or a document
             * @returns {Boolean} True iff elem is a non-HTML XML node
             */
            isXML = Sizzle.isXML = function (elem) {
                // documentElement is verified for cases where it doesn't yet exist
                // (such as loading iframes in IE - #4833)
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };

            /**
             * Sets document-related variables once based on the current document
             * @param {Element|Object} [doc] An element or document object to use to set the document
             * @returns {Object} Returns the current document
             */
            setDocument = Sizzle.setDocument = function (node) {
                var hasCompare, parent,
                    doc = node ? node.ownerDocument || node : preferredDoc;

                // Return early if doc is invalid or already selected
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }

                // Update global variables
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);

                // Support: IE 9-11, Edge
                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                if ((parent = document.defaultView) && parent.top !== parent) {
                    // Support: IE 11
                    if (parent.addEventListener) {
                        parent.addEventListener("unload", unloadHandler, false);

                        // Support: IE 9 - 10 only
                    } else if (parent.attachEvent) {
                        parent.attachEvent("onunload", unloadHandler);
                    }
                }

                /* Attributes
                 ---------------------------------------------------------------------- */

                // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties
                // (excepting IE8 booleans)
                support.attributes = assert(function (div) {
                    div.className = "i";
                    return !div.getAttribute("className");
                });

                /* getElement(s)By*
                 ---------------------------------------------------------------------- */

                // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function (div) {
                    div.appendChild(document.createComment(""));
                    return !div.getElementsByTagName("*").length;
                });

                // Support: IE<9
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);

                // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function (div) {
                    docElem.appendChild(div).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                });

                // ID find and filter
                if (support.getById) {
                    Expr.find["ID"] = function (id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m ? [m] : [];
                        }
                    };
                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                } else {
                    // Support: IE6/7
                    // getElementById is not reliable as a find shortcut
                    delete Expr.find["ID"];

                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" &&
                                elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                }

                // Tag
                Expr.find["TAG"] = support.getElementsByTagName ?
                    function (tag, context) {
                        if (typeof context.getElementsByTagName !== "undefined") {
                            return context.getElementsByTagName(tag);

                            // DocumentFragment nodes don't have gEBTN
                        } else if (support.qsa) {
                            return context.querySelectorAll(tag);
                        }
                    } :

                    function (tag, context) {
                        var elem,
                            tmp = [],
                            i = 0,
                            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                            results = context.getElementsByTagName(tag);

                        // Filter out possible comments
                        if (tag === "*") {
                            while ((elem = results[i++])) {
                                if (elem.nodeType === 1) {
                                    tmp.push(elem);
                                }
                            }

                            return tmp;
                        }
                        return results;
                    };

                // Class
                Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };

                /* QSA/matchesSelector
                 ---------------------------------------------------------------------- */

                // QSA and matchesSelector support

                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = [];

                // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See http://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];

                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                    // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function (div) {
                        // Select is set to empty string on purpose
                        // This is to test IE's treatment of not explicitly
                        // setting a boolean content attribute,
                        // since its presence should be enough
                        // http://bugs.jquery.com/ticket/12359
                        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" +
                            "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                            "<option selected=''></option></select>";

                        // Support: IE8, Opera 11-12.16
                        // Nothing should be selected when empty strings follow ^= or $= or *=
                        // The test attribute must be unknown in Opera but "safe" for WinRT
                        // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                        if (div.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        }

                        // Support: IE8
                        // Boolean attributes and "value" are not treated correctly
                        if (!div.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        }

                        // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                        if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        }

                        // Webkit/Opera - :checked should return selected option elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        // IE8 throws error here and will not see later tests
                        if (!div.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }

                        // Support: Safari 8+, iOS 8+
                        // https://bugs.webkit.org/show_bug.cgi?id=136851
                        // In-page `selector#id sibing-combinator selector` fails
                        if (!div.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });

                    assert(function (div) {
                        // Support: Windows 8 Native Apps
                        // The type and name attributes are restricted during .innerHTML assignment
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        div.appendChild(input).setAttribute("name", "D");

                        // Support: IE8
                        // Enforce case-sensitivity of name attribute
                        if (div.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        }

                        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                        // IE8 throws error here and will not see later tests
                        if (!div.querySelectorAll(":enabled").length) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }

                        // Opera 10-11 does not throw on post-comma invalid pseudos
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }

                if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                    docElem.webkitMatchesSelector ||
                    docElem.mozMatchesSelector ||
                    docElem.oMatchesSelector ||
                    docElem.msMatchesSelector)))) {

                    assert(function (div) {
                        // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        support.disconnectedMatch = matches.call(div, "div");

                        // This should fail with an exception
                        // Gecko does not error, returns false instead
                        matches.call(div, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }

                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

                /* Contains
                 ---------------------------------------------------------------------- */
                hasCompare = rnative.test(docElem.compareDocumentPosition);

                // Element contains another
                // Purposefully self-exclusive
                // As in, an element does not contain itself
                contains = hasCompare || rnative.test(docElem.contains) ?
                    function (a, b) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !!(bup && bup.nodeType === 1 && (
                            adown.contains ?
                                adown.contains(bup) :
                                a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                        ));
                    } :
                    function (a, b) {
                        if (b) {
                            while ((b = b.parentNode)) {
                                if (b === a) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    };

                /* Sorting
                 ---------------------------------------------------------------------- */

                // Document order sorting
                sortOrder = hasCompare ?
                    function (a, b) {

                        // Flag for duplicate removal
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }

                        // Sort on method existence if only one input has compareDocumentPosition
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if (compare) {
                            return compare;
                        }

                        // Calculate position if both inputs belong to the same document
                        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                            a.compareDocumentPosition(b) :

                            // Otherwise we know they are disconnected
                            1;

                        // Disconnected nodes
                        if (compare & 1 ||
                            (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

                            // Choose the first element that is related to our preferred document
                            if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                                return -1;
                            }
                            if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                                return 1;
                            }

                            // Maintain original order
                            return sortInput ?
                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                0;
                        }

                        return compare & 4 ? -1 : 1;
                    } :
                    function (a, b) {
                        // Exit early if the nodes are identical
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }

                        var cur,
                            i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];

                        // Parentless nodes are either documents or disconnected
                        if (!aup || !bup) {
                            return a === document ? -1 :
                                b === document ? 1 :
                                    aup ? -1 :
                                        bup ? 1 :
                                            sortInput ?
                                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                                0;

                            // If the nodes are siblings, we can do a quick check
                        } else if (aup === bup) {
                            return siblingCheck(a, b);
                        }

                        // Otherwise we need full lists of their ancestors for comparison
                        cur = a;
                        while ((cur = cur.parentNode)) {
                            ap.unshift(cur);
                        }
                        cur = b;
                        while ((cur = cur.parentNode)) {
                            bp.unshift(cur);
                        }

                        // Walk down the tree looking for a discrepancy
                        while (ap[i] === bp[i]) {
                            i++;
                        }

                        return i ?
                            // Do a sibling check if the nodes have a common ancestor
                            siblingCheck(ap[i], bp[i]) :

                            // Otherwise nodes in our document sort first
                            ap[i] === preferredDoc ? -1 :
                                bp[i] === preferredDoc ? 1 :
                                    0;
                    };

                return document;
            };

            Sizzle.matches = function (expr, elements) {
                return Sizzle(expr, null, null, elements);
            };

            Sizzle.matchesSelector = function (elem, expr) {
                // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }

                // Make sure that attribute selectors are quoted
                expr = expr.replace(rattributeQuotes, "='$1']");

                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] &&
                    (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                    (!rbuggyQSA || !rbuggyQSA.test(expr))) {

                    try {
                        var ret = matches.call(elem, expr);

                        // IE 9's matchesSelector returns false on disconnected nodes
                        if (ret || support.disconnectedMatch ||
                            // As well, disconnected nodes are said to be in a document
                            // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {
                    }
                }

                return Sizzle(expr, document, null, [elem]).length > 0;
            };

            Sizzle.contains = function (context, elem) {
                // Set document vars if needed
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };

            Sizzle.attr = function (elem, name) {
                // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }

                var fn = Expr.attrHandle[name.toLowerCase()],
                    // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
                        fn(elem, name, !documentIsHTML) :
                        undefined;

                return val !== undefined ?
                    val :
                    support.attributes || !documentIsHTML ?
                        elem.getAttribute(name) :
                        (val = elem.getAttributeNode(name)) && val.specified ?
                            val.value :
                            null;
            };

            Sizzle.error = function (msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };

            /**
             * Document sorting and removing duplicates
             * @param {ArrayLike} results
             */
            Sizzle.uniqueSort = function (results) {
                var elem,
                    duplicates = [],
                    j = 0,
                    i = 0;

                // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);

                if (hasDuplicate) {
                    while ((elem = results[i++])) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }

                // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;

                return results;
            };

            /**
             * Utility function for retrieving the text value of an array of DOM nodes
             * @param {Array|Element} elem
             */
            getText = Sizzle.getText = function (elem) {
                var node,
                    ret = "",
                    i = 0,
                    nodeType = elem.nodeType;

                if (!nodeType) {
                    // If no nodeType, this is expected to be an array
                    while ((node = elem[i++])) {
                        // Do not traverse comment nodes
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        // Traverse its children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                // Do not include comment or processing instruction nodes

                return ret;
            };

            Expr = Sizzle.selectors = {

                // Can be adjusted by the user
                cacheLength: 50,

                createPseudo: markFunction,

                match: matchExpr,

                attrHandle: {},

                find: {},

                relative: {
                    ">": {dir: "parentNode", first: true},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: true},
                    "~": {dir: "previousSibling"}
                },

                preFilter: {
                    "ATTR": function (match) {
                        match[1] = match[1].replace(runescape, funescape);

                        // Move the given value to match[3] whether quoted or unquoted
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }

                        return match.slice(0, 4);
                    },

                    "CHILD": function (match) {
                        /* matches from matchExpr["CHILD"]
                         1 type (only|nth|...)
                         2 what (child|of-type)
                         3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                         4 xn-component of xn+y argument ([+-]?\d*n|)
                         5 sign of xn-component
                         6 x of xn-component
                         7 sign of y-component
                         8 y of y-component
                         */
                        match[1] = match[1].toLowerCase();

                        if (match[1].slice(0, 3) === "nth") {
                            // nth-* requires argument
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }

                            // numeric x and y parameters for Expr.filter.CHILD
                            // remember that false/true cast respectively to 0/1
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +((match[7] + match[8]) || match[3] === "odd");

                            // other types prohibit arguments
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }

                        return match;
                    },

                    "PSEUDO": function (match) {
                        var excess,
                            unquoted = !match[6] && match[2];

                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }

                        // Accept quoted arguments as-is
                        if (match[3]) {
                            match[2] = match[4] || match[5] || "";

                            // Strip excess characters from unquoted arguments
                        } else if (unquoted && rpseudo.test(unquoted) &&
                            // Get excess from tokenize (recursively)
                            (excess = tokenize(unquoted, true)) &&
                            // advance to the next closing parenthesis
                            (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                            // excess is a negative index
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }

                        // Return only captures needed by the pseudo filter method (type and argument)
                        return match.slice(0, 3);
                    }
                },

                filter: {

                    "TAG": function (nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ?
                            function () {
                                return true;
                            } :
                            function (elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                    },

                    "CLASS": function (className) {
                        var pattern = classCache[className + " "];

                        return pattern ||
                            (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                            classCache(className, function (elem) {
                                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                            });
                    },

                    "ATTR": function (name, operator, check) {
                        return function (elem) {
                            var result = Sizzle.attr(elem, name);

                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }

                            result += "";

                            return operator === "=" ? result === check :
                                operator === "!=" ? result !== check :
                                    operator === "^=" ? check && result.indexOf(check) === 0 :
                                        operator === "*=" ? check && result.indexOf(check) > -1 :
                                            operator === "$=" ? check && result.slice(-check.length) === check :
                                                operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                                                    operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                                        false;
                        };
                    },

                    "CHILD": function (type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";

                        return first === 1 && last === 0 ?

                            // Shortcut for :nth-*(n)
                            function (elem) {
                                return !!elem.parentNode;
                            } :

                            function (elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start,
                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = false;

                                if (parent) {

                                    // :(first|last|only)-(child|of-type)
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while ((node = node[dir])) {
                                                if (ofType ?
                                                    node.nodeName.toLowerCase() === name :
                                                    node.nodeType === 1) {

                                                    return false;
                                                }
                                            }
                                            // Reverse direction for :only-* (if we haven't yet done so)
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }

                                    start = [forward ? parent.firstChild : parent.lastChild];

                                    // non-xml :nth-child(...) stores cache data on `parent`
                                    if (forward && useCache) {

                                        // Seek `elem` from a previously-cached index

                                        // ...in a gzip-friendly way
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {});

                                        // Support: IE <9 only
                                        // Defend against cloned attroperties (jQuery gh-1709)
                                        uniqueCache = outerCache[node.uniqueID] ||
                                            (outerCache[node.uniqueID] = {});

                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];

                                        while ((node = ++nodeIndex && node && node[dir] ||

                                            // Fallback to seeking `elem` from the start
                                            (diff = nodeIndex = 0) || start.pop())) {

                                            // When found, cache indexes on `parent` and break
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break;
                                            }
                                        }

                                    } else {
                                        // Use previously-cached element index if available
                                        if (useCache) {
                                            // ...in a gzip-friendly way
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {});

                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] ||
                                                (outerCache[node.uniqueID] = {});

                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        }

                                        // xml :nth-child(...)
                                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                        if (diff === false) {
                                            // Use the same loop as above to seek `elem` from the start
                                            while ((node = ++nodeIndex && node && node[dir] ||
                                                (diff = nodeIndex = 0) || start.pop())) {

                                                if ((ofType ?
                                                    node.nodeName.toLowerCase() === name :
                                                    node.nodeType === 1) && ++diff) {

                                                    // Cache the index of each encountered element
                                                    if (useCache) {
                                                        outerCache = node[expando] || (node[expando] = {});

                                                        // Support: IE <9 only
                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                        uniqueCache = outerCache[node.uniqueID] ||
                                                            (outerCache[node.uniqueID] = {});

                                                        uniqueCache[type] = [dirruns, diff];
                                                    }

                                                    if (node === elem) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // Incorporate the offset, then check against cycle size
                                    diff -= last;
                                    return diff === first || (diff % first === 0 && diff / first >= 0);
                                }
                            };
                    },

                    "PSEUDO": function (pseudo, argument) {
                        // pseudo-class names are case-insensitive
                        // http://www.w3.org/TR/selectors/#pseudo-classes
                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                        // Remember that setFilters inherits from pseudos
                        var args,
                            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                                Sizzle.error("unsupported pseudo: " + pseudo);

                        // The user may use createPseudo to indicate that
                        // arguments are needed to create the filter function
                        // just as Sizzle does
                        if (fn[expando]) {
                            return fn(argument);
                        }

                        // But maintain support for old signatures
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                                markFunction(function (seed, matches) {
                                    var idx,
                                        matched = fn(seed, argument),
                                        i = matched.length;
                                    while (i--) {
                                        idx = indexOf(seed, matched[i]);
                                        seed[idx] = !(matches[idx] = matched[i]);
                                    }
                                }) :
                                function (elem) {
                                    return fn(elem, 0, args);
                                };
                        }

                        return fn;
                    }
                },

                pseudos: {
                    // Potentially complex pseudos
                    "not": markFunction(function (selector) {
                        // Trim the selector passed to compile
                        // to avoid treating leading and trailing
                        // spaces as combinators
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));

                        return matcher[expando] ?
                            markFunction(function (seed, matches, context, xml) {
                                var elem,
                                    unmatched = matcher(seed, null, xml, []),
                                    i = seed.length;

                                // Match elements unmatched by `matcher`
                                while (i--) {
                                    if ((elem = unmatched[i])) {
                                        seed[i] = !(matches[i] = elem);
                                    }
                                }
                            }) :
                            function (elem, context, xml) {
                                input[0] = elem;
                                matcher(input, null, xml, results);
                                // Don't keep the element (issue #299)
                                input[0] = null;
                                return !results.pop();
                            };
                    }),

                    "has": markFunction(function (selector) {
                        return function (elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),

                    "contains": markFunction(function (text) {
                        text = text.replace(runescape, funescape);
                        return function (elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        };
                    }),

                    // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    "lang": markFunction(function (lang) {
                        // lang value must be a valid identifier
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function (elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsHTML ?
                                    elem.lang :
                                    elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }),

                    // Miscellaneous
                    "target": function (elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },

                    "root": function (elem) {
                        return elem === docElem;
                    },

                    "focus": function (elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },

                    // Boolean properties
                    "enabled": function (elem) {
                        return elem.disabled === false;
                    },

                    "disabled": function (elem) {
                        return elem.disabled === true;
                    },

                    "checked": function (elem) {
                        // In CSS3, :checked should return both checked and selected elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },

                    "selected": function (elem) {
                        // Accessing this property makes selected-by-default
                        // options in Safari work properly
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }

                        return elem.selected === true;
                    },

                    // Contents
                    "empty": function (elem) {
                        // http://www.w3.org/TR/selectors/#empty-pseudo
                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                        // nodeType < 6 works because attributes (2) do not appear as children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },

                    "parent": function (elem) {
                        return !Expr.pseudos["empty"](elem);
                    },

                    // Element/input types
                    "header": function (elem) {
                        return rheader.test(elem.nodeName);
                    },

                    "input": function (elem) {
                        return rinputs.test(elem.nodeName);
                    },

                    "button": function (elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },

                    "text": function (elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" &&
                            elem.type === "text" &&

                            // Support: IE<8
                            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                            ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },

                    // Position-in-collection
                    "first": createPositionalPseudo(function () {
                        return [0];
                    }),

                    "last": createPositionalPseudo(function (matchIndexes, length) {
                        return [length - 1];
                    }),

                    "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),

                    "even": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "odd": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };

            Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
            for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {submit: true, reset: true}) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }

// Easy API for creating new setFilters
            function setFilters() {
            }

            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();

            tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                var matched, match, tokens, type,
                    soFar, groups, preFilters,
                    cached = tokenCache[selector + " "];

                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }

                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;

                while (soFar) {

                    // Comma and first run
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            // Don't consume trailing commas as valid
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push((tokens = []));
                    }

                    matched = false;

                    // Combinators
                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            // Cast descendant combinators to space
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }

                    // Filters
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                            (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }

                    if (!matched) {
                        break;
                    }
                }

                // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly ?
                    soFar.length :
                    soFar ?
                        Sizzle.error(selector) :
                        // Cache the tokens
                        tokenCache(selector, groups).slice(0);
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    checkNonElements = base && dir === "parentNode",
                    doneName = done++;

                return combinator.first ?
                    // Check against closest ancestor/preceding element
                    function (elem, context, xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                return matcher(elem, context, xml);
                            }
                        }
                    } :

                    // Check against all ancestor/preceding elements
                    function (elem, context, xml) {
                        var oldCache, uniqueCache, outerCache,
                            newCache = [dirruns, doneName];

                        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                        if (xml) {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {});

                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                                    if ((oldCache = uniqueCache[dir]) &&
                                        oldCache[0] === dirruns && oldCache[1] === doneName) {

                                        // Assign to newCache so results back-propagate to previous elements
                                        return (newCache[2] = oldCache[2]);
                                    } else {
                                        // Reuse newcache so results back-propagate to previous elements
                                        uniqueCache[dir] = newCache;

                                        // A match means we're done; a fail means we have to keep checking
                                        if ((newCache[2] = matcher(elem, context, xml))) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    };
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ?
                    function (elem, context, xml) {
                        var i = matchers.length;
                        while (i--) {
                            if (!matchers[i](elem, context, xml)) {
                                return false;
                            }
                        }
                        return true;
                    } :
                    matchers[0];
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;

                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }

                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function (seed, results, context, xml) {
                    var temp, i, elem,
                        preMap = [],
                        postMap = [],
                        preexisting = results.length,

                        // Get initial elements from seed or context
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                        // Prefilter to get matcher input, preserving a map for seed-results synchronization
                        matcherIn = preFilter && (seed || !selector) ?
                            condense(elems, preMap, preFilter, context, xml) :
                            elems,

                        matcherOut = matcher ?
                            // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                            postFinder || (seed ? preFilter : preexisting || postFilter) ?

                                // ...intermediate processing is necessary
                                [] :

                                // ...otherwise use results directly
                                results :
                            matcherIn;

                    // Find primary matches
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }

                    // Apply postFilter
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);

                        // Un-match failing elements by moving them back to matcherIn
                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }

                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        // Restore matcherIn since elem is not yet a final match
                                        temp.push((matcherIn[i] = elem));
                                    }
                                }
                                postFinder(null, (matcherOut = []), temp, xml);
                            }

                            // Move matched elements from seed to results to keep them synchronized
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) &&
                                    (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }

                        // Add elements to results, through postFinder if defined
                    } else {
                        matcherOut = condense(
                            matcherOut === results ?
                                matcherOut.splice(preexisting, matcherOut.length) :
                                matcherOut
                        );
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,

                    // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator(function (elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),
                    matchAnyContext = addCombinator(function (elem) {
                        return indexOf(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function (elem, context, xml) {
                        var ret = (!leadingRelative && (xml || context !== outermostContext)) || (
                            (checkContext = context).nodeType ?
                                matchContext(elem, context, xml) :
                                matchAnyContext(elem, context, xml));
                        // Avoid hanging onto element (issue #299)
                        checkContext = null;
                        return ret;
                    }];

                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

                        // Return special upon seeing a positional matcher
                        if (matcher[expando]) {
                            // Find the next relative operator (if any) for proper handling
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(
                                i > 1 && elementMatcher(matchers),
                                i > 1 && toSelector(
                                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})
                                ).replace(rtrim, "$1"),
                                matcher,
                                i < j && matcherFromTokens(tokens.slice(i, j)),
                                j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                j < len && toSelector(tokens)
                            );
                        }
                        matchers.push(matcher);
                    }
                }

                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function (seed, context, xml, results, outermost) {
                        var elem, j, matcher,
                            matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                            // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                            // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;

                        if (outermost) {
                            outermostContext = context === document || context || outermost;
                        }

                        // Add elements passing elementMatchers directly to results
                        // Support: IE<9, Safari
                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }
                                while ((matcher = elementMatchers[j++])) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                }
                            }

                            // Track unmatched elements for set filters
                            if (bySet) {
                                // They will have gone through all possible matchers
                                if ((elem = !matcher && elem)) {
                                    matchedCount--;
                                }

                                // Lengthen the array for every element, matched or not
                                if (seed) {
                                    unmatched.push(elem);
                                }
                            }
                        }

                        // `i` is now the count of elements visited above, and adding it to `matchedCount`
                        // makes the latter nonnegative.
                        matchedCount += i;

                        // Apply set filters to unmatched elements
                        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                        // no element matchers and no seed.
                        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                        // numerically zero.
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while ((matcher = setMatchers[j++])) {
                                matcher(unmatched, setMatched, context, xml);
                            }

                            if (seed) {
                                // Reintegrate element matches to eliminate the need for sorting
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results);
                                        }
                                    }
                                }

                                // Discard index placeholder values to get only actual matches
                                setMatched = condense(setMatched);
                            }

                            // Add matches to results
                            push.apply(results, setMatched);

                            // Seedless set matches succeeding multiple successful matchers stipulate sorting
                            if (outermost && !seed && setMatched.length > 0 &&
                                (matchedCount + setMatchers.length) > 1) {

                                Sizzle.uniqueSort(results);
                            }
                        }

                        // Override manipulation of globals by nested matchers
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }

                        return unmatched;
                    };

                return bySet ?
                    markFunction(superMatcher) :
                    superMatcher;
            }

            compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
                var i,
                    setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];

                if (!cached) {
                    // Generate a function of recursive functions that can be used to check each element
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }

                    // Cache the compiled function
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

                    // Save selector and tokenization
                    cached.selector = selector;
                }
                return cached;
            };

            /**
             * A low-level selection function that works with Sizzle's compiled
             *  selector functions
             * @param {String|Function} selector A selector or a pre-compiled
             *  selector function built with Sizzle.compile
             * @param {Element} context
             * @param {Array} [results]
             * @param {Array} [seed] A set of elements to match against
             */
            select = Sizzle.select = function (selector, context, results, seed) {
                var i, tokens, token, type, find,
                    compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize((selector = compiled.selector || selector));

                results = results || [];

                // Try to minimize operations if there is only one selector in the list and no seed
                // (the latter of which guarantees us context)
                if (match.length === 1) {

                    // Reduce context if the leading compound selector is an ID
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                        support.getById && context.nodeType === 9 && documentIsHTML &&
                        Expr.relative[tokens[1].type]) {

                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;

                            // Precompiled matchers will still verify ancestry, so step up a level
                        } else if (compiled) {
                            context = context.parentNode;
                        }

                        selector = selector.slice(tokens.shift().value.length);
                    }

                    // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];

                        // Abort if we hit a combinator
                        if (Expr.relative[(type = token.type)]) {
                            break;
                        }
                        if ((find = Expr.find[type])) {
                            // Search, expanding context for leading sibling combinators
                            if ((seed = find(
                                token.matches[0].replace(runescape, funescape),
                                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                            ))) {

                                // If seed is empty or no tokens remain, we can return early
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }

                                break;
                            }
                        }
                    }
                }

                // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                (compiled || compile(selector, match))(
                    seed,
                    context,
                    !documentIsHTML,
                    results,
                    !context || rsibling.test(selector) && testContext(context.parentNode) || context
                );
                return results;
            };

// One-time assignments

// Sort stability
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
            support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
            setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function (div1) {
                // Should return 1, but returns 4 (following)
                return div1.compareDocumentPosition(document.createElement("div")) & 1;
            });

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if (!assert(function (div) {
                div.innerHTML = "<a href='#'></a>";
                return div.firstChild.getAttribute("href") === "#";
            })) {
                addHandle("type|href|height|width", function (elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
            if (!support.attributes || !assert(function (div) {
                div.innerHTML = "<input/>";
                div.firstChild.setAttribute("value", "");
                return div.firstChild.getAttribute("value") === "";
            })) {
                addHandle("value", function (elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            }

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
            if (!assert(function (div) {
                return div.getAttribute("disabled") == null;
            })) {
                addHandle(booleans, function (elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() :
                            (val = elem.getAttributeNode(name)) && val.specified ?
                                val.value :
                                null;
                    }
                });
            }

            return Sizzle;

        })(window);


    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;


    var dir = function (elem, dir, until) {
        var matched = [],
            truncate = until !== undefined;

        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };


    var siblings = function (n, elem) {
        var matched = [];

        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }

        return matched;
    };


    var rneedsContext = jQuery.expr.match.needsContext;

    var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);


    var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function (elem, i) {
                /* jshint -W018 */
                return !!qualifier.call(elem, i, elem) !== not;
            });

        }

        if (qualifier.nodeType) {
            return jQuery.grep(elements, function (elem) {
                return (elem === qualifier) !== not;
            });

        }

        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }

            qualifier = jQuery.filter(qualifier, elements);
        }

        return jQuery.grep(elements, function (elem) {
            return (jQuery.inArray(elem, qualifier) > -1) !== not;
        });
    }

    jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];

        if (not) {
            expr = ":not(" + expr + ")";
        }

        return elems.length === 1 && elem.nodeType === 1 ?
            jQuery.find.matchesSelector(elem, expr) ? [elem] : [] :
            jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
                return elem.nodeType === 1;
            }));
    };

    jQuery.fn.extend({
        find: function (selector) {
            var i,
                ret = [],
                self = this,
                len = self.length;

            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function () {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }

            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }

            // Needed because $( selector, context ) becomes $( context ).find( selector )
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function (selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function (selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function (selector) {
            return !!winnow(
                this,

                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test(selector) ?
                    jQuery(selector) :
                    selector || [],
                false
            ).length;
        }
    });


// Initialize a jQuery object


// A central reference to the root jQuery(document)
    var rootjQuery,

        // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

        init = jQuery.fn.init = function (selector, context, root) {
            var match, elem;

            // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                return this;
            }

            // init accepts an alternate rootjQuery
            // so migrate can support jQuery.sub (gh-2101)
            root = root || rootjQuery;

            // Handle HTML strings
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" &&
                    selector.charAt(selector.length - 1) === ">" &&
                    selector.length >= 3) {

                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null];

                } else {
                    match = rquickExpr.exec(selector);
                }

                // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) {

                    // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;

                        // scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge(this, jQuery.parseHTML(
                            match[1],
                            context && context.nodeType ? context.ownerDocument || context : document,
                            true
                        ));

                        // HANDLE: $(html, props)
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {

                                // Properties of context are called as methods if possible
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]);

                                    // ...and otherwise set as attributes
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }

                        return this;

                        // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById(match[2]);

                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        if (elem && elem.parentNode) {

                            // Handle the case where IE and Opera return items
                            // by name instead of ID
                            if (elem.id !== match[2]) {
                                return rootjQuery.find(selector);
                            }

                            // Otherwise, we inject the element directly into the jQuery object
                            this.length = 1;
                            this[0] = elem;
                        }

                        this.context = document;
                        this.selector = selector;
                        return this;
                    }

                    // HANDLE: $(expr, $(...))
                } else if (!context || context.jquery) {
                    return (context || root).find(selector);

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor(context).find(selector);
                }

                // HANDLE: $(DOMElement)
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;

                // HANDLE: $(function)
                // Shortcut for document ready
            } else if (jQuery.isFunction(selector)) {
                return typeof root.ready !== "undefined" ?
                    root.ready(selector) :

                    // Execute immediately if ready is not present
                    selector(jQuery);
            }

            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }

            return jQuery.makeArray(selector, this);
        };

// Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

// Initialize central reference
    rootjQuery = jQuery(document);


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,

        // methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.fn.extend({
        has: function (target) {
            var i,
                targets = jQuery(target, this),
                len = targets.length;

            return this.filter(function () {
                for (i = 0; i < len; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },

        closest: function (selectors, context) {
            var cur,
                i = 0,
                l = this.length,
                matched = [],
                pos = rneedsContext.test(selectors) || typeof selectors !== "string" ?
                    jQuery(selectors, context || this.context) :
                    0;

            for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

                    // Always skip document fragments
                    if (cur.nodeType < 11 && (pos ?
                        pos.index(cur) > -1 :

                        // Don't pass non-elements to Sizzle
                        cur.nodeType === 1 &&
                        jQuery.find.matchesSelector(cur, selectors))) {

                        matched.push(cur);
                        break;
                    }
                }
            }

            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },

        // Determine the position of an element within
        // the matched set of elements
        index: function (elem) {

            // No argument, return index in parent
            if (!elem) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
            }

            // index in selector
            if (typeof elem === "string") {
                return jQuery.inArray(this[0], jQuery(elem));
            }

            // Locate the position of the desired element
            return jQuery.inArray(
                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem, this);
        },

        add: function (selector, context) {
            return this.pushStack(
                jQuery.uniqueSort(
                    jQuery.merge(this.get(), jQuery(selector, context))
                )
            );
        },

        addBack: function (selector) {
            return this.add(selector == null ?
                this.prevObject : this.prevObject.filter(selector)
            );
        }
    });

    function sibling(cur, dir) {
        do {
            cur = cur[dir];
        } while (cur && cur.nodeType !== 1);

        return cur;
    }

    jQuery.each({
        parent: function (elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function (elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function (elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function (elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function (elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function (elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function (elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function (elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function (elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function (elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function (elem) {
            return siblings(elem.firstChild);
        },
        contents: function (elem) {
            return jQuery.nodeName(elem, "iframe") ?
                elem.contentDocument || elem.contentWindow.document :
                jQuery.merge([], elem.childNodes);
        }
    }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
            var ret = jQuery.map(this, fn, until);

            if (name.slice(-5) !== "Until") {
                selector = until;
            }

            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }

            if (this.length > 1) {

                // Remove duplicates
                if (!guaranteedUnique[name]) {
                    ret = jQuery.uniqueSort(ret);
                }

                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) {
                    ret = ret.reverse();
                }
            }

            return this.pushStack(ret);
        };
    });
    var rnotwhite = (/\S+/g);


// Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
            object[flag] = true;
        });
        return object;
    }

    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function (options) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            createOptions(options) :
            jQuery.extend({}, options);

        var // Flag to know if list is currently firing
            firing,

            // Last fire value for non-forgettable lists
            memory,

            // Flag to know if list was already fired
            fired,

            // Flag to prevent firing
            locked,

            // Actual callback list
            list = [],

            // Queue of execution data for repeatable lists
            queue = [],

            // Index of currently firing callback (modified by add/remove as needed)
            firingIndex = -1,

            // Fire callbacks
            fire = function () {

                // Enforce single-firing
                locked = options.once;

                // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {

                        // Run callback and check for early termination
                        if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                            options.stopOnFalse) {

                            // Jump to end and forget the data so .add doesn't re-fire
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }

                // Forget the data if we're done with it
                if (!options.memory) {
                    memory = false;
                }

                firing = false;

                // Clean up if we're done firing for good
                if (locked) {

                    // Keep an empty list if we have data for future add calls
                    if (memory) {
                        list = [];

                        // Otherwise, this object is spent
                    } else {
                        list = "";
                    }
                }
            },

            // Actual Callbacks object
            self = {

                // Add a callback or a collection of callbacks to the list
                add: function () {
                    if (list) {

                        // If we have memory from a past run, we should fire after adding
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }

                        (function add(args) {
                            jQuery.each(args, function (_, arg) {
                                if (jQuery.isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && jQuery.type(arg) !== "string") {

                                    // Inspect recursively
                                    add(arg);
                                }
                            });
                        })(arguments);

                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                },

                // Remove a callback from the list
                remove: function () {
                    jQuery.each(arguments, function (_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);

                            // Handle firing indexes
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                },

                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function (fn) {
                    return fn ?
                        jQuery.inArray(fn, list) > -1 :
                        list.length > 0;
                },

                // Remove all callbacks from the list
                empty: function () {
                    if (list) {
                        list = [];
                    }
                    return this;
                },

                // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function () {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function () {
                    return !list;
                },

                // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function () {
                    locked = true;
                    if (!memory) {
                        self.disable();
                    }
                    return this;
                },
                locked: function () {
                    return !!locked;
                },

                // Call all callbacks with the given context and arguments
                fireWith: function (context, args) {
                    if (!locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                },

                // Call all the callbacks with the given arguments
                fire: function () {
                    self.fireWith(this, arguments);
                    return this;
                },

                // To know if the callbacks have already been called at least once
                fired: function () {
                    return !!fired;
                }
            };

        return self;
    };


    jQuery.extend({

        Deferred: function (func) {
            var tuples = [

                    // action, add listener, listener list, final state
                    ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", jQuery.Callbacks("memory")]
                ],
                state = "pending",
                promise = {
                    state: function () {
                        return state;
                    },
                    always: function () {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    then: function (/* fnDone, fnFail, fnProgress */) {
                        var fns = arguments;
                        return jQuery.Deferred(function (newDefer) {
                            jQuery.each(tuples, function (i, tuple) {
                                var fn = jQuery.isFunction(fns[i]) && fns[i];

                                // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                deferred[tuple[1]](function () {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise()
                                            .progress(newDefer.notify)
                                            .done(newDefer.resolve)
                                            .fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](
                                            this === promise ? newDefer.promise() : this,
                                            fn ? [returned] : arguments
                                        );
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },

                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function (obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                },
                deferred = {};

            // Keep pipe for back-compat
            promise.pipe = promise.then;

            // Add list-specific methods
            jQuery.each(tuples, function (i, tuple) {
                var list = tuple[2],
                    stateString = tuple[3];

                // promise[ done | fail | progress ] = list.add
                promise[tuple[1]] = list.add;

                // Handle state
                if (stateString) {
                    list.add(function () {

                        // state = [ resolved | rejected ]
                        state = stateString;

                        // [ reject_list | resolve_list ].disable; progress_list.lock
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }

                // deferred[ resolve | reject | notify ]
                deferred[tuple[0]] = function () {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });

            // Make the deferred a promise
            promise.promise(deferred);

            // Call given func if any
            if (func) {
                func.call(deferred, deferred);
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function (subordinate /* , ..., subordinateN */) {
            var i = 0,
                resolveValues = slice.call(arguments),
                length = resolveValues.length,

                // the count of uncompleted subordinates
                remaining = length !== 1 ||
                (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,

                // the master Deferred.
                // If resolveValues consist of only a single Deferred, just use that.
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

                // Update function for both resolve and progress values
                updateFunc = function (i, contexts, values) {
                    return function (value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (values === progressValues) {
                            deferred.notifyWith(contexts, values);

                        } else if (!(--remaining)) {
                            deferred.resolveWith(contexts, values);
                        }
                    };
                },

                progressValues, progressContexts, resolveContexts;

            // add listeners to Deferred subordinates; treat others as resolved
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (; i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise()
                            .progress(updateFunc(i, progressContexts, progressValues))
                            .done(updateFunc(i, resolveContexts, resolveValues))
                            .fail(deferred.reject);
                    } else {
                        --remaining;
                    }
                }
            }

            // if we're not waiting on anything, resolve the master
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }

            return deferred.promise();
        }
    });


// The deferred used on DOM ready
    var readyList;

    jQuery.fn.ready = function (fn) {

        // Add the callback
        jQuery.ready.promise().done(fn);

        return this;
    };

    jQuery.extend({

        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Hold (or release) the ready event
        holdReady: function (hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },

        // Handle when the DOM is ready
        ready: function (wait) {

            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith(document, [jQuery]);

            // Trigger any bound ready events
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });

    /**
     * Clean-up method for dom ready events
     */
    function detach() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);

        } else {
            document.detachEvent("onreadystatechange", completed);
            window.detachEvent("onload", completed);
        }
    }

    /**
     * The ready event handler and self cleanup method
     */
    function completed() {

        // readyState === "complete" is good enough for us to call the dom ready in oldIE
        if (document.addEventListener ||
            window.event.type === "load" ||
            document.readyState === "complete") {

            detach();
            jQuery.ready();
        }
    }

    jQuery.ready.promise = function (obj) {
        if (!readyList) {

            readyList = jQuery.Deferred();

            // Catch cases where $(document).ready() is called
            // after the browser event has already occurred.
            // Support: IE6-10
            // Older IE sometimes signals "interactive" too soon
            if (document.readyState === "complete" ||
                (document.readyState !== "loading" && !document.documentElement.doScroll)) {

                // Handle it asynchronously to allow scripts the opportunity to delay ready
                window.setTimeout(jQuery.ready);

                // Standards-based browsers support DOMContentLoaded
            } else if (document.addEventListener) {

                // Use the handy event callback
                document.addEventListener("DOMContentLoaded", completed);

                // A fallback to window.onload, that will always work
                window.addEventListener("load", completed);

                // If IE event model is used
            } else {

                // Ensure firing before onload, maybe late but safe also for iframes
                document.attachEvent("onreadystatechange", completed);

                // A fallback to window.onload, that will always work
                window.attachEvent("onload", completed);

                // If IE and not a frame
                // continually check to see if the document is ready
                var top = false;

                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {
                }

                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!jQuery.isReady) {

                            try {

                                // Use the trick by Diego Perini
                                // http://javascript.nwbox.com/IEContentLoaded/
                                top.doScroll("left");
                            } catch (e) {
                                return window.setTimeout(doScrollCheck, 50);
                            }

                            // detach all dom ready events
                            detach();

                            // and execute any waiting functions
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise(obj);
    };

// Kick off the DOM ready check even if the user does not
    jQuery.ready.promise();


// Support: IE<9
// Iteration over object's inherited properties before its own
    var i;
    for (i in jQuery(support)) {
        break;
    }
    support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
    support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
    jQuery(function () {

        // Minified: var a,b,c,d
        var val, div, body, container;

        body = document.getElementsByTagName("body")[0];
        if (!body || !body.style) {

            // Return for frameset docs that don't have a body
            return;
        }

        // Setup
        div = document.createElement("div");
        container = document.createElement("div");
        container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        body.appendChild(container).appendChild(div);

        if (typeof div.style.zoom !== "undefined") {

            // Support: IE<8
            // Check if natively block-level elements act like inline-block
            // elements when setting their display to 'inline' and giving
            // them layout
            div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

            support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
            if (val) {

                // Prevent IE 6 from affecting layout for positioned elements #11048
                // Prevent IE from shrinking the body in IE 7 mode #12869
                // Support: IE<8
                body.style.zoom = 1;
            }
        }

        body.removeChild(container);
    });


    (function () {
        var div = document.createElement("div");

        // Support: IE<9
        support.deleteExpando = true;
        try {
            delete div.test;
        } catch (e) {
            support.deleteExpando = false;
        }

        // Null elements to avoid leaks in IE.
        div = null;
    })();
    var acceptData = function (elem) {
        var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
            nodeType = +elem.nodeType || 1;

        // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
        return nodeType !== 1 && nodeType !== 9 ?
            false :

            // Nodes accept data unless otherwise specified; rejection can be conditional
            !noData || noData !== true && elem.getAttribute("classid") === noData;
    };


    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /([A-Z])/g;

    function dataAttr(elem, key, data) {

        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {

            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

            data = elem.getAttribute(name);

            if (typeof data === "string") {
                try {
                    data = data === "true" ? true :
                        data === "false" ? false :
                            data === "null" ? null :

                                // Only convert to a number if it doesn't change the string
                                +data + "" === data ? +data :
                                    rbrace.test(data) ? jQuery.parseJSON(data) :
                                        data;
                } catch (e) {
                }

                // Make sure we set the data so it isn't changed later
                jQuery.data(elem, key, data);

            } else {
                data = undefined;
            }
        }

        return data;
    }

// checks a cache object for emptiness
    function isEmptyDataObject(obj) {
        var name;
        for (name in obj) {

            // if the public data object is empty, the private is still empty
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                continue;
            }
            if (name !== "toJSON") {
                return false;
            }
        }

        return true;
    }

    function internalData(elem, name, data, pvt /* Internal Use Only */) {
        if (!acceptData(elem)) {
            return;
        }

        var ret, thisCache,
            internalKey = jQuery.expando,

            // We have to handle DOM nodes and JS objects differently because IE6-7
            // can't GC object references properly across the DOM-JS boundary
            isNode = elem.nodeType,

            // Only DOM nodes need the global jQuery cache; JS object data is
            // attached directly to the object so GC can occur automatically
            cache = isNode ? jQuery.cache : elem,

            // Only defining an ID for JS objects if its cache already exists allows
            // the code to shortcut on the same path as a DOM node with no cache
            id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

        // Avoid doing any more work than we need to when trying to get data on an
        // object that has no data at all
        if ((!id || !cache[id] || (!pvt && !cache[id].data)) &&
            data === undefined && typeof name === "string") {
            return;
        }

        if (!id) {

            // Only DOM nodes need a new unique ID for each element since their data
            // ends up in the global cache
            if (isNode) {
                id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }

        if (!cache[id]) {

            // Avoid exposing jQuery metadata on plain JS objects when the object
            // is serialized using JSON.stringify
            cache[id] = isNode ? {} : {toJSON: jQuery.noop};
        }

        // An object can be passed to jQuery.data instead of a key/value pair; this gets
        // shallow copied over onto the existing cache
        if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
                cache[id] = jQuery.extend(cache[id], name);
            } else {
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }

        thisCache = cache[id];

        // jQuery data() is stored in a separate object inside the object's internal data
        // cache in order to avoid key collisions between internal data and user-defined
        // data.
        if (!pvt) {
            if (!thisCache.data) {
                thisCache.data = {};
            }

            thisCache = thisCache.data;
        }

        if (data !== undefined) {
            thisCache[jQuery.camelCase(name)] = data;
        }

        // Check for both converted-to-camel and non-converted data property names
        // If a data property was specified
        if (typeof name === "string") {

            // First Try to find as-is property data
            ret = thisCache[name];

            // Test for null|undefined property data
            if (ret == null) {

                // Try to find the camelCased property
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else {
            ret = thisCache;
        }

        return ret;
    }

    function internalRemoveData(elem, name, pvt) {
        if (!acceptData(elem)) {
            return;
        }

        var thisCache, i,
            isNode = elem.nodeType,

            // See jQuery.data for more information
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[jQuery.expando] : jQuery.expando;

        // If there is already no cache entry for this object, there is no
        // purpose in continuing
        if (!cache[id]) {
            return;
        }

        if (name) {

            thisCache = pvt ? cache[id] : cache[id].data;

            if (thisCache) {

                // Support array or space separated string names for data keys
                if (!jQuery.isArray(name)) {

                    // try the string as a key before any manipulation
                    if (name in thisCache) {
                        name = [name];
                    } else {

                        // split the camel cased version by spaces unless a key with the spaces exists
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            name = [name];
                        } else {
                            name = name.split(" ");
                        }
                    }
                } else {

                    // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    name = name.concat(jQuery.map(name, jQuery.camelCase));
                }

                i = name.length;
                while (i--) {
                    delete thisCache[name[i]];
                }

                // If there is no data left in the cache, we want to continue
                // and let the cache object itself get destroyed
                if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                    return;
                }
            }
        }

        // See jQuery.data for more information
        if (!pvt) {
            delete cache[id].data;

            // Don't destroy the parent cache unless the internal data object
            // had been the only thing left in it
            if (!isEmptyDataObject(cache[id])) {
                return;
            }
        }

        // Destroy the cache
        if (isNode) {
            jQuery.cleanData([elem], true);

            // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
            /* jshint eqeqeq: false */
        } else if (support.deleteExpando || cache != cache.window) {
            /* jshint eqeqeq: true */
            delete cache[id];

            // When all else fails, undefined
        } else {
            cache[id] = undefined;
        }
    }

    jQuery.extend({
        cache: {},

        // The following elements (space-suffixed to avoid Object.prototype collisions)
        // throw uncatchable exceptions if you attempt to set expando properties
        noData: {
            "applet ": true,
            "embed ": true,

            // ...but Flash objects (which have this classid) *can* handle expandos
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },

        hasData: function (elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem);
        },

        data: function (elem, name, data) {
            return internalData(elem, name, data);
        },

        removeData: function (elem, name) {
            return internalRemoveData(elem, name);
        },

        // For internal use only.
        _data: function (elem, name, data) {
            return internalData(elem, name, data, true);
        },

        _removeData: function (elem, name) {
            return internalRemoveData(elem, name, true);
        }
    });

    jQuery.fn.extend({
        data: function (key, value) {
            var i, name, data,
                elem = this[0],
                attrs = elem && elem.attributes;

            // Special expections of .data basically thwart jQuery.access,
            // so implement the relevant behavior ourselves

            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = jQuery.data(elem);

                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        i = attrs.length;
                        while (i--) {

                            // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }

                return data;
            }

            // Sets multiple values
            if (typeof key === "object") {
                return this.each(function () {
                    jQuery.data(this, key);
                });
            }

            return arguments.length > 1 ?

                // Sets one value
                this.each(function () {
                    jQuery.data(this, key, value);
                }) :

                // Gets one value
                // Try to fetch any internally stored data first
                elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
        },

        removeData: function (key) {
            return this.each(function () {
                jQuery.removeData(this, key);
            });
        }
    });


    jQuery.extend({
        queue: function (elem, type, data) {
            var queue;

            if (elem) {
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);

                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },

        dequeue: function (elem, type) {
            type = type || "fx";

            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function () {
                    jQuery.dequeue(elem, type);
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }

            if (fn) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                // clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }

            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },

        // not intended for public consumption - generates a queueHooks object,
        // or returns the current one
        _queueHooks: function (elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function () {
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key);
                })
            });
        }
    });

    jQuery.fn.extend({
        queue: function (type, data) {
            var setter = 2;

            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }

            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }

            return data === undefined ?
                this :
                this.each(function () {
                    var queue = jQuery.queue(this, type, data);

                    // ensure a hooks for this queue
                    jQuery._queueHooks(this, type);

                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                    }
                });
        },
        dequeue: function (type) {
            return this.each(function () {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function (type) {
            return this.queue(type || "fx", []);
        },

        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function (type, obj) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function () {
                    if (!(--count)) {
                        defer.resolveWith(elements, [elements]);
                    }
                };

            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while (i--) {
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });


    (function () {
        var shrinkWrapBlocksVal;

        support.shrinkWrapBlocks = function () {
            if (shrinkWrapBlocksVal != null) {
                return shrinkWrapBlocksVal;
            }

            // Will be changed later if needed.
            shrinkWrapBlocksVal = false;

            // Minified: var b,c,d
            var div, body, container;

            body = document.getElementsByTagName("body")[0];
            if (!body || !body.style) {

                // Test fired too early or in an unsupported environment, exit.
                return;
            }

            // Setup
            div = document.createElement("div");
            container = document.createElement("div");
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild(container).appendChild(div);

            // Support: IE6
            // Check if elements with layout shrink-wrap their children
            if (typeof div.style.zoom !== "undefined") {

                // Reset CSS: box-sizing; display; margin; border
                div.style.cssText =

                    // Support: Firefox<29, Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                    "box-sizing:content-box;display:block;margin:0;border:0;" +
                    "padding:1px;width:1px;zoom:1";
                div.appendChild(document.createElement("div")).style.width = "5px";
                shrinkWrapBlocksVal = div.offsetWidth !== 3;
            }

            body.removeChild(container);

            return shrinkWrapBlocksVal;
        };

    })();
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


    var cssExpand = ["Top", "Right", "Bottom", "Left"];

    var isHidden = function (elem, el) {

        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };


    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted,
            scale = 1,
            maxIterations = 20,
            currentValue = tween ?
                function () {
                    return tween.cur();
                } :
                function () {
                    return jQuery.css(elem, prop, "");
                },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

            // Starting value computation is required for potential unit mismatches
            initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
                rcssNum.exec(jQuery.css(elem, prop));

        if (initialInUnit && initialInUnit[3] !== unit) {

            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];

            // Make sure we update the tween properties later on
            valueParts = valueParts || [];

            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;

            do {

                // If previous iteration zeroed out, double until we get *something*.
                // Use string for doubling so we don't accidentally see scale as unchanged below
                scale = scale || ".5";

                // Adjust and apply
                initialInUnit = initialInUnit / scale;
                jQuery.style(elem, prop, initialInUnit + unit);

                // Update scale, tolerating zero or NaN from tween.cur()
                // Break the loop if scale is unchanged or perfect, or if we've just had enough.
            } while (
                scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations
                );
        }

        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;

            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ?
                initialInUnit + (valueParts[1] + 1) * valueParts[2] :
                +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
    var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            length = elems.length,
            bulk = key == null;

        // Sets many values
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            }

            // Sets one value
        } else if (value !== undefined) {
            chainable = true;

            if (!jQuery.isFunction(value)) {
                raw = true;
            }

            if (bulk) {

                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;

                    // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function (elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }

            if (fn) {
                for (; i < length; i++) {
                    fn(
                        elems[i],
                        key,
                        raw ? value : value.call(elems[i], i, fn(elems[i], key))
                    );
                }
            }
        }

        return chainable ?
            elems :

            // Gets
            bulk ?
                fn.call(elems) :
                length ? fn(elems[0], key) : emptyGet;
    };
    var rcheckableType = (/^(?:checkbox|radio)$/i);

    var rtagName = (/<([\w:-]+)/);

    var rscriptType = (/^$|\/(?:java|ecma)script/i);

    var rleadingWhitespace = (/^\s+/);

    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
        "details|dialog|figcaption|figure|footer|header|hgroup|main|" +
        "mark|meter|nav|output|picture|progress|section|summary|template|time|video";


    function createSafeFragment(document) {
        var list = nodeNames.split("|"),
            safeFrag = document.createDocumentFragment();

        if (safeFrag.createElement) {
            while (list.length) {
                safeFrag.createElement(
                    list.pop()
                );
            }
        }
        return safeFrag;
    }


    (function () {
        var div = document.createElement("div"),
            fragment = document.createDocumentFragment(),
            input = document.createElement("input");

        // Setup
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

        // IE strips leading whitespace when .innerHTML is used
        support.leadingWhitespace = div.firstChild.nodeType === 3;

        // Make sure that tbody elements aren't automatically inserted
        // IE will insert them into empty tables
        support.tbody = !div.getElementsByTagName("tbody").length;

        // Make sure that link elements get serialized correctly by innerHTML
        // This requires a wrapper element in IE
        support.htmlSerialize = !!div.getElementsByTagName("link").length;

        // Makes sure cloning an html5 element does not cause problems
        // Where outerHTML is undefined, this still works
        support.html5Clone =
            document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";

        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        input.type = "checkbox";
        input.checked = true;
        fragment.appendChild(input);
        support.appendChecked = input.checked;

        // Make sure textarea (and checkbox) defaultValue is properly cloned
        // Support: IE6-IE11+
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

        // #11217 - WebKit loses check when the name is after the checked attribute
        fragment.appendChild(div);

        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");

        div.appendChild(input);

        // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
        // old WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

        // Support: IE<9
        // Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
        support.noCloneEvent = !!div.addEventListener;

        // Support: IE<9
        // Since attributes and properties are the same in IE,
        // cleanData must set properties to undefined rather than use removeAttribute
        div[jQuery.expando] = 1;
        support.attributes = !div.getAttribute(jQuery.expando);
    })();


// We have to close these tags to support XHTML (#13200)
    var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],

        // Support: IE8
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

        // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
        // unless wrapped in a div with non-breaking characters in front of it.
        _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

// Support: IE8-IE9
    wrapMap.optgroup = wrapMap.option;

    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;


    function getAll(context, tag) {
        var elems, elem,
            i = 0,
            found = typeof context.getElementsByTagName !== "undefined" ?
                context.getElementsByTagName(tag || "*") :
                typeof context.querySelectorAll !== "undefined" ?
                    context.querySelectorAll(tag || "*") :
                    undefined;

        if (!found) {
            for (found = [], elems = context.childNodes || context;
                 (elem = elems[i]) != null;
                 i++
            ) {
                if (!tag || jQuery.nodeName(elem, tag)) {
                    found.push(elem);
                } else {
                    jQuery.merge(found, getAll(elem, tag));
                }
            }
        }

        return tag === undefined || tag && jQuery.nodeName(context, tag) ?
            jQuery.merge([context], found) :
            found;
    }


// Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var elem,
            i = 0;
        for (; (elem = elems[i]) != null; i++) {
            jQuery._data(
                elem,
                "globalEval",
                !refElements || jQuery._data(refElements[i], "globalEval")
            );
        }
    }


    var rhtml = /<|&#?\w+;/,
        rtbody = /<tbody/i;

    function fixDefaultChecked(elem) {
        if (rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
        }
    }

    function buildFragment(elems, context, scripts, selection, ignored) {
        var j, elem, contains,
            tmp, tag, tbody, wrap,
            l = elems.length,

            // Ensure a safe fragment
            safe = createSafeFragment(context),

            nodes = [],
            i = 0;

        for (; i < l; i++) {
            elem = elems[i];

            if (elem || elem === 0) {

                // Add nodes directly
                if (jQuery.type(elem) === "object") {
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                    // Convert non-html into a text node
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem));

                    // Convert html into DOM nodes
                } else {
                    tmp = tmp || safe.appendChild(context.createElement("div"));

                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;

                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild;
                    }

                    // Manually add leading whitespace removed by IE
                    if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                        nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                    }

                    // Remove IE's autoinserted <tbody> from table fragments
                    if (!support.tbody) {

                        // String was a <table>, *may* have spurious <tbody>
                        elem = tag === "table" && !rtbody.test(elem) ?
                            tmp.firstChild :

                            // String was a bare <thead> or <tfoot>
                            wrap[1] === "<table>" && !rtbody.test(elem) ?
                                tmp :
                                0;

                        j = elem && elem.childNodes.length;
                        while (j--) {
                            if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {

                                elem.removeChild(tbody);
                            }
                        }
                    }

                    jQuery.merge(nodes, tmp.childNodes);

                    // Fix #12392 for WebKit and IE > 9
                    tmp.textContent = "";

                    // Fix #12392 for oldIE
                    while (tmp.firstChild) {
                        tmp.removeChild(tmp.firstChild);
                    }

                    // Remember the top-level container for proper cleanup
                    tmp = safe.lastChild;
                }
            }
        }

        // Fix #11356: Clear elements from fragment
        if (tmp) {
            safe.removeChild(tmp);
        }

        // Reset defaultChecked for any radios and checkboxes
        // about to be appended to the DOM in IE 6/7 (#8060)
        if (!support.appendChecked) {
            jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
        }

        i = 0;
        while ((elem = nodes[i++])) {

            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem);
                }

                continue;
            }

            contains = jQuery.contains(elem.ownerDocument, elem);

            // Append to fragment
            tmp = getAll(safe.appendChild(elem), "script");

            // Preserve script evaluation history
            if (contains) {
                setGlobalEval(tmp);
            }

            // Capture executables
            if (scripts) {
                j = 0;
                while ((elem = tmp[j++])) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem);
                    }
                }
            }
        }

        tmp = null;

        return safe;
    }


    (function () {
        var i, eventName,
            div = document.createElement("div");

        // Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
        for (i in {submit: true, change: true, focusin: true}) {
            eventName = "on" + i;

            if (!(support[i] = eventName in window)) {

                // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
                div.setAttribute(eventName, "t");
                support[i] = div.attributes[eventName].expando === false;
            }
        }

        // Null elements to avoid leaks in IE.
        div = null;
    })();


    var rformElems = /^(?:input|select|textarea)$/i,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

// Support: IE9
// See #13393 for more info
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {
        }
    }

    function on(elem, types, selector, data, fn, one) {
        var origFn, type;

        // Types can be a map of types/handlers
        if (typeof types === "object") {

            // ( types-Object, selector, data )
            if (typeof selector !== "string") {

                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                on(elem, type, selector, data, types[type], one);
            }
            return elem;
        }

        if (data == null && fn == null) {

            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {

                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {

                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return elem;
        }

        if (one === 1) {
            origFn = fn;
            fn = function (event) {

                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };

            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function () {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }

    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {

        global: {},

        add: function (elem, types, handler, data, selector) {
            var tmp, events, t, handleObjIn,
                special, eventHandle, handleObj,
                handlers, type, namespaces, origType,
                elemData = jQuery._data(elem);

            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!elemData) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function (e) {

                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" &&
                    (!e || jQuery.event.triggered !== e.type) ?
                        jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
                        undefined;
                };

                // Add elem as a property of the handle fn to prevent a memory leak
                // with IE non-native events
                eventHandle.elem = elem;
            }

            // Handle multiple events separated by a space
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                    continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);

                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener/attachEvent if the special events handler returns false
                    if (!special.setup ||
                        special.setup.call(elem, data, namespaces, eventHandle) === false) {

                        // Bind the global event handler to the element
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);

                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }

                if (special.add) {
                    special.add.call(elem, handleObj);

                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }

            // Nullify elem to prevent memory leaks in IE
            elem = null;
        },

        // Detach an event or set of events from an element
        remove: function (elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp,
                origCount, t, events,
                special, handlers, type,
                namespaces, origType,
                elemData = jQuery.hasData(elem) && jQuery._data(elem);

            if (!elemData || !(events = elemData.events)) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }

                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] &&
                    new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

                // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];

                    if ((mappedTypes || origType === handleObj.origType) &&
                        (!handler || handler.guid === handleObj.guid) &&
                        (!tmp || tmp.test(handleObj.namespace)) &&
                        (!selector || selector === handleObj.selector ||
                            selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);

                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown ||
                        special.teardown.call(elem, namespaces, elemData.handle) === false) {

                        jQuery.removeEvent(elem, type, elemData.handle);
                    }

                    delete events[type];
                }
            }

            // Remove the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;

                // removeData also checks for emptiness and clears the expando if empty
                // so use it instead of delete
                jQuery._removeData(elem, "events");
            }
        },

        trigger: function (event, data, elem, onlyHandlers) {
            var handle, ontype, cur,
                bubbleType, special, tmp, i,
                eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

            cur = tmp = elem = elem || document;

            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }

            if (type.indexOf(".") > -1) {

                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;

            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ?
                event :
                new jQuery.Event(type, typeof event === "object" && event);

            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ?
                new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                null;

            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ?
                [event] :
                jQuery.makeArray(data, [event]);

            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }

            // Fire handlers on the event path
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

                event.type = i > 1 ?
                    bubbleType :
                    special.bindType || type;

                // jQuery handler
                handle = (jQuery._data(cur, "events") || {})[event.type] &&
                    jQuery._data(cur, "handle");

                if (handle) {
                    handle.apply(cur, data);
                }

                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {

                if (
                    (!special._default ||
                        special._default.apply(eventPath.pop(), data) === false
                    ) && acceptData(elem)
                ) {

                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction() check here because IE6/7 fails that test.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];

                        if (tmp) {
                            elem[ontype] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        try {
                            elem[type]();
                        } catch (e) {

                            // IE<9 dies on focus/blur to hidden element (#1486,#12518)
                            // only reproducible on winXP IE8 native, not IE9 in IE8 mode
                        }
                        jQuery.event.triggered = undefined;

                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }

            return event.result;
        },

        dispatch: function (event) {

            // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(event);

            var i, j, ret, matched, handleObj,
                handlerQueue = [],
                args = slice.call(arguments),
                handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }

            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);

            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;

                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                    // a subset or equal to those in the bound event (both can have no namespace).
                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

                        event.handleObj = handleObj;
                        event.data = handleObj.data;

                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                            handleObj.handler).apply(matched.elem, args);

                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }

            return event.result;
        },

        handlers: function (event, handlers) {
            var i, matches, sel, handleObj,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

            // Support (at least): Chrome, IE9
            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            //
            // Support: Firefox<=42+
            // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
            if (delegateCount && cur.nodeType &&
                (event.type !== "click" || isNaN(event.button) || event.button < 1)) {

                /* jshint eqeqeq: false */
                for (; cur != this; cur = cur.parentNode || this) {
                    /* jshint eqeqeq: true */

                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];

                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";

                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ?
                                    jQuery(sel, this).index(cur) > -1 :
                                    jQuery.find(sel, this, null, [cur]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({elem: cur, handlers: matches});
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            if (delegateCount < handlers.length) {
                handlerQueue.push({elem: this, handlers: handlers.slice(delegateCount)});
            }

            return handlerQueue;
        },

        fix: function (event) {
            if (event[jQuery.expando]) {
                return event;
            }

            // Create a writable copy of the event object and normalize some properties
            var i, prop, copy,
                type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[type];

            if (!fixHook) {
                this.fixHooks[type] = fixHook =
                    rmouseEvent.test(type) ? this.mouseHooks :
                        rkeyEvent.test(type) ? this.keyHooks :
                            {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

            event = new jQuery.Event(originalEvent);

            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }

            // Support: IE<9
            // Fix target property (#1925)
            if (!event.target) {
                event.target = originalEvent.srcElement || document;
            }

            // Support: Safari 6-8+
            // Target should not be a text node (#504, #13143)
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }

            // Support: IE<9
            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
            event.metaKey = !!event.metaKey;

            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },

        // Includes some event props shared by KeyEvent and MouseEvent
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
            "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),

        fixHooks: {},

        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (event, original) {

                // Add which for key events
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }

                return event;
            }
        },

        mouseHooks: {
            props: ("button buttons clientX clientY fromElement offsetX offsetY " +
                "pageX pageY screenX screenY toElement").split(" "),
            filter: function (event, original) {
                var body, eventDoc, doc,
                    button = original.button,
                    fromElement = original.fromElement;

                // Calculate pageX/Y if missing and clientX/Y available
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;

                    event.pageX = original.clientX +
                        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                        (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY +
                        (doc && doc.scrollTop || body && body.scrollTop || 0) -
                        (doc && doc.clientTop || body && body.clientTop || 0);
                }

                // Add relatedTarget, if necessary
                if (!event.relatedTarget && fromElement) {
                    event.relatedTarget = fromElement === event.target ?
                        original.toElement :
                        fromElement;
                }

                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if (!event.which && button !== undefined) {
                    event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
                }

                return event;
            }
        },

        special: {
            load: {

                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {

                // Fire native event if possible so blur/focus sequence is correct
                trigger: function () {
                    if (this !== safeActiveElement() && this.focus) {
                        try {
                            this.focus();
                            return false;
                        } catch (e) {

                            // Support: IE<9
                            // If we error on focus to hidden element (#1486, #12518),
                            // let .trigger() run the handlers
                        }
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {

                // For checkbox, fire native event so checked state will be right
                trigger: function () {
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                },

                // For cross-browser consistency, don't fire native .click() on links
                _default: function (event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },

            beforeunload: {
                postDispatch: function (event) {

                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },

        // Piggyback on a donor event to simulate a different one
        simulate: function (type, elem, event) {
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                    type: type,
                    isSimulated: true

                    // Previously, `originalEvent: {}` was set here, so stopPropagation call
                    // would not be triggered on donor event, since in our own
                    // jQuery.event.stopPropagation function we had a check for existence of
                    // originalEvent.stopPropagation method, so, consequently it would be a noop.
                    //
                    // Guard for simulated events was moved to jQuery.event.stopPropagation function
                    // since `originalEvent` should point to the original event for the
                    // constancy with other events and for more focused logic
                }
            );

            jQuery.event.trigger(e, null, elem);

            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };

    jQuery.removeEvent = document.removeEventListener ?
        function (elem, type, handle) {

            // This "if" is needed for plain objects
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle);
            }
        } :
        function (elem, type, handle) {
            var name = "on" + type;

            if (elem.detachEvent) {

                // #8545, #7054, preventing memory leaks for custom events in IE6-8
                // detachEvent needed property on element, by name of that event,
                // to properly expose it to GC
                if (typeof elem[name] === "undefined") {
                    elem[name] = null;
                }

                elem.detachEvent(name, handle);
            }
        };

    jQuery.Event = function (src, props) {

        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }

        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === undefined &&

            // Support: IE < 9, Android < 4.0
            src.returnValue === false ?
                returnTrue :
                returnFalse;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if (props) {
            jQuery.extend(this, props);
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();

        // Mark it as fixed
        this[jQuery.expando] = true;
    };

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,

        preventDefault: function () {
            var e = this.originalEvent;

            this.isDefaultPrevented = returnTrue;
            if (!e) {
                return;
            }

            // If preventDefault exists, run it on the original event
            if (e.preventDefault) {
                e.preventDefault();

                // Support: IE
                // Otherwise set the returnValue property of the original event to false
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function () {
            var e = this.originalEvent;

            this.isPropagationStopped = returnTrue;

            if (!e || this.isSimulated) {
                return;
            }

            // If stopPropagation exists, run it on the original event
            if (e.stopPropagation) {
                e.stopPropagation();
            }

            // Support: IE
            // Set the cancelBubble property of the original event to true
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;

            this.isImmediatePropagationStopped = returnTrue;

            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }

            this.stopPropagation();
        }
    };

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,

            handle: function (event) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || (related !== target && !jQuery.contains(target, related))) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });

// IE submit delegation
    if (!support.submit) {

        jQuery.event.special.submit = {
            setup: function () {

                // Only need this for delegated form submit events
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }

                // Lazy-add a submit handler when a descendant form may potentially be submitted
                jQuery.event.add(this, "click._submit keypress._submit", function (e) {

                    // Node name check avoids a VML-related crash in IE (#9807)
                    var elem = e.target,
                        form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ?

                            // Support: IE <=8
                            // We use jQuery.prop instead of elem.form
                            // to allow fixing the IE8 delegated submit issue (gh-2332)
                            // by 3rd party polyfills/workarounds.
                            jQuery.prop(elem, "form") :
                            undefined;

                    if (form && !jQuery._data(form, "submit")) {
                        jQuery.event.add(form, "submit._submit", function (event) {
                            event._submitBubble = true;
                        });
                        jQuery._data(form, "submit", true);
                    }
                });

                // return undefined since we don't need an event listener
            },

            postDispatch: function (event) {

                // If form was submitted by the user, bubble the event up the tree
                if (event._submitBubble) {
                    delete event._submitBubble;
                    if (this.parentNode && !event.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, event);
                    }
                }
            },

            teardown: function () {

                // Only need this for delegated form submit events
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }

                // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                jQuery.event.remove(this, "._submit");
            }
        };
    }

// IE change delegation and checkbox/radio fix
    if (!support.change) {

        jQuery.event.special.change = {

            setup: function () {

                if (rformElems.test(this.nodeName)) {

                    // IE doesn't fire change on a check/radio until blur; trigger it on click
                    // after a propertychange. Eat the blur-change in special.change.handle.
                    // This still fires onchange a second time for check/radio after blur.
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function (event) {
                            if (event.originalEvent.propertyName === "checked") {
                                this._justChanged = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function (event) {
                            if (this._justChanged && !event.isTrigger) {
                                this._justChanged = false;
                            }

                            // Allow triggered, simulated change events (#11500)
                            jQuery.event.simulate("change", this, event);
                        });
                    }
                    return false;
                }

                // Delegated event; lazy-add a change handler on descendant inputs
                jQuery.event.add(this, "beforeactivate._change", function (e) {
                    var elem = e.target;

                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "change")) {
                        jQuery.event.add(elem, "change._change", function (event) {
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, event);
                            }
                        });
                        jQuery._data(elem, "change", true);
                    }
                });
            },

            handle: function (event) {
                var elem = event.target;

                // Swallow native change events from checkbox/radio, we already triggered them above
                if (this !== elem || event.isSimulated || event.isTrigger ||
                    (elem.type !== "radio" && elem.type !== "checkbox")) {

                    return event.handleObj.handler.apply(this, arguments);
                }
            },

            teardown: function () {
                jQuery.event.remove(this, "._change");

                return !rformElems.test(this.nodeName);
            }
        };
    }

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
    if (!support.focusin) {
        jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {

            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function (event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };

            jQuery.event.special[fix] = {
                setup: function () {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix);

                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    jQuery._data(doc, fix, (attaches || 0) + 1);
                },
                teardown: function () {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix) - 1;

                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        jQuery._removeData(doc, fix);
                    } else {
                        jQuery._data(doc, fix, attaches);
                    }
                }
            };
        });
    }

    jQuery.fn.extend({

        on: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function (types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {

                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(
                    handleObj.namespace ?
                        handleObj.origType + "." + handleObj.namespace :
                        handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if (typeof types === "object") {

                // ( types-object [, selector] )
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {

                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function () {
                jQuery.event.remove(this, types, fn, selector);
            });
        },

        trigger: function (type, data) {
            return this.each(function () {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function (type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });


    var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
        rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

        // Support: IE 10-11, Edge 10240+
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i,

        // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        safeFragment = createSafeFragment(document),
        fragmentDiv = safeFragment.appendChild(document.createElement("div"));

// Support: IE<8
// Manipulating tables requires a tbody
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") &&
        jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ?

            elem.getElementsByTagName("tbody")[0] ||
            elem.appendChild(elem.ownerDocument.createElement("tbody")) :
            elem;
    }

// Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
        return elem;
    }

    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }

    function cloneCopyEvent(src, dest) {
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return;
        }

        var type, i, l,
            oldData = jQuery._data(src),
            curData = jQuery._data(dest, oldData),
            events = oldData.events;

        if (events) {
            delete curData.handle;
            curData.events = {};

            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }

        // make the cloned public data object a copy from the original
        if (curData.data) {
            curData.data = jQuery.extend({}, curData.data);
        }
    }

    function fixCloneNodeIssues(src, dest) {
        var nodeName, e, data;

        // We do not need to do anything for non-Elements
        if (dest.nodeType !== 1) {
            return;
        }

        nodeName = dest.nodeName.toLowerCase();

        // IE6-8 copies events bound via attachEvent when using cloneNode.
        if (!support.noCloneEvent && dest[jQuery.expando]) {
            data = jQuery._data(dest);

            for (e in data.events) {
                jQuery.removeEvent(dest, e, data.handle);
            }

            // Event data gets referenced instead of copied if the expando gets copied too
            dest.removeAttribute(jQuery.expando);
        }

        // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
        if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest);

            // IE6-10 improperly clones children of object elements using classid.
            // IE10 throws NoModificationAllowedError if parent is null, #12132.
        } else if (nodeName === "object") {
            if (dest.parentNode) {
                dest.outerHTML = src.outerHTML;
            }

            // This path appears unavoidable for IE9. When cloning an object
            // element in IE9, the outerHTML strategy above is not sufficient.
            // If the src has innerHTML and the destination does not,
            // copy the src.innerHTML into the dest.innerHTML. #10324
            if (support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
                dest.innerHTML = src.innerHTML;
            }

        } else if (nodeName === "input" && rcheckableType.test(src.type)) {

            // IE6-8 fails to persist the checked state of a cloned checkbox
            // or radio button. Worse, IE6-7 fail to give the cloned element
            // a checked appearance if the defaultChecked value isn't also set

            dest.defaultChecked = dest.checked = src.checked;

            // IE6-7 get confused and end up setting the value of a cloned
            // checkbox/radio button to an empty string instead of "on"
            if (dest.value !== src.value) {
                dest.value = src.value;
            }

            // IE6-8 fails to return the selected option to the default selected
            // state when cloning options
        } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected;

            // IE6-8 fails to set the defaultValue to the correct value when
            // cloning other types of input fields
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }

    function domManip(collection, args, callback, ignored) {

        // Flatten any nested arrays
        args = concat.apply([], args);

        var first, node, hasScripts,
            scripts, doc, fragment,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            isFunction = jQuery.isFunction(value);

        // We can't cloneNode fragments that contain checked, in WebKit
        if (isFunction ||
            (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
            return collection.each(function (index) {
                var self = collection.eq(index);
                if (isFunction) {
                    args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
            });
        }

        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;

            if (fragment.childNodes.length === 1) {
                fragment = first;
            }

            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;

                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (; i < l; i++) {
                    node = fragment;

                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);

                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) {

                            // Support: Android<4.1, PhantomJS<2
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(scripts, getAll(node, "script"));
                        }
                    }

                    callback.call(collection[i], node, i);
                }

                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;

                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);

                    // Evaluate executable scripts on first document insertion
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") &&
                            jQuery.contains(doc, node)) {

                            if (node.src) {

                                // Optional AJAX dependency, but won't run scripts if not present
                                if (jQuery._evalUrl) {
                                    jQuery._evalUrl(node.src);
                                }
                            } else {
                                jQuery.globalEval(
                                    (node.text || node.textContent || node.innerHTML || "")
                                        .replace(rcleanScript, "")
                                );
                            }
                        }
                    }
                }

                // Fix #11809: Avoid leaking memory
                fragment = first = null;
            }
        }

        return collection;
    }

    function remove(elem, selector, keepData) {
        var node,
            elems = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;

        for (; (node = elems[i]) != null; i++) {

            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
            }

            if (node.parentNode) {
                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                    setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
            }
        }

        return elem;
    }

    jQuery.extend({
        htmlPrefilter: function (html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },

        clone: function (elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i, srcElements,
                inPage = jQuery.contains(elem.ownerDocument, elem);

            if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {

                clone = elem.cloneNode(true);

                // IE<=8 does not properly clone detached, unknown element nodes
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }

            if ((!support.noCloneEvent || !support.noCloneChecked) &&
                (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);

                // Fix all IE cloning issues
                for (i = 0; (node = srcElements[i]) != null; ++i) {

                    // Ensure that the destination node is not null; Fixes #9587
                    if (destElements[i]) {
                        fixCloneNodeIssues(node, destElements[i]);
                    }
                }
            }

            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);

                    for (i = 0; (node = srcElements[i]) != null; i++) {
                        cloneCopyEvent(node, destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }

            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }

            destElements = srcElements = node = null;

            // Return the cloned set
            return clone;
        },

        cleanData: function (elems, /* internal */ forceAcceptData) {
            var elem, type, id, data,
                i = 0,
                internalKey = jQuery.expando,
                cache = jQuery.cache,
                attributes = support.attributes,
                special = jQuery.event.special;

            for (; (elem = elems[i]) != null; i++) {
                if (forceAcceptData || acceptData(elem)) {

                    id = elem[internalKey];
                    data = id && cache[id];

                    if (data) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);

                                    // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }

                        // Remove cache only if it was not already removed by jQuery.event.remove
                        if (cache[id]) {

                            delete cache[id];

                            // Support: IE<9
                            // IE does not allow us to delete expando properties from nodes
                            // IE creates expando attributes along with the property
                            // IE does not have a removeAttribute function on Document nodes
                            if (!attributes && typeof elem.removeAttribute !== "undefined") {
                                elem.removeAttribute(internalKey);

                                // Webkit & Blink performance suffers when deleting properties
                                // from DOM nodes, so set to undefined instead
                                // https://code.google.com/p/chromium/issues/detail?id=378607
                            } else {
                                elem[internalKey] = undefined;
                            }

                            deletedIds.push(id);
                        }
                    }
                }
            }
        }
    });

    jQuery.fn.extend({

        // Keep domManip exposed until 3.0 (gh-2225)
        domManip: domManip,

        detach: function (selector) {
            return remove(this, selector, true);
        },

        remove: function (selector) {
            return remove(this, selector);
        },

        text: function (value) {
            return access(this, function (value) {
                return value === undefined ?
                    jQuery.text(this) :
                    this.empty().append(
                        (this[0] && this[0].ownerDocument || document).createTextNode(value)
                    );
            }, null, value, arguments.length);
        },

        append: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },

        prepend: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },

        before: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },

        after: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },

        empty: function () {
            var elem,
                i = 0;

            for (; (elem = this[i]) != null; i++) {

                // Remove element nodes and prevent memory leaks
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                }

                // Remove any remaining nodes
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }

                // If this is a select, ensure that it displays empty (#12336)
                // Support: IE<9
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    elem.options.length = 0;
                }
            }

            return this;
        },

        clone: function (dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map(function () {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },

        html: function (value) {
            return access(this, function (value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;

                if (value === undefined) {
                    return elem.nodeType === 1 ?
                        elem.innerHTML.replace(rinlinejQuery, "") :
                        undefined;
                }

                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                    (support.htmlSerialize || !rnoshimcache.test(value)) &&
                    (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                    value = jQuery.htmlPrefilter(value);

                    try {
                        for (; i < l; i++) {

                            // Remove element nodes and prevent memory leaks
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {
                    }
                }

                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },

        replaceWith: function () {
            var ignored = [];

            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function (elem) {
                var parent = this.parentNode;

                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this);
                    }
                }

                // Force callback invocation
            }, ignored);
        }
    });

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQuery.fn[name] = function (selector) {
            var elems,
                i = 0,
                ret = [],
                insert = jQuery(selector),
                last = insert.length - 1;

            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);

                // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
                push.apply(ret, elems.get());
            }

            return this.pushStack(ret);
        };
    });


    var iframe,
        elemdisplay = {

            // Support: Firefox
            // We have to pre-define these values for FF (#10227)
            HTML: "block",
            BODY: "block"
        };

    /**
     * Retrieve the actual display of a element
     * @param {String} name nodeName of the element
     * @param {Object} doc Document object
     */

// Called only from within defaultDisplay
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body),

            display = jQuery.css(elem[0], "display");

        // We don't have any data stored on the element,
        // so use "detach" method as fast way to get rid of the element
        elem.detach();

        return display;
    }

    /**
     * Try to determine the default display value of an element
     * @param {String} nodeName
     */
    function defaultDisplay(nodeName) {
        var doc = document,
            display = elemdisplay[nodeName];

        if (!display) {
            display = actualDisplay(nodeName, doc);

            // If the simple way fails, read from inside an iframe
            if (display === "none" || !display) {

                // Use the already-created iframe if possible
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>"))
                    .appendTo(doc.documentElement);

                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;

                // Support: IE
                doc.write();
                doc.close();

                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }

            // Store the correct default display
            elemdisplay[nodeName] = display;
        }

        return display;
    }

    var rmargin = (/^margin/);

    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

    var swap = function (elem, options, callback, args) {
        var ret, name,
            old = {};

        // Remember the old values, and insert the new ones
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }

        ret = callback.apply(elem, args || []);

        // Revert the old values
        for (name in options) {
            elem.style[name] = old[name];
        }

        return ret;
    };


    var documentElement = document.documentElement;


    (function () {
        var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
            reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
            container = document.createElement("div"),
            div = document.createElement("div");

        // Finish early in limited (non-browser) environments
        if (!div.style) {
            return;
        }

        div.style.cssText = "float:left;opacity:.5";

        // Support: IE<9
        // Make sure that element opacity exists (as opposed to filter)
        support.opacity = div.style.opacity === "0.5";

        // Verify style float existence
        // (IE uses styleFloat instead of cssFloat)
        support.cssFloat = !!div.style.cssFloat;

        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        container = document.createElement("div");
        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
            "padding:0;margin-top:1px;position:absolute";
        div.innerHTML = "";
        container.appendChild(div);

        // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
            div.style.WebkitBoxSizing === "";

        jQuery.extend(support, {
            reliableHiddenOffsets: function () {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return reliableHiddenOffsetsVal;
            },

            boxSizingReliable: function () {

                // We're checking for pixelPositionVal here instead of boxSizingReliableVal
                // since that compresses better and they're computed together anyway.
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return boxSizingReliableVal;
            },

            pixelMarginRight: function () {

                // Support: Android 4.0-4.3
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return pixelMarginRightVal;
            },

            pixelPosition: function () {
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return pixelPositionVal;
            },

            reliableMarginRight: function () {

                // Support: Android 2.3
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return reliableMarginRightVal;
            },

            reliableMarginLeft: function () {

                // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
                if (pixelPositionVal == null) {
                    computeStyleTests();
                }
                return reliableMarginLeftVal;
            }
        });

        function computeStyleTests() {
            var contents, divStyle,
                documentElement = document.documentElement;

            // Setup
            documentElement.appendChild(container);

            div.style.cssText =

                // Support: Android 2.3
                // Vendor-prefix box-sizing
                "-webkit-box-sizing:border-box;box-sizing:border-box;" +
                "position:relative;display:block;" +
                "margin:auto;border:1px;padding:1px;" +
                "top:1%;width:50%";

            // Support: IE<9
            // Assume reasonable values in the absence of getComputedStyle
            pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
            pixelMarginRightVal = reliableMarginRightVal = true;

            // Check for getComputedStyle so that this code is not run in IE<9.
            if (window.getComputedStyle) {
                divStyle = window.getComputedStyle(div);
                pixelPositionVal = (divStyle || {}).top !== "1%";
                reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
                boxSizingReliableVal = (divStyle || {width: "4px"}).width === "4px";

                // Support: Android 4.0 - 4.3 only
                // Some styles come back with percentage values, even though they shouldn't
                div.style.marginRight = "50%";
                pixelMarginRightVal = (divStyle || {marginRight: "4px"}).marginRight === "4px";

                // Support: Android 2.3 only
                // Div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container (#3333)
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                contents = div.appendChild(document.createElement("div"));

                // Reset CSS: box-sizing; display; margin; border; padding
                contents.style.cssText = div.style.cssText =

                    // Support: Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                    "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                contents.style.marginRight = contents.style.width = "0";
                div.style.width = "1px";

                reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents) || {}).marginRight);

                div.removeChild(contents);
            }

            // Support: IE6-8
            // First check that getClientRects works as expected
            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            div.style.display = "none";
            reliableHiddenOffsetsVal = div.getClientRects().length === 0;
            if (reliableHiddenOffsetsVal) {
                div.style.display = "";
                div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                div.childNodes[0].style.borderCollapse = "separate";
                contents = div.getElementsByTagName("td");
                contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
                if (reliableHiddenOffsetsVal) {
                    contents[0].style.display = "";
                    contents[1].style.display = "none";
                    reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
                }
            }

            // Teardown
            documentElement.removeChild(container);
        }

    })();


    var getStyles, curCSS,
        rposition = /^(top|right|bottom|left)$/;

    if (window.getComputedStyle) {
        getStyles = function (elem) {

            // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            var view = elem.ownerDocument.defaultView;

            if (!view || !view.opener) {
                view = window;
            }

            return view.getComputedStyle(elem);
        };

        curCSS = function (elem, name, computed) {
            var width, minWidth, maxWidth, ret,
                style = elem.style;

            computed = computed || getStyles(elem);

            // getPropertyValue is only needed for .css('filter') in IE9, see #12537
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

            // Support: Opera 12.1x only
            // Fall back to style even without computed
            // computed is undefined for elems on document fragments
            if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            }

            if (computed) {

                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value"
                // instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values,
                // but width seems to be reliably pixels
                // this is against the CSSOM draft spec:
                // http://dev.w3.org/csswg/cssom/#resolved-values
                if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

                    // Remember the original values
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;

                    // Put in the new values to get a computed value out
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;

                    // Revert the changed values
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
                ret + "";
        };
    } else if (documentElement.currentStyle) {
        getStyles = function (elem) {
            return elem.currentStyle;
        };

        curCSS = function (elem, name, computed) {
            var left, rs, rsLeft, ret,
                style = elem.style;

            computed = computed || getStyles(elem);
            ret = computed ? computed[name] : undefined;

            // Avoid setting ret to empty string here
            // so we don't default to auto
            if (ret == null && style && style[name]) {
                ret = style[name];
            }

            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            // but not position css attributes, as those are
            // proportional to the parent element instead
            // and we can't measure the parent instead because it
            // might trigger a "stacking dolls" problem
            if (rnumnonpx.test(ret) && !rposition.test(name)) {

                // Remember the original values
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;

                // Put in the new values to get a computed value out
                if (rsLeft) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";

                // Revert the changed values
                style.left = left;
                if (rsLeft) {
                    rs.left = rsLeft;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
                ret + "" || "auto";
        };
    }


    function addGetHookIf(conditionFn, hookFn) {

        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function () {
                if (conditionFn()) {

                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }

                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }


    var

        ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity\s*=\s*([^)]*)/i,

        // swappable if display is none or starts with table except
        // "table", "table-cell", or "table-caption"
        // see here for display values:
        // https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),

        cssShow = {position: "absolute", visibility: "hidden", display: "block"},
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },

        cssPrefixes = ["Webkit", "O", "Moz", "ms"],
        emptyStyle = document.createElement("div").style;


// return a css property mapped to a potentially vendor prefixed property
    function vendorPropName(name) {

        // shortcut for names that are not vendor prefixed
        if (name in emptyStyle) {
            return name;
        }

        // check for vendor prefixed names
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    }

    function showHide(elements, show) {
        var display, elem, hidden,
            values = [],
            index = 0,
            length = elements.length;

        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }

            values[index] = jQuery._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {

                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }

                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] =
                        jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);

                if (display && display !== "none" || !hidden) {
                    jQuery._data(
                        elem,
                        "olddisplay",
                        hidden ? display : jQuery.css(elem, "display")
                    );
                }
            }
        }

        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }

        return elements;
    }

    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ?

            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") :
            value;
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ?

            // If we already have the right measurement, avoid augmentation
            4 :

            // Otherwise initialize for horizontal or vertical properties
            name === "width" ? 1 : 0,

            val = 0;

        for (; i < 4; i += 2) {

            // both box models exclude margin, so add it if we want it
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }

            if (isBorderBox) {

                // border-box includes padding, so remove it if we want content
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }

                // at this point, extra isn't border nor margin, so remove border
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {

                // at this point, extra isn't content, so add padding
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

                // at this point, extra isn't content nor padding, so add border
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }

        return val;
    }

    function getWidthOrHeight(elem, name, extra) {

        // Start with offset property, which is equivalent to the border-box value
        var valueIsBorderBox = true,
            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles(elem),
            isBorderBox = support.boxSizing &&
                jQuery.css(elem, "boxSizing", false, styles) === "border-box";

        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if (val <= 0 || val == null) {

            // Fall back to computed then uncomputed css if necessary
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }

            // Computed unit is not pixels. Stop here and return.
            if (rnumnonpx.test(val)) {
                return val;
            }

            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox &&
                (support.boxSizingReliable() || val === elem.style[name]);

            // Normalize "", auto, and prepare for extra
            val = parseFloat(val) || 0;
        }

        // use the active box-sizing model to add/subtract irrelevant styles
        return (val +
            augmentWidthOrHeight(
                elem,
                name,
                extra || (isBorderBox ? "border" : "content"),
                valueIsBorderBox,
                styles
            )
        ) + "px";
    }

    jQuery.extend({

        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function (elem, computed) {
                    if (computed) {

                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {

            // normalize float css property
            "float": support.cssFloat ? "cssFloat" : "styleFloat"
        },

        // Get and set the style property on a DOM Node
        style: function (elem, name, value, extra) {

            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = jQuery.camelCase(name),
                style = elem.style;

            name = jQuery.cssProps[origName] ||
                (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;

                // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);

                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set. See: #7116
                if (value == null || value !== value) {
                    return;
                }

                // If a number was passed in, add the unit (except for certain CSS properties)
                if (type === "number") {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                }

                // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                // but it would mean to define eight
                // (for every problematic property) identical functions
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) ||
                    (value = hooks.set(elem, value, extra)) !== undefined) {

                    // Support: IE
                    // Swallow errors from 'invalid' CSS values (#5509)
                    try {
                        style[name] = value;
                    } catch (e) {
                    }
                }

            } else {

                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks &&
                    (ret = hooks.get(elem, false, extra)) !== undefined) {

                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[name];
            }
        },

        css: function (elem, name, extra, styles) {
            var num, val, hooks,
                origName = jQuery.camelCase(name);

            // Make sure that we're working with the right name
            name = jQuery.cssProps[origName] ||
                (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }

            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }

            //convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }

            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });

    jQuery.each(["height", "width"], function (i, name) {
        jQuery.cssHooks[name] = {
            get: function (elem, computed, extra) {
                if (computed) {

                    // certain elements can have dimension info if we invisibly show them
                    // however, it must have a current display style that would benefit from this
                    return rdisplayswap.test(jQuery.css(elem, "display")) &&
                    elem.offsetWidth === 0 ?
                        swap(elem, cssShow, function () {
                            return getWidthOrHeight(elem, name, extra);
                        }) :
                        getWidthOrHeight(elem, name, extra);
                }
            },

            set: function (elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ?
                    augmentWidthOrHeight(
                        elem,
                        name,
                        extra,
                        support.boxSizing &&
                        jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                        styles
                    ) : 0
                );
            }
        };
    });

    if (!support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function (elem, computed) {

                // IE uses filters for opacity
                return ropacity.test((computed && elem.currentStyle ?
                    elem.currentStyle.filter :
                    elem.style.filter) || "") ?
                    (0.01 * parseFloat(RegExp.$1)) + "" :
                    computed ? "1" : "";
            },

            set: function (elem, value) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";

                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                style.zoom = 1;

                // if setting opacity to 1, and no other filters exist -
                // attempt to remove filter attribute #6652
                // if value === "", then remove inline opacity #12685
                if ((value >= 1 || value === "") &&
                    jQuery.trim(filter.replace(ralpha, "")) === "" &&
                    style.removeAttribute) {

                    // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                    // if "filter:" is present at all, clearType is disabled, we want to avoid this
                    // style.removeAttribute is IE Only, but so apparently is this code path...
                    style.removeAttribute("filter");

                    // if there is no filter style applied in a css rule
                    // or unset inline opacity, we are done
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        return;
                    }
                }

                // otherwise, set new filter values
                style.filter = ralpha.test(filter) ?
                    filter.replace(ralpha, opacity) :
                    filter + " " + opacity;
            }
        };
    }

    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,
        function (elem, computed) {
            if (computed) {
                return swap(elem, {"display": "inline-block"},
                    curCSS, [elem, "marginRight"]);
            }
        }
    );

    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
        function (elem, computed) {
            if (computed) {
                return (
                    parseFloat(curCSS(elem, "marginLeft")) ||

                    // Support: IE<=11+
                    // Running getBoundingClientRect on a disconnected node in IE throws an error
                    // Support: IE8 only
                    // getClientRects() errors on disconnected elems
                    (jQuery.contains(elem.ownerDocument, elem) ?
                            elem.getBoundingClientRect().left -
                            swap(elem, {marginLeft: 0}, function () {
                                return elem.getBoundingClientRect().left;
                            }) :
                            0
                    )
                ) + "px";
            }
        }
    );

// These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function (value) {
                var i = 0,
                    expanded = {},

                    // assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [value];

                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] =
                        parts[i] || parts[i - 2] || parts[0];
                }

                return expanded;
            }
        };

        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });

    jQuery.fn.extend({
        css: function (name, value) {
            return access(this, function (elem, name, value) {
                var styles, len,
                    map = {},
                    i = 0;

                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;

                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }

                    return map;
                }

                return value !== undefined ?
                    jQuery.style(elem, name, value) :
                    jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function () {
            return showHide(this, true);
        },
        hide: function () {
            return showHide(this);
        },
        toggle: function (state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }

            return this.each(function () {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });


    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }

    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function (elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function () {
            var hooks = Tween.propHooks[this.prop];

            return hooks && hooks.get ?
                hooks.get(this) :
                Tween.propHooks._default.get(this);
        },
        run: function (percent) {
            var eased,
                hooks = Tween.propHooks[this.prop];

            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;

            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }

            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function (tween) {
                var result;

                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 ||
                    tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop];
                }

                // passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                result = jQuery.css(tween.elem, tween.prop, "");

                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function (tween) {

                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 &&
                    (tween.elem.style[jQuery.cssProps[tween.prop]] != null ||
                        jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };

    jQuery.easing = {
        linear: function (p) {
            return p;
        },
        swing: function (p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };

    jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
    jQuery.fx.step = {};


    var
        fxNow, timerId,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout(function () {
            fxNow = undefined;
        });
        return (fxNow = jQuery.now());
    }

// Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which,
            attrs = {height: type},
            i = 0;

        // if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }

        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

    function createTween(value, prop, animation) {
        var tween,
            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if ((tween = collection[index].call(animation, prop, value))) {

                // we're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter(elem, props, opts) {
        /* jshint validthis: true */
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHidden(elem),
            dataShow = jQuery._data(elem, "fxshow");

        // handle queue: false promises
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function () {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always(function () {

                // doing this makes sure that the complete handler will be called
                // before this completes
                anim.always(function () {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }

        // height/width overflow pass
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {

            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE does not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];

            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            display = jQuery.css(elem, "display");

            // Test default display if display is currently "none"
            checkDisplay = display === "none" ?
                jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {

                // inline-level elements accept inline-block;
                // block-level elements need to be inline with layout
                if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }

        if (opts.overflow) {
            style.overflow = "hidden";
            if (!support.shrinkWrapBlocks()) {
                anim.always(function () {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
        }

        // show/hide pass
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {

                    // If there is dataShow left over from a stopped hide or show
                    // and we are going to proceed with show, we should pretend to be hidden
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

                // Any non-fx value stops us from restoring the original display value
            } else {
                display = undefined;
            }
        }

        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = jQuery._data(elem, "fxshow", {});
            }

            // store state if its toggle - enables .stop().toggle() to "reverse"
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function () {
                    jQuery(elem).hide();
                });
            }
            anim.done(function () {
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }

            // If this is a noop like .hide().hide(), restore an overwritten display value
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }

            if (index !== name) {
                props[name] = value;
                delete props[index];
            }

            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];

                // not quite $.extend, this wont overwrite keys already present.
                // also - reusing 'index' from above because we have the correct "name"
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }

    function Animation(elem, properties, options) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function () {

                // don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function () {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

                    // Support: Android 2.3
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }

                deferred.notifyWith(elem, [animation, percent, remaining]);

                if (percent < 1 && length) {
                    return remaining;
                } else {
                    deferred.resolveWith(elem, [animation]);
                    return false;
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function (prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end,
                        animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function (gotoEnd) {
                    var index = 0,

                        // if we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    }

                    // resolve when we played the last frame
                    // otherwise, reject
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }),
            props = animation.props;

        propFilter(props, animation.opts.specialEasing);

        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (jQuery.isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                        jQuery.proxy(result.stop, result);
                }
                return result;
            }
        }

        jQuery.map(props, createTween, animation);

        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }

        jQuery.fx.timer(
            jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })
        );

        // attach callbacks from options
        return animation.progress(animation.opts.progress)
            .done(animation.opts.done, animation.opts.complete)
            .fail(animation.opts.fail)
            .always(animation.opts.always);
    }

    jQuery.Animation = jQuery.extend(Animation, {

        tweeners: {
            "*": [function (prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
            }]
        },

        tweener: function (props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = ["*"];
            } else {
                props = props.match(rnotwhite);
            }

            var prop,
                index = 0,
                length = props.length;

            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },

        prefilters: [defaultPrefilter],

        prefilter: function (callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback);
            } else {
                Animation.prefilters.push(callback);
            }
        }
    });

    jQuery.speed = function (speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing ||
                jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };

        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
            opt.duration in jQuery.fx.speeds ?
                jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

        // normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function () {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }

            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };

        return opt;
    };

    jQuery.fn.extend({
        fadeTo: function (speed, to, easing, callback) {

            // show any hidden elements after setting opacity to 0
            return this.filter(isHidden).css("opacity", 0).show()

            // animate to the value specified
                .end().animate({opacity: to}, speed, easing, callback);
        },
        animate: function (prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function () {

                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall);

                    // Empty animations, or finishing resolves immediately
                    if (empty || jQuery._data(this, "finish")) {
                        anim.stop(true);
                    }
                };
            doAnimation.finish = doAnimation;

            return empty || optall.queue === false ?
                this.each(doAnimation) :
                this.queue(optall.queue, doAnimation);
        },
        stop: function (type, clearQueue, gotoEnd) {
            var stopQueue = function (hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };

            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }

            return this.each(function () {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = jQuery._data(this);

                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }

                for (index = timers.length; index--;) {
                    if (timers[index].elem === this &&
                        (type == null || timers[index].queue === type)) {

                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }

                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function (type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function () {
                var index,
                    data = jQuery._data(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                // enable finishing flag on private data
                data.finish = true;

                // empty the queue first
                jQuery.queue(this, type, []);

                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }

                // look for any active animations, and finish them
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }

                // look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }

                // turn off finishing flag
                delete data.finish;
            });
        }
    });

    jQuery.each(["toggle", "show", "hide"], function (i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function (speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ?
                cssFn.apply(this, arguments) :
                this.animate(genFx(name, true), speed, easing, callback);
        };
    });

// Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });

    jQuery.timers = [];
    jQuery.fx.tick = function () {
        var timer,
            timers = jQuery.timers,
            i = 0;

        fxNow = jQuery.now();

        for (; i < timers.length; i++) {
            timer = timers[i];

            // Checks the timer has not already been removed
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }

        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };

    jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };

    jQuery.fx.interval = 13;

    jQuery.fx.start = function () {
        if (!timerId) {
            timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };

    jQuery.fx.stop = function () {
        window.clearInterval(timerId);
        timerId = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,

        // Default speed
        _default: 400
    };


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";

        return this.queue(type, function (next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function () {
                window.clearTimeout(timeout);
            };
        });
    };


    (function () {
        var a,
            input = document.createElement("input"),
            div = document.createElement("div"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));

        // Setup
        div = document.createElement("div");
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = div.getElementsByTagName("a")[0];

        // Support: Windows Web Apps (WWA)
        // `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "checkbox");
        div.appendChild(input);

        a = div.getElementsByTagName("a")[0];

        // First batch of tests.
        a.style.cssText = "top:1px";

        // Test setAttribute on camelCase class.
        // If it works, we need attrFixes when doing get/setAttribute (ie6/7)
        support.getSetAttribute = div.className !== "t";

        // Get the style information from getAttribute
        // (IE uses .cssText instead)
        support.style = /top/.test(a.getAttribute("style"));

        // Make sure that URLs aren't manipulated
        // (IE normalizes it by default)
        support.hrefNormalized = a.getAttribute("href") === "/a";

        // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
        support.checkOn = !!input.value;

        // Make sure that a selected-by-default option has a working selected property.
        // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
        support.optSelected = opt.selected;

        // Tests for enctype support on a form (#6743)
        support.enctype = !!document.createElement("form").enctype;

        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        select.disabled = true;
        support.optDisabled = !opt.disabled;

        // Support: IE8 only
        // Check if we can trust getAttribute("value")
        input = document.createElement("input");
        input.setAttribute("value", "");
        support.input = input.getAttribute("value") === "";

        // Check if an input maintains its value after becoming a radio
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
    })();


    var rreturn = /\r/g,
        rspaces = /[\x20\t\r\n\f]+/g;

    jQuery.fn.extend({
        val: function (value) {
            var hooks, ret, isFunction,
                elem = this[0];

            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] ||
                        jQuery.valHooks[elem.nodeName.toLowerCase()];

                    if (
                        hooks &&
                        "get" in hooks &&
                        (ret = hooks.get(elem, "value")) !== undefined
                    ) {
                        return ret;
                    }

                    ret = elem.value;

                    return typeof ret === "string" ?

                        // handle most common string cases
                        ret.replace(rreturn, "") :

                        // handle cases where value is null/undef or number
                        ret == null ? "" : ret;
                }

                return;
            }

            isFunction = jQuery.isFunction(value);

            return this.each(function (i) {
                var val;

                if (this.nodeType !== 1) {
                    return;
                }

                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function (elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ?
                        val :

                        // Support: IE10-11+
                        // option.text throws exceptions (#14686, #14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
                }
            },
            select: {
                get: function (elem) {
                    var value, option,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one" || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ?
                            max :
                            one ? index : 0;

                    // Loop through all the selected options
                    for (; i < max; i++) {
                        option = options[i];

                        // oldIE doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) &&

                            // Don't return options that are disabled or in a disabled optgroup
                            (support.optDisabled ?
                                !option.disabled :
                                option.getAttribute("disabled") === null) &&
                            (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

                            // Get the specific value for the option
                            value = jQuery(option).val();

                            // We don't need an array for one selects
                            if (one) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }

                    return values;
                },

                set: function (elem, value) {
                    var optionSet, option,
                        options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;

                    while (i--) {
                        option = options[i];

                        if (jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {

                            // Support: IE6
                            // When new option element is added to select box we need to
                            // force reflow of newly added node in order to workaround delay
                            // of initialization properties
                            try {
                                option.selected = optionSet = true;

                            } catch (_) {

                                // Will be executed only in IE6
                                option.scrollHeight;
                            }

                        } else {
                            option.selected = false;
                        }
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }

                    return options;
                }
            }
        }
    });

// Radios and checkboxes getter/setter
    jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
            set: function (elem, value) {
                if (jQuery.isArray(value)) {
                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function (elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });


    var nodeHook, boolHook,
        attrHandle = jQuery.expr.attrHandle,
        ruseDefault = /^(?:checked|selected)$/i,
        getSetAttribute = support.getSetAttribute,
        getSetInput = support.input;

    jQuery.fn.extend({
        attr: function (name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },

        removeAttr: function (name) {
            return this.each(function () {
                jQuery.removeAttr(this, name);
            });
        }
    });

    jQuery.extend({
        attr: function (elem, name, value) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            }

            // All attributes are lowercase
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] ||
                    (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }

            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }

                if (hooks && "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }

                elem.setAttribute(name, value + "");
                return value;
            }

            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }

            ret = jQuery.find.attr(elem, name);

            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },

        attrHooks: {
            type: {
                set: function (elem, value) {
                    if (!support.radioValue && value === "radio" &&
                        jQuery.nodeName(elem, "input")) {

                        // Setting the type on a radio button after the value resets the value in IE8-9
                        // Reset value to default in case type is set after value during creation
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },

        removeAttr: function (elem, value) {
            var name, propName,
                i = 0,
                attrNames = value && value.match(rnotwhite);

            if (attrNames && elem.nodeType === 1) {
                while ((name = attrNames[i++])) {
                    propName = jQuery.propFix[name] || name;

                    // Boolean attributes get special treatment (#10870)
                    if (jQuery.expr.match.bool.test(name)) {

                        // Set corresponding property to false
                        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                            elem[propName] = false;

                            // Support: IE<9
                            // Also clear defaultChecked/defaultSelected (if appropriate)
                        } else {
                            elem[jQuery.camelCase("default-" + name)] =
                                elem[propName] = false;
                        }

                        // See #9699 for explanation of this approach (setting first, then removal)
                    } else {
                        jQuery.attr(elem, name, "");
                    }

                    elem.removeAttribute(getSetAttribute ? name : propName);
                }
            }
        }
    });

// Hooks for boolean attributes
    boolHook = {
        set: function (elem, value, name) {
            if (value === false) {

                // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {

                // IE<8 needs the *property* name
                elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);

            } else {

                // Support: IE<9
                // Use defaultChecked and defaultSelected for oldIE
                elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
            }
            return name;
        }
    };

    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;

        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
            attrHandle[name] = function (elem, name, isXML) {
                var ret, handle;
                if (!isXML) {

                    // Avoid an infinite loop by temporarily removing this function from the getter
                    handle = attrHandle[name];
                    attrHandle[name] = ret;
                    ret = getter(elem, name, isXML) != null ?
                        name.toLowerCase() :
                        null;
                    attrHandle[name] = handle;
                }
                return ret;
            };
        } else {
            attrHandle[name] = function (elem, name, isXML) {
                if (!isXML) {
                    return elem[jQuery.camelCase("default-" + name)] ?
                        name.toLowerCase() :
                        null;
                }
            };
        }
    });

// fix oldIE attroperties
    if (!getSetInput || !getSetAttribute) {
        jQuery.attrHooks.value = {
            set: function (elem, value, name) {
                if (jQuery.nodeName(elem, "input")) {

                    // Does not return so that setAttribute is also used
                    elem.defaultValue = value;
                } else {

                    // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                    return nodeHook && nodeHook.set(elem, value, name);
                }
            }
        };
    }

// IE6/7 do not support getting/setting some attributes with get/setAttribute
    if (!getSetAttribute) {

        // Use this for any attribute in IE6/7
        // This fixes almost every IE6/7 issue
        nodeHook = {
            set: function (elem, value, name) {

                // Set the existing or create a new attribute node
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    elem.setAttributeNode(
                        (ret = elem.ownerDocument.createAttribute(name))
                    );
                }

                ret.value = value += "";

                // Break association with cloned elements by also using setAttribute (#9646)
                if (name === "value" || value === elem.getAttribute(name)) {
                    return value;
                }
            }
        };

        // Some attributes are constructed with empty-string values when not defined
        attrHandle.id = attrHandle.name = attrHandle.coords =
            function (elem, name, isXML) {
                var ret;
                if (!isXML) {
                    return (ret = elem.getAttributeNode(name)) && ret.value !== "" ?
                        ret.value :
                        null;
                }
            };

        // Fixing value retrieval on a button requires this module
        jQuery.valHooks.button = {
            get: function (elem, name) {
                var ret = elem.getAttributeNode(name);
                if (ret && ret.specified) {
                    return ret.value;
                }
            },
            set: nodeHook.set
        };

        // Set contenteditable to false on removals(#10429)
        // Setting to empty string throws an error as an invalid value
        jQuery.attrHooks.contenteditable = {
            set: function (elem, value, name) {
                nodeHook.set(elem, value === "" ? false : value, name);
            }
        };

        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        jQuery.each(["width", "height"], function (i, name) {
            jQuery.attrHooks[name] = {
                set: function (elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            };
        });
    }

    if (!support.style) {
        jQuery.attrHooks.style = {
            get: function (elem) {

                // Return undefined in the case of empty string
                // Note: IE uppercases css property names, but if we were to .toLowerCase()
                // .cssText, that would destroy case sensitivity in URL's, like in "background"
                return elem.style.cssText || undefined;
            },
            set: function (elem, value) {
                return (elem.style.cssText = value + "");
            }
        };
    }


    var rfocusable = /^(?:input|select|textarea|button|object)$/i,
        rclickable = /^(?:a|area)$/i;

    jQuery.fn.extend({
        prop: function (name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },

        removeProp: function (name) {
            name = jQuery.propFix[name] || name;
            return this.each(function () {

                // try/catch handles cases where IE balks (such as removing a property on window)
                try {
                    this[name] = undefined;
                    delete this[name];
                } catch (e) {
                }
            });
        }
    });

    jQuery.extend({
        prop: function (elem, name, value) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }

            if (value !== undefined) {
                if (hooks && "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }

                return (elem[name] = value);
            }

            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }

            return elem[name];
        },

        propHooks: {
            tabIndex: {
                get: function (elem) {

                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");

                    return tabindex ?
                        parseInt(tabindex, 10) :
                        rfocusable.test(elem.nodeName) ||
                        rclickable.test(elem.nodeName) && elem.href ?
                            0 :
                            -1;
                }
            }
        },

        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if (!support.hrefNormalized) {

        // href/src property should get the full normalized URL (#10299/#12915)
        jQuery.each(["href", "src"], function (i, name) {
            jQuery.propHooks[name] = {
                get: function (elem) {
                    return elem.getAttribute(name, 4);
                }
            };
        });
    }

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function (elem) {
                var parent = elem.parentNode;

                if (parent) {
                    parent.selectedIndex;

                    // Make sure that it also works with optgroups, see #5701
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            },
            set: function (elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;

                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }

    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function () {
        jQuery.propFix[this.toLowerCase()] = this;
    });

// IE6/7 call enctype encoding
    if (!support.enctype) {
        jQuery.propFix.enctype = "encoding";
    }


    var rclass = /[\t\r\n\f]/g;

    function getClass(elem) {
        return jQuery.attr(elem, "class") || "";
    }

    jQuery.fn.extend({
        addClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if (jQuery.isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
            }

            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];

                while ((elem = this[i++])) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 &&
                        (" " + curValue + " ").replace(rclass, " ");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }

                        // only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            jQuery.attr(elem, "class", finalValue);
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if (jQuery.isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
            }

            if (!arguments.length) {
                return this.attr("class", "");
            }

            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];

                while ((elem = this[i++])) {
                    curValue = getClass(elem);

                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 &&
                        (" " + curValue + " ").replace(rclass, " ");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {

                            // Remove *all* instances
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            jQuery.attr(elem, "class", finalValue);
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function (value, stateVal) {
            var type = typeof value;

            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }

            if (jQuery.isFunction(value)) {
                return this.each(function (i) {
                    jQuery(this).toggleClass(
                        value.call(this, i, getClass(this), stateVal),
                        stateVal
                    );
                });
            }

            return this.each(function () {
                var className, i, self, classNames;

                if (type === "string") {

                    // Toggle individual class names
                    i = 0;
                    self = jQuery(this);
                    classNames = value.match(rnotwhite) || [];

                    while ((className = classNames[i++])) {

                        // Check each className given, space separated list
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }

                    // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {

                        // store className if set
                        jQuery._data(this, "__className__", className);
                    }

                    // If the element has a class name or if we're passed "false",
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    jQuery.attr(this, "class",
                        className || value === false ?
                            "" :
                            jQuery._data(this, "__className__") || ""
                    );
                }
            });
        },

        hasClass: function (selector) {
            var className, elem,
                i = 0;

            className = " " + selector + " ";
            while ((elem = this[i++])) {
                if (elem.nodeType === 1 &&
                    (" " + getClass(elem) + " ").replace(rclass, " ")
                        .indexOf(className) > -1
                ) {
                    return true;
                }
            }

            return false;
        }
    });


// Return jQuery for attributes-only inclusion


    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup error contextmenu").split(" "),
        function (i, name) {

            // Handle event binding
            jQuery.fn[name] = function (data, fn) {
                return arguments.length > 0 ?
                    this.on(name, null, data, fn) :
                    this.trigger(name);
            };
        });

    jQuery.fn.extend({
        hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });


    var location = window.location;

    var nonce = jQuery.now();

    var rquery = (/\?/);


    var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

    jQuery.parseJSON = function (data) {

        // Attempt to parse using the native JSON parser first
        if (window.JSON && window.JSON.parse) {

            // Support: Android 2.3
            // Workaround failure to string-cast null input
            return window.JSON.parse(data + "");
        }

        var requireNonComma,
            depth = null,
            str = jQuery.trim(data + "");

        // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
        // after removing valid tokens
        return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {

            // Force termination if we see a misplaced comma
            if (requireNonComma && comma) {
                depth = 0;
            }

            // Perform no more replacements after returning to outermost depth
            if (depth === 0) {
                return token;
            }

            // Commas must not follow "[", "{", or ","
            requireNonComma = open || comma;

            // Determine new depth
            // array/object open ("[" or "{"): depth += true - false (increment)
            // array/object close ("]" or "}"): depth += false - true (decrement)
            // other cases ("," or primitive): depth += true - true (numeric cast)
            depth += !close - !open;

            // Remove this token
            return "";
        })) ?
            (Function("return " + str))() :
            jQuery.error("Invalid JSON: " + data);
    };


// Cross-browser xml parsing
    jQuery.parseXML = function (data) {
        var xml, tmp;
        if (!data || typeof data !== "string") {
            return null;
        }
        try {
            if (window.DOMParser) { // Standard
                tmp = new window.DOMParser();
                xml = tmp.parseFromString(data, "text/xml");
            } else { // IE
                xml = new window.ActiveXObject("Microsoft.XMLDOM");
                xml.async = "false";
                xml.loadXML(data);
            }
        } catch (e) {
            xml = undefined;
        }
        if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };


    var
        rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,

        // IE leaves an \r character at EOL
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

        // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

        /* Prefilters
         * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
         * 2) These are called:
         *    - BEFORE asking for a transport
         *    - AFTER param serialization (s.data is a string if s.processData is true)
         * 3) key is the dataType
         * 4) the catchall symbol "*" can be used
         * 5) execution will start with transport dataType and THEN continue down to "*" if needed
         */
        prefilters = {},

        /* Transports bindings
         * 1) key is the dataType
         * 2) the catchall symbol "*" can be used
         * 3) selection will start with transport dataType and THEN go to "*" if needed
         */
        transports = {},

        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*"),

        // Document location
        ajaxLocation = location.href,

        // Segment location into parts
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {

            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

            if (jQuery.isFunction(func)) {

                // For each dataType in the dataTypeExpression
                while ((dataType = dataTypes[i++])) {

                    // Prepend if requested
                    if (dataType.charAt(0) === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);

                        // Otherwise append
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }

// Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

        var inspected = {},
            seekingTransport = (structure === transports);

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
    function ajaxExtend(target, src) {
        var deep, key,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }

        return target;
    }

    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses(s, jqXHR, responses) {
        var firstDataType, ct, finalDataType, type,
            contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }

        // Check if we're dealing with a known content-type
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {

            // Try convertible dataTypes
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }

            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }

    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev,
            converters = {},

            // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while (current) {

            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }

            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }

            prev = current;
            current = dataTypes.shift();

            if (current) {

                // There's only work to do if current dataType is non-auto
                if (current === "*") {

                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== "*" && prev !== current) {

                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];

                    // If none found, seek a pair
                    if (!conv) {
                        for (conv2 in converters) {

                            // If conv2 outputs current
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {

                                // If prev can be converted to accepted input
                                conv = converters[prev + " " + tmp[0]] ||
                                    converters["* " + tmp[0]];
                                if (conv) {

                                    // Condense equivalence converters
                                    if (conv === true) {
                                        conv = converters[conv2];

                                        // Otherwise, insert the intermediate dataType
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if (conv !== true) {

                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s["throws"]) { // jscs:ignore requireDotNotation
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }

        return {state: "success", data: response};
    }

    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
             timeout: 0,
             data: null,
             dataType: null,
             username: null,
             password: null,
             cache: null,
             throws: false,
             traditional: false,
             headers: {},
             */

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": jQuery.parseJSON,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function (target, settings) {
            return settings ?

                // Building a settings object
                ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

                // Extending ajaxSettings
                ajaxExtend(jQuery.ajaxSettings, target);
        },

        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),

        // Main method
        ajax: function (url, options) {

            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var

                // Cross-domain detection vars
                parts,

                // Loop variable
                i,

                // URL without anti-cache param
                cacheURL,

                // Response headers as string
                responseHeadersString,

                // timeout handle
                timeoutTimer,

                // To know if global events are to be dispatched
                fireGlobals,

                transport,

                // Response headers
                responseHeaders,

                // Create the final options object
                s = jQuery.ajaxSetup({}, options),

                // Callbacks context
                callbackContext = s.context || s,

                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context &&
                (callbackContext.nodeType || callbackContext.jquery) ?
                    jQuery(callbackContext) :
                    jQuery.event,

                // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),

                // Status-dependent callbacks
                statusCode = s.statusCode || {},

                // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},

                // The jqXHR state
                state = 0,

                // Default abort message
                strAbort = "canceled",

                // Fake xhr
                jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function (key) {
                        var match;
                        if (state === 2) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while ((match = rheaders.exec(responseHeadersString))) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    },

                    // Raw string
                    getAllResponseHeaders: function () {
                        return state === 2 ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function (name, value) {
                        var lname = name.toLowerCase();
                        if (!state) {
                            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function (type) {
                        if (!state) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function (map) {
                        var code;
                        if (map) {
                            if (state < 2) {
                                for (code in map) {

                                    // Lazy-add the new callback in a way that preserves old ones
                                    statusCode[code] = [statusCode[code], map[code]];
                                }
                            } else {

                                // Execute the appropriate callbacks
                                jqXHR.always(map[jqXHR.status]);
                            }
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function (statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };

            // Attach deferreds
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;

            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || ajaxLocation) + "")
                .replace(rhash, "")
                .replace(rprotocol, ajaxLocParts[1] + "//");

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts &&
                    (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] ||
                        (parts[3] || (parts[1] === "http:" ? "80" : "443")) !==
                        (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
                );
            }

            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }

            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

            // If request was aborted inside a prefilter, stop there
            if (state === 2) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;

            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            cacheURL = s.url;

            // More options handling for requests with no content
            if (!s.hasContent) {

                // If data is available, append data to url
                if (s.data) {
                    cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);

                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add anti-cache in url if needed
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ?

                        // If there is already a '_' parameter, set its value
                        cacheURL.replace(rts, "$1_=" + nonce++) :

                        // Otherwise add one to the end
                        cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }

            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                    s.accepts[s.dataTypes[0]] +
                    (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                    s.accepts["*"]
            );

            // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }

            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend &&
                (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {

                // Abort if not done already and return
                return jqXHR.abort();
            }

            // aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            for (i in {success: 1, error: 1, complete: 1}) {
                jqXHR[i](s[i]);
            }

            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

            // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                }

                // If request was aborted inside ajaxSend, stop there
                if (state === 2) {
                    return jqXHR;
                }

                // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function () {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }

                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {

                    // Propagate exception as error if not done
                    if (state < 2) {
                        done(-1, e);

                        // Simply rethrow otherwise
                    } else {
                        throw e;
                    }
                }
            }

            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                // Called once
                if (state === 2) {
                    return;
                }

                // State is "done" now
                state = 2;

                // Clear timeout if it exists
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);

                // If successful, handle type chaining
                if (isSuccess) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }

                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";

                        // if not modified
                    } else if (status === 304) {
                        statusText = "notmodified";

                        // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {

                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";

                // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }

                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;

                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
                        [jqXHR, s, isSuccess ? success : error]);
                }

                // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

                    // Handle the global AJAX counter
                    if (!(--jQuery.active)) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }

            return jqXHR;
        },

        getJSON: function (url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },

        getScript: function (url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });

    jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {

            // shift arguments if data argument was omitted
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });


    jQuery._evalUrl = function (url) {
        return jQuery.ajax({
            url: url,

            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        });
    };


    jQuery.fn.extend({
        wrapAll: function (html) {
            if (jQuery.isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }

            if (this[0]) {

                // The elements to wrap the target around
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }

                wrap.map(function () {
                    var elem = this;

                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }

                    return elem;
                }).append(this);
            }

            return this;
        },

        wrapInner: function (html) {
            if (jQuery.isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }

            return this.each(function () {
                var self = jQuery(this),
                    contents = self.contents();

                if (contents.length) {
                    contents.wrapAll(html);

                } else {
                    self.append(html);
                }
            });
        },

        wrap: function (html) {
            var isFunction = jQuery.isFunction(html);

            return this.each(function (i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },

        unwrap: function () {
            return this.parent().each(function () {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });


    function getDisplay(elem) {
        return elem.style && elem.style.display || jQuery.css(elem, "display");
    }

    function filterHidden(elem) {

        // Disconnected elements are considered hidden
        if (!jQuery.contains(elem.ownerDocument || document, elem)) {
            return true;
        }
        while (elem && elem.nodeType === 1) {
            if (getDisplay(elem) === "none" || elem.type === "hidden") {
                return true;
            }
            elem = elem.parentNode;
        }
        return false;
    }

    jQuery.expr.filters.hidden = function (elem) {

        // Support: Opera <= 12.12
        // Opera reports offsetWidths and offsetHeights less than zero on some elements
        return support.reliableHiddenOffsets() ?
            (elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length) :
            filterHidden(elem);
    };

    jQuery.expr.filters.visible = function (elem) {
        return !jQuery.expr.filters.hidden(elem);
    };


    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;

        if (jQuery.isArray(obj)) {

            // Serialize array item.
            jQuery.each(obj, function (i, v) {
                if (traditional || rbracket.test(prefix)) {

                    // Treat each array item as a scalar.
                    add(prefix, v);

                } else {

                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(
                        prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                        v,
                        traditional,
                        add
                    );
                }
            });

        } else if (!traditional && jQuery.type(obj) === "object") {

            // Serialize object item.
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }

        } else {

            // Serialize scalar item.
            add(prefix, obj);
        }
    }

// Serialize an array of form elements or a set of
// key/values into a query string
    jQuery.param = function (a, traditional) {
        var prefix,
            s = [],
            add = function (key, value) {

                // If value is a function, invoke it and return its value
                value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            };

        // Set traditional to true for jQuery <= 1.3.2 behavior.
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }

        // If an array was passed in, assume that it is an array of form elements.
        if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

            // Serialize the form elements
            jQuery.each(a, function () {
                add(this.name, this.value);
            });

        } else {

            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }

        // Return the resulting serialization
        return s.join("&").replace(r20, "+");
    };

    jQuery.fn.extend({
        serialize: function () {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {

                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            })
                .filter(function () {
                    var type = this.type;

                    // Use .is(":disabled") so that fieldset[disabled] works
                    return this.name && !jQuery(this).is(":disabled") &&
                        rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                        (this.checked || !rcheckableType.test(type));
                })
                .map(function (i, elem) {
                    var val = jQuery(this).val();

                    return val == null ?
                        null :
                        jQuery.isArray(val) ?
                            jQuery.map(val, function (val) {
                                return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                            }) :
                            {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                }).get();
        }
    });


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
    jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

        // Support: IE6-IE8
        function () {

            // XHR cannot access local files, always use ActiveX for that case
            if (this.isLocal) {
                return createActiveXHR();
            }

            // Support: IE 9-11
            // IE seems to error on cross-domain PATCH requests when ActiveX XHR
            // is used. In IE 9+ always use the native XHR.
            // Note: this condition won't catch Edge as it doesn't define
            // document.documentMode but it also doesn't support ActiveX so it won't
            // reach this code.
            if (document.documentMode > 8) {
                return createStandardXHR();
            }

            // Support: IE<9
            // oldIE XHR does not support non-RFC2616 methods (#13240)
            // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
            // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
            // Although this check for six methods instead of eight
            // since IE also does not support "trace" and "connect"
            return /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                createStandardXHR() || createActiveXHR();
        } :

        // For all other browsers, use the standard XMLHttpRequest object
        createStandardXHR;

    var xhrId = 0,
        xhrCallbacks = {},
        xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
    if (window.attachEvent) {
        window.attachEvent("onunload", function () {
            for (var key in xhrCallbacks) {
                xhrCallbacks[key](undefined, true);
            }
        });
    }

// Determine support properties
    support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
    if (xhrSupported) {

        jQuery.ajaxTransport(function (options) {

            // Cross domain only allowed if supported through XMLHttpRequest
            if (!options.crossDomain || support.cors) {

                var callback;

                return {
                    send: function (headers, complete) {
                        var i,
                            xhr = options.xhr(),
                            id = ++xhrId;

                        // Open the socket
                        xhr.open(
                            options.type,
                            options.url,
                            options.async,
                            options.username,
                            options.password
                        );

                        // Apply custom fields if provided
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i];
                            }
                        }

                        // Override mime type if needed
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType);
                        }

                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }

                        // Set headers
                        for (i in headers) {

                            // Support: IE<9
                            // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
                            // request header to a null-value.
                            //
                            // To keep consistent with other XHR implementations, cast the value
                            // to string and ignore `undefined`.
                            if (headers[i] !== undefined) {
                                xhr.setRequestHeader(i, headers[i] + "");
                            }
                        }

                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        xhr.send((options.hasContent && options.data) || null);

                        // Listener
                        callback = function (_, isAbort) {
                            var status, statusText, responses;

                            // Was never called and is aborted or complete
                            if (callback && (isAbort || xhr.readyState === 4)) {

                                // Clean up
                                delete xhrCallbacks[id];
                                callback = undefined;
                                xhr.onreadystatechange = jQuery.noop;

                                // Abort manually if needed
                                if (isAbort) {
                                    if (xhr.readyState !== 4) {
                                        xhr.abort();
                                    }
                                } else {
                                    responses = {};
                                    status = xhr.status;

                                    // Support: IE<10
                                    // Accessing binary-data responseText throws an exception
                                    // (#11426)
                                    if (typeof xhr.responseText === "string") {
                                        responses.text = xhr.responseText;
                                    }

                                    // Firefox throws an exception when accessing
                                    // statusText for faulty cross-domain requests
                                    try {
                                        statusText = xhr.statusText;
                                    } catch (e) {

                                        // We normalize with Webkit giving an empty statusText
                                        statusText = "";
                                    }

                                    // Filter status for non standard behaviors

                                    // If the request is local and we have data: assume a success
                                    // (success with no data won't get notified, that's the best we
                                    // can do given current implementations)
                                    if (!status && options.isLocal && !options.crossDomain) {
                                        status = responses.text ? 200 : 404;

                                        // IE - #1450: sometimes returns 1223 when it should be 204
                                    } else if (status === 1223) {
                                        status = 204;
                                    }
                                }
                            }

                            // Call complete if needed
                            if (responses) {
                                complete(status, statusText, responses, xhr.getAllResponseHeaders());
                            }
                        };

                        // Do send the request
                        // `xhr.send` may raise an exception, but it will be
                        // handled in jQuery.ajax (so no try/catch here)
                        if (!options.async) {

                            // If we're in sync mode we fire the callback
                            callback();
                        } else if (xhr.readyState === 4) {

                            // (IE6 & IE7) if it's in cache and has been
                            // retrieved directly we need to fire the callback
                            window.setTimeout(callback);
                        } else {

                            // Register the callback, but delay it in case `xhr.send` throws
                            // Add to the list of active xhr callbacks
                            xhr.onreadystatechange = xhrCallbacks[id] = callback;
                        }
                    },

                    abort: function () {
                        if (callback) {
                            callback(undefined, true);
                        }
                    }
                };
            }
        });
    }

// Functions to create xhrs
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {
        }
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
        }
    }


// Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " +
                "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });

// Handle cache's special case and global
    jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
        }
    });

// Bind script tag hack transport
    jQuery.ajaxTransport("script", function (s) {

        // This transport only deals with cross domain requests
        if (s.crossDomain) {

            var script,
                head = document.head || jQuery("head")[0] || document.documentElement;

            return {

                send: function (_, callback) {

                    script = document.createElement("script");

                    script.async = true;

                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                    }

                    script.src = s.url;

                    // Attach handlers for all browsers
                    script.onload = script.onreadystatechange = function (_, isAbort) {

                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

                            // Handle memory leak in IE
                            script.onload = script.onreadystatechange = null;

                            // Remove the script
                            if (script.parentNode) {
                                script.parentNode.removeChild(script);
                            }

                            // Dereference the script
                            script = null;

                            // Callback if not abort
                            if (!isAbort) {
                                callback(200, "success");
                            }
                        }
                    };

                    // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    head.insertBefore(script, head.firstChild);
                },

                abort: function () {
                    if (script) {
                        script.onload(undefined, true);
                    }
                }
            };
        }
    });


    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
            this[callback] = true;
            return callback;
        }
    });

// Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
                    "url" :
                    typeof s.data === "string" &&
                    (s.contentType || "")
                        .indexOf("application/x-www-form-urlencoded") === 0 &&
                    rjsonp.test(s.data) && "data"
            );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
                s.jsonpCallback() :
                s.jsonpCallback;

            // Insert callback into url or form data
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function () {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };

            // force json dataType
            s.dataTypes[0] = "json";

            // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function () {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function () {

                // If previous value didn't exist - remove it
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName);

                    // Otherwise restore preexisting value
                } else {
                    window[callbackName] = overwritten;
                }

                // Save back as free
                if (s[callbackName]) {

                    // make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // save the callback name for future use
                    oldCallbacks.push(callbackName);
                }

                // Call if it was a function and we have a response
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });


// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function (data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;

        var parsed = rsingleTag.exec(data),
            scripts = !keepScripts && [];

        // Single tag
        if (parsed) {
            return [context.createElement(parsed[1])];
        }

        parsed = buildFragment([data], context, scripts);

        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }

        return jQuery.merge([], parsed.childNodes);
    };


// Keep a copy of the old load method
    var _load = jQuery.fn.load;

    /**
     * Load a url into a page
     */
    jQuery.fn.load = function (url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }

        var selector, type, response,
            self = this,
            off = url.indexOf(" ");

        if (off > -1) {
            selector = jQuery.trim(url.slice(off, url.length));
            url = url.slice(0, off);
        }

        // If it's a function
        if (jQuery.isFunction(params)) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

            // Otherwise, build a param string
        } else if (params && typeof params === "object") {
            type = "POST";
        }

        // If we have elements to modify, make the request
        if (self.length > 0) {
            jQuery.ajax({
                url: url,

                // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function (responseText) {

                // Save response for use in complete callback
                response = arguments;

                self.html(selector ?

                    // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

                    // Otherwise use the full result
                    responseText);

                // If the request succeeds, this function gets "data", "status", "jqXHR"
                // but they are ignored because response was set above.
                // If it fails, this function gets "jqXHR", "status", "error"
            }).always(callback && function (jqXHR, status) {
                self.each(function () {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                });
            });
        }

        return this;
    };


// Attach a bunch of functions for handling common AJAX events
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function (i, type) {
        jQuery.fn[type] = function (fn) {
            return this.on(type, fn);
        };
    });


    jQuery.expr.filters.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
            return elem === fn.elem;
        }).length;
    };


    /**
     * Gets a window from an element
     */
    function getWindow(elem) {
        return jQuery.isWindow(elem) ?
            elem :
            elem.nodeType === 9 ?
                elem.defaultView || elem.parentWindow :
                false;
    }

    jQuery.offset = {
        setOffset: function (elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css(elem, "position"),
                curElem = jQuery(elem),
                props = {};

            // set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }

            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") &&
                jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;

            // need to be able to calculate position if either top or left
            // is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }

            if (jQuery.isFunction(options)) {

                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call(elem, i, jQuery.extend({}, curOffset));
            }

            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop;
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft;
            }

            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };

    jQuery.fn.extend({
        offset: function (options) {
            if (arguments.length) {
                return options === undefined ?
                    this :
                    this.each(function (i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
            }

            var docElem, win,
                box = {top: 0, left: 0},
                elem = this[0],
                doc = elem && elem.ownerDocument;

            if (!doc) {
                return;
            }

            docElem = doc.documentElement;

            // Make sure it's not a disconnected DOM node
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }

            // If we don't have gBCR, just use 0,0 rather than error
            // BlackBerry 5, iOS 3 (original iPhone)
            if (typeof elem.getBoundingClientRect !== "undefined") {
                box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
                top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
            };
        },

        position: function () {
            if (!this[0]) {
                return;
            }

            var offsetParent, offset,
                parentOffset = {top: 0, left: 0},
                elem = this[0];

            // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
            // because it is its only offset parent
            if (jQuery.css(elem, "position") === "fixed") {

                // we assume that getBoundingClientRect is available when computed position is fixed
                offset = elem.getBoundingClientRect();
            } else {

                // Get *real* offsetParent
                offsetParent = this.offsetParent();

                // Get correct offsets
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }

                // Add offsetParent borders
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }

            // Subtract parent offsets and element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },

        offsetParent: function () {
            return this.map(function () {
                var offsetParent = this.offsetParent;

                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") &&
                    jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || documentElement;
            });
        }
    });

// Create scrollLeft and scrollTop methods
    jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (method, prop) {
        var top = /Y/.test(prop);

        jQuery.fn[method] = function (val) {
            return access(this, function (elem, method, val) {
                var win = getWindow(elem);

                if (val === undefined) {
                    return win ? (prop in win) ? win[prop] :
                        win.document.documentElement[method] :
                        elem[method];
                }

                if (win) {
                    win.scrollTo(
                        !top ? val : jQuery(win).scrollLeft(),
                        top ? val : jQuery(win).scrollTop()
                    );

                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
    jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
            function (elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);

                    // if curCSS returns percentage, fallback to offset
                    return rnumnonpx.test(computed) ?
                        jQuery(elem).position()[prop] + "px" :
                        computed;
                }
            }
        );
    });


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({Height: "height", Width: "width"}, function (name, type) {
        jQuery.each({padding: "inner" + name, content: type, "": "outer" + name},
            function (defaultExtra, funcName) {

                // margin is only for outerHeight, outerWidth
                jQuery.fn[funcName] = function (margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                        extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

                    return access(this, function (elem, type, value) {
                        var doc;

                        if (jQuery.isWindow(elem)) {

                            // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                            // isn't a whole lot we can do. See pull request at this URL for discussion:
                            // https://github.com/jquery/jquery/pull/764
                            return elem.document.documentElement["client" + name];
                        }

                        // Get document width or height
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;

                            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                            // whichever is greatest
                            // unfortunately, this causes bug #3838 in IE6/8 only,
                            // but there is currently no good, small way to fix it.
                            return Math.max(
                                elem.body["scroll" + name], doc["scroll" + name],
                                elem.body["offset" + name], doc["offset" + name],
                                doc["client" + name]
                            );
                        }

                        return value === undefined ?

                            // Get width or height on the element, requesting but not forcing parseFloat
                            jQuery.css(elem, type, extra) :

                            // Set width or height on the element
                            jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable, null);
                };
            });
    });


    jQuery.fn.extend({

        bind: function (types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function (types, fn) {
            return this.off(types, null, fn);
        },

        delegate: function (selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function (selector, types, fn) {

            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ?
                this.off(selector, "**") :
                this.off(types, selector || "**", fn);
        }
    });

// The number of elements contained in the matched element set
    jQuery.fn.size = function () {
        return this.length;
    };

    jQuery.fn.andSelf = jQuery.fn.addBack;


    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.

    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return jQuery;
        });
    }

    /*
         var

         // Map over jQuery in case of overwrite
         _jQuery = window.jQuery,

         // Map over the $ in case of overwrite
         _$ = window.$;

         jQuery.noConflict = function (deep) {
         if (window.$ === jQuery) {
         window.$ = _$;
         }

         if (deep && window.jQuery === jQuery) {
         window.jQuery = _jQuery;
         }

         return jQuery;
         };

         // Expose jQuery and $ identifiers, even in
         // AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
         // and CommonJS for browser emulators (#13566)
         if (!noGlobal) {
         window.jQuery = window.$ = jQuery;
         }
         */

    return jQuery;
}));

/*! jQuery UI - v1.12.1 - 2017-10-03
* http://jqueryui.com
* Includes: widget.js, data.js, scroll-parent.js, widgets/draggable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.ui = $.ui || {};

var version = $.ui.version = "1.12.1";


/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/



var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

var widget = $.widget;


/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/


var data = $.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo( function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		} ) :

		// Support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		}
} );

/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/



var scrollParent = $.fn.scrollParent = function( includeHidden ) {
	var position = this.css( "position" ),
		excludeStaticParent = position === "absolute",
		overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
		scrollParent = this.parents().filter( function() {
			var parent = $( this );
			if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
				return false;
			}
			return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
				parent.css( "overflow-x" ) );
		} ).eq( 0 );

	return position === "fixed" || !scrollParent.length ?
		$( this[ 0 ].ownerDocument || document ) :
		scrollParent;
};




// This file is deprecated
var ie = $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/



var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

var widgetsMouse = $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );




// $.ui.plugin is deprecated. Use $.widget() extensions instead.
var plugin = $.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
				instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};



var safeActiveElement = $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};



var safeBlur = $.ui.safeBlur = function( element ) {

	// Support: IE9 - 10 only
	// If the <body> is blurred, IE will switch windows, see #9420
	if ( element && element.nodeName.toLowerCase() !== "body" ) {
		$( element ).trigger( "blur" );
	}
};


/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css



$.widget( "ui.draggable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// Callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if ( this.options.addClasses ) {
			this._addClass( "ui-draggable" );
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var o = this.options;

		// Among others, prevent a drag on a resizable-handle
		if ( this.helper || o.disabled ||
				$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle( event );
		if ( !this.handle ) {
			return false;
		}

		this._blurActiveElement( event );

		this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

		return true;

	},

	_blockFrames: function( selector ) {
		this.iframeBlocks = this.document.find( selector ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( "position", "absolute" )
				.appendTo( iframe.parent() )
				.outerWidth( iframe.outerWidth() )
				.outerHeight( iframe.outerHeight() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: function( event ) {
		var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
			target = $( event.target );

		// Don't blur if the event occurred on an element that is within
		// the currently focused element
		// See #10527, #12472
		if ( target.closest( activeElement ).length ) {
			return;
		}

		// Blur any element that currently has focus, see #4261
		$.ui.safeBlur( activeElement );
	},

	_mouseStart: function( event ) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper( event );

		this._addClass( this.helper, "ui-draggable-dragging" );

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent( true );
		this.offsetParent = this.helper.offsetParent();
		this.hasFixedAncestor = this.helper.parents().filter( function() {
				return $( this ).css( "position" ) === "fixed";
			} ).length > 0;

		//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if ( this._trigger( "start", event ) === false ) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ( $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( this, event );
		}

		// Execute the drag once - this causes the helper not to be visible before getting its
		// correct position
		this._mouseDrag( event, true );

		// If the ddmanager is used for droppables, inform the manager that dragging has started
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart( this, event );
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function( event, noPropagation ) {

		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo( "absolute" );

		//Call plugins and callbacks and use the resulting position if something is returned
		if ( !noPropagation ) {
			var ui = this._uiHash();
			if ( this._trigger( "drag", event, ui ) === false ) {
				this._mouseUp( new $.Event( "mouseup", event ) );
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.drag( this, event );
		}

		return false;
	},

	_mouseStop: function( event ) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
			dropped = $.ui.ddmanager.drop( this, event );
		}

		//if a drop comes from outside (a sortable)
		if ( this.dropped ) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ( ( this.options.revert === "invalid" && !dropped ) ||
				( this.options.revert === "valid" && dropped ) ||
				this.options.revert === true || ( $.isFunction( this.options.revert ) &&
				this.options.revert.call( this.element, dropped ) )
		) {
			$( this.helper ).animate(
				this.originalPosition,
				parseInt( this.options.revertDuration, 10 ),
				function() {
					if ( that._trigger( "stop", event ) !== false ) {
						that._clear();
					}
				}
			);
		} else {
			if ( this._trigger( "stop", event ) !== false ) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		// If the ddmanager is used for droppables, inform the manager that dragging has stopped
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop( this, event );
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {

			// The interaction is over; whether or not the click resulted in a drag,
			// focus the element
			this.element.trigger( "focus" );
		}

		return $.ui.mouse.prototype._mouseUp.call( this, event );
	},

	cancel: function() {

		if ( this.helper.is( ".ui-draggable-dragging" ) ) {
			this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function( event ) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this._addClass( this.handleElement, "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this._removeClass( this.handleElement, "ui-draggable-handle" );
	},

	_createHelper: function( event ) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if ( !helper.parents( "body" ).length ) {
			helper.appendTo( ( o.appendTo === "parent" ?
				this.element[ 0 ].parentNode :
				o.appendTo ) );
		}

		// Http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create
		if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
			this._setPositionRelative();
		}

		if ( helper[ 0 ] !== this.element[ 0 ] &&
				!( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
			helper.css( "position", "absolute" );
		}

		return helper;

	},

	_setPositionRelative: function() {
		if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
			this.element[ 0 ].style.position = "relative";
		}
	},

	_adjustOffsetFromHelper: function( obj ) {
		if ( typeof obj === "string" ) {
			obj = obj.split( " " );
		}
		if ( $.isArray( obj ) ) {
			obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
		}
		if ( "left" in obj ) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ( "right" in obj ) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ( "top" in obj ) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ( "bottom" in obj ) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: function( element ) {
		return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset(),
			document = this.document[ 0 ];

		// This is a special case where we need to modify a offset calculated on start, since the
		// following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the
		// next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
		// the document, which means that the scroll is included in the initial calculation of the
		// offset of the parent, and never recalculated upon drag
		if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
			left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
		};

	},

	_getRelativeOffset: function() {
		if ( this.cssPosition !== "relative" ) {
			return { top: 0, left: 0 };
		}

		var p = this.element.position(),
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
			left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
		};

	},

	_cacheMargins: function() {
		this.margins = {
			left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
			top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
			right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
			bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var isUserScrollable, c, ce,
			o = this.options,
			document = this.document[ 0 ];

		this.relativeContainer = null;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() -
					this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() +
					( $( window ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document" ) {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if ( !ce ) {
			return;
		}

		isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
			( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
				( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right,
			( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
				( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
				this.helperProportions.height -
				this.margins.top -
				this.margins.bottom
		];
		this.relativeContainer = c;
	},

	_convertPositionTo: function( d, pos ) {

		if ( !pos ) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: (

				// The absolute mouse position
				pos.top	+

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top * mod -
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
			),
			left: (

				// The absolute mouse position
				pos.left +

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left * mod	-
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
			)
		};

	},

	_generatePosition: function( event, constrainPosition ) {

		var containment, co, top, left,
			o = this.options,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
			pageX = event.pageX,
			pageY = event.pageY;

		// Cache the scroll
		if ( !scrollIsRootNode || !this.offset.scroll ) {
			this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( constrainPosition ) {
			if ( this.containment ) {
				if ( this.relativeContainer ) {
					co = this.relativeContainer.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				} else {
					containment = this.containment;
				}

				if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
					pageX = containment[ 0 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
					pageY = containment[ 1 ] + this.offset.click.top;
				}
				if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
					pageX = containment[ 2 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
					pageY = containment[ 3 ] + this.offset.click.top;
				}
			}

			if ( o.grid ) {

				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
				// argument errors in IE (see ticket #6950)
				top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
					this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
				pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
					top - this.offset.click.top > containment[ 3 ] ) ?
						top :
						( ( top - this.offset.click.top >= containment[ 1 ] ) ?
							top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

				left = o.grid[ 0 ] ? this.originalPageX +
					Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
					this.originalPageX;
				pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
					left - this.offset.click.left > containment[ 2 ] ) ?
						left :
						( ( left - this.offset.click.left >= containment[ 0 ] ) ?
							left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
			}

			if ( o.axis === "y" ) {
				pageX = this.originalPageX;
			}

			if ( o.axis === "x" ) {
				pageY = this.originalPageY;
			}
		}

		return {
			top: (

				// The absolute mouse position
				pageY -

				// Click offset (relative to the element)
				this.offset.click.top -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
			),
			left: (

				// The absolute mouse position
				pageX -

				// Click offset (relative to the element)
				this.offset.click.left -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
			)
		};

	},

	_clear: function() {
		this._removeClass( this.helper, "ui-draggable-dragging" );
		if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
		if ( this.destroyOnClear ) {
			this.destroy();
		}
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function( type, event, ui ) {
		ui = ui || this._uiHash();
		$.ui.plugin.call( this, type, [ event, ui, this ], true );

		// Absolute position and offset (see #6884 ) have to be recalculated after plugins
		if ( /^(drag|start|stop)/.test( type ) ) {
			this.positionAbs = this._convertPositionTo( "absolute" );
			ui.offset = this.positionAbs;
		}
		return $.Widget.prototype._trigger.call( this, type, event, ui );
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.sortables = [];
		$( draggable.options.connectToSortable ).each( function() {
			var sortable = $( this ).sortable( "instance" );

			if ( sortable && !sortable.options.disabled ) {
				draggable.sortables.push( sortable );

				// RefreshPositions is called at drag start to refresh the containerCache
				// which is used in drag. This ensures it's initialized and synchronized
				// with any changes that might have happened on the page since initialization.
				sortable.refreshPositions();
				sortable._trigger( "activate", event, uiSortable );
			}
		} );
	},
	stop: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.cancelHelperRemoval = false;

		$.each( draggable.sortables, function() {
			var sortable = this;

			if ( sortable.isOver ) {
				sortable.isOver = 0;

				// Allow this sortable to handle removing the helper
				draggable.cancelHelperRemoval = true;
				sortable.cancelHelperRemoval = false;

				// Use _storedCSS To restore properties in the sortable,
				// as this also handles revert (#9675) since the draggable
				// may have modified them in unexpected ways (#8809)
				sortable._storedCSS = {
					position: sortable.placeholder.css( "position" ),
					top: sortable.placeholder.css( "top" ),
					left: sortable.placeholder.css( "left" )
				};

				sortable._mouseStop( event );

				// Once drag has ended, the sortable should return to using
				// its original helper, not the shared helper from draggable
				sortable.options.helper = sortable.options._helper;
			} else {

				// Prevent this Sortable from removing the helper.
				// However, don't set the draggable to remove the helper
				// either as another connected Sortable may yet handle the removal.
				sortable.cancelHelperRemoval = true;

				sortable._trigger( "deactivate", event, uiSortable );
			}
		} );
	},
	drag: function( event, ui, draggable ) {
		$.each( draggable.sortables, function() {
			var innermostIntersecting = false,
				sortable = this;

			// Copy over variables that sortable's _intersectsWith uses
			sortable.positionAbs = draggable.positionAbs;
			sortable.helperProportions = draggable.helperProportions;
			sortable.offset.click = draggable.offset.click;

			if ( sortable._intersectsWith( sortable.containerCache ) ) {
				innermostIntersecting = true;

				$.each( draggable.sortables, function() {

					// Copy over variables that sortable's _intersectsWith uses
					this.positionAbs = draggable.positionAbs;
					this.helperProportions = draggable.helperProportions;
					this.offset.click = draggable.offset.click;

					if ( this !== sortable &&
							this._intersectsWith( this.containerCache ) &&
							$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
						innermostIntersecting = false;
					}

					return innermostIntersecting;
				} );
			}

			if ( innermostIntersecting ) {

				// If it intersects, we use a little isOver variable and set it once,
				// so that the move-in stuff gets fired only once.
				if ( !sortable.isOver ) {
					sortable.isOver = 1;

					// Store draggable's parent in case we need to reappend to it later.
					draggable._parent = ui.helper.parent();

					sortable.currentItem = ui.helper
						.appendTo( sortable.element )
						.data( "ui-sortable-item", true );

					// Store helper option to later restore it
					sortable.options._helper = sortable.options.helper;

					sortable.options.helper = function() {
						return ui.helper[ 0 ];
					};

					// Fire the start events of the sortable with our passed browser event,
					// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );

					// Hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );

					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {

				// If it doesn't intersect with the sortable, and it intersected before,
				// we fake the drag stop of the sortable, but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,
					// so revert must be temporarily false until after mouseStop is called.
					sortable.options._revert = sortable.options.revert;
					sortable.options.revert = false;

					sortable._trigger( "out", event, sortable._uiHash( sortable ) );
					sortable._mouseStop( event, true );

					// Restore sortable behaviors that were modfied
					// when the draggable entered the sortable area (#9481)
					sortable.options.revert = sortable.options._revert;
					sortable.options.helper = sortable.options._helper;

					if ( sortable.placeholder ) {
						sortable.placeholder.remove();
					}

					// Restore and recalculate the draggable's offset considering the sortable
					// may have modified them in unexpected ways. (#8809, #10669)
					ui.helper.appendTo( draggable._parent );
					draggable._refreshOffsets( event );
					ui.position = draggable._generatePosition( event, true );

					draggable._trigger( "fromSortable", event );

					// Inform draggable that the helper is no longer in a valid drop zone
					draggable.dropped = false;

					// Need to refreshPositions of all sortables just in case removing
					// from one sortable changes the location of other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );
				}
			}
		} );
	}
} );

$.ui.plugin.add( "draggable", "cursor", {
	start: function( event, ui, instance ) {
		var t = $( "body" ),
			o = instance.options;

		if ( t.css( "cursor" ) ) {
			o._cursor = t.css( "cursor" );
		}
		t.css( "cursor", o.cursor );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._cursor ) {
			$( "body" ).css( "cursor", o._cursor );
		}
	}
} );

$.ui.plugin.add( "draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if ( t.css( "opacity" ) ) {
			o._opacity = t.css( "opacity" );
		}
		t.css( "opacity", o.opacity );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._opacity ) {
			$( ui.helper ).css( "opacity", o._opacity );
		}
	}
} );

$.ui.plugin.add( "draggable", "scroll", {
	start: function( event, ui, i ) {
		if ( !i.scrollParentNotHidden ) {
			i.scrollParentNotHidden = i.helper.scrollParent( false );
		}

		if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
				i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
			i.overflowOffset = i.scrollParentNotHidden.offset();
		}
	},
	drag: function( event, ui, i  ) {

		var o = i.options,
			scrolled = false,
			scrollParent = i.scrollParentNotHidden[ 0 ],
			document = i.document[ 0 ];

		if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
			if ( !o.axis || o.axis !== "x" ) {
				if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
						o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
				} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
						o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
				} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if ( !o.axis || o.axis !== "x" ) {
				if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
				} else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() - o.scrollSpeed
					);
				} else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() + o.scrollSpeed
					);
				}
			}

		}

		if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( i, event );
		}

	}
} );

$.ui.plugin.add( "draggable", "snap", {
	start: function( event, ui, i ) {

		var o = i.options;

		i.snapElements = [];

		$( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
			.each( function() {
				var $t = $( this ),
					$o = $t.offset();
				if ( this !== i.element[ 0 ] ) {
					i.snapElements.push( {
						item: this,
						width: $t.outerWidth(), height: $t.outerHeight(),
						top: $o.top, left: $o.left
					} );
				}
			} );

	},
	drag: function( event, ui, inst ) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

			l = inst.snapElements[ i ].left - inst.margins.left;
			r = l + inst.snapElements[ i ].width;
			t = inst.snapElements[ i ].top - inst.margins.top;
			b = t + inst.snapElements[ i ].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
					!$.contains( inst.snapElements[ i ].item.ownerDocument,
					inst.snapElements[ i ].item ) ) {
				if ( inst.snapElements[ i ].snapping ) {
					( inst.options.snap.release &&
						inst.options.snap.release.call(
							inst.element,
							event,
							$.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
						) );
				}
				inst.snapElements[ i ].snapping = false;
				continue;
			}

			if ( o.snapMode !== "inner" ) {
				ts = Math.abs( t - y2 ) <= d;
				bs = Math.abs( b - y1 ) <= d;
				ls = Math.abs( l - x2 ) <= d;
				rs = Math.abs( r - x1 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l - inst.helperProportions.width
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r
					} ).left;
				}
			}

			first = ( ts || bs || ls || rs );

			if ( o.snapMode !== "outer" ) {
				ts = Math.abs( t - y1 ) <= d;
				bs = Math.abs( b - y2 ) <= d;
				ls = Math.abs( l - x1 ) <= d;
				rs = Math.abs( r - x2 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r - inst.helperProportions.width
					} ).left;
				}
			}

			if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
				( inst.options.snap.snap &&
					inst.options.snap.snap.call(
						inst.element,
						event,
						$.extend( inst._uiHash(), {
							snapItem: inst.snapElements[ i ].item
						} ) ) );
			}
			inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

		}

	}
} );

$.ui.plugin.add( "draggable", "stack", {
	start: function( event, ui, instance ) {
		var min,
			o = instance.options,
			group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
				return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
					( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
			} );

		if ( !group.length ) { return; }

		min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
		$( group ).each( function( i ) {
			$( this ).css( "zIndex", min + i );
		} );
		this.css( "zIndex", ( min + group.length ) );
	}
} );

$.ui.plugin.add( "draggable", "zIndex", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;

		if ( t.css( "zIndex" ) ) {
			o._zIndex = t.css( "zIndex" );
		}
		t.css( "zIndex", o.zIndex );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;

		if ( o._zIndex ) {
			$( ui.helper ).css( "zIndex", o._zIndex );
		}
	}
} );

var widgetsDraggable = $.ui.draggable;




}));
/**
 * @fileoverview Zlib namespace. Zlib の仕様に準拠した圧縮は Zlib.Deflate で実装
 * されている. これは Inflate との共存を考慮している為.
 */

var USE_TYPEDARRAY = true;

var Zlib = {
  Huffman: {},
  Util: {},
  CRC32: {}
};


/**
 * Compression Method
 * @enum {number}
 */
Zlib.CompressionMethod = {
  DEFLATE: 8,
  RESERVED: 15
};




/**
 * @param {Object=} opt_params options.
 * @constructor
 */
Zlib.Zip = function(opt_params) {
  opt_params = opt_params || {};
  /** @type {Array.<{
   *   buffer: !(Array.<number>|Uint8Array),
   *   option: Object,
   *   compressed: boolean,
   *   encrypted: boolean,
   *   size: number,
   *   crc32: number
   * }>} */
  this.files = [];
  /** @type {(Array.<number>|Uint8Array)} */
  this.comment = opt_params['comment'];
  /** @type {(Array.<number>|Uint8Array)} */
  this.password;
};


/**
 * @enum {number}
 */
Zlib.Zip.CompressionMethod = {
  STORE: 0,
  DEFLATE: 8
};

/**
 * @enum {number}
 */
Zlib.Zip.OperatingSystem = {
  MSDOS: 0,
  UNIX: 3,
  MACINTOSH: 7
};

/**
 * @enum {number}
 */
Zlib.Zip.Flags = {
  ENCRYPT:    0x0001,
  DESCRIPTOR: 0x0008,
  UTF8:       0x0800
};

/**
 * @type {Array.<number>}
 * @const
 */
Zlib.Zip.FileHeaderSignature = [0x50, 0x4b, 0x01, 0x02];

/**
 * @type {Array.<number>}
 * @const
 */
Zlib.Zip.LocalFileHeaderSignature = [0x50, 0x4b, 0x03, 0x04];

/**
 * @type {Array.<number>}
 * @const
 */
Zlib.Zip.CentralDirectorySignature = [0x50, 0x4b, 0x05, 0x06];

/**
 * @param {Array.<number>|Uint8Array} input
 * @param {Object=} opt_params options.
 */
Zlib.Zip.prototype.addFile = function(input, opt_params) {
  opt_params = opt_params || {};
  /** @type {string} */
  var filename = '' || opt_params['filename'];
  /** @type {boolean} */
  var compressed;
  /** @type {number} */
  var size = input.length;
  /** @type {number} */
  var crc32 = 0;

  if (USE_TYPEDARRAY && input instanceof Array) {
    input = new Uint8Array(input);
  }

  // default
  if (typeof opt_params['compressionMethod'] !== 'number') {
    opt_params['compressionMethod'] = Zlib.Zip.CompressionMethod.DEFLATE;
  }

  // その場で圧縮する場合
  if (opt_params['compress']) {
    switch (opt_params['compressionMethod']) {
      case Zlib.Zip.CompressionMethod.STORE:
        break;
      case Zlib.Zip.CompressionMethod.DEFLATE:
        crc32 = Zlib.CRC32.calc(input);
        input = this.deflateWithOption(input, opt_params);
        compressed = true;
        break;
      default:
        throw new Error('unknown compression method:' + opt_params['compressionMethod']);
    }
  }

  this.files.push({
    buffer: input,
    option: opt_params,
    compressed: compressed,
    encrypted: false,
    size: size,
    crc32: crc32
  });
};

/**
 * @param {(Array.<number>|Uint8Array)} password
 */
Zlib.Zip.prototype.setPassword = function(password) {
  this.password = password;
};

Zlib.Zip.prototype.compress = function() {
  /** @type {Array.<{
   *   buffer: !(Array.<number>|Uint8Array),
   *   option: Object,
   *   compressed: boolean,
   *   encrypted: boolean,
   *   size: number,
   *   crc32: number
   * }>} */
  var files = this.files;
  /** @type {{
   *   buffer: !(Array.<number>|Uint8Array),
   *   option: Object,
   *   compressed: boolean,
   *   encrypted: boolean,
   *   size: number,
   *   crc32: number
   * }} */
  var file;
  /** @type {!(Array.<number>|Uint8Array)} */
  var output;
  /** @type {number} */
  var op1;
  /** @type {number} */
  var op2;
  /** @type {number} */
  var op3;
  /** @type {number} */
  var localFileSize = 0;
  /** @type {number} */
  var centralDirectorySize = 0;
  /** @type {number} */
  var endOfCentralDirectorySize;
  /** @type {number} */
  var offset;
  /** @type {number} */
  var needVersion;
  /** @type {number} */
  var flags;
  /** @type {Zlib.Zip.CompressionMethod} */
  var compressionMethod;
  /** @type {Date} */
  var date;
  /** @type {number} */
  var crc32;
  /** @type {number} */
  var size;
  /** @type {number} */
  var plainSize;
  /** @type {number} */
  var filenameLength;
  /** @type {number} */
  var extraFieldLength;
  /** @type {number} */
  var commentLength;
  /** @type {(Array.<number>|Uint8Array)} */
  var filename;
  /** @type {(Array.<number>|Uint8Array)} */
  var extraField;
  /** @type {(Array.<number>|Uint8Array)} */
  var comment;
  /** @type {(Array.<number>|Uint8Array)} */
  var buffer;
  /** @type {*} */
  var tmp;
  /** @type {Array.<number>|Uint32Array|Object} */
  var key;
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;
  /** @type {number} */
  var j;
  /** @type {number} */
  var jl;

  // ファイルの圧縮
  for (i = 0, il = files.length; i < il; ++i) {
    file = files[i];
    filenameLength =
      (file.option['filename']) ? file.option['filename'].length : 0;
    extraFieldLength =
      (file.option['extraField']) ? file.option['extraField'].length : 0;
    commentLength =
      (file.option['comment']) ? file.option['comment'].length : 0;

    // 圧縮されていなかったら圧縮
    if (!file.compressed) {
      // 圧縮前に CRC32 の計算をしておく
      file.crc32 = Zlib.CRC32.calc(file.buffer);

      switch (file.option['compressionMethod']) {
        case Zlib.Zip.CompressionMethod.STORE:
          break;
        case Zlib.Zip.CompressionMethod.DEFLATE:
          file.buffer = this.deflateWithOption(file.buffer, file.option);
          file.compressed = true;
          break;
        default:
          throw new Error('unknown compression method:' + file.option['compressionMethod']);
      }
    }

    // encryption
    if (file.option['password'] !== void 0|| this.password !== void 0) {
      // init encryption
      key = this.createEncryptionKey(file.option['password'] || this.password);

      // add header
      buffer = file.buffer;
      if (USE_TYPEDARRAY) {
        tmp = new Uint8Array(buffer.length + 12);
        tmp.set(buffer, 12);
        buffer = tmp;
      } else {
        buffer.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }

      for (j = 0; j < 12; ++j) {
        buffer[j] = this.encode(
          key,
          i === 11 ? (file.crc32 & 0xff) : (Math.random() * 256 | 0)
        );
      }

      // data encryption
      for (jl = buffer.length; j < jl; ++j) {
        buffer[j] = this.encode(key, buffer[j]);
      }
      file.buffer = buffer;
    }

    // 必要バッファサイズの計算
    localFileSize +=
      // local file header
      30 + filenameLength +
      // file data
      file.buffer.length;

    centralDirectorySize +=
      // file header
      46 + filenameLength + commentLength;
  }

  // end of central directory
  endOfCentralDirectorySize = 22 + (this.comment ? this.comment.length : 0);
  output = new (USE_TYPEDARRAY ? Uint8Array : Array)(
    localFileSize + centralDirectorySize + endOfCentralDirectorySize
  );
  op1 = 0;
  op2 = localFileSize;
  op3 = op2 + centralDirectorySize;

  // ファイルの圧縮
  for (i = 0, il = files.length; i < il; ++i) {
    file = files[i];
    filenameLength =
      file.option['filename'] ? file.option['filename'].length :  0;
    extraFieldLength = 0; // TODO
    commentLength =
      file.option['comment'] ? file.option['comment'].length : 0;

    //-------------------------------------------------------------------------
    // local file header & file header
    //-------------------------------------------------------------------------

    offset = op1;

    // signature
    // local file header
    output[op1++] = Zlib.Zip.LocalFileHeaderSignature[0];
    output[op1++] = Zlib.Zip.LocalFileHeaderSignature[1];
    output[op1++] = Zlib.Zip.LocalFileHeaderSignature[2];
    output[op1++] = Zlib.Zip.LocalFileHeaderSignature[3];
    // file header
    output[op2++] = Zlib.Zip.FileHeaderSignature[0];
    output[op2++] = Zlib.Zip.FileHeaderSignature[1];
    output[op2++] = Zlib.Zip.FileHeaderSignature[2];
    output[op2++] = Zlib.Zip.FileHeaderSignature[3];

    // compressor info
    needVersion = 20;
    output[op2++] = needVersion & 0xff;
    output[op2++] =
      /** @type {Zlib.Zip.OperatingSystem} */
      (file.option['os']) ||
      Zlib.Zip.OperatingSystem.MSDOS;

    // need version
    output[op1++] = output[op2++] =  needVersion       & 0xff;
    output[op1++] = output[op2++] = (needVersion >> 8) & 0xff;

    // general purpose bit flag
    flags = 0;
    if (file.option['password'] || this.password) {
      flags |= Zlib.Zip.Flags.ENCRYPT;
    }
    output[op1++] = output[op2++] =  flags       & 0xff;
    output[op1++] = output[op2++] = (flags >> 8) & 0xff;

    // compression method
    compressionMethod =
      /** @type {Zlib.Zip.CompressionMethod} */
      (file.option['compressionMethod']);
    output[op1++] = output[op2++] =  compressionMethod       & 0xff;
    output[op1++] = output[op2++] = (compressionMethod >> 8) & 0xff;

    // date
    date = /** @type {(Date|undefined)} */(file.option['date']) || new Date();
    output[op1++] = output[op2++] =
      ((date.getMinutes() & 0x7) << 5) |
      (date.getSeconds() / 2 | 0);
    output[op1++] = output[op2++] =
      (date.getHours()   << 3) |
      (date.getMinutes() >> 3);
    //
    output[op1++] = output[op2++] =
      ((date.getMonth() + 1 & 0x7) << 5) |
      (date.getDate());
    output[op1++] = output[op2++] =
      ((date.getFullYear() - 1980 & 0x7f) << 1) |
      (date.getMonth() + 1 >> 3);

    // CRC-32
    crc32 = file.crc32;
    output[op1++] = output[op2++] =  crc32        & 0xff;
    output[op1++] = output[op2++] = (crc32 >>  8) & 0xff;
    output[op1++] = output[op2++] = (crc32 >> 16) & 0xff;
    output[op1++] = output[op2++] = (crc32 >> 24) & 0xff;

    // compressed size
    size = file.buffer.length;
    output[op1++] = output[op2++] =  size        & 0xff;
    output[op1++] = output[op2++] = (size >>  8) & 0xff;
    output[op1++] = output[op2++] = (size >> 16) & 0xff;
    output[op1++] = output[op2++] = (size >> 24) & 0xff;

    // uncompressed size
    plainSize = file.size;
    output[op1++] = output[op2++] =  plainSize        & 0xff;
    output[op1++] = output[op2++] = (plainSize >>  8) & 0xff;
    output[op1++] = output[op2++] = (plainSize >> 16) & 0xff;
    output[op1++] = output[op2++] = (plainSize >> 24) & 0xff;

    // filename length
    output[op1++] = output[op2++] =  filenameLength       & 0xff;
    output[op1++] = output[op2++] = (filenameLength >> 8) & 0xff;

    // extra field length
    output[op1++] = output[op2++] =  extraFieldLength       & 0xff;
    output[op1++] = output[op2++] = (extraFieldLength >> 8) & 0xff;

    // file comment length
    output[op2++] =  commentLength       & 0xff;
    output[op2++] = (commentLength >> 8) & 0xff;

    // disk number start
    output[op2++] = 0;
    output[op2++] = 0;

    // internal file attributes
    output[op2++] = 0;
    output[op2++] = 0;

    // external file attributes
    output[op2++] = 0;
    output[op2++] = 0;
    output[op2++] = 0;
    output[op2++] = 0;

    // relative offset of local header
    output[op2++] =  offset        & 0xff;
    output[op2++] = (offset >>  8) & 0xff;
    output[op2++] = (offset >> 16) & 0xff;
    output[op2++] = (offset >> 24) & 0xff;

    // filename
    filename = file.option['filename'];
    if (filename) {
      if (USE_TYPEDARRAY) {
        output.set(filename, op1);
        output.set(filename, op2);
        op1 += filenameLength;
        op2 += filenameLength;
      } else {
        for (j = 0; j < filenameLength; ++j) {
          output[op1++] = output[op2++] = filename[j];
        }
      }
    }

    // extra field
    extraField = file.option['extraField'];
    if (extraField) {
      if (USE_TYPEDARRAY) {
        output.set(extraField, op1);
        output.set(extraField, op2);
        op1 += extraFieldLength;
        op2 += extraFieldLength;
      } else {
        for (j = 0; j < commentLength; ++j) {
          output[op1++] = output[op2++] = extraField[j];
        }
      }
    }

    // comment
    comment = file.option['comment'];
    if (comment) {
      if (USE_TYPEDARRAY) {
        output.set(comment, op2);
        op2 += commentLength;
      } else {
        for (j = 0; j < commentLength; ++j) {
          output[op2++] = comment[j];
        }
      }
    }

    //-------------------------------------------------------------------------
    // file data
    //-------------------------------------------------------------------------

    if (USE_TYPEDARRAY) {
      output.set(file.buffer, op1);
      op1 += file.buffer.length;
    } else {
      for (j = 0, jl = file.buffer.length; j < jl; ++j) {
        output[op1++] = file.buffer[j];
      }
    }
  }

  //-------------------------------------------------------------------------
  // end of central directory
  //-------------------------------------------------------------------------

  // signature
  output[op3++] = Zlib.Zip.CentralDirectorySignature[0];
  output[op3++] = Zlib.Zip.CentralDirectorySignature[1];
  output[op3++] = Zlib.Zip.CentralDirectorySignature[2];
  output[op3++] = Zlib.Zip.CentralDirectorySignature[3];

  // number of this disk
  output[op3++] = 0;
  output[op3++] = 0;

  // number of the disk with the start of the central directory
  output[op3++] = 0;
  output[op3++] = 0;

  // total number of entries in the central directory on this disk
  output[op3++] =  il       & 0xff;
  output[op3++] = (il >> 8) & 0xff;

  // total number of entries in the central directory
  output[op3++] =  il       & 0xff;
  output[op3++] = (il >> 8) & 0xff;

  // size of the central directory
  output[op3++] =  centralDirectorySize        & 0xff;
  output[op3++] = (centralDirectorySize >>  8) & 0xff;
  output[op3++] = (centralDirectorySize >> 16) & 0xff;
  output[op3++] = (centralDirectorySize >> 24) & 0xff;

  // offset of start of central directory with respect to the starting disk number
  output[op3++] =  localFileSize        & 0xff;
  output[op3++] = (localFileSize >>  8) & 0xff;
  output[op3++] = (localFileSize >> 16) & 0xff;
  output[op3++] = (localFileSize >> 24) & 0xff;

  // .ZIP file comment length
  commentLength = this.comment ? this.comment.length : 0;
  output[op3++] =  commentLength       & 0xff;
  output[op3++] = (commentLength >> 8) & 0xff;

  // .ZIP file comment
  if (this.comment) {
    if (USE_TYPEDARRAY) {
      output.set(this.comment, op3);
      op3 += commentLength;
    } else {
      for (j = 0, jl = commentLength; j < jl; ++j) {
        output[op3++] = this.comment[j];
      }
    }
  }

  return output;
};

/**
 * @param {!(Array.<number>|Uint8Array)} input
 * @param {Object=} opt_params options.
 * @return {!(Array.<number>|Uint8Array)}
 */
Zlib.Zip.prototype.deflateWithOption = function(input, opt_params) {
  /** @type {Zlib.RawDeflate} */
  var deflator = new Zlib.RawDeflate(input, opt_params['deflateOption']);

  return deflator.compress();
};

/**
 * @param {(Array.<number>|Uint32Array)} key
 * @return {number}
 */
Zlib.Zip.prototype.getByte = function(key) {
  /** @type {number} */
  var tmp = ((key[2] & 0xffff) | 2);

  return ((tmp * (tmp ^ 1)) >> 8) & 0xff;
};

/**
 * @param {(Array.<number>|Uint32Array|Object)} key
 * @param {number} n
 * @return {number}
 */
Zlib.Zip.prototype.encode = function(key, n) {
  /** @type {number} */
  var tmp = this.getByte(/** @type {(Array.<number>|Uint32Array)} */(key));

  this.updateKeys(/** @type {(Array.<number>|Uint32Array)} */(key), n);

  return tmp ^ n;
};

/**
 * @param {(Array.<number>|Uint32Array)} key
 * @param {number} n
 */
Zlib.Zip.prototype.updateKeys = function(key, n) {
  key[0] = Zlib.CRC32.single(key[0], n);
  key[1] =
    (((((key[1] + (key[0] & 0xff)) * 20173 >>> 0) * 6681) >>> 0) + 1) >>> 0;
  key[2] = Zlib.CRC32.single(key[2], key[1] >>> 24);
};

/**
 * @param {(Array.<number>|Uint8Array)} password
 * @return {!(Array.<number>|Uint32Array|Object)}
 */
Zlib.Zip.prototype.createEncryptionKey = function(password) {
  /** @type {!(Array.<number>|Uint32Array)} */
  var key = [305419896, 591751049, 878082192];
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;

  if (USE_TYPEDARRAY) {
    key = new Uint32Array(key);
  }

  for (i = 0, il = password.length; i < il; ++i) {
    this.updateKeys(key, password[i] & 0xff);
  }

  return key;
};



/**
 * build huffman table from length list.
 * @param {!(Array.<number>|Uint8Array)} lengths length list.
 * @return {!Array} huffman table.
 */
Zlib.Huffman.buildHuffmanTable = function(lengths) {
  /** @type {number} length list size. */
  var listSize = lengths.length;
  /** @type {number} max code length for table size. */
  var maxCodeLength = 0;
  /** @type {number} min code length for table size. */
  var minCodeLength = Number.POSITIVE_INFINITY;
  /** @type {number} table size. */
  var size;
  /** @type {!(Array|Uint8Array)} huffman code table. */
  var table;
  /** @type {number} bit length. */
  var bitLength;
  /** @type {number} huffman code. */
  var code;
  /**
   * サイズが 2^maxlength 個のテーブルを埋めるためのスキップ長.
   * @type {number} skip length for table filling.
   */
  var skip;
  /** @type {number} reversed code. */
  var reversed;
  /** @type {number} reverse temp. */
  var rtemp;
  /** @type {number} loop counter. */
  var i;
  /** @type {number} loop limit. */
  var il;
  /** @type {number} loop counter. */
  var j;
  /** @type {number} table value. */
  var value;

  // Math.max は遅いので最長の値は for-loop で取得する
  for (i = 0, il = listSize; i < il; ++i) {
    if (lengths[i] > maxCodeLength) {
      maxCodeLength = lengths[i];
    }
    if (lengths[i] < minCodeLength) {
      minCodeLength = lengths[i];
    }
  }

  size = 1 << maxCodeLength;
  table = new (USE_TYPEDARRAY ? Uint32Array : Array)(size);

  // ビット長の短い順からハフマン符号を割り当てる
  for (bitLength = 1, code = 0, skip = 2; bitLength <= maxCodeLength;) {
    for (i = 0; i < listSize; ++i) {
      if (lengths[i] === bitLength) {
        // ビットオーダーが逆になるためビット長分並びを反転する
        for (reversed = 0, rtemp = code, j = 0; j < bitLength; ++j) {
          reversed = (reversed << 1) | (rtemp & 1);
          rtemp >>= 1;
        }

        // 最大ビット長をもとにテーブルを作るため、
        // 最大ビット長以外では 0 / 1 どちらでも良い箇所ができる
        // そのどちらでも良い場所は同じ値で埋めることで
        // 本来のビット長以上のビット数取得しても問題が起こらないようにする
        value = (bitLength << 16) | i;
        for (j = reversed; j < size; j += skip) {
          table[j] = value;
        }

        ++code;
      }
    }

    // 次のビット長へ
    ++bitLength;
    code <<= 1;
    skip <<= 1;
  }

  return [table, maxCodeLength, minCodeLength];
};




//-----------------------------------------------------------------------------

/** @define {number} buffer block size. */
var ZLIB_RAW_INFLATE_BUFFER_SIZE = 0x8000; // [ 0x8000 >= ZLIB_BUFFER_BLOCK_SIZE ]

//-----------------------------------------------------------------------------


var buildHuffmanTable = Zlib.Huffman.buildHuffmanTable;

/**
 * @constructor
 * @param {!(Uint8Array|Array.<number>)} input input buffer.
 * @param {Object} opt_params option parameter.
 *
 * opt_params は以下のプロパティを指定する事ができます。
 *   - index: input buffer の deflate コンテナの開始位置.
 *   - blockSize: バッファのブロックサイズ.
 *   - bufferType: Zlib.RawInflate.BufferType の値によってバッファの管理方法を指定する.
 *   - resize: 確保したバッファが実際の大きさより大きかった場合に切り詰める.
 */
Zlib.RawInflate = function(input, opt_params) {
  /** @type {!(Array.<number>|Uint8Array)} inflated buffer */
  this.buffer;
  /** @type {!Array.<(Array.<number>|Uint8Array)>} */
  this.blocks = [];
  /** @type {number} block size. */
  this.bufferSize = ZLIB_RAW_INFLATE_BUFFER_SIZE;
  /** @type {!number} total output buffer pointer. */
  this.totalpos = 0;
  /** @type {!number} input buffer pointer. */
  this.ip = 0;
  /** @type {!number} bit stream reader buffer. */
  this.bitsbuf = 0;
  /** @type {!number} bit stream reader buffer size. */
  this.bitsbuflen = 0;
  /** @type {!(Array.<number>|Uint8Array)} input buffer. */
  this.input = USE_TYPEDARRAY ? new Uint8Array(input) : input;
  /** @type {!(Uint8Array|Array.<number>)} output buffer. */
  this.output;
  /** @type {!number} output buffer pointer. */
  this.op;
  /** @type {boolean} is final block flag. */
  this.bfinal = false;
  /** @type {Zlib.RawInflate.BufferType} buffer management. */
  this.bufferType = Zlib.RawInflate.BufferType.ADAPTIVE;
  /** @type {boolean} resize flag for memory size optimization. */
  this.resize = false;

  // option parameters
  if (opt_params || !(opt_params = {})) {
    if (opt_params['index']) {
      this.ip = opt_params['index'];
    }
    if (opt_params['bufferSize']) {
      this.bufferSize = opt_params['bufferSize'];
    }
    if (opt_params['bufferType']) {
      this.bufferType = opt_params['bufferType'];
    }
    if (opt_params['resize']) {
      this.resize = opt_params['resize'];
    }
  }

  // initialize
  switch (this.bufferType) {
    case Zlib.RawInflate.BufferType.BLOCK:
      this.op = Zlib.RawInflate.MaxBackwardLength;
      this.output =
        new (USE_TYPEDARRAY ? Uint8Array : Array)(
          Zlib.RawInflate.MaxBackwardLength +
          this.bufferSize +
          Zlib.RawInflate.MaxCopyLength
        );
      break;
    case Zlib.RawInflate.BufferType.ADAPTIVE:
      this.op = 0;
      this.output = new (USE_TYPEDARRAY ? Uint8Array : Array)(this.bufferSize);
      break;
    default:
      throw new Error('invalid inflate mode');
  }
};

/**
 * @enum {number}
 */
Zlib.RawInflate.BufferType = {
  BLOCK: 0,
  ADAPTIVE: 1
};

/**
 * decompress.
 * @return {!(Uint8Array|Array.<number>)} inflated buffer.
 */
Zlib.RawInflate.prototype.decompress = function() {
  while (!this.bfinal) {
    this.parseBlock();
  }

  switch (this.bufferType) {
    case Zlib.RawInflate.BufferType.BLOCK:
      return this.concatBufferBlock();
    case Zlib.RawInflate.BufferType.ADAPTIVE:
      return this.concatBufferDynamic();
    default:
      throw new Error('invalid inflate mode');
  }
};

/**
 * @const
 * @type {number} max backward length for LZ77.
 */
Zlib.RawInflate.MaxBackwardLength = 32768;

/**
 * @const
 * @type {number} max copy length for LZ77.
 */
Zlib.RawInflate.MaxCopyLength = 258;

/**
 * huffman order
 * @const
 * @type {!(Array.<number>|Uint8Array)}
 */
Zlib.RawInflate.Order = (function(table) {
  return USE_TYPEDARRAY ? new Uint16Array(table) : table;
})([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);

/**
 * huffman length code table.
 * @const
 * @type {!(Array.<number>|Uint16Array)}
 */
Zlib.RawInflate.LengthCodeTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint16Array(table) : table;
})([
  0x0003, 0x0004, 0x0005, 0x0006, 0x0007, 0x0008, 0x0009, 0x000a, 0x000b,
  0x000d, 0x000f, 0x0011, 0x0013, 0x0017, 0x001b, 0x001f, 0x0023, 0x002b,
  0x0033, 0x003b, 0x0043, 0x0053, 0x0063, 0x0073, 0x0083, 0x00a3, 0x00c3,
  0x00e3, 0x0102, 0x0102, 0x0102
]);

/**
 * huffman length extra-bits table.
 * @const
 * @type {!(Array.<number>|Uint8Array)}
 */
Zlib.RawInflate.LengthExtraTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint8Array(table) : table;
})([
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
  5, 5, 0, 0, 0
]);

/**
 * huffman dist code table.
 * @const
 * @type {!(Array.<number>|Uint16Array)}
 */
Zlib.RawInflate.DistCodeTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint16Array(table) : table;
})([
  0x0001, 0x0002, 0x0003, 0x0004, 0x0005, 0x0007, 0x0009, 0x000d, 0x0011,
  0x0019, 0x0021, 0x0031, 0x0041, 0x0061, 0x0081, 0x00c1, 0x0101, 0x0181,
  0x0201, 0x0301, 0x0401, 0x0601, 0x0801, 0x0c01, 0x1001, 0x1801, 0x2001,
  0x3001, 0x4001, 0x6001
]);

/**
 * huffman dist extra-bits table.
 * @const
 * @type {!(Array.<number>|Uint8Array)}
 */
Zlib.RawInflate.DistExtraTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint8Array(table) : table;
})([
  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
  11, 12, 12, 13, 13
]);

/**
 * fixed huffman length code table
 * @const
 * @type {!Array}
 */
Zlib.RawInflate.FixedLiteralLengthTable = (function(table) {
  return table;
})((function() {
  var lengths = new (USE_TYPEDARRAY ? Uint8Array : Array)(288);
  var i, il;

  for (i = 0, il = lengths.length; i < il; ++i) {
    lengths[i] =
      (i <= 143) ? 8 :
      (i <= 255) ? 9 :
      (i <= 279) ? 7 :
      8;
  }

  return buildHuffmanTable(lengths);
})());

/**
 * fixed huffman distance code table
 * @const
 * @type {!Array}
 */
Zlib.RawInflate.FixedDistanceTable = (function(table) {
  return table;
})((function() {
  var lengths = new (USE_TYPEDARRAY ? Uint8Array : Array)(30);
  var i, il;

  for (i = 0, il = lengths.length; i < il; ++i) {
    lengths[i] = 5;
  }

  return buildHuffmanTable(lengths);
})());

/**
 * parse deflated block.
 */
Zlib.RawInflate.prototype.parseBlock = function() {
  /** @type {number} header */
  var hdr = this.readBits(3);

  // BFINAL
  if (hdr & 0x1) {
    this.bfinal = true;
  }

  // BTYPE
  hdr >>>= 1;
  switch (hdr) {
    // uncompressed
    case 0:
      this.parseUncompressedBlock();
      break;
    // fixed huffman
    case 1:
      this.parseFixedHuffmanBlock();
      break;
    // dynamic huffman
    case 2:
      this.parseDynamicHuffmanBlock();
      break;
    // reserved or other
    default:
      throw new Error('unknown BTYPE: ' + hdr);
  }
};

/**
 * read inflate bits
 * @param {number} length bits length.
 * @return {number} read bits.
 */
Zlib.RawInflate.prototype.readBits = function(length) {
  var bitsbuf = this.bitsbuf;
  var bitsbuflen = this.bitsbuflen;
  var input = this.input;
  var ip = this.ip;

  /** @type {number} */
  var inputLength = input.length;
  /** @type {number} input and output byte. */
  var octet;

  // input byte
  if (ip + ((length - bitsbuflen + 7) >> 3) >= inputLength) {
    throw new Error('input buffer is broken');
  }

  // not enough buffer
  while (bitsbuflen < length) {
    bitsbuf |= input[ip++] << bitsbuflen;
    bitsbuflen += 8;
  }

  // output byte
  octet = bitsbuf & /* MASK */ ((1 << length) - 1);
  bitsbuf >>>= length;
  bitsbuflen -= length;

  this.bitsbuf = bitsbuf;
  this.bitsbuflen = bitsbuflen;
  this.ip = ip;

  return octet;
};

/**
 * read huffman code using table
 * @param {!(Array.<number>|Uint8Array|Uint16Array)} table huffman code table.
 * @return {number} huffman code.
 */
Zlib.RawInflate.prototype.readCodeByTable = function(table) {
  var bitsbuf = this.bitsbuf;
  var bitsbuflen = this.bitsbuflen;
  var input = this.input;
  var ip = this.ip;

  /** @type {number} */
  var inputLength = input.length;
  /** @type {!(Array.<number>|Uint8Array)} huffman code table */
  var codeTable = table[0];
  /** @type {number} */
  var maxCodeLength = table[1];
  /** @type {number} code length & code (16bit, 16bit) */
  var codeWithLength;
  /** @type {number} code bits length */
  var codeLength;

  // not enough buffer
  while (bitsbuflen < maxCodeLength) {
    if (ip >= inputLength) {
      break;
    }
    bitsbuf |= input[ip++] << bitsbuflen;
    bitsbuflen += 8;
  }

  // read max length
  codeWithLength = codeTable[bitsbuf & ((1 << maxCodeLength) - 1)];
  codeLength = codeWithLength >>> 16;

  if (codeLength > bitsbuflen) {
    throw new Error('invalid code length: ' + codeLength);
  }

  this.bitsbuf = bitsbuf >> codeLength;
  this.bitsbuflen = bitsbuflen - codeLength;
  this.ip = ip;

  return codeWithLength & 0xffff;
};

/**
 * parse uncompressed block.
 */
Zlib.RawInflate.prototype.parseUncompressedBlock = function() {
  var input = this.input;
  var ip = this.ip;
  var output = this.output;
  var op = this.op;

  /** @type {number} */
  var inputLength = input.length;
  /** @type {number} block length */
  var len;
  /** @type {number} number for check block length */
  var nlen;
  /** @type {number} output buffer length */
  var olength = output.length;
  /** @type {number} copy counter */
  var preCopy;

  // skip buffered header bits
  this.bitsbuf = 0;
  this.bitsbuflen = 0;

  // len
  if (ip + 1 >= inputLength) {
    throw new Error('invalid uncompressed block header: LEN');
  }
  len = input[ip++] | (input[ip++] << 8);

  // nlen
  if (ip + 1 >= inputLength) {
    throw new Error('invalid uncompressed block header: NLEN');
  }
  nlen = input[ip++] | (input[ip++] << 8);

  // check len & nlen
  if (len === ~nlen) {
    throw new Error('invalid uncompressed block header: length verify');
  }

  // check size
  if (ip + len > input.length) { throw new Error('input buffer is broken'); }

  // expand buffer
  switch (this.bufferType) {
    case Zlib.RawInflate.BufferType.BLOCK:
      // pre copy
      while (op + len > output.length) {
        preCopy = olength - op;
        len -= preCopy;
        if (USE_TYPEDARRAY) {
          output.set(input.subarray(ip, ip + preCopy), op);
          op += preCopy;
          ip += preCopy;
        } else {
          while (preCopy--) {
            output[op++] = input[ip++];
          }
        }
        this.op = op;
        output = this.expandBufferBlock();
        op = this.op;
      }
      break;
    case Zlib.RawInflate.BufferType.ADAPTIVE:
      while (op + len > output.length) {
        output = this.expandBufferAdaptive({fixRatio: 2});
      }
      break;
    default:
      throw new Error('invalid inflate mode');
  }

  // copy
  if (USE_TYPEDARRAY) {
    output.set(input.subarray(ip, ip + len), op);
    op += len;
    ip += len;
  } else {
    while (len--) {
      output[op++] = input[ip++];
    }
  }

  this.ip = ip;
  this.op = op;
  this.output = output;
};

/**
 * parse fixed huffman block.
 */
Zlib.RawInflate.prototype.parseFixedHuffmanBlock = function() {
  switch (this.bufferType) {
    case Zlib.RawInflate.BufferType.ADAPTIVE:
      this.decodeHuffmanAdaptive(
        Zlib.RawInflate.FixedLiteralLengthTable,
        Zlib.RawInflate.FixedDistanceTable
      );
      break;
    case Zlib.RawInflate.BufferType.BLOCK:
      this.decodeHuffmanBlock(
        Zlib.RawInflate.FixedLiteralLengthTable,
        Zlib.RawInflate.FixedDistanceTable
      );
      break;
    default:
      throw new Error('invalid inflate mode');
  }
};

/**
 * parse dynamic huffman block.
 */
Zlib.RawInflate.prototype.parseDynamicHuffmanBlock = function() {
  /** @type {number} number of literal and length codes. */
  var hlit = this.readBits(5) + 257;
  /** @type {number} number of distance codes. */
  var hdist = this.readBits(5) + 1;
  /** @type {number} number of code lengths. */
  var hclen = this.readBits(4) + 4;
  /** @type {!(Uint8Array|Array.<number>)} code lengths. */
  var codeLengths =
    new (USE_TYPEDARRAY ? Uint8Array : Array)(Zlib.RawInflate.Order.length);
  /** @type {!Array} code lengths table. */
  var codeLengthsTable;
  /** @type {!(Uint8Array|Array.<number>)} literal and length code table. */
  var litlenTable;
  /** @type {!(Uint8Array|Array.<number>)} distance code table. */
  var distTable;
  /** @type {!(Uint8Array|Array.<number>)} code length table. */
  var lengthTable;
  /** @type {number} */
  var code;
  /** @type {number} */
  var prev;
  /** @type {number} */
  var repeat;
  /** @type {number} loop counter. */
  var i;
  /** @type {number} loop limit. */
  var il;

  // decode code lengths
  for (i = 0; i < hclen; ++i) {
    codeLengths[Zlib.RawInflate.Order[i]] = this.readBits(3);
  }
  if (!USE_TYPEDARRAY) {
    for (i = hclen, hclen = codeLengths.length; i < hclen; ++i) {
      codeLengths[Zlib.RawInflate.Order[i]] = 0;
    }
  }

  // decode length table
  codeLengthsTable = buildHuffmanTable(codeLengths);
  lengthTable = new (USE_TYPEDARRAY ? Uint8Array : Array)(hlit + hdist);
  for (i = 0, il = hlit + hdist; i < il;) {
    code = this.readCodeByTable(codeLengthsTable);
    switch (code) {
      case 16:
        repeat = 3 + this.readBits(2);
        while (repeat--) { lengthTable[i++] = prev; }
        break;
      case 17:
        repeat = 3 + this.readBits(3);
        while (repeat--) { lengthTable[i++] = 0; }
        prev = 0;
        break;
      case 18:
        repeat = 11 + this.readBits(7);
        while (repeat--) { lengthTable[i++] = 0; }
        prev = 0;
        break;
      default:
        lengthTable[i++] = code;
        prev = code;
        break;
    }
  }

  litlenTable = USE_TYPEDARRAY
    ? buildHuffmanTable(lengthTable.subarray(0, hlit))
    : buildHuffmanTable(lengthTable.slice(0, hlit));
  distTable = USE_TYPEDARRAY
    ? buildHuffmanTable(lengthTable.subarray(hlit))
    : buildHuffmanTable(lengthTable.slice(hlit));

  switch (this.bufferType) {
    case Zlib.RawInflate.BufferType.ADAPTIVE:
      this.decodeHuffmanAdaptive(litlenTable, distTable);
      break;
    case Zlib.RawInflate.BufferType.BLOCK:
      this.decodeHuffmanBlock(litlenTable, distTable);
      break;
    default:
      throw new Error('invalid inflate mode');
  }
};

/**
 * decode huffman code
 * @param {!(Array.<number>|Uint16Array)} litlen literal and length code table.
 * @param {!(Array.<number>|Uint8Array)} dist distination code table.
 */
Zlib.RawInflate.prototype.decodeHuffmanBlock = function(litlen, dist) {
  var output = this.output;
  var op = this.op;

  this.currentLitlenTable = litlen;

  /** @type {number} output position limit. */
  var olength = output.length - Zlib.RawInflate.MaxCopyLength;
  /** @type {number} huffman code. */
  var code;
  /** @type {number} table index. */
  var ti;
  /** @type {number} huffman code distination. */
  var codeDist;
  /** @type {number} huffman code length. */
  var codeLength;

  var lengthCodeTable = Zlib.RawInflate.LengthCodeTable;
  var lengthExtraTable = Zlib.RawInflate.LengthExtraTable;
  var distCodeTable = Zlib.RawInflate.DistCodeTable;
  var distExtraTable = Zlib.RawInflate.DistExtraTable;

  while ((code = this.readCodeByTable(litlen)) !== 256) {
    // literal
    if (code < 256) {
      if (op >= olength) {
        this.op = op;
        output = this.expandBufferBlock();
        op = this.op;
      }
      output[op++] = code;

      continue;
    }

    // length code
    ti = code - 257;
    codeLength = lengthCodeTable[ti];
    if (lengthExtraTable[ti] > 0) {
      codeLength += this.readBits(lengthExtraTable[ti]);
    }

    // dist code
    code = this.readCodeByTable(dist);
    codeDist = distCodeTable[code];
    if (distExtraTable[code] > 0) {
      codeDist += this.readBits(distExtraTable[code]);
    }

    // lz77 decode
    if (op >= olength) {
      this.op = op;
      output = this.expandBufferBlock();
      op = this.op;
    }
    while (codeLength--) {
      output[op] = output[(op++) - codeDist];
    }
  }

  while (this.bitsbuflen >= 8) {
    this.bitsbuflen -= 8;
    this.ip--;
  }
  this.op = op;
};

/**
 * decode huffman code (adaptive)
 * @param {!(Array.<number>|Uint16Array)} litlen literal and length code table.
 * @param {!(Array.<number>|Uint8Array)} dist distination code table.
 */
Zlib.RawInflate.prototype.decodeHuffmanAdaptive = function(litlen, dist) {
  var output = this.output;
  var op = this.op;

  this.currentLitlenTable = litlen;

  /** @type {number} output position limit. */
  var olength = output.length;
  /** @type {number} huffman code. */
  var code;
  /** @type {number} table index. */
  var ti;
  /** @type {number} huffman code distination. */
  var codeDist;
  /** @type {number} huffman code length. */
  var codeLength;

  var lengthCodeTable = Zlib.RawInflate.LengthCodeTable;
  var lengthExtraTable = Zlib.RawInflate.LengthExtraTable;
  var distCodeTable = Zlib.RawInflate.DistCodeTable;
  var distExtraTable = Zlib.RawInflate.DistExtraTable;

  while ((code = this.readCodeByTable(litlen)) !== 256) {
    // literal
    if (code < 256) {
      if (op >= olength) {
        output = this.expandBufferAdaptive();
        olength = output.length;
      }
      output[op++] = code;

      continue;
    }

    // length code
    ti = code - 257;
    codeLength = lengthCodeTable[ti];
    if (lengthExtraTable[ti] > 0) {
      codeLength += this.readBits(lengthExtraTable[ti]);
    }

    // dist code
    code = this.readCodeByTable(dist);
    codeDist = distCodeTable[code];
    if (distExtraTable[code] > 0) {
      codeDist += this.readBits(distExtraTable[code]);
    }

    // lz77 decode
    if (op + codeLength > olength) {
      output = this.expandBufferAdaptive();
      olength = output.length;
    }
    while (codeLength--) {
      output[op] = output[(op++) - codeDist];
    }
  }

  while (this.bitsbuflen >= 8) {
    this.bitsbuflen -= 8;
    this.ip--;
  }
  this.op = op;
};

/**
 * expand output buffer.
 * @param {Object=} opt_param option parameters.
 * @return {!(Array.<number>|Uint8Array)} output buffer.
 */
Zlib.RawInflate.prototype.expandBufferBlock = function(opt_param) {
  /** @type {!(Array.<number>|Uint8Array)} store buffer. */
  var buffer =
    new (USE_TYPEDARRAY ? Uint8Array : Array)(
        this.op - Zlib.RawInflate.MaxBackwardLength
    );
  /** @type {number} backward base point */
  var backward = this.op - Zlib.RawInflate.MaxBackwardLength;
  /** @type {number} copy index. */
  var i;
  /** @type {number} copy limit */
  var il;

  var output = this.output;

  // copy to output buffer
  if (USE_TYPEDARRAY) {
    buffer.set(output.subarray(Zlib.RawInflate.MaxBackwardLength, buffer.length));
  } else {
    for (i = 0, il = buffer.length; i < il; ++i) {
      buffer[i] = output[i + Zlib.RawInflate.MaxBackwardLength];
    }
  }

  this.blocks.push(buffer);
  this.totalpos += buffer.length;

  // copy to backward buffer
  if (USE_TYPEDARRAY) {
    output.set(
      output.subarray(backward, backward + Zlib.RawInflate.MaxBackwardLength)
    );
  } else {
    for (i = 0; i < Zlib.RawInflate.MaxBackwardLength; ++i) {
      output[i] = output[backward + i];
    }
  }

  this.op = Zlib.RawInflate.MaxBackwardLength;

  return output;
};

/**
 * expand output buffer. (adaptive)
 * @param {Object=} opt_param option parameters.
 * @return {!(Array.<number>|Uint8Array)} output buffer pointer.
 */
Zlib.RawInflate.prototype.expandBufferAdaptive = function(opt_param) {
  /** @type {!(Array.<number>|Uint8Array)} store buffer. */
  var buffer;
  /** @type {number} expantion ratio. */
  var ratio = (this.input.length / this.ip + 1) | 0;
  /** @type {number} maximum number of huffman code. */
  var maxHuffCode;
  /** @type {number} new output buffer size. */
  var newSize;
  /** @type {number} max inflate size. */
  var maxInflateSize;

  var input = this.input;
  var output = this.output;

  if (opt_param) {
    if (typeof opt_param.fixRatio === 'number') {
      ratio = opt_param.fixRatio;
    }
    if (typeof opt_param.addRatio === 'number') {
      ratio += opt_param.addRatio;
    }
  }

  // calculate new buffer size
  if (ratio < 2) {
    maxHuffCode =
      (input.length - this.ip) / this.currentLitlenTable[2];
    maxInflateSize = (maxHuffCode / 2 * 258) | 0;
    newSize = maxInflateSize < output.length ?
      output.length + maxInflateSize :
      output.length << 1;
  } else {
    newSize = output.length * ratio;
  }

  // buffer expantion
  if (USE_TYPEDARRAY) {
    buffer = new Uint8Array(newSize);
    buffer.set(output);
  } else {
    buffer = output;
  }

  this.output = buffer;

  return this.output;
};

/**
 * concat output buffer.
 * @return {!(Array.<number>|Uint8Array)} output buffer.
 */
Zlib.RawInflate.prototype.concatBufferBlock = function() {
  /** @type {number} buffer pointer. */
  var pos = 0;
  /** @type {number} buffer pointer. */
  var limit = this.totalpos + (this.op - Zlib.RawInflate.MaxBackwardLength);
  /** @type {!(Array.<number>|Uint8Array)} output block array. */
  var output = this.output;
  /** @type {!Array} blocks array. */
  var blocks = this.blocks;
  /** @type {!(Array.<number>|Uint8Array)} output block array. */
  var block;
  /** @type {!(Array.<number>|Uint8Array)} output buffer. */
  var buffer = new (USE_TYPEDARRAY ? Uint8Array : Array)(limit);
  /** @type {number} loop counter. */
  var i;
  /** @type {number} loop limiter. */
  var il;
  /** @type {number} loop counter. */
  var j;
  /** @type {number} loop limiter. */
  var jl;

  // single buffer
  if (blocks.length === 0) {
    return USE_TYPEDARRAY ?
      this.output.subarray(Zlib.RawInflate.MaxBackwardLength, this.op) :
      this.output.slice(Zlib.RawInflate.MaxBackwardLength, this.op);
  }

  // copy to buffer
  for (i = 0, il = blocks.length; i < il; ++i) {
    block = blocks[i];
    for (j = 0, jl = block.length; j < jl; ++j) {
      buffer[pos++] = block[j];
    }
  }

  // current buffer
  for (i = Zlib.RawInflate.MaxBackwardLength, il = this.op; i < il; ++i) {
    buffer[pos++] = output[i];
  }

  this.blocks = [];
  this.buffer = buffer;

  return this.buffer;
};

/**
 * concat output buffer. (dynamic)
 * @return {!(Array.<number>|Uint8Array)} output buffer.
 */
Zlib.RawInflate.prototype.concatBufferDynamic = function() {
  /** @type {Array.<number>|Uint8Array} output buffer. */
  var buffer;
  var op = this.op;

  if (USE_TYPEDARRAY) {
    if (this.resize) {
      buffer = new Uint8Array(op);
      buffer.set(this.output.subarray(0, op));
    } else {
      buffer = this.output.subarray(0, op);
    }
  } else {
    if (this.output.length > op) {
      this.output.length = op;
    }
    buffer = this.output;
  }

  this.buffer = buffer;

  return this.buffer;
};




var buildHuffmanTable = Zlib.Huffman.buildHuffmanTable;

/**
 * @param {!(Uint8Array|Array.<number>)} input input buffer.
 * @param {number} ip input buffer pointer.
 * @param {number=} opt_buffersize buffer block size.
 * @constructor
 */
Zlib.RawInflateStream = function(input, ip, opt_buffersize) {
  /** @type {!Array.<(Array|Uint8Array)>} */
  this.blocks = [];
  /** @type {number} block size. */
  this.bufferSize =
    opt_buffersize ? opt_buffersize : ZLIB_STREAM_RAW_INFLATE_BUFFER_SIZE;
  /** @type {!number} total output buffer pointer. */
  this.totalpos = 0;
  /** @type {!number} input buffer pointer. */
  this.ip = ip === void 0 ? 0 : ip;
  /** @type {!number} bit stream reader buffer. */
  this.bitsbuf = 0;
  /** @type {!number} bit stream reader buffer size. */
  this.bitsbuflen = 0;
  /** @type {!(Array|Uint8Array)} input buffer. */
  this.input = USE_TYPEDARRAY ? new Uint8Array(input) : input;
  /** @type {!(Uint8Array|Array)} output buffer. */
  this.output = new (USE_TYPEDARRAY ? Uint8Array : Array)(this.bufferSize);
  /** @type {!number} output buffer pointer. */
  this.op = 0;
  /** @type {boolean} is final block flag. */
  this.bfinal = false;
  /** @type {number} uncompressed block length. */
  this.blockLength;
  /** @type {boolean} resize flag for memory size optimization. */
  this.resize = false;
  /** @type {Array} */
  this.litlenTable;
  /** @type {Array} */
  this.distTable;
  /** @type {number} */
  this.sp = 0; // stream pointer
  /** @type {Zlib.RawInflateStream.Status} */
  this.status = Zlib.RawInflateStream.Status.INITIALIZED;

  //
  // backup
  //
  /** @type {!number} */
  this.ip_;
  /** @type {!number} */
  this.bitsbuflen_;
  /** @type {!number} */
  this.bitsbuf_;
};

/**
 * @enum {number}
 */
Zlib.RawInflateStream.BlockType = {
  UNCOMPRESSED: 0,
  FIXED: 1,
  DYNAMIC: 2
};

/**
 * @enum {number}
 */
Zlib.RawInflateStream.Status = {
  INITIALIZED: 0,
  BLOCK_HEADER_START: 1,
  BLOCK_HEADER_END: 2,
  BLOCK_BODY_START: 3,
  BLOCK_BODY_END: 4,
  DECODE_BLOCK_START: 5,
  DECODE_BLOCK_END: 6
};

/**
 * decompress.
 * @return {!(Uint8Array|Array)} inflated buffer.
 */
Zlib.RawInflateStream.prototype.decompress = function(newInput, ip) {
  /** @type {boolean} */
  var stop = false;

  if (newInput !== void 0) {
    this.input = newInput;
  }

  if (ip !== void 0) {
    this.ip = ip;
  }

  // decompress
  while (!stop) {
    switch (this.status) {
      // block header
      case Zlib.RawInflateStream.Status.INITIALIZED:
      case Zlib.RawInflateStream.Status.BLOCK_HEADER_START:
        if (this.readBlockHeader() < 0) {
          stop = true;
        }
        break;
      // block body
      case Zlib.RawInflateStream.Status.BLOCK_HEADER_END: /* FALLTHROUGH */
      case Zlib.RawInflateStream.Status.BLOCK_BODY_START:
        switch(this.currentBlockType) {
          case Zlib.RawInflateStream.BlockType.UNCOMPRESSED:
            if (this.readUncompressedBlockHeader() < 0) {
              stop = true;
            }
            break;
          case Zlib.RawInflateStream.BlockType.FIXED:
            if (this.parseFixedHuffmanBlock() < 0) {
              stop = true;
            }
            break;
          case Zlib.RawInflateStream.BlockType.DYNAMIC:
            if (this.parseDynamicHuffmanBlock() < 0) {
              stop = true;
            }
            break;
        }
        break;
      // decode data
      case Zlib.RawInflateStream.Status.BLOCK_BODY_END:
      case Zlib.RawInflateStream.Status.DECODE_BLOCK_START:
        switch(this.currentBlockType) {
          case Zlib.RawInflateStream.BlockType.UNCOMPRESSED:
            if (this.parseUncompressedBlock() < 0) {
              stop = true;
            }
            break;
          case Zlib.RawInflateStream.BlockType.FIXED: /* FALLTHROUGH */
          case Zlib.RawInflateStream.BlockType.DYNAMIC:
            if (this.decodeHuffman() < 0) {
              stop = true;
            }
            break;
        }
        break;
      case Zlib.RawInflateStream.Status.DECODE_BLOCK_END:
        if (this.bfinal) {
          stop = true;
        } else {
          this.status = Zlib.RawInflateStream.Status.INITIALIZED;
        }
        break;
    }
  }

  return this.concatBuffer();
};

/**
 * @const
 * @type {number} max backward length for LZ77.
 */
Zlib.RawInflateStream.MaxBackwardLength = 32768;

/**
 * @const
 * @type {number} max copy length for LZ77.
 */
Zlib.RawInflateStream.MaxCopyLength = 258;

/**
 * huffman order
 * @const
 * @type {!(Array.<number>|Uint8Array)}
 */
Zlib.RawInflateStream.Order = (function(table) {
  return USE_TYPEDARRAY ? new Uint16Array(table) : table;
})([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);

/**
 * huffman length code table.
 * @const
 * @type {!(Array.<number>|Uint16Array)}
 */
Zlib.RawInflateStream.LengthCodeTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint16Array(table) : table;
})([
  0x0003, 0x0004, 0x0005, 0x0006, 0x0007, 0x0008, 0x0009, 0x000a, 0x000b,
  0x000d, 0x000f, 0x0011, 0x0013, 0x0017, 0x001b, 0x001f, 0x0023, 0x002b,
  0x0033, 0x003b, 0x0043, 0x0053, 0x0063, 0x0073, 0x0083, 0x00a3, 0x00c3,
  0x00e3, 0x0102, 0x0102, 0x0102
]);

/**
 * huffman length extra-bits table.
 * @const
 * @type {!(Array.<number>|Uint8Array)}
 */
Zlib.RawInflateStream.LengthExtraTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint8Array(table) : table;
})([
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
  5, 5, 0, 0, 0
]);

/**
 * huffman dist code table.
 * @const
 * @type {!(Array.<number>|Uint16Array)}
 */
Zlib.RawInflateStream.DistCodeTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint16Array(table) : table;
})([
  0x0001, 0x0002, 0x0003, 0x0004, 0x0005, 0x0007, 0x0009, 0x000d, 0x0011,
  0x0019, 0x0021, 0x0031, 0x0041, 0x0061, 0x0081, 0x00c1, 0x0101, 0x0181,
  0x0201, 0x0301, 0x0401, 0x0601, 0x0801, 0x0c01, 0x1001, 0x1801, 0x2001,
  0x3001, 0x4001, 0x6001
]);

/**
 * huffman dist extra-bits table.
 * @const
 * @type {!(Array.<number>|Uint8Array)}
 */
Zlib.RawInflateStream.DistExtraTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint8Array(table) : table;
})([
  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
  11, 12, 12, 13, 13
]);

/**
 * fixed huffman length code table
 * @const
 * @type {!Array}
 */
Zlib.RawInflateStream.FixedLiteralLengthTable = (function(table) {
  return table;
})((function() {
  var lengths = new (USE_TYPEDARRAY ? Uint8Array : Array)(288);
  var i, il;

  for (i = 0, il = lengths.length; i < il; ++i) {
    lengths[i] =
      (i <= 143) ? 8 :
      (i <= 255) ? 9 :
      (i <= 279) ? 7 :
      8;
  }

  return buildHuffmanTable(lengths);
})());

/**
 * fixed huffman distance code table
 * @const
 * @type {!Array}
 */
Zlib.RawInflateStream.FixedDistanceTable = (function(table) {
  return table;
})((function() {
  var lengths = new (USE_TYPEDARRAY ? Uint8Array : Array)(30);
  var i, il;

  for (i = 0, il = lengths.length; i < il; ++i) {
    lengths[i] = 5;
  }

  return buildHuffmanTable(lengths);
})());

/**
 * parse deflated block.
 */
Zlib.RawInflateStream.prototype.readBlockHeader = function() {
  /** @type {number} header */
  var hdr;

  this.status = Zlib.RawInflateStream.Status.BLOCK_HEADER_START;

  this.save_();
  if ((hdr = this.readBits(3)) < 0) {
    this.restore_();
    return -1;
  }

  // BFINAL
  if (hdr & 0x1) {
    this.bfinal = true;
  }

  // BTYPE
  hdr >>>= 1;
  switch (hdr) {
    case 0: // uncompressed
      this.currentBlockType = Zlib.RawInflateStream.BlockType.UNCOMPRESSED;
      break;
    case 1: // fixed huffman
      this.currentBlockType = Zlib.RawInflateStream.BlockType.FIXED;
      break;
    case 2: // dynamic huffman
      this.currentBlockType = Zlib.RawInflateStream.BlockType.DYNAMIC;
      break;
    default: // reserved or other
      throw new Error('unknown BTYPE: ' + hdr);
  }

  this.status = Zlib.RawInflateStream.Status.BLOCK_HEADER_END;
};

/**
 * read inflate bits
 * @param {number} length bits length.
 * @return {number} read bits.
 */
Zlib.RawInflateStream.prototype.readBits = function(length) {
  var bitsbuf = this.bitsbuf;
  var bitsbuflen = this.bitsbuflen;
  var input = this.input;
  var ip = this.ip;

  /** @type {number} input and output byte. */
  var octet;

  // not enough buffer
  while (bitsbuflen < length) {
    // input byte
    if (input.length <= ip) {
      return -1;
    }
    octet = input[ip++];

    // concat octet
    bitsbuf |= octet << bitsbuflen;
    bitsbuflen += 8;
  }

  // output byte
  octet = bitsbuf & /* MASK */ ((1 << length) - 1);
  bitsbuf >>>= length;
  bitsbuflen -= length;

  this.bitsbuf = bitsbuf;
  this.bitsbuflen = bitsbuflen;
  this.ip = ip;

  return octet;
};

/**
 * read huffman code using table
 * @param {Array} table huffman code table.
 * @return {number} huffman code.
 */
Zlib.RawInflateStream.prototype.readCodeByTable = function(table) {
  var bitsbuf = this.bitsbuf;
  var bitsbuflen = this.bitsbuflen;
  var input = this.input;
  var ip = this.ip;

  /** @type {!(Array|Uint8Array)} huffman code table */
  var codeTable = table[0];
  /** @type {number} */
  var maxCodeLength = table[1];
  /** @type {number} input byte */
  var octet;
  /** @type {number} code length & code (16bit, 16bit) */
  var codeWithLength;
  /** @type {number} code bits length */
  var codeLength;

  // not enough buffer
  while (bitsbuflen < maxCodeLength) {
    if (input.length <= ip) {
      return -1;
    }
    octet = input[ip++];
    bitsbuf |= octet << bitsbuflen;
    bitsbuflen += 8;
  }

  // read max length
  codeWithLength = codeTable[bitsbuf & ((1 << maxCodeLength) - 1)];
  codeLength = codeWithLength >>> 16;

  if (codeLength > bitsbuflen) {
    throw new Error('invalid code length: ' + codeLength);
  }

  this.bitsbuf = bitsbuf >> codeLength;
  this.bitsbuflen = bitsbuflen - codeLength;
  this.ip = ip;

  return codeWithLength & 0xffff;
};

/**
 * read uncompressed block header
 */
Zlib.RawInflateStream.prototype.readUncompressedBlockHeader = function() {
  /** @type {number} block length */
  var len;
  /** @type {number} number for check block length */
  var nlen;

  var input = this.input;
  var ip = this.ip;

  this.status = Zlib.RawInflateStream.Status.BLOCK_BODY_START;

  if (ip + 4 >= input.length) {
    return -1;
  }

  len = input[ip++] | (input[ip++] << 8);
  nlen = input[ip++] | (input[ip++] << 8);

  // check len & nlen
  if (len === ~nlen) {
    throw new Error('invalid uncompressed block header: length verify');
  }

  // skip buffered header bits
  this.bitsbuf = 0;
  this.bitsbuflen = 0;

  this.ip = ip;
  this.blockLength = len;
  this.status = Zlib.RawInflateStream.Status.BLOCK_BODY_END;
};

/**
 * parse uncompressed block.
 */
Zlib.RawInflateStream.prototype.parseUncompressedBlock = function() {
  var input = this.input;
  var ip = this.ip;
  var output = this.output;
  var op = this.op;
  var len = this.blockLength;

  this.status = Zlib.RawInflateStream.Status.DECODE_BLOCK_START;

  // copy
  // XXX: とりあえず素直にコピー
  while (len--) {
    if (op === output.length) {
      output = this.expandBuffer({fixRatio: 2});
    }

    // not enough input buffer
    if (ip >= input.length) {
      this.ip = ip;
      this.op = op;
      this.blockLength = len + 1; // コピーしてないので戻す
      return -1;
    }

    output[op++] = input[ip++];
  }

  if (len < 0) {
    this.status = Zlib.RawInflateStream.Status.DECODE_BLOCK_END;
  }

  this.ip = ip;
  this.op = op;

  return 0;
};

/**
 * parse fixed huffman block.
 */
Zlib.RawInflateStream.prototype.parseFixedHuffmanBlock = function() {
  this.status = Zlib.RawInflateStream.Status.BLOCK_BODY_START;

  this.litlenTable = Zlib.RawInflateStream.FixedLiteralLengthTable;
  this.distTable = Zlib.RawInflateStream.FixedDistanceTable;

  this.status = Zlib.RawInflateStream.Status.BLOCK_BODY_END;

  return 0;
};

/**
 * オブジェクトのコンテキストを別のプロパティに退避する.
 * @private
 */
Zlib.RawInflateStream.prototype.save_ = function() {
  this.ip_ = this.ip;
  this.bitsbuflen_ = this.bitsbuflen;
  this.bitsbuf_ = this.bitsbuf;
};

/**
 * 別のプロパティに退避したコンテキストを復元する.
 * @private
 */
Zlib.RawInflateStream.prototype.restore_ = function() {
  this.ip = this.ip_;
  this.bitsbuflen = this.bitsbuflen_;
  this.bitsbuf = this.bitsbuf_;
};

/**
 * parse dynamic huffman block.
 */
Zlib.RawInflateStream.prototype.parseDynamicHuffmanBlock = function() {
  /** @type {number} number of literal and length codes. */
  var hlit;
  /** @type {number} number of distance codes. */
  var hdist;
  /** @type {number} number of code lengths. */
  var hclen;
  /** @type {!(Uint8Array|Array)} code lengths. */
  var codeLengths =
    new (USE_TYPEDARRAY ? Uint8Array : Array)(Zlib.RawInflateStream.Order.length);
  /** @type {!Array} code lengths table. */
  var codeLengthsTable;
  /** @type {!(Uint32Array|Array)} literal and length code lengths. */
  var litlenLengths;
  /** @type {!(Uint32Array|Array)} distance code lengths. */
  var distLengths;

  this.status = Zlib.RawInflateStream.Status.BLOCK_BODY_START;

  this.save_();
  hlit = this.readBits(5) + 257;
  hdist = this.readBits(5) + 1;
  hclen = this.readBits(4) + 4;
  if (hlit < 0 || hdist < 0 || hclen < 0) {
    this.restore_();
    return -1;
  }

  try {
    parseDynamicHuffmanBlockImpl.call(this);
  } catch(e) {
    this.restore_();
    return -1;
  }

  function parseDynamicHuffmanBlockImpl() {
    /** @type {number} */
    var bits;
    var code;
    var prev = 0;
    var repeat;
    /** @type {!(Uint8Array|Array.<number>)} code length table. */
    var lengthTable;
    /** @type {number} loop counter. */
    var i;
    /** @type {number} loop limit. */
    var il;

    // decode code lengths
    for (i = 0; i < hclen; ++i) {
      if ((bits = this.readBits(3)) < 0) {
        throw new Error('not enough input');
      }
      codeLengths[Zlib.RawInflateStream.Order[i]] = bits;
    }

    // decode length table
    codeLengthsTable = buildHuffmanTable(codeLengths);
    lengthTable = new (USE_TYPEDARRAY ? Uint8Array : Array)(hlit + hdist);
    for (i = 0, il = hlit + hdist; i < il;) {
      code = this.readCodeByTable(codeLengthsTable);
      if (code < 0) {
        throw new Error('not enough input');
      }
      switch (code) {
        case 16:
          if ((bits = this.readBits(2)) < 0) {
            throw new Error('not enough input');
          }
          repeat = 3 + bits;
          while (repeat--) { lengthTable[i++] = prev; }
          break;
        case 17:
          if ((bits = this.readBits(3)) < 0) {
            throw new Error('not enough input');
          }
          repeat = 3 + bits;
          while (repeat--) { lengthTable[i++] = 0; }
          prev = 0;
          break;
        case 18:
          if ((bits = this.readBits(7)) < 0) {
            throw new Error('not enough input');
          }
          repeat = 11 + bits;
          while (repeat--) { lengthTable[i++] = 0; }
          prev = 0;
          break;
        default:
          lengthTable[i++] = code;
          prev = code;
          break;
      }
    }

    // literal and length code
    litlenLengths = new (USE_TYPEDARRAY ? Uint8Array : Array)(hlit);

    // distance code
    distLengths = new (USE_TYPEDARRAY ? Uint8Array : Array)(hdist);

    this.litlenTable = USE_TYPEDARRAY
      ? buildHuffmanTable(lengthTable.subarray(0, hlit))
      : buildHuffmanTable(lengthTable.slice(0, hlit));
    this.distTable = USE_TYPEDARRAY
      ? buildHuffmanTable(lengthTable.subarray(hlit))
      : buildHuffmanTable(lengthTable.slice(hlit));
  }

  this.status = Zlib.RawInflateStream.Status.BLOCK_BODY_END;

  return 0;
};

/**
 * decode huffman code (dynamic)
 * @return {(number|undefined)} -1 is error.
 */
Zlib.RawInflateStream.prototype.decodeHuffman = function() {
  var output = this.output;
  var op = this.op;

  /** @type {number} huffman code. */
  var code;
  /** @type {number} table index. */
  var ti;
  /** @type {number} huffman code distination. */
  var codeDist;
  /** @type {number} huffman code length. */
  var codeLength;

  var litlen = this.litlenTable;
  var dist = this.distTable;

  var olength = output.length;
  var bits;

  this.status = Zlib.RawInflateStream.Status.DECODE_BLOCK_START;

  while (true) {
    this.save_();

    code = this.readCodeByTable(litlen);
    if (code < 0) {
      this.op = op;
      this.restore_();
      return -1;
    }

    if (code === 256) {
      break;
    }

    // literal
    if (code < 256) {
      if (op === olength) {
        output = this.expandBuffer();
        olength = output.length;
      }
      output[op++] = code;

      continue;
    }

    // length code
    ti = code - 257;
    codeLength = Zlib.RawInflateStream.LengthCodeTable[ti];
    if (Zlib.RawInflateStream.LengthExtraTable[ti] > 0) {
      bits = this.readBits(Zlib.RawInflateStream.LengthExtraTable[ti]);
      if (bits < 0) {
        this.op = op;
        this.restore_();
        return -1;
      }
      codeLength += bits;
    }

    // dist code
    code = this.readCodeByTable(dist);
    if (code < 0) {
      this.op = op;
      this.restore_();
      return -1;
    }
    codeDist = Zlib.RawInflateStream.DistCodeTable[code];
    if (Zlib.RawInflateStream.DistExtraTable[code] > 0) {
      bits = this.readBits(Zlib.RawInflateStream.DistExtraTable[code]);
      if (bits < 0) {
        this.op = op;
        this.restore_();
        return -1;
      }
      codeDist += bits;
    }

    // lz77 decode
    if (op + codeLength >= olength) {
      output = this.expandBuffer();
      olength = output.length;
    }

    while (codeLength--) {
      output[op] = output[(op++) - codeDist];
    }

    // break
    if (this.ip === this.input.length) {
      this.op = op;
      return -1;
    }
  }

  while (this.bitsbuflen >= 8) {
    this.bitsbuflen -= 8;
    this.ip--;
  }

  this.op = op;
  this.status = Zlib.RawInflateStream.Status.DECODE_BLOCK_END;
};

/**
 * expand output buffer. (dynamic)
 * @param {Object=} opt_param option parameters.
 * @return {!(Array|Uint8Array)} output buffer pointer.
 */
Zlib.RawInflateStream.prototype.expandBuffer = function(opt_param) {
  /** @type {!(Array|Uint8Array)} store buffer. */
  var buffer;
  /** @type {number} expantion ratio. */
  var ratio = (this.input.length / this.ip + 1) | 0;
  /** @type {number} maximum number of huffman code. */
  var maxHuffCode;
  /** @type {number} new output buffer size. */
  var newSize;
  /** @type {number} max inflate size. */
  var maxInflateSize;

  var input = this.input;
  var output = this.output;

  if (opt_param) {
    if (typeof opt_param.fixRatio === 'number') {
      ratio = opt_param.fixRatio;
    }
    if (typeof opt_param.addRatio === 'number') {
      ratio += opt_param.addRatio;
    }
  }

  // calculate new buffer size
  if (ratio < 2) {
    maxHuffCode =
      (input.length - this.ip) / this.litlenTable[2];
    maxInflateSize = (maxHuffCode / 2 * 258) | 0;
    newSize = maxInflateSize < output.length ?
      output.length + maxInflateSize :
      output.length << 1;
  } else {
    newSize = output.length * ratio;
  }

  // buffer expantion
  if (USE_TYPEDARRAY) {
    buffer = new Uint8Array(newSize);
    buffer.set(output);
  } else {
    buffer = output;
  }

  this.output = buffer;

  return this.output;
};

/**
 * concat output buffer. (dynamic)
 * @return {!(Array|Uint8Array)} output buffer.
 */
Zlib.RawInflateStream.prototype.concatBuffer = function() {
  /** @type {!(Array|Uint8Array)} output buffer. */
  var buffer;
  /** @type {number} */
  var op = this.op;
  /** @type {Uint8Array} */
  var tmp;

  if (this.resize) {
    if (USE_TYPEDARRAY) {
      buffer = new Uint8Array(this.output.subarray(this.sp, op));
    } else {
      buffer = this.output.slice(this.sp, op);
    }
  } else {
    buffer =
      USE_TYPEDARRAY ? this.output.subarray(this.sp, op) : this.output.slice(this.sp, op);
  }

  this.sp = op;

  // compaction
  if (op > Zlib.RawInflateStream.MaxBackwardLength + this.bufferSize) {
    this.op = this.sp = Zlib.RawInflateStream.MaxBackwardLength;
    if (USE_TYPEDARRAY) {
      tmp = /** @type {Uint8Array} */(this.output);
      this.output = new Uint8Array(this.bufferSize + Zlib.RawInflateStream.MaxBackwardLength);
      this.output.set(tmp.subarray(op - Zlib.RawInflateStream.MaxBackwardLength, op));
    } else {
      this.output = this.output.slice(op - Zlib.RawInflateStream.MaxBackwardLength);
    }
  }

  return buffer;
};


/**
 * @constructor
 * @param {!(Uint8Array|Array)} input deflated buffer.
 * @param {Object=} opt_params option parameters.
 *
 * opt_params は以下のプロパティを指定する事ができます。
 *   - index: input buffer の deflate コンテナの開始位置.
 *   - blockSize: バッファのブロックサイズ.
 *   - verify: 伸張が終わった後 adler-32 checksum の検証を行うか.
 *   - bufferType: Zlib.Inflate.BufferType の値によってバッファの管理方法を指定する.
 *       Zlib.Inflate.BufferType は Zlib.RawInflate.BufferType のエイリアス.
 */
Zlib.Inflate = function(input, opt_params) {
  /** @type {number} */
  var bufferSize;
  /** @type {Zlib.Inflate.BufferType} */
  var bufferType;
  /** @type {number} */
  var cmf;
  /** @type {number} */
  var flg;

  /** @type {!(Uint8Array|Array)} */
  this.input = input;
  /** @type {number} */
  this.ip = 0;
  /** @type {Zlib.RawInflate} */
  this.rawinflate;
  /** @type {(boolean|undefined)} verify flag. */
  this.verify;

  // option parameters
  if (opt_params || !(opt_params = {})) {
    if (opt_params['index']) {
      this.ip = opt_params['index'];
    }
    if (opt_params['verify']) {
      this.verify = opt_params['verify'];
    }
  }

  // Compression Method and Flags
  cmf = input[this.ip++];
  flg = input[this.ip++];

  // compression method
  switch (cmf & 0x0f) {
    case Zlib.CompressionMethod.DEFLATE:
      this.method = Zlib.CompressionMethod.DEFLATE;
      break;
    default:
      throw new Error('unsupported compression method');
  }

  // fcheck
  if (((cmf << 8) + flg) % 31 !== 0) {
    throw new Error('invalid fcheck flag:' + ((cmf << 8) + flg) % 31);
  }

  // fdict (not supported)
  if (flg & 0x20) {
    throw new Error('fdict flag is not supported');
  }

  // RawInflate
  this.rawinflate = new Zlib.RawInflate(input, {
    'index': this.ip,
    'bufferSize': opt_params['bufferSize'],
    'bufferType': opt_params['bufferType'],
    'resize': opt_params['resize']
  });
}

/**
 * @enum {number}
 */
Zlib.Inflate.BufferType = Zlib.RawInflate.BufferType;

/**
 * decompress.
 * @return {!(Uint8Array|Array)} inflated buffer.
 */
Zlib.Inflate.prototype.decompress = function() {
  /** @type {!(Array|Uint8Array)} input buffer. */
  var input = this.input;
  /** @type {!(Uint8Array|Array)} inflated buffer. */
  var buffer;
  /** @type {number} adler-32 checksum */
  var adler32;

  buffer = this.rawinflate.decompress();
  this.ip = this.rawinflate.ip;

  // verify adler-32
  if (this.verify) {
    adler32 = (
      input[this.ip++] << 24 | input[this.ip++] << 16 |
      input[this.ip++] << 8 | input[this.ip++]
    ) >>> 0;

    if (adler32 !== Zlib.Adler32(buffer)) {
      throw new Error('invalid adler-32 checksum');
    }
  }

  return buffer;
};


/* vim:set expandtab ts=2 sw=2 tw=80: */


/**
 * @param {!(Uint8Array|Array)} input deflated buffer.
 * @constructor
 */
Zlib.InflateStream = function(input) {
  /** @type {!(Uint8Array|Array)} */
  this.input = input === void 0 ? new (USE_TYPEDARRAY ? Uint8Array : Array)() : input;
  /** @type {number} */
  this.ip = 0;
  /** @type {Zlib.RawInflateStream} */
  this.rawinflate = new Zlib.RawInflateStream(this.input, this.ip);
  /** @type {Zlib.CompressionMethod} */
  this.method;
  /** @type {!(Array|Uint8Array)} */
  this.output = this.rawinflate.output;
};

/**
 * decompress.
 * @return {!(Uint8Array|Array)} inflated buffer.
 */
Zlib.InflateStream.prototype.decompress = function(input) {
  /** @type {!(Uint8Array|Array)} inflated buffer. */
  var buffer;
  /** @type {number} adler-32 checksum */
  var adler32;

  // 新しい入力を入力バッファに結合する
  // XXX Array, Uint8Array のチェックを行うか確認する
  if (input !== void 0) {
    if (USE_TYPEDARRAY) {
      var tmp = new Uint8Array(this.input.length + input.length);
      tmp.set(this.input, 0);
      tmp.set(input, this.input.length);
      this.input = tmp;
    } else {
      this.input = this.input.concat(input);
    }
  }

  if (this.method === void 0) {
    if(this.readHeader() < 0) {
      return new (USE_TYPEDARRAY ? Uint8Array : Array)();
    }
  }

  buffer = this.rawinflate.decompress(this.input, this.ip);
  if (this.rawinflate.ip !== 0) {
    this.input = USE_TYPEDARRAY ?
      this.input.subarray(this.rawinflate.ip) :
      this.input.slice(this.rawinflate.ip);
    this.ip = 0;
  }

  // verify adler-32
  /*
  if (this.verify) {
    adler32 =
      input[this.ip++] << 24 | input[this.ip++] << 16 |
      input[this.ip++] << 8 | input[this.ip++];

    if (adler32 !== Zlib.Adler32(buffer)) {
      throw new Error('invalid adler-32 checksum');
    }
  }
  */

  return buffer;
};

Zlib.InflateStream.prototype.readHeader = function() {
  var ip = this.ip;
  var input = this.input;

  // Compression Method and Flags
  var cmf = input[ip++];
  var flg = input[ip++];

  if (cmf === void 0 || flg === void 0) {
    return -1;
  }

  // compression method
  switch (cmf & 0x0f) {
    case Zlib.CompressionMethod.DEFLATE:
      this.method = Zlib.CompressionMethod.DEFLATE;
      break;
    default:
      throw new Error('unsupported compression method');
  }

  // fcheck
  if (((cmf << 8) + flg) % 31 !== 0) {
    throw new Error('invalid fcheck flag:' + ((cmf << 8) + flg) % 31);
  }

  // fdict (not supported)
  if (flg & 0x20) {
    throw new Error('fdict flag is not supported');
  }

  this.ip = ip;
};


/**
 * @fileoverview GZIP (RFC1952) 展開コンテナ実装.
 */

/**
 * @constructor
 * @param {!(Array|Uint8Array)} input input buffer.
 * @param {Object=} opt_params option parameters.
 */
Zlib.Gunzip = function(input, opt_params) {
  /** @type {!(Array.<number>|Uint8Array)} input buffer. */
  this.input = input;
  /** @type {number} input buffer pointer. */
  this.ip = 0;
  /** @type {Array.<Zlib.GunzipMember>} */
  this.member = [];
  /** @type {boolean} */
  this.decompressed = false;
};

/**
 * @return {Array.<Zlib.GunzipMember>}
 */
Zlib.Gunzip.prototype.getMembers = function() {
  if (!this.decompressed) {
    this.decompress();
  }

  return this.member.slice();
};

/**
 * inflate gzip data.
 * @return {!(Array.<number>|Uint8Array)} inflated buffer.
 */
Zlib.Gunzip.prototype.decompress = function() {
  /** @type {number} input length. */
  var il = this.input.length;

  while (this.ip < il) {
    this.decodeMember();
  }

  this.decompressed = true;

  return this.concatMember();
};

/**
 * decode gzip member.
 */
Zlib.Gunzip.prototype.decodeMember = function() {
  /** @type {Zlib.GunzipMember} */
  var member = new Zlib.GunzipMember();
  /** @type {number} */
  var isize;
  /** @type {Zlib.RawInflate} RawInflate implementation. */
  var rawinflate;
  /** @type {!(Array.<number>|Uint8Array)} inflated data. */
  var inflated;
  /** @type {number} inflate size */
  var inflen;
  /** @type {number} character code */
  var c;
  /** @type {number} character index in string. */
  var ci;
  /** @type {Array.<string>} character array. */
  var str;
  /** @type {number} modification time. */
  var mtime;
  /** @type {number} */
  var crc32;

  var input = this.input;
  var ip = this.ip;

  member.id1 = input[ip++];
  member.id2 = input[ip++];

  // check signature
  if (member.id1 !== 0x1f || member.id2 !== 0x8b) {
    throw new Error('invalid file signature:' + member.id1 + ',' + member.id2);
  }

  // check compression method
  member.cm = input[ip++];
  switch (member.cm) {
    case 8: /* XXX: use Zlib const */
      break;
    default:
      throw new Error('unknown compression method: ' + member.cm);
  }

  // flags
  member.flg = input[ip++];

  // modification time
  mtime = (input[ip++])       |
          (input[ip++] << 8)  |
          (input[ip++] << 16) |
          (input[ip++] << 24);
  member.mtime = new Date(mtime * 1000);

  // extra flags
  member.xfl = input[ip++];

  // operating system
  member.os = input[ip++];

  // extra
  if ((member.flg & Zlib.Gzip.FlagsMask.FEXTRA) > 0) {
    member.xlen = input[ip++] | (input[ip++] << 8);
    ip = this.decodeSubField(ip, member.xlen);
  }

  // fname
  if ((member.flg & Zlib.Gzip.FlagsMask.FNAME) > 0) {
    for(str = [], ci = 0; (c = input[ip++]) > 0;) {
      str[ci++] = String.fromCharCode(c);
    }
    member.name = str.join('');
  }

  // fcomment
  if ((member.flg & Zlib.Gzip.FlagsMask.FCOMMENT) > 0) {
    for(str = [], ci = 0; (c = input[ip++]) > 0;) {
      str[ci++] = String.fromCharCode(c);
    }
    member.comment = str.join('');
  }

  // fhcrc
  if ((member.flg & Zlib.Gzip.FlagsMask.FHCRC) > 0) {
    member.crc16 = Zlib.CRC32.calc(input, 0, ip) & 0xffff;
    if (member.crc16 !== (input[ip++] | (input[ip++] << 8))) {
      throw new Error('invalid header crc16');
    }
  }

  // isize を事前に取得すると展開後のサイズが分かるため、
  // inflate処理のバッファサイズが事前に分かり、高速になる
  isize = (input[input.length - 4])       | (input[input.length - 3] << 8) |
          (input[input.length - 2] << 16) | (input[input.length - 1] << 24);

  // isize の妥当性チェック
  // ハフマン符号では最小 2-bit のため、最大で 1/4 になる
  // LZ77 符号では 長さと距離 2-Byte で最大 258-Byte を表現できるため、
  // 1/128 になるとする
  // ここから入力バッファの残りが isize の 512 倍以上だったら
  // サイズ指定のバッファ確保は行わない事とする
  if (input.length - ip - /* CRC-32 */4 - /* ISIZE */4 < isize * 512) {
    inflen = isize;
  }

  // compressed block
  rawinflate = new Zlib.RawInflate(input, {'index': ip, 'bufferSize': inflen});
  member.data = inflated = rawinflate.decompress();
  ip = rawinflate.ip;

  // crc32
  member.crc32 = crc32 =
    ((input[ip++])       | (input[ip++] << 8) |
     (input[ip++] << 16) | (input[ip++] << 24)) >>> 0;
  if (Zlib.CRC32.calc(inflated) !== crc32) {
    throw new Error('invalid CRC-32 checksum: 0x' +
        Zlib.CRC32.calc(inflated).toString(16) + ' / 0x' + crc32.toString(16));
  }

  // input size
  member.isize = isize =
    ((input[ip++])       | (input[ip++] << 8) |
     (input[ip++] << 16) | (input[ip++] << 24)) >>> 0;
  if ((inflated.length & 0xffffffff) !== isize) {
    throw new Error('invalid input size: ' +
        (inflated.length & 0xffffffff) + ' / ' + isize);
  }

  this.member.push(member);
  this.ip = ip;
};

/**
 * サブフィールドのデコード
 * XXX: 現在は何もせずスキップする
 */
Zlib.Gunzip.prototype.decodeSubField = function(ip, length) {
  return ip + length;
};

/**
 * @return {!(Array.<number>|Uint8Array)}
 */
Zlib.Gunzip.prototype.concatMember = function() {
  /** @type {Array.<Zlib.GunzipMember>} */
  var member = this.member;
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;
  /** @type {number} */
  var p = 0;
  /** @type {number} */
  var size = 0;
  /** @type {!(Array.<number>|Uint8Array)} */
  var buffer;

  for (i = 0, il = member.length; i < il; ++i) {
    size += member[i].data.length;
  }

  if (USE_TYPEDARRAY) {
    buffer = new Uint8Array(size);
    for (i = 0; i < il; ++i) {
      buffer.set(member[i].data, p);
      p += member[i].data.length;
    }
  } else {
    buffer = [];
    for (i = 0; i < il; ++i) {
      buffer[i] = member[i].data;
    }
    buffer = Array.prototype.concat.apply([], buffer);
  }

  return buffer;
};



/**
 * @constructor
 */
Zlib.GunzipMember = function() {
  /** @type {number} signature first byte. */
  this.id1;
  /** @type {number} signature second byte. */
  this.id2;
  /** @type {number} compression method. */
  this.cm;
  /** @type {number} flags. */
  this.flg;
  /** @type {Date} modification time. */
  this.mtime;
  /** @type {number} extra flags. */
  this.xfl;
  /** @type {number} operating system number. */
  this.os;
  /** @type {number} CRC-16 value for FHCRC flag. */
  this.crc16;
  /** @type {number} extra length. */
  this.xlen;
  /** @type {number} CRC-32 value for verification. */
  this.crc32;
  /** @type {number} input size modulo 32 value. */
  this.isize;
  /** @type {string} filename. */
  this.name;
  /** @type {string} comment. */
  this.comment;
  /** @type {!(Uint8Array|Array.<number>)} */
  this.data;
};

Zlib.GunzipMember.prototype.getName = function() {
  return this.name;
};

Zlib.GunzipMember.prototype.getData = function() {
  return this.data;
};

Zlib.GunzipMember.prototype.getMtime = function() {
  return this.mtime;
}

/**
 * @fileoverview GZIP (RFC1952) 実装.
 */

/**
 * @constructor
 * @param {!(Array|Uint8Array)} input input buffer.
 * @param {Object=} opt_params option parameters.
 */
Zlib.Gzip = function(input, opt_params) {
  /** @type {!(Array.<number>|Uint8Array)} input buffer. */
  this.input = input;
  /** @type {number} input buffer pointer. */
  this.ip = 0;
  /** @type {!(Array.<number>|Uint8Array)} output buffer. */
  this.output;
  /** @type {number} output buffer. */
  this.op = 0;
  /** @type {!Object} flags option flags. */
  this.flags = {};
  /** @type {!string} filename. */
  this.filename;
  /** @type {!string} comment. */
  this.comment;
  /** @type {!Object} deflate options. */
  this.deflateOptions;

  // option parameters
  if (opt_params) {
    if (opt_params['flags']) {
      this.flags = opt_params['flags'];
    }
    if (typeof opt_params['filename'] === 'string') {
      this.filename = opt_params['filename'];
    }
    if (typeof opt_params['comment'] === 'string') {
      this.comment = opt_params['comment'];
    }
    if (opt_params['deflateOptions']) {
      this.deflateOptions = opt_params['deflateOptions'];
    }
  }

  if (!this.deflateOptions) {
    this.deflateOptions = {};
  }
};

/**
 * @type {number}
 * @const
 */
Zlib.Gzip.DefaultBufferSize = 0x8000;

/**
 * encode gzip members.
 * @return {!(Array|Uint8Array)} gzip binary array.
 */
Zlib.Gzip.prototype.compress = function() {
  /** @type {number} flags. */
  var flg;
  /** @type {number} modification time. */
  var mtime;
  /** @type {number} CRC-16 value for FHCRC flag. */
  var crc16;
  /** @type {number} CRC-32 value for verification. */
  var crc32;
  /** @type {!Zlib.RawDeflate} raw deflate object. */
  var rawdeflate;
  /** @type {number} character code */
  var c;
  /** @type {number} loop counter. */
  var i;
  /** @type {number} loop limiter. */
  var il;
  /** @type {!(Array|Uint8Array)} output buffer. */
  var output =
    new (USE_TYPEDARRAY ? Uint8Array : Array)(Zlib.Gzip.DefaultBufferSize);
  /** @type {number} output buffer pointer. */
  var op = 0;

  var input = this.input;
  var ip = this.ip;
  var filename = this.filename;
  var comment = this.comment;

  // check signature
  output[op++] = 0x1f;
  output[op++] = 0x8b;

  // check compression method
  output[op++] = 8; /* XXX: use Zlib const */

  // flags
  flg = 0;
  if (this.flags['fname'])    flg |= Zlib.Gzip.FlagsMask.FNAME;
  if (this.flags['fcomment']) flg |= Zlib.Gzip.FlagsMask.FCOMMENT;
  if (this.flags['fhcrc'])    flg |= Zlib.Gzip.FlagsMask.FHCRC;
  // XXX: FTEXT
  // XXX: FEXTRA
  output[op++] = flg;

  // modification time
  mtime = (Date.now ? Date.now() : +new Date()) / 1000 | 0;
  output[op++] = mtime        & 0xff;
  output[op++] = mtime >>>  8 & 0xff;
  output[op++] = mtime >>> 16 & 0xff;
  output[op++] = mtime >>> 24 & 0xff;

  // extra flags
  output[op++] = 0;

  // operating system
  output[op++] = Zlib.Gzip.OperatingSystem.UNKNOWN;

  // extra
  /* NOP */

  // fname
  if (this.flags['fname'] !== void 0) {
    for (i = 0, il = filename.length; i < il; ++i) {
      c = filename.charCodeAt(i);
      if (c > 0xff) { output[op++] = (c >>> 8) & 0xff; }
      output[op++] = c & 0xff;
    }
    output[op++] = 0; // null termination
  }

  // fcomment
  if (this.flags['comment']) {
    for (i = 0, il = comment.length; i < il; ++i) {
      c = comment.charCodeAt(i);
      if (c > 0xff) { output[op++] = (c >>> 8) & 0xff; }
      output[op++] = c & 0xff;
    }
    output[op++] = 0; // null termination
  }

  // fhcrc
  if (this.flags['fhcrc']) {
    crc16 = Zlib.CRC32.calc(output, 0, op) & 0xffff;
    output[op++] = (crc16      ) & 0xff;
    output[op++] = (crc16 >>> 8) & 0xff;
  }

  // add compress option
  this.deflateOptions['outputBuffer'] = output;
  this.deflateOptions['outputIndex'] = op;

  // compress
  rawdeflate = new Zlib.RawDeflate(input, this.deflateOptions);
  output = rawdeflate.compress();
  op = rawdeflate.op;

  // expand buffer
  if (USE_TYPEDARRAY) {
    if (op + 8 > output.buffer.byteLength) {
      this.output = new Uint8Array(op + 8);
      this.output.set(new Uint8Array(output.buffer));
      output = this.output;
    } else {
      output = new Uint8Array(output.buffer);
    }
  }

  // crc32
  crc32 = Zlib.CRC32.calc(input);
  output[op++] = (crc32       ) & 0xff;
  output[op++] = (crc32 >>>  8) & 0xff;
  output[op++] = (crc32 >>> 16) & 0xff;
  output[op++] = (crc32 >>> 24) & 0xff;

  // input size
  il = input.length;
  output[op++] = (il       ) & 0xff;
  output[op++] = (il >>>  8) & 0xff;
  output[op++] = (il >>> 16) & 0xff;
  output[op++] = (il >>> 24) & 0xff;

  this.ip = ip;

  if (USE_TYPEDARRAY && op < output.length) {
    this.output = output = output.subarray(0, op);
  }

  return output;
};

/** @enum {number} */
Zlib.Gzip.OperatingSystem = {
  FAT: 0,
  AMIGA: 1,
  VMS: 2,
  UNIX: 3,
  VM_CMS: 4,
  ATARI_TOS: 5,
  HPFS: 6,
  MACINTOSH: 7,
  Z_SYSTEM: 8,
  CP_M: 9,
  TOPS_20: 10,
  NTFS: 11,
  QDOS: 12,
  ACORN_RISCOS: 13,
  UNKNOWN: 255
};

/** @enum {number} */
Zlib.Gzip.FlagsMask = {
  FTEXT: 0x01,
  FHCRC: 0x02,
  FEXTRA: 0x04,
  FNAME: 0x08,
  FCOMMENT: 0x10
};


/**
 * @fileoverview Heap Sort 実装. ハフマン符号化で使用する.
 */

/**
 * カスタムハフマン符号で使用するヒープ実装
 * @param {number} length ヒープサイズ.
 * @constructor
 */
Zlib.Heap = function(length) {
  this.buffer = new (USE_TYPEDARRAY ? Uint16Array : Array)(length * 2);
  this.length = 0;
};

/**
 * 親ノードの index 取得
 * @param {number} index 子ノードの index.
 * @return {number} 親ノードの index.
 *
 */
Zlib.Heap.prototype.getParent = function(index) {
  return ((index - 2) / 4 | 0) * 2;
};

/**
 * 子ノードの index 取得
 * @param {number} index 親ノードの index.
 * @return {number} 子ノードの index.
 */
Zlib.Heap.prototype.getChild = function(index) {
  return 2 * index + 2;
};

/**
 * Heap に値を追加する
 * @param {number} index キー index.
 * @param {number} value 値.
 * @return {number} 現在のヒープ長.
 */
Zlib.Heap.prototype.push = function(index, value) {
  var current, parent,
      heap = this.buffer,
      swap;

  current = this.length;
  heap[this.length++] = value;
  heap[this.length++] = index;

  // ルートノードにたどり着くまで入れ替えを試みる
  while (current > 0) {
    parent = this.getParent(current);

    // 親ノードと比較して親の方が小さければ入れ替える
    if (heap[current] > heap[parent]) {
      swap = heap[current];
      heap[current] = heap[parent];
      heap[parent] = swap;

      swap = heap[current + 1];
      heap[current + 1] = heap[parent + 1];
      heap[parent + 1] = swap;

      current = parent;
    // 入れ替えが必要なくなったらそこで抜ける
    } else {
      break;
    }
  }

  return this.length;
};

/**
 * Heapから一番大きい値を返す
 * @return {{index: number, value: number, length: number}} {index: キーindex,
 *     value: 値, length: ヒープ長} の Object.
 */
Zlib.Heap.prototype.pop = function() {
  var index, value,
      heap = this.buffer, swap,
      current, parent;

  value = heap[0];
  index = heap[1];

  // 後ろから値を取る
  this.length -= 2;
  heap[0] = heap[this.length];
  heap[1] = heap[this.length + 1];

  parent = 0;
  // ルートノードから下がっていく
  while (true) {
    current = this.getChild(parent);

    // 範囲チェック
    if (current >= this.length) {
      break;
    }

    // 隣のノードと比較して、隣の方が値が大きければ隣を現在ノードとして選択
    if (current + 2 < this.length && heap[current + 2] > heap[current]) {
      current += 2;
    }

    // 親ノードと比較して親の方が小さい場合は入れ替える
    if (heap[current] > heap[parent]) {
      swap = heap[parent];
      heap[parent] = heap[current];
      heap[current] = swap;

      swap = heap[parent + 1];
      heap[parent + 1] = heap[current + 1];
      heap[current + 1] = swap;
    } else {
      break;
    }

    parent = current;
  }

  return {index: index, value: value, length: this.length};
};


/* vim:set expandtab ts=2 sw=2 tw=80: */

/**
 * @fileoverview Deflate (RFC1951) 符号化アルゴリズム実装.
 */


/**
 * Raw Deflate 実装
 *
 * @constructor
 * @param {!(Array.<number>|Uint8Array)} input 符号化する対象のバッファ.
 * @param {Object=} opt_params option parameters.
 *
 * typed array が使用可能なとき、outputBuffer が Array は自動的に Uint8Array に
 * 変換されます.
 * 別のオブジェクトになるため出力バッファを参照している変数などは
 * 更新する必要があります.
 */
Zlib.RawDeflate = function(input, opt_params) {
  /** @type {Zlib.RawDeflate.CompressionType} */
  this.compressionType = Zlib.RawDeflate.CompressionType.DYNAMIC;
  /** @type {number} */
  this.lazy = 0;
  /** @type {!(Array.<number>|Uint32Array)} */
  this.freqsLitLen;
  /** @type {!(Array.<number>|Uint32Array)} */
  this.freqsDist;
  /** @type {!(Array.<number>|Uint8Array)} */
  this.input =
    (USE_TYPEDARRAY && input instanceof Array) ? new Uint8Array(input) : input;
  /** @type {!(Array.<number>|Uint8Array)} output output buffer. */
  this.output;
  /** @type {number} pos output buffer position. */
  this.op = 0;

  // option parameters
  if (opt_params) {
    if (opt_params['lazy']) {
      this.lazy = opt_params['lazy'];
    }
    if (typeof opt_params['compressionType'] === 'number') {
      this.compressionType = opt_params['compressionType'];
    }
    if (opt_params['outputBuffer']) {
      this.output =
        (USE_TYPEDARRAY && opt_params['outputBuffer'] instanceof Array) ?
        new Uint8Array(opt_params['outputBuffer']) : opt_params['outputBuffer'];
    }
    if (typeof opt_params['outputIndex'] === 'number') {
      this.op = opt_params['outputIndex'];
    }
  }

  if (!this.output) {
    this.output = new (USE_TYPEDARRAY ? Uint8Array : Array)(0x8000);
  }
};

/**
 * @enum {number}
 */
Zlib.RawDeflate.CompressionType = {
  NONE: 0,
  FIXED: 1,
  DYNAMIC: 2,
  RESERVED: 3
};


/**
 * LZ77 の最小マッチ長
 * @const
 * @type {number}
 */
Zlib.RawDeflate.Lz77MinLength = 3;

/**
 * LZ77 の最大マッチ長
 * @const
 * @type {number}
 */
Zlib.RawDeflate.Lz77MaxLength = 258;

/**
 * LZ77 のウィンドウサイズ
 * @const
 * @type {number}
 */
Zlib.RawDeflate.WindowSize = 0x8000;

/**
 * 最長の符号長
 * @const
 * @type {number}
 */
Zlib.RawDeflate.MaxCodeLength = 16;

/**
 * ハフマン符号の最大数値
 * @const
 * @type {number}
 */
Zlib.RawDeflate.HUFMAX = 286;

/**
 * 固定ハフマン符号の符号化テーブル
 * @const
 * @type {Array.<Array.<number, number>>}
 */
Zlib.RawDeflate.FixedHuffmanTable = (function() {
  var table = [], i;

  for (i = 0; i < 288; i++) {
    switch (true) {
      case (i <= 143): table.push([i       + 0x030, 8]); break;
      case (i <= 255): table.push([i - 144 + 0x190, 9]); break;
      case (i <= 279): table.push([i - 256 + 0x000, 7]); break;
      case (i <= 287): table.push([i - 280 + 0x0C0, 8]); break;
      default:
        throw 'invalid literal: ' + i;
    }
  }

  return table;
})();

/**
 * DEFLATE ブロックの作成
 * @return {!(Array.<number>|Uint8Array)} 圧縮済み byte array.
 */
Zlib.RawDeflate.prototype.compress = function() {
  /** @type {!(Array.<number>|Uint8Array)} */
  var blockArray;
  /** @type {number} */
  var position;
  /** @type {number} */
  var length;

  var input = this.input;

  // compression
  switch (this.compressionType) {
    case Zlib.RawDeflate.CompressionType.NONE:
      // each 65535-Byte (length header: 16-bit)
      for (position = 0, length = input.length; position < length;) {
        blockArray = USE_TYPEDARRAY ?
          input.subarray(position, position + 0xffff) :
          input.slice(position, position + 0xffff);
        position += blockArray.length;
        this.makeNocompressBlock(blockArray, (position === length));
      }
      break;
    case Zlib.RawDeflate.CompressionType.FIXED:
      this.output = this.makeFixedHuffmanBlock(input, true);
      this.op = this.output.length;
      break;
    case Zlib.RawDeflate.CompressionType.DYNAMIC:
      this.output = this.makeDynamicHuffmanBlock(input, true);
      this.op = this.output.length;
      break;
    default:
      throw 'invalid compression type';
  }

  return this.output;
};

/**
 * 非圧縮ブロックの作成
 * @param {!(Array.<number>|Uint8Array)} blockArray ブロックデータ byte array.
 * @param {!boolean} isFinalBlock 最後のブロックならばtrue.
 * @return {!(Array.<number>|Uint8Array)} 非圧縮ブロック byte array.
 */
Zlib.RawDeflate.prototype.makeNocompressBlock =
function(blockArray, isFinalBlock) {
  /** @type {number} */
  var bfinal;
  /** @type {Zlib.RawDeflate.CompressionType} */
  var btype;
  /** @type {number} */
  var len;
  /** @type {number} */
  var nlen;
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;

  var output = this.output;
  var op = this.op;

  // expand buffer
  if (USE_TYPEDARRAY) {
    output = new Uint8Array(this.output.buffer);
    while (output.length <= op + blockArray.length + 5) {
      output = new Uint8Array(output.length << 1);
    }
    output.set(this.output);
  }

  // header
  bfinal = isFinalBlock ? 1 : 0;
  btype = Zlib.RawDeflate.CompressionType.NONE;
  output[op++] = (bfinal) | (btype << 1);

  // length
  len = blockArray.length;
  nlen = (~len + 0x10000) & 0xffff;
  output[op++] =          len & 0xff;
  output[op++] =  (len >>> 8) & 0xff;
  output[op++] =         nlen & 0xff;
  output[op++] = (nlen >>> 8) & 0xff;

  // copy buffer
  if (USE_TYPEDARRAY) {
     output.set(blockArray, op);
     op += blockArray.length;
     output = output.subarray(0, op);
  } else {
    for (i = 0, il = blockArray.length; i < il; ++i) {
      output[op++] = blockArray[i];
    }
    output.length = op;
  }

  this.op = op;
  this.output = output;

  return output;
};

/**
 * 固定ハフマンブロックの作成
 * @param {!(Array.<number>|Uint8Array)} blockArray ブロックデータ byte array.
 * @param {!boolean} isFinalBlock 最後のブロックならばtrue.
 * @return {!(Array.<number>|Uint8Array)} 固定ハフマン符号化ブロック byte array.
 */
Zlib.RawDeflate.prototype.makeFixedHuffmanBlock =
function(blockArray, isFinalBlock) {
  /** @type {Zlib.BitStream} */
  var stream = new Zlib.BitStream(USE_TYPEDARRAY ?
    new Uint8Array(this.output.buffer) : this.output, this.op);
  /** @type {number} */
  var bfinal;
  /** @type {Zlib.RawDeflate.CompressionType} */
  var btype;
  /** @type {!(Array.<number>|Uint16Array)} */
  var data;

  // header
  bfinal = isFinalBlock ? 1 : 0;
  btype = Zlib.RawDeflate.CompressionType.FIXED;

  stream.writeBits(bfinal, 1, true);
  stream.writeBits(btype, 2, true);

  data = this.lz77(blockArray);
  this.fixedHuffman(data, stream);

  return stream.finish();
};

/**
 * 動的ハフマンブロックの作成
 * @param {!(Array.<number>|Uint8Array)} blockArray ブロックデータ byte array.
 * @param {!boolean} isFinalBlock 最後のブロックならばtrue.
 * @return {!(Array.<number>|Uint8Array)} 動的ハフマン符号ブロック byte array.
 */
Zlib.RawDeflate.prototype.makeDynamicHuffmanBlock =
function(blockArray, isFinalBlock) {
  /** @type {Zlib.BitStream} */
  var stream = new Zlib.BitStream(USE_TYPEDARRAY ?
    new Uint8Array(this.output.buffer) : this.output, this.op);
  /** @type {number} */
  var bfinal;
  /** @type {Zlib.RawDeflate.CompressionType} */
  var btype;
  /** @type {!(Array.<number>|Uint16Array)} */
  var data;
  /** @type {number} */
  var hlit;
  /** @type {number} */
  var hdist;
  /** @type {number} */
  var hclen;
  /** @const @type {Array.<number>} */
  var hclenOrder =
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  /** @type {!(Array.<number>|Uint8Array)} */
  var litLenLengths;
  /** @type {!(Array.<number>|Uint16Array)} */
  var litLenCodes;
  /** @type {!(Array.<number>|Uint8Array)} */
  var distLengths;
  /** @type {!(Array.<number>|Uint16Array)} */
  var distCodes;
  /** @type {{
   *   codes: !(Array.<number>|Uint32Array),
   *   freqs: !(Array.<number>|Uint8Array)
   * }} */
  var treeSymbols;
  /** @type {!(Array.<number>|Uint8Array)} */
  var treeLengths;
  /** @type {Array} */
  var transLengths = new Array(19);
  /** @type {!(Array.<number>|Uint16Array)} */
  var treeCodes;
  /** @type {number} */
  var code;
  /** @type {number} */
  var bitlen;
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;

  // header
  bfinal = isFinalBlock ? 1 : 0;
  btype = Zlib.RawDeflate.CompressionType.DYNAMIC;

  stream.writeBits(bfinal, 1, true);
  stream.writeBits(btype, 2, true);

  data = this.lz77(blockArray);

  // リテラル・長さ, 距離のハフマン符号と符号長の算出
  litLenLengths = this.getLengths_(this.freqsLitLen, 15);
  litLenCodes = this.getCodesFromLengths_(litLenLengths);
  distLengths = this.getLengths_(this.freqsDist, 7);
  distCodes = this.getCodesFromLengths_(distLengths);

  // HLIT, HDIST の決定
  for (hlit = 286; hlit > 257 && litLenLengths[hlit - 1] === 0; hlit--) {}
  for (hdist = 30; hdist > 1 && distLengths[hdist - 1] === 0; hdist--) {}

  // HCLEN
  treeSymbols =
    this.getTreeSymbols_(hlit, litLenLengths, hdist, distLengths);
  treeLengths = this.getLengths_(treeSymbols.freqs, 7);
  for (i = 0; i < 19; i++) {
    transLengths[i] = treeLengths[hclenOrder[i]];
  }
  for (hclen = 19; hclen > 4 && transLengths[hclen - 1] === 0; hclen--) {}

  treeCodes = this.getCodesFromLengths_(treeLengths);

  // 出力
  stream.writeBits(hlit - 257, 5, true);
  stream.writeBits(hdist - 1, 5, true);
  stream.writeBits(hclen - 4, 4, true);
  for (i = 0; i < hclen; i++) {
    stream.writeBits(transLengths[i], 3, true);
  }

  // ツリーの出力
  for (i = 0, il = treeSymbols.codes.length; i < il; i++) {
    code = treeSymbols.codes[i];

    stream.writeBits(treeCodes[code], treeLengths[code], true);

    // extra bits
    if (code >= 16) {
      i++;
      switch (code) {
        case 16: bitlen = 2; break;
        case 17: bitlen = 3; break;
        case 18: bitlen = 7; break;
        default:
          throw 'invalid code: ' + code;
      }

      stream.writeBits(treeSymbols.codes[i], bitlen, true);
    }
  }

  this.dynamicHuffman(
    data,
    [litLenCodes, litLenLengths],
    [distCodes, distLengths],
    stream
  );

  return stream.finish();
};


/**
 * 動的ハフマン符号化(カスタムハフマンテーブル)
 * @param {!(Array.<number>|Uint16Array)} dataArray LZ77 符号化済み byte array.
 * @param {!Zlib.BitStream} stream 書き込み用ビットストリーム.
 * @return {!Zlib.BitStream} ハフマン符号化済みビットストリームオブジェクト.
 */
Zlib.RawDeflate.prototype.dynamicHuffman =
function(dataArray, litLen, dist, stream) {
  /** @type {number} */
  var index;
  /** @type {number} */
  var length;
  /** @type {number} */
  var literal;
  /** @type {number} */
  var code;
  /** @type {number} */
  var litLenCodes;
  /** @type {number} */
  var litLenLengths;
  /** @type {number} */
  var distCodes;
  /** @type {number} */
  var distLengths;

  litLenCodes = litLen[0];
  litLenLengths = litLen[1];
  distCodes = dist[0];
  distLengths = dist[1];

  // 符号を BitStream に書き込んでいく
  for (index = 0, length = dataArray.length; index < length; ++index) {
    literal = dataArray[index];

    // literal or length
    stream.writeBits(litLenCodes[literal], litLenLengths[literal], true);

    // 長さ・距離符号
    if (literal > 256) {
      // length extra
      stream.writeBits(dataArray[++index], dataArray[++index], true);
      // distance
      code = dataArray[++index];
      stream.writeBits(distCodes[code], distLengths[code], true);
      // distance extra
      stream.writeBits(dataArray[++index], dataArray[++index], true);
    // 終端
    } else if (literal === 256) {
      break;
    }
  }

  return stream;
};

/**
 * 固定ハフマン符号化
 * @param {!(Array.<number>|Uint16Array)} dataArray LZ77 符号化済み byte array.
 * @param {!Zlib.BitStream} stream 書き込み用ビットストリーム.
 * @return {!Zlib.BitStream} ハフマン符号化済みビットストリームオブジェクト.
 */
Zlib.RawDeflate.prototype.fixedHuffman = function(dataArray, stream) {
  /** @type {number} */
  var index;
  /** @type {number} */
  var length;
  /** @type {number} */
  var literal;

  // 符号を BitStream に書き込んでいく
  for (index = 0, length = dataArray.length; index < length; index++) {
    literal = dataArray[index];

    // 符号の書き込み
    Zlib.BitStream.prototype.writeBits.apply(
      stream,
      Zlib.RawDeflate.FixedHuffmanTable[literal]
    );

    // 長さ・距離符号
    if (literal > 0x100) {
      // length extra
      stream.writeBits(dataArray[++index], dataArray[++index], true);
      // distance
      stream.writeBits(dataArray[++index], 5);
      // distance extra
      stream.writeBits(dataArray[++index], dataArray[++index], true);
    // 終端
    } else if (literal === 0x100) {
      break;
    }
  }

  return stream;
};

/**
 * マッチ情報
 * @param {!number} length マッチした長さ.
 * @param {!number} backwardDistance マッチ位置との距離.
 * @constructor
 */
Zlib.RawDeflate.Lz77Match = function(length, backwardDistance) {
  /** @type {number} match length. */
  this.length = length;
  /** @type {number} backward distance. */
  this.backwardDistance = backwardDistance;
};

/**
 * 長さ符号テーブル.
 * [コード, 拡張ビット, 拡張ビット長] の配列となっている.
 * @const
 * @type {!(Array.<number>|Uint32Array)}
 */
Zlib.RawDeflate.Lz77Match.LengthCodeTable = (function(table) {
  return USE_TYPEDARRAY ? new Uint32Array(table) : table;
})((function() {
  /** @type {!Array} */
  var table = [];
  /** @type {number} */
  var i;
  /** @type {!Array.<number>} */
  var c;

  for (i = 3; i <= 258; i++) {
    c = code(i);
    table[i] = (c[2] << 24) | (c[1] << 16) | c[0];
  }

  /**
   * @param {number} length lz77 length.
   * @return {!Array.<number>} lz77 codes.
   */
  function code(length) {
    switch (true) {
      case (length === 3): return [257, length - 3, 0]; break;
      case (length === 4): return [258, length - 4, 0]; break;
      case (length === 5): return [259, length - 5, 0]; break;
      case (length === 6): return [260, length - 6, 0]; break;
      case (length === 7): return [261, length - 7, 0]; break;
      case (length === 8): return [262, length - 8, 0]; break;
      case (length === 9): return [263, length - 9, 0]; break;
      case (length === 10): return [264, length - 10, 0]; break;
      case (length <= 12): return [265, length - 11, 1]; break;
      case (length <= 14): return [266, length - 13, 1]; break;
      case (length <= 16): return [267, length - 15, 1]; break;
      case (length <= 18): return [268, length - 17, 1]; break;
      case (length <= 22): return [269, length - 19, 2]; break;
      case (length <= 26): return [270, length - 23, 2]; break;
      case (length <= 30): return [271, length - 27, 2]; break;
      case (length <= 34): return [272, length - 31, 2]; break;
      case (length <= 42): return [273, length - 35, 3]; break;
      case (length <= 50): return [274, length - 43, 3]; break;
      case (length <= 58): return [275, length - 51, 3]; break;
      case (length <= 66): return [276, length - 59, 3]; break;
      case (length <= 82): return [277, length - 67, 4]; break;
      case (length <= 98): return [278, length - 83, 4]; break;
      case (length <= 114): return [279, length - 99, 4]; break;
      case (length <= 130): return [280, length - 115, 4]; break;
      case (length <= 162): return [281, length - 131, 5]; break;
      case (length <= 194): return [282, length - 163, 5]; break;
      case (length <= 226): return [283, length - 195, 5]; break;
      case (length <= 257): return [284, length - 227, 5]; break;
      case (length === 258): return [285, length - 258, 0]; break;
      default: throw 'invalid length: ' + length;
    }
  }

  return table;
})());

/**
 * 距離符号テーブル
 * @param {!number} dist 距離.
 * @return {!Array.<number>} コード、拡張ビット、拡張ビット長の配列.
 * @private
 */
Zlib.RawDeflate.Lz77Match.prototype.getDistanceCode_ = function(dist) {
  /** @type {!Array.<number>} distance code table. */
  var r;

  switch (true) {
    case (dist === 1): r = [0, dist - 1, 0]; break;
    case (dist === 2): r = [1, dist - 2, 0]; break;
    case (dist === 3): r = [2, dist - 3, 0]; break;
    case (dist === 4): r = [3, dist - 4, 0]; break;
    case (dist <= 6): r = [4, dist - 5, 1]; break;
    case (dist <= 8): r = [5, dist - 7, 1]; break;
    case (dist <= 12): r = [6, dist - 9, 2]; break;
    case (dist <= 16): r = [7, dist - 13, 2]; break;
    case (dist <= 24): r = [8, dist - 17, 3]; break;
    case (dist <= 32): r = [9, dist - 25, 3]; break;
    case (dist <= 48): r = [10, dist - 33, 4]; break;
    case (dist <= 64): r = [11, dist - 49, 4]; break;
    case (dist <= 96): r = [12, dist - 65, 5]; break;
    case (dist <= 128): r = [13, dist - 97, 5]; break;
    case (dist <= 192): r = [14, dist - 129, 6]; break;
    case (dist <= 256): r = [15, dist - 193, 6]; break;
    case (dist <= 384): r = [16, dist - 257, 7]; break;
    case (dist <= 512): r = [17, dist - 385, 7]; break;
    case (dist <= 768): r = [18, dist - 513, 8]; break;
    case (dist <= 1024): r = [19, dist - 769, 8]; break;
    case (dist <= 1536): r = [20, dist - 1025, 9]; break;
    case (dist <= 2048): r = [21, dist - 1537, 9]; break;
    case (dist <= 3072): r = [22, dist - 2049, 10]; break;
    case (dist <= 4096): r = [23, dist - 3073, 10]; break;
    case (dist <= 6144): r = [24, dist - 4097, 11]; break;
    case (dist <= 8192): r = [25, dist - 6145, 11]; break;
    case (dist <= 12288): r = [26, dist - 8193, 12]; break;
    case (dist <= 16384): r = [27, dist - 12289, 12]; break;
    case (dist <= 24576): r = [28, dist - 16385, 13]; break;
    case (dist <= 32768): r = [29, dist - 24577, 13]; break;
    default: throw 'invalid distance';
  }

  return r;
};

/**
 * マッチ情報を LZ77 符号化配列で返す.
 * なお、ここでは以下の内部仕様で符号化している
 * [ CODE, EXTRA-BIT-LEN, EXTRA, CODE, EXTRA-BIT-LEN, EXTRA ]
 * @return {!Array.<number>} LZ77 符号化 byte array.
 */
Zlib.RawDeflate.Lz77Match.prototype.toLz77Array = function() {
  /** @type {number} */
  var length = this.length;
  /** @type {number} */
  var dist = this.backwardDistance;
  /** @type {Array} */
  var codeArray = [];
  /** @type {number} */
  var pos = 0;
  /** @type {!Array.<number>} */
  var code;

  // length
  code = Zlib.RawDeflate.Lz77Match.LengthCodeTable[length];
  codeArray[pos++] = code & 0xffff;
  codeArray[pos++] = (code >> 16) & 0xff;
  codeArray[pos++] = code >> 24;

  // distance
  code = this.getDistanceCode_(dist);
  codeArray[pos++] = code[0];
  codeArray[pos++] = code[1];
  codeArray[pos++] = code[2];

  return codeArray;
};

/**
 * LZ77 実装
 * @param {!(Array.<number>|Uint8Array)} dataArray LZ77 符号化するバイト配列.
 * @return {!(Array.<number>|Uint16Array)} LZ77 符号化した配列.
 */
Zlib.RawDeflate.prototype.lz77 = function(dataArray) {
  /** @type {number} input position */
  var position;
  /** @type {number} input length */
  var length;
  /** @type {number} loop counter */
  var i;
  /** @type {number} loop limiter */
  var il;
  /** @type {number} chained-hash-table key */
  var matchKey;
  /** @type {Object.<number, Array.<number>>} chained-hash-table */
  var table = {};
  /** @const @type {number} */
  var windowSize = Zlib.RawDeflate.WindowSize;
  /** @type {Array.<number>} match list */
  var matchList;
  /** @type {Zlib.RawDeflate.Lz77Match} longest match */
  var longestMatch;
  /** @type {Zlib.RawDeflate.Lz77Match} previous longest match */
  var prevMatch;
  /** @type {!(Array.<number>|Uint16Array)} lz77 buffer */
  var lz77buf = USE_TYPEDARRAY ?
    new Uint16Array(dataArray.length * 2) : [];
  /** @type {number} lz77 output buffer pointer */
  var pos = 0;
  /** @type {number} lz77 skip length */
  var skipLength = 0;
  /** @type {!(Array.<number>|Uint32Array)} */
  var freqsLitLen = new (USE_TYPEDARRAY ? Uint32Array : Array)(286);
  /** @type {!(Array.<number>|Uint32Array)} */
  var freqsDist = new (USE_TYPEDARRAY ? Uint32Array : Array)(30);
  /** @type {number} */
  var lazy = this.lazy;
  /** @type {*} temporary variable */
  var tmp;

  // 初期化
  if (!USE_TYPEDARRAY) {
    for (i = 0; i <= 285;) { freqsLitLen[i++] = 0; }
    for (i = 0; i <= 29;) { freqsDist[i++] = 0; }
  }
  freqsLitLen[256] = 1; // EOB の最低出現回数は 1

  /**
   * マッチデータの書き込み
   * @param {Zlib.RawDeflate.Lz77Match} match LZ77 Match data.
   * @param {!number} offset スキップ開始位置(相対指定).
   * @private
   */
  function writeMatch(match, offset) {
    /** @type {Array.<number>} */
    var lz77Array = match.toLz77Array();
    /** @type {number} */
    var i;
    /** @type {number} */
    var il;

    for (i = 0, il = lz77Array.length; i < il; ++i) {
      lz77buf[pos++] = lz77Array[i];
    }
    freqsLitLen[lz77Array[0]]++;
    freqsDist[lz77Array[3]]++;
    skipLength = match.length + offset - 1;
    prevMatch = null;
  }

  // LZ77 符号化
  for (position = 0, length = dataArray.length; position < length; ++position) {
    // ハッシュキーの作成
    for (matchKey = 0, i = 0, il = Zlib.RawDeflate.Lz77MinLength; i < il; ++i) {
      if (position + i === length) {
        break;
      }
      matchKey = (matchKey << 8) | dataArray[position + i];
    }

    // テーブルが未定義だったら作成する
    if (table[matchKey] === void 0) { table[matchKey] = []; }
    matchList = table[matchKey];

    // skip
    if (skipLength-- > 0) {
      matchList.push(position);
      continue;
    }

    // マッチテーブルの更新 (最大戻り距離を超えているものを削除する)
    while (matchList.length > 0 && position - matchList[0] > windowSize) {
      matchList.shift();
    }

    // データ末尾でマッチしようがない場合はそのまま流しこむ
    if (position + Zlib.RawDeflate.Lz77MinLength >= length) {
      if (prevMatch) {
        writeMatch(prevMatch, -1);
      }

      for (i = 0, il = length - position; i < il; ++i) {
        tmp = dataArray[position + i];
        lz77buf[pos++] = tmp;
        ++freqsLitLen[tmp];
      }
      break;
    }

    // マッチ候補から最長のものを探す
    if (matchList.length > 0) {
      longestMatch = this.searchLongestMatch_(dataArray, position, matchList);

      if (prevMatch) {
        // 現在のマッチの方が前回のマッチよりも長い
        if (prevMatch.length < longestMatch.length) {
          // write previous literal
          tmp = dataArray[position - 1];
          lz77buf[pos++] = tmp;
          ++freqsLitLen[tmp];

          // write current match
          writeMatch(longestMatch, 0);
        } else {
          // write previous match
          writeMatch(prevMatch, -1);
        }
      } else if (longestMatch.length < lazy) {
        prevMatch = longestMatch;
      } else {
        writeMatch(longestMatch, 0);
      }
    // 前回マッチしていて今回マッチがなかったら前回のを採用
    } else if (prevMatch) {
      writeMatch(prevMatch, -1);
    } else {
      tmp = dataArray[position];
      lz77buf[pos++] = tmp;
      ++freqsLitLen[tmp];
    }

    matchList.push(position); // マッチテーブルに現在の位置を保存
  }

  // 終端処理
  lz77buf[pos++] = 256;
  freqsLitLen[256]++;
  this.freqsLitLen = freqsLitLen;
  this.freqsDist = freqsDist;

  return /** @type {!(Uint16Array|Array.<number>)} */ (
    USE_TYPEDARRAY ?  lz77buf.subarray(0, pos) : lz77buf
  );
};

/**
 * マッチした候補の中から最長一致を探す
 * @param {!Object} data plain data byte array.
 * @param {!number} position plain data byte array position.
 * @param {!Array.<number>} matchList 候補となる位置の配列.
 * @return {!Zlib.RawDeflate.Lz77Match} 最長かつ最短距離のマッチオブジェクト.
 * @private
 */
Zlib.RawDeflate.prototype.searchLongestMatch_ =
function(data, position, matchList) {
  var match,
      currentMatch,
      matchMax = 0, matchLength,
      i, j, l, dl = data.length;

  // 候補を後ろから 1 つずつ絞り込んでゆく
  permatch:
  for (i = 0, l = matchList.length; i < l; i++) {
    match = matchList[l - i - 1];
    matchLength = Zlib.RawDeflate.Lz77MinLength;

    // 前回までの最長一致を末尾から一致検索する
    if (matchMax > Zlib.RawDeflate.Lz77MinLength) {
      for (j = matchMax; j > Zlib.RawDeflate.Lz77MinLength; j--) {
        if (data[match + j - 1] !== data[position + j - 1]) {
          continue permatch;
        }
      }
      matchLength = matchMax;
    }

    // 最長一致探索
    while (matchLength < Zlib.RawDeflate.Lz77MaxLength &&
           position + matchLength < dl &&
           data[match + matchLength] === data[position + matchLength]) {
      ++matchLength;
    }

    // マッチ長が同じ場合は後方を優先
    if (matchLength > matchMax) {
      currentMatch = match;
      matchMax = matchLength;
    }

    // 最長が確定したら後の処理は省略
    if (matchLength === Zlib.RawDeflate.Lz77MaxLength) {
      break;
    }
  }

  return new Zlib.RawDeflate.Lz77Match(matchMax, position - currentMatch);
};

/**
 * Tree-Transmit Symbols の算出
 * reference: PuTTY Deflate implementation
 * @param {number} hlit HLIT.
 * @param {!(Array.<number>|Uint8Array)} litlenLengths リテラルと長さ符号の符号長配列.
 * @param {number} hdist HDIST.
 * @param {!(Array.<number>|Uint8Array)} distLengths 距離符号の符号長配列.
 * @return {{
 *   codes: !(Array.<number>|Uint32Array),
 *   freqs: !(Array.<number>|Uint8Array)
 * }} Tree-Transmit Symbols.
 */
Zlib.RawDeflate.prototype.getTreeSymbols_ =
function(hlit, litlenLengths, hdist, distLengths) {
  var src = new (USE_TYPEDARRAY ? Uint32Array : Array)(hlit + hdist),
      i, j, runLength, l,
      result = new (USE_TYPEDARRAY ? Uint32Array : Array)(286 + 30),
      nResult,
      rpt,
      freqs = new (USE_TYPEDARRAY ? Uint8Array : Array)(19);

  j = 0;
  for (i = 0; i < hlit; i++) {
    src[j++] = litlenLengths[i];
  }
  for (i = 0; i < hdist; i++) {
    src[j++] = distLengths[i];
  }

  // 初期化
  if (!USE_TYPEDARRAY) {
    for (i = 0, l = freqs.length; i < l; ++i) {
      freqs[i] = 0;
    }
  }

  // 符号化
  nResult = 0;
  for (i = 0, l = src.length; i < l; i += j) {
    // Run Length Encoding
    for (j = 1; i + j < l && src[i + j] === src[i]; ++j) {}

    runLength = j;

    if (src[i] === 0) {
      // 0 の繰り返しが 3 回未満ならばそのまま
      if (runLength < 3) {
        while (runLength-- > 0) {
          result[nResult++] = 0;
          freqs[0]++;
        }
      } else {
        while (runLength > 0) {
          // 繰り返しは最大 138 までなので切り詰める
          rpt = (runLength < 138 ? runLength : 138);

          if (rpt > runLength - 3 && rpt < runLength) {
            rpt = runLength - 3;
          }

          // 3-10 回 -> 17
          if (rpt <= 10) {
            result[nResult++] = 17;
            result[nResult++] = rpt - 3;
            freqs[17]++;
          // 11-138 回 -> 18
          } else {
            result[nResult++] = 18;
            result[nResult++] = rpt - 11;
            freqs[18]++;
          }

          runLength -= rpt;
        }
      }
    } else {
      result[nResult++] = src[i];
      freqs[src[i]]++;
      runLength--;

      // 繰り返し回数が3回未満ならばランレングス符号は要らない
      if (runLength < 3) {
        while (runLength-- > 0) {
          result[nResult++] = src[i];
          freqs[src[i]]++;
        }
      // 3 回以上ならばランレングス符号化
      } else {
        while (runLength > 0) {
          // runLengthを 3-6 で分割
          rpt = (runLength < 6 ? runLength : 6);

          if (rpt > runLength - 3 && rpt < runLength) {
            rpt = runLength - 3;
          }

          result[nResult++] = 16;
          result[nResult++] = rpt - 3;
          freqs[16]++;

          runLength -= rpt;
        }
      }
    }
  }

  return {
    codes:
      USE_TYPEDARRAY ? result.subarray(0, nResult) : result.slice(0, nResult),
    freqs: freqs
  };
};

/**
 * ハフマン符号の長さを取得する
 * @param {!(Array.<number>|Uint8Array|Uint32Array)} freqs 出現カウント.
 * @param {number} limit 符号長の制限.
 * @return {!(Array.<number>|Uint8Array)} 符号長配列.
 * @private
 */
Zlib.RawDeflate.prototype.getLengths_ = function(freqs, limit) {
  /** @type {number} */
  var nSymbols = freqs.length;
  /** @type {Zlib.Heap} */
  var heap = new Zlib.Heap(2 * Zlib.RawDeflate.HUFMAX);
  /** @type {!(Array.<number>|Uint8Array)} */
  var length = new (USE_TYPEDARRAY ? Uint8Array : Array)(nSymbols);
  /** @type {Array} */
  var nodes;
  /** @type {!(Array.<number>|Uint32Array)} */
  var values;
  /** @type {!(Array.<number>|Uint8Array)} */
  var codeLength;
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;

  // 配列の初期化
  if (!USE_TYPEDARRAY) {
    for (i = 0; i < nSymbols; i++) {
      length[i] = 0;
    }
  }

  // ヒープの構築
  for (i = 0; i < nSymbols; ++i) {
    if (freqs[i] > 0) {
      heap.push(i, freqs[i]);
    }
  }
  nodes = new Array(heap.length / 2);
  values = new (USE_TYPEDARRAY ? Uint32Array : Array)(heap.length / 2);

  // 非 0 の要素が一つだけだった場合は、そのシンボルに符号長 1 を割り当てて終了
  if (nodes.length === 1) {
    length[heap.pop().index] = 1;
    return length;
  }

  // Reverse Package Merge Algorithm による Canonical Huffman Code の符号長決定
  for (i = 0, il = heap.length / 2; i < il; ++i) {
    nodes[i] = heap.pop();
    values[i] = nodes[i].value;
  }
  codeLength = this.reversePackageMerge_(values, values.length, limit);

  for (i = 0, il = nodes.length; i < il; ++i) {
    length[nodes[i].index] = codeLength[i];
  }

  return length;
};

/**
 * Reverse Package Merge Algorithm.
 * @param {!(Array.<number>|Uint32Array)} freqs sorted probability.
 * @param {number} symbols number of symbols.
 * @param {number} limit code length limit.
 * @return {!(Array.<number>|Uint8Array)} code lengths.
 */
Zlib.RawDeflate.prototype.reversePackageMerge_ = function(freqs, symbols, limit) {
  /** @type {!(Array.<number>|Uint16Array)} */
  var minimumCost = new (USE_TYPEDARRAY ? Uint16Array : Array)(limit);
  /** @type {!(Array.<number>|Uint8Array)} */
  var flag = new (USE_TYPEDARRAY ? Uint8Array : Array)(limit);
  /** @type {!(Array.<number>|Uint8Array)} */
  var codeLength = new (USE_TYPEDARRAY ? Uint8Array : Array)(symbols);
  /** @type {Array} */
  var value = new Array(limit);
  /** @type {Array} */
  var type  = new Array(limit);
  /** @type {Array.<number>} */
  var currentPosition = new Array(limit);
  /** @type {number} */
  var excess = (1 << limit) - symbols;
  /** @type {number} */
  var half = (1 << (limit - 1));
  /** @type {number} */
  var i;
  /** @type {number} */
  var j;
  /** @type {number} */
  var t;
  /** @type {number} */
  var weight;
  /** @type {number} */
  var next;

  /**
   * @param {number} j
   */
  function takePackage(j) {
    /** @type {number} */
    var x = type[j][currentPosition[j]];

    if (x === symbols) {
      takePackage(j+1);
      takePackage(j+1);
    } else {
      --codeLength[x];
    }

    ++currentPosition[j];
  }

  minimumCost[limit-1] = symbols;

  for (j = 0; j < limit; ++j) {
    if (excess < half) {
      flag[j] = 0;
    } else {
      flag[j] = 1;
      excess -= half;
    }
    excess <<= 1;
    minimumCost[limit-2-j] = (minimumCost[limit-1-j] / 2 | 0) + symbols;
  }
  minimumCost[0] = flag[0];

  value[0] = new Array(minimumCost[0]);
  type[0]  = new Array(minimumCost[0]);
  for (j = 1; j < limit; ++j) {
    if (minimumCost[j] > 2 * minimumCost[j-1] + flag[j]) {
      minimumCost[j] = 2 * minimumCost[j-1] + flag[j];
    }
    value[j] = new Array(minimumCost[j]);
    type[j]  = new Array(minimumCost[j]);
  }

  for (i = 0; i < symbols; ++i) {
    codeLength[i] = limit;
  }

  for (t = 0; t < minimumCost[limit-1]; ++t) {
    value[limit-1][t] = freqs[t];
    type[limit-1][t]  = t;
  }

  for (i = 0; i < limit; ++i) {
    currentPosition[i] = 0;
  }
  if (flag[limit-1] === 1) {
    --codeLength[0];
    ++currentPosition[limit-1];
  }

  for (j = limit-2; j >= 0; --j) {
    i = 0;
    weight = 0;
    next = currentPosition[j+1];

    for (t = 0; t < minimumCost[j]; t++) {
      weight = value[j+1][next] + value[j+1][next+1];

      if (weight > freqs[i]) {
        value[j][t] = weight;
        type[j][t] = symbols;
        next += 2;
      } else {
        value[j][t] = freqs[i];
        type[j][t] = i;
        ++i;
      }
    }

    currentPosition[j] = 0;
    if (flag[j] === 1) {
      takePackage(j);
    }
  }

  return codeLength;
};

/**
 * 符号長配列からハフマン符号を取得する
 * reference: PuTTY Deflate implementation
 * @param {!(Array.<number>|Uint8Array)} lengths 符号長配列.
 * @return {!(Array.<number>|Uint16Array)} ハフマン符号配列.
 * @private
 */
Zlib.RawDeflate.prototype.getCodesFromLengths_ = function(lengths) {
  var codes = new (USE_TYPEDARRAY ? Uint16Array : Array)(lengths.length),
      count = [],
      startCode = [],
      code = 0, i, il, j, m;

  // Count the codes of each length.
  for (i = 0, il = lengths.length; i < il; i++) {
    count[lengths[i]] = (count[lengths[i]] | 0) + 1;
  }

  // Determine the starting code for each length block.
  for (i = 1, il = Zlib.RawDeflate.MaxCodeLength; i <= il; i++) {
    startCode[i] = code;
    code += count[i] | 0;
    code <<= 1;
  }

  // Determine the code for each symbol. Mirrored, of course.
  for (i = 0, il = lengths.length; i < il; i++) {
    code = startCode[lengths[i]];
    startCode[lengths[i]] += 1;
    codes[i] = 0;

    for (j = 0, m = lengths[i]; j < m; j++) {
      codes[i] = (codes[i] << 1) | (code & 1);
      code >>>= 1;
    }
  }

  return codes;
};


/**
 * @param {!(Array.<number>|Uint8Array)} input input buffer.
 * @param {Object=} opt_params options.
 * @constructor
 */
Zlib.Unzip = function(input, opt_params) {
  opt_params = opt_params || {};
  /** @type {!(Array.<number>|Uint8Array)} */
  this.input =
    (USE_TYPEDARRAY && (input instanceof Array)) ?
    new Uint8Array(input) : input;
  /** @type {number} */
  this.ip = 0;
  /** @type {number} */
  this.eocdrOffset;
  /** @type {number} */
  this.numberOfThisDisk;
  /** @type {number} */
  this.startDisk;
  /** @type {number} */
  this.totalEntriesThisDisk;
  /** @type {number} */
  this.totalEntries;
  /** @type {number} */
  this.centralDirectorySize;
  /** @type {number} */
  this.centralDirectoryOffset;
  /** @type {number} */
  this.commentLength;
  /** @type {(Array.<number>|Uint8Array)} */
  this.comment;
  /** @type {Array.<Zlib.Unzip.FileHeader>} */
  this.fileHeaderList;
  /** @type {Object.<string, number>} */
  this.filenameToIndex;
  /** @type {boolean} */
  this.verify = opt_params['verify'] || false;
  /** @type {(Array.<number>|Uint8Array)} */
  this.password = opt_params['password'];
};

Zlib.Unzip.CompressionMethod = Zlib.Zip.CompressionMethod;

/**
 * @type {Array.<number>}
 * @const
 */
Zlib.Unzip.FileHeaderSignature = Zlib.Zip.FileHeaderSignature;

/**
 * @type {Array.<number>}
 * @const
 */
Zlib.Unzip.LocalFileHeaderSignature = Zlib.Zip.LocalFileHeaderSignature;

/**
 * @type {Array.<number>}
 * @const
 */
Zlib.Unzip.CentralDirectorySignature = Zlib.Zip.CentralDirectorySignature;

/**
 * @param {!(Array.<number>|Uint8Array)} input input buffer.
 * @param {number} ip input position.
 * @constructor
 */
Zlib.Unzip.FileHeader = function(input, ip) {
  /** @type {!(Array.<number>|Uint8Array)} */
  this.input = input;
  /** @type {number} */
  this.offset = ip;
  /** @type {number} */
  this.length;
  /** @type {number} */
  this.version;
  /** @type {number} */
  this.os;
  /** @type {number} */
  this.needVersion;
  /** @type {number} */
  this.flags;
  /** @type {number} */
  this.compression;
  /** @type {number} */
  this.time;
  /** @type {number} */
  this.date;
  /** @type {number} */
  this.crc32;
  /** @type {number} */
  this.compressedSize;
  /** @type {number} */
  this.plainSize;
  /** @type {number} */
  this.fileNameLength;
  /** @type {number} */
  this.extraFieldLength;
  /** @type {number} */
  this.fileCommentLength;
  /** @type {number} */
  this.diskNumberStart;
  /** @type {number} */
  this.internalFileAttributes;
  /** @type {number} */
  this.externalFileAttributes;
  /** @type {number} */
  this.relativeOffset;
  /** @type {string} */
  this.filename;
  /** @type {!(Array.<number>|Uint8Array)} */
  this.extraField;
  /** @type {!(Array.<number>|Uint8Array)} */
  this.comment;
};

Zlib.Unzip.FileHeader.prototype.parse = function() {
  /** @type {!(Array.<number>|Uint8Array)} */
  var input = this.input;
  /** @type {number} */
  var ip = this.offset;

  // central file header signature
  if (input[ip++] !== Zlib.Unzip.FileHeaderSignature[0] ||
      input[ip++] !== Zlib.Unzip.FileHeaderSignature[1] ||
      input[ip++] !== Zlib.Unzip.FileHeaderSignature[2] ||
      input[ip++] !== Zlib.Unzip.FileHeaderSignature[3]) {
    throw new Error('invalid file header signature');
  }

  // version made by
  this.version = input[ip++];
  this.os = input[ip++];

  // version needed to extract
  this.needVersion = input[ip++] | (input[ip++] << 8);

  // general purpose bit flag
  this.flags = input[ip++] | (input[ip++] << 8);

  // compression method
  this.compression = input[ip++] | (input[ip++] << 8);

  // last mod file time
  this.time = input[ip++] | (input[ip++] << 8);

  //last mod file date
  this.date = input[ip++] | (input[ip++] << 8);

  // crc-32
  this.crc32 = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // compressed size
  this.compressedSize = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // uncompressed size
  this.plainSize = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // file name length
  this.fileNameLength = input[ip++] | (input[ip++] << 8);

  // extra field length
  this.extraFieldLength = input[ip++] | (input[ip++] << 8);

  // file comment length
  this.fileCommentLength = input[ip++] | (input[ip++] << 8);

  // disk number start
  this.diskNumberStart = input[ip++] | (input[ip++] << 8);

  // internal file attributes
  this.internalFileAttributes = input[ip++] | (input[ip++] << 8);

  // external file attributes
  this.externalFileAttributes =
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24);

  // relative offset of local header
  this.relativeOffset = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // file name
  this.filename = String.fromCharCode.apply(null, USE_TYPEDARRAY ?
    input.subarray(ip, ip += this.fileNameLength) :
    input.slice(ip, ip += this.fileNameLength)
  );

  // extra field
  this.extraField = USE_TYPEDARRAY ?
    input.subarray(ip, ip += this.extraFieldLength) :
    input.slice(ip, ip += this.extraFieldLength);

  // file comment
  this.comment = USE_TYPEDARRAY ?
    input.subarray(ip, ip + this.fileCommentLength) :
    input.slice(ip, ip + this.fileCommentLength);

  this.length = ip - this.offset;
};

/**
 * @param {!(Array.<number>|Uint8Array)} input input buffer.
 * @param {number} ip input position.
 * @constructor
 */
Zlib.Unzip.LocalFileHeader = function(input, ip) {
  /** @type {!(Array.<number>|Uint8Array)} */
  this.input = input;
  /** @type {number} */
  this.offset = ip;
  /** @type {number} */
  this.length;
  /** @type {number} */
  this.needVersion;
  /** @type {number} */
  this.flags;
  /** @type {number} */
  this.compression;
  /** @type {number} */
  this.time;
  /** @type {number} */
  this.date;
  /** @type {number} */
  this.crc32;
  /** @type {number} */
  this.compressedSize;
  /** @type {number} */
  this.plainSize;
  /** @type {number} */
  this.fileNameLength;
  /** @type {number} */
  this.extraFieldLength;
  /** @type {string} */
  this.filename;
  /** @type {!(Array.<number>|Uint8Array)} */
  this.extraField;
};

Zlib.Unzip.LocalFileHeader.Flags = Zlib.Zip.Flags;

Zlib.Unzip.LocalFileHeader.prototype.parse = function() {
  /** @type {!(Array.<number>|Uint8Array)} */
  var input = this.input;
  /** @type {number} */
  var ip = this.offset;

  // local file header signature
  if (input[ip++] !== Zlib.Unzip.LocalFileHeaderSignature[0] ||
      input[ip++] !== Zlib.Unzip.LocalFileHeaderSignature[1] ||
      input[ip++] !== Zlib.Unzip.LocalFileHeaderSignature[2] ||
      input[ip++] !== Zlib.Unzip.LocalFileHeaderSignature[3]) {
    throw new Error('invalid local file header signature');
  }

  // version needed to extract
  this.needVersion = input[ip++] | (input[ip++] << 8);

  // general purpose bit flag
  this.flags = input[ip++] | (input[ip++] << 8);

  // compression method
  this.compression = input[ip++] | (input[ip++] << 8);

  // last mod file time
  this.time = input[ip++] | (input[ip++] << 8);

  //last mod file date
  this.date = input[ip++] | (input[ip++] << 8);

  // crc-32
  this.crc32 = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // compressed size
  this.compressedSize = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // uncompressed size
  this.plainSize = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // file name length
  this.fileNameLength = input[ip++] | (input[ip++] << 8);

  // extra field length
  this.extraFieldLength = input[ip++] | (input[ip++] << 8);

  // file name
  this.filename = String.fromCharCode.apply(null, USE_TYPEDARRAY ?
    input.subarray(ip, ip += this.fileNameLength) :
    input.slice(ip, ip += this.fileNameLength)
  );

  // extra field
  this.extraField = USE_TYPEDARRAY ?
    input.subarray(ip, ip += this.extraFieldLength) :
    input.slice(ip, ip += this.extraFieldLength);

  this.length = ip - this.offset;
};


Zlib.Unzip.prototype.searchEndOfCentralDirectoryRecord = function() {
  /** @type {!(Array.<number>|Uint8Array)} */
  var input = this.input;
  /** @type {number} */
  var ip;

  for (ip = input.length - 12; ip > 0; --ip) {
    if (input[ip  ] === Zlib.Unzip.CentralDirectorySignature[0] &&
        input[ip+1] === Zlib.Unzip.CentralDirectorySignature[1] &&
        input[ip+2] === Zlib.Unzip.CentralDirectorySignature[2] &&
        input[ip+3] === Zlib.Unzip.CentralDirectorySignature[3]) {
      this.eocdrOffset = ip;
      return;
    }
  }

  throw new Error('End of Central Directory Record not found');
};

Zlib.Unzip.prototype.parseEndOfCentralDirectoryRecord = function() {
  /** @type {!(Array.<number>|Uint8Array)} */
  var input = this.input;
  /** @type {number} */
  var ip;

  if (!this.eocdrOffset) {
    this.searchEndOfCentralDirectoryRecord();
  }
  ip = this.eocdrOffset;

  // signature
  if (input[ip++] !== Zlib.Unzip.CentralDirectorySignature[0] ||
      input[ip++] !== Zlib.Unzip.CentralDirectorySignature[1] ||
      input[ip++] !== Zlib.Unzip.CentralDirectorySignature[2] ||
      input[ip++] !== Zlib.Unzip.CentralDirectorySignature[3]) {
    throw new Error('invalid signature');
  }

  // number of this disk
  this.numberOfThisDisk = input[ip++] | (input[ip++] << 8);

  // number of the disk with the start of the central directory
  this.startDisk = input[ip++] | (input[ip++] << 8);

  // total number of entries in the central directory on this disk
  this.totalEntriesThisDisk = input[ip++] | (input[ip++] << 8);

  // total number of entries in the central directory
  this.totalEntries = input[ip++] | (input[ip++] << 8);

  // size of the central directory
  this.centralDirectorySize = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // offset of start of central directory with respect to the starting disk number
  this.centralDirectoryOffset = (
    (input[ip++]      ) | (input[ip++] <<  8) |
    (input[ip++] << 16) | (input[ip++] << 24)
  ) >>> 0;

  // .ZIP file comment length
  this.commentLength = input[ip++] | (input[ip++] << 8);

  // .ZIP file comment
  this.comment = USE_TYPEDARRAY ?
    input.subarray(ip, ip + this.commentLength) :
    input.slice(ip, ip + this.commentLength);
};

Zlib.Unzip.prototype.parseFileHeader = function() {
  /** @type {Array.<Zlib.Unzip.FileHeader>} */
  var filelist = [];
  /** @type {Object.<string, number>} */
  var filetable = {};
  /** @type {number} */
  var ip;
  /** @type {Zlib.Unzip.FileHeader} */
  var fileHeader;
  /*: @type {number} */
  var i;
  /*: @type {number} */
  var il;

  if (this.fileHeaderList) {
    return;
  }

  if (this.centralDirectoryOffset === void 0) {
    this.parseEndOfCentralDirectoryRecord();
  }
  ip = this.centralDirectoryOffset;

  for (i = 0, il = this.totalEntries; i < il; ++i) {
    fileHeader = new Zlib.Unzip.FileHeader(this.input, ip);
    fileHeader.parse();
    ip += fileHeader.length;
    filelist[i] = fileHeader;
    filetable[fileHeader.filename] = i;
  }

  if (this.centralDirectorySize < ip - this.centralDirectoryOffset) {
    throw new Error('invalid file header size');
  }

  this.fileHeaderList = filelist;
  this.filenameToIndex = filetable;
};

/**
 * @param {number} index file header index.
 * @param {Object=} opt_params
 * @return {!(Array.<number>|Uint8Array)} file data.
 */
Zlib.Unzip.prototype.getFileData = function(index, opt_params) {
  opt_params = opt_params || {};
  /** @type {!(Array.<number>|Uint8Array)} */
  var input = this.input;
  /** @type {Array.<Zlib.Unzip.FileHeader>} */
  var fileHeaderList = this.fileHeaderList;
  /** @type {Zlib.Unzip.LocalFileHeader} */
  var localFileHeader;
  /** @type {number} */
  var offset;
  /** @type {number} */
  var length;
  /** @type {!(Array.<number>|Uint8Array)} */
  var buffer;
  /** @type {number} */
  var crc32;
  /** @type {Array.<number>|Uint32Array|Object} */
  var key;
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;

  if (!fileHeaderList) {
    this.parseFileHeader();
  }

  if (fileHeaderList[index] === void 0) {
    throw new Error('wrong index');
  }

  offset = fileHeaderList[index].relativeOffset;
  localFileHeader = new Zlib.Unzip.LocalFileHeader(this.input, offset);
  localFileHeader.parse();
  offset += localFileHeader.length;
  length = localFileHeader.compressedSize;

  // decryption
  if ((localFileHeader.flags & Zlib.Unzip.LocalFileHeader.Flags.ENCRYPT) !== 0) {
    if (!(opt_params['password'] || this.password)) {
      throw new Error('please set password');
    }
    key =  this.createDecryptionKey(opt_params['password'] || this.password);

    // encryption header
    for(i = offset, il = offset + 12; i < il; ++i) {
      this.decode(key, input[i]);
    }
    offset += 12;
    length -= 12;

    // decryption
    for (i = offset, il = offset + length; i < il; ++i) {
      input[i] = this.decode(key, input[i]);
    }
  }

  switch (localFileHeader.compression) {
    case Zlib.Unzip.CompressionMethod.STORE:
      buffer = USE_TYPEDARRAY ?
        this.input.subarray(offset, offset + length) :
        this.input.slice(offset, offset + length);
      break;
    case Zlib.Unzip.CompressionMethod.DEFLATE:
      buffer = new Zlib.RawInflate(this.input, {
        'index': offset,
        'bufferSize': localFileHeader.plainSize
      }).decompress();
      break;
    default:
      throw new Error('unknown compression type');
  }

  if (this.verify) {
    crc32 = Zlib.CRC32.calc(buffer);
    if (localFileHeader.crc32 !== crc32) {
      throw new Error(
        'wrong crc: file=0x' + localFileHeader.crc32.toString(16) +
        ', data=0x' + crc32.toString(16)
      );
    }
  }

  return buffer;
};

/**
 * @return {Array.<string>}
 */
Zlib.Unzip.prototype.getFilenames = function() {
  /** @type {Array.<string>} */
  var filenameList = [];
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;
  /** @type {Array.<Zlib.Unzip.FileHeader>} */
  var fileHeaderList;

  if (!this.fileHeaderList) {
    this.parseFileHeader();
  }
  fileHeaderList = this.fileHeaderList;

  for (i = 0, il = fileHeaderList.length; i < il; ++i) {
    filenameList[i] = fileHeaderList[i].filename;
  }

  return filenameList;
};

/**
 * @param {string} filename extract filename.
 * @param {Object=} opt_params
 * @return {!(Array.<number>|Uint8Array)} decompressed data.
 */
Zlib.Unzip.prototype.decompress = function(filename, opt_params) {
  /** @type {number} */
  var index;

  if (!this.filenameToIndex) {
    this.parseFileHeader();
  }
  index = this.filenameToIndex[filename];

  if (index === void 0) {
    throw new Error(filename + ' not found');
  }

  return this.getFileData(index, opt_params);
};

/**
 * @param {(Array.<number>|Uint8Array)} password
 */
Zlib.Unzip.prototype.setPassword = function(password) {
  this.password = password;
};

/**
 * @param {(Array.<number>|Uint32Array|Object)} key
 * @param {number} n
 * @return {number}
 */
Zlib.Unzip.prototype.decode = function(key, n) {
  n ^= this.getByte(/** @type {(Array.<number>|Uint32Array)} */(key));
  this.updateKeys(/** @type {(Array.<number>|Uint32Array)} */(key), n);

  return n;
};

// common method
Zlib.Unzip.prototype.updateKeys = Zlib.Zip.prototype.updateKeys;
Zlib.Unzip.prototype.createDecryptionKey = Zlib.Zip.prototype.createEncryptionKey;
Zlib.Unzip.prototype.getByte = Zlib.Zip.prototype.getByte;

/**
 * @fileoverview 雑多な関数群をまとめたモジュール実装.
 */


/**
 * Byte String から Byte Array に変換.
 * @param {!string} str byte string.
 * @return {!Array.<number>} byte array.
 */
Zlib.Util.stringToByteArray = function(str) {
  /** @type {!Array.<(string|number)>} */
  var tmp = str.split('');
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;

  for (i = 0, il = tmp.length; i < il; i++) {
    tmp[i] = (tmp[i].charCodeAt(0) & 0xff) >>> 0;
  }

  return tmp;
};


/**
 * @fileoverview Adler32 checksum 実装.
 */


/**
 * Adler32 ハッシュ値の作成
 * @param {!(Array|Uint8Array|string)} array 算出に使用する byte array.
 * @return {number} Adler32 ハッシュ値.
 */
Zlib.Adler32 = function(array) {
  if (typeof(array) === 'string') {
    array = Zlib.Util.stringToByteArray(array);
  }
  return Zlib.Adler32.update(1, array);
};

/**
 * Adler32 ハッシュ値の更新
 * @param {number} adler 現在のハッシュ値.
 * @param {!(Array|Uint8Array)} array 更新に使用する byte array.
 * @return {number} Adler32 ハッシュ値.
 */
Zlib.Adler32.update = function(adler, array) {
  /** @type {number} */
  var s1 = adler & 0xffff;
  /** @type {number} */
  var s2 = (adler >>> 16) & 0xffff;
  /** @type {number} array length */
  var len = array.length;
  /** @type {number} loop length (don't overflow) */
  var tlen;
  /** @type {number} array index */
  var i = 0;

  while (len > 0) {
    tlen = len > Zlib.Adler32.OptimizationParameter ?
      Zlib.Adler32.OptimizationParameter : len;
    len -= tlen;
    do {
      s1 += array[i++];
      s2 += s1;
    } while (--tlen);

    s1 %= 65521;
    s2 %= 65521;
  }

  return ((s2 << 16) | s1) >>> 0;
};

/**
 * Adler32 最適化パラメータ
 * 現状では 1024 程度が最適.
 * @see http://jsperf.com/adler-32-simple-vs-optimized/3
 * @define {number}
 */
Zlib.Adler32.OptimizationParameter = 1024;




/**
 * ビットストリーム
 * @constructor
 * @param {!(Array|Uint8Array)=} buffer output buffer.
 * @param {number=} bufferPosition start buffer pointer.
 */
Zlib.BitStream = function(buffer, bufferPosition) {
  /** @type {number} buffer index. */
  this.index = typeof bufferPosition === 'number' ? bufferPosition : 0;
  /** @type {number} bit index. */
  this.bitindex = 0;
  /** @type {!(Array|Uint8Array)} bit-stream output buffer. */
  this.buffer = buffer instanceof (USE_TYPEDARRAY ? Uint8Array : Array) ?
    buffer :
    new (USE_TYPEDARRAY ? Uint8Array : Array)(Zlib.BitStream.DefaultBlockSize);

  // 入力された index が足りなかったら拡張するが、倍にしてもダメなら不正とする
  if (this.buffer.length * 2 <= this.index) {
    throw new Error("invalid index");
  } else if (this.buffer.length <= this.index) {
    this.expandBuffer();
  }
};

/**
 * デフォルトブロックサイズ.
 * @const
 * @type {number}
 */
Zlib.BitStream.DefaultBlockSize = 0x8000;

/**
 * expand buffer.
 * @return {!(Array|Uint8Array)} new buffer.
 */
Zlib.BitStream.prototype.expandBuffer = function() {
  /** @type {!(Array|Uint8Array)} old buffer. */
  var oldbuf = this.buffer;
  /** @type {number} loop counter. */
  var i;
  /** @type {number} loop limiter. */
  var il = oldbuf.length;
  /** @type {!(Array|Uint8Array)} new buffer. */
  var buffer =
    new (USE_TYPEDARRAY ? Uint8Array : Array)(il << 1);

  // copy buffer
  if (USE_TYPEDARRAY) {
    buffer.set(oldbuf);
  } else {
    // XXX: loop unrolling
    for (i = 0; i < il; ++i) {
      buffer[i] = oldbuf[i];
    }
  }

  return (this.buffer = buffer);
};


/**
 * 数値をビットで指定した数だけ書き込む.
 * @param {number} number 書き込む数値.
 * @param {number} n 書き込むビット数.
 * @param {boolean=} reverse 逆順に書き込むならば true.
 */
Zlib.BitStream.prototype.writeBits = function(number, n, reverse) {
  var buffer = this.buffer;
  var index = this.index;
  var bitindex = this.bitindex;

  /** @type {number} current octet. */
  var current = buffer[index];
  /** @type {number} loop counter. */
  var i;

  /**
   * 32-bit 整数のビット順を逆にする
   * @param {number} n 32-bit integer.
   * @return {number} reversed 32-bit integer.
   * @private
   */
  function rev32_(n) {
    return (Zlib.BitStream.ReverseTable[n & 0xFF] << 24) |
      (Zlib.BitStream.ReverseTable[n >>> 8 & 0xFF] << 16) |
      (Zlib.BitStream.ReverseTable[n >>> 16 & 0xFF] << 8) |
      Zlib.BitStream.ReverseTable[n >>> 24 & 0xFF];
  }

  if (reverse && n > 1) {
    number = n > 8 ?
      rev32_(number) >> (32 - n) :
      Zlib.BitStream.ReverseTable[number] >> (8 - n);
  }

  // Byte 境界を超えないとき
  if (n + bitindex < 8) {
    current = (current << n) | number;
    bitindex += n;
  // Byte 境界を超えるとき
  } else {
    for (i = 0; i < n; ++i) {
      current = (current << 1) | ((number >> n - i - 1) & 1);

      // next byte
      if (++bitindex === 8) {
        bitindex = 0;
        buffer[index++] = Zlib.BitStream.ReverseTable[current];
        current = 0;

        // expand
        if (index === buffer.length) {
          buffer = this.expandBuffer();
        }
      }
    }
  }
  buffer[index] = current;

  this.buffer = buffer;
  this.bitindex = bitindex;
  this.index = index;
};


/**
 * ストリームの終端処理を行う
 * @return {!(Array|Uint8Array)} 終端処理後のバッファを byte array で返す.
 */
Zlib.BitStream.prototype.finish = function() {
  var buffer = this.buffer;
  var index = this.index;

  /** @type {!(Array|Uint8Array)} output buffer. */
  var output;

  // bitindex が 0 の時は余分に index が進んでいる状態
  if (this.bitindex > 0) {
    buffer[index] <<= 8 - this.bitindex;
    buffer[index] = Zlib.BitStream.ReverseTable[buffer[index]];
    index++;
  }

  // array truncation
  if (USE_TYPEDARRAY) {
    output = buffer.subarray(0, index);
  } else {
    buffer.length = index;
    output = buffer;
  }

  return output;
};

/**
 * 0-255 のビット順を反転したテーブル
 * @const
 * @type {!(Uint8Array|Array.<number>)}
 */
Zlib.BitStream.ReverseTable = (function(table) {
  return table;
})((function() {
  /** @type {!(Array|Uint8Array)} reverse table. */
  var table = new (USE_TYPEDARRAY ? Uint8Array : Array)(256);
  /** @type {number} loop counter. */
  var i;

  // generate
  for (i = 0; i < 256; ++i) {
    table[i] = (function(n) {
      var r = n;
      var s = 7;

      for (n >>>= 1; n; n >>>= 1) {
        r <<= 1;
        r |= n & 1;
        --s;
      }

      return (r << s & 0xff) >>> 0;
    })(i);
  }

  return table;
})());


/**
 * @fileoverview CRC32 実装.
 */


/** @define {boolean} */
var ZLIB_CRC32_COMPACT = false;

/**
 * CRC32 ハッシュ値を取得
 * @param {!(Array.<number>|Uint8Array)} data data byte array.
 * @param {number=} pos data position.
 * @param {number=} length data length.
 * @return {number} CRC32.
 */
Zlib.CRC32.calc = function(data, pos, length) {
  return Zlib.CRC32.update(data, 0, pos, length);
};

/**
 * CRC32ハッシュ値を更新
 * @param {!(Array.<number>|Uint8Array)} data data byte array.
 * @param {number} crc CRC32.
 * @param {number=} pos data position.
 * @param {number=} length data length.
 * @return {number} CRC32.
 */
Zlib.CRC32.update = function(data, crc, pos, length) {
  var table = Zlib.CRC32.Table;
  var i = (typeof pos === 'number') ? pos : (pos = 0);
  var il = (typeof length === 'number') ? length : data.length;

  crc ^= 0xffffffff;

  // loop unrolling for performance
  for (i = il & 7; i--; ++pos) {
    crc = (crc >>> 8) ^ table[(crc ^ data[pos]) & 0xff];
  }
  for (i = il >> 3; i--; pos += 8) {
    crc = (crc >>> 8) ^ table[(crc ^ data[pos    ]) & 0xff];
    crc = (crc >>> 8) ^ table[(crc ^ data[pos + 1]) & 0xff];
    crc = (crc >>> 8) ^ table[(crc ^ data[pos + 2]) & 0xff];
    crc = (crc >>> 8) ^ table[(crc ^ data[pos + 3]) & 0xff];
    crc = (crc >>> 8) ^ table[(crc ^ data[pos + 4]) & 0xff];
    crc = (crc >>> 8) ^ table[(crc ^ data[pos + 5]) & 0xff];
    crc = (crc >>> 8) ^ table[(crc ^ data[pos + 6]) & 0xff];
    crc = (crc >>> 8) ^ table[(crc ^ data[pos + 7]) & 0xff];
  }

  return (crc ^ 0xffffffff) >>> 0;
};

/**
 * @param {number} num
 * @param {number} crc
 * @returns {number}
 */
Zlib.CRC32.single = function(num, crc) {
  return (Zlib.CRC32.Table[(num ^ crc) & 0xff] ^ (num >>> 8)) >>> 0;
};

/**
 * @type {Array.<number>}
 * @const
 * @private
 */
Zlib.CRC32.Table_ = [
  0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f,
  0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988,
  0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2,
  0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7,
  0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9,
  0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172,
  0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c,
  0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59,
  0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423,
  0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924,
  0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106,
  0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433,
  0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d,
  0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e,
  0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950,
  0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65,
  0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7,
  0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0,
  0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa,
  0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f,
  0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81,
  0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a,
  0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84,
  0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1,
  0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb,
  0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc,
  0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e,
  0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b,
  0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55,
  0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236,
  0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28,
  0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d,
  0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f,
  0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38,
  0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242,
  0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777,
  0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69,
  0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2,
  0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc,
  0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9,
  0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693,
  0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94,
  0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d
];

/**
 * @type {!(Array.<number>|Uint32Array)} CRC-32 Table.
 * @const
 */
Zlib.CRC32.Table = ZLIB_CRC32_COMPACT ? (function() {
  /** @type {!(Array.<number>|Uint32Array)} */
  var table = new (USE_TYPEDARRAY ? Uint32Array : Array)(256);
  /** @type {number} */
  var c;
  /** @type {number} */
  var i;
  /** @type {number} */
  var j;

  for (i = 0; i < 256; ++i) {
    c = i;
    for (j = 0; j < 8; ++j) {
      c = (c & 1) ? (0xedB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }

  return table;
})() : USE_TYPEDARRAY ? new Uint32Array(Zlib.CRC32.Table_) : Zlib.CRC32.Table_;

/**
 * @fileoverview Deflate (RFC1951) 実装.
 * Deflateアルゴリズム本体は Zlib.RawDeflate で実装されている.
 */

/**
 * Zlib Deflate
 * @constructor
 * @param {!(Array|Uint8Array)} input 符号化する対象の byte array.
 * @param {Object=} opt_params option parameters.
 */
Zlib.Deflate = function(input, opt_params) {
  /** @type {!(Array|Uint8Array)} */
  this.input = input;
  /** @type {!(Array|Uint8Array)} */
  this.output =
    new (USE_TYPEDARRAY ? Uint8Array : Array)(Zlib.Deflate.DefaultBufferSize);
  /** @type {Zlib.Deflate.CompressionType} */
  this.compressionType = Zlib.Deflate.CompressionType.DYNAMIC;
  /** @type {Zlib.RawDeflate} */
  this.rawDeflate;
  /** @type {Object} */
  var rawDeflateOption = {};
  /** @type {string} */
  var prop;

  // option parameters
  if (opt_params || !(opt_params = {})) {
    if (typeof opt_params['compressionType'] === 'number') {
      this.compressionType = opt_params['compressionType'];
    }
  }

  // copy options
  for (prop in opt_params) {
    rawDeflateOption[prop] = opt_params[prop];
  }

  // set raw-deflate output buffer
  rawDeflateOption['outputBuffer'] = this.output;

  this.rawDeflate = new Zlib.RawDeflate(this.input, rawDeflateOption);
};

/**
 * @const
 * @type {number} デフォルトバッファサイズ.
 */
Zlib.Deflate.DefaultBufferSize = 0x8000;

/**
 * @enum {number}
 */
Zlib.Deflate.CompressionType = Zlib.RawDeflate.CompressionType;

/**
 * 直接圧縮に掛ける.
 * @param {!(Array|Uint8Array)} input target buffer.
 * @param {Object=} opt_params option parameters.
 * @return {!(Array|Uint8Array)} compressed data byte array.
 */
Zlib.Deflate.compress = function(input, opt_params) {
  return (new Zlib.Deflate(input, opt_params)).compress();
};

/**
 * Deflate Compression.
 * @return {!(Array|Uint8Array)} compressed data byte array.
 */
Zlib.Deflate.prototype.compress = function() {
  /** @type {Zlib.CompressionMethod} */
  var cm;
  /** @type {number} */
  var cinfo;
  /** @type {number} */
  var cmf;
  /** @type {number} */
  var flg;
  /** @type {number} */
  var fcheck;
  /** @type {number} */
  var fdict;
  /** @type {number} */
  var flevel;
  /** @type {number} */
  var clevel;
  /** @type {number} */
  var adler;
  /** @type {boolean} */
  var error = false;
  /** @type {!(Array|Uint8Array)} */
  var output;
  /** @type {number} */
  var pos = 0;

  output = this.output;

  // Compression Method and Flags
  cm = Zlib.CompressionMethod.DEFLATE;
  switch (cm) {
    case Zlib.CompressionMethod.DEFLATE:
      cinfo = Math.LOG2E * Math.log(Zlib.RawDeflate.WindowSize) - 8;
      break;
    default:
      throw new Error('invalid compression method');
  }
  cmf = (cinfo << 4) | cm;
  output[pos++] = cmf;

  // Flags
  fdict = 0;
  switch (cm) {
    case Zlib.CompressionMethod.DEFLATE:
      switch (this.compressionType) {
        case Zlib.Deflate.CompressionType.NONE: flevel = 0; break;
        case Zlib.Deflate.CompressionType.FIXED: flevel = 1; break;
        case Zlib.Deflate.CompressionType.DYNAMIC: flevel = 2; break;
        default: throw new Error('unsupported compression type');
      }
      break;
    default:
      throw new Error('invalid compression method');
  }
  flg = (flevel << 6) | (fdict << 5);
  fcheck = 31 - (cmf * 256 + flg) % 31;
  flg |= fcheck;
  output[pos++] = flg;

  // Adler-32 checksum
  adler = Zlib.Adler32(this.input);

  this.rawDeflate.op = pos;
  output = this.rawDeflate.compress();
  pos = output.length;

  if (USE_TYPEDARRAY) {
    // subarray 分を元にもどす
    output = new Uint8Array(output.buffer);
    // expand buffer
    if (output.length <= pos + 4) {
      this.output = new Uint8Array(output.length + 4);
      this.output.set(output);
      output = this.output;
    }
    output = output.subarray(0, pos + 4);
  }

  // adler32
  output[pos++] = (adler >> 24) & 0xff;
  output[pos++] = (adler >> 16) & 0xff;
  output[pos++] = (adler >>  8) & 0xff;
  output[pos++] = (adler      ) & 0xff;

  return output;
};


//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Modified for encapsulation in igv module
// * no exports
// * no global definition
// * noConflict not supported (as _ is encapsulated its not needed)


// Create a safe reference to the Underscore object for use below.
var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
};

(function () {

    // Baseline setup
    // --------------


    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var
        push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create;

    // Naked function reference for surrogate-prototype-swapping.
    var Ctor = function () {
    };


    // Current version.
    _.VERSION = '1.8.3';

    // Internal function that returns an efficient (for current engines) version
    // of the passed-in callback, to be repeatedly applied in other Underscore
    // functions.
    var optimizeCb = function (func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount) {
            case 1:
                return function (value) {
                    return func.call(context, value);
                };
            case 2:
                return function (value, other) {
                    return func.call(context, value, other);
                };
            case 3:
                return function (value, index, collection) {
                    return func.call(context, value, index, collection);
                };
            case 4:
                return function (accumulator, value, index, collection) {
                    return func.call(context, accumulator, value, index, collection);
                };
        }
        return function () {
            return func.apply(context, arguments);
        };
    };

    // A mostly-internal function to generate callbacks that can be applied
    // to each element in a collection, returning the desired result — either
    // identity, an arbitrary callback, a property matcher, or a property accessor.
    var cb = function (value, context, argCount) {
        if (value == null) return _.identity;
        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
        if (_.isObject(value)) return _.matcher(value);
        return _.property(value);
    };
    _.iteratee = function (value, context) {
        return cb(value, context, Infinity);
    };

    // An internal function for creating assigner functions.
    var createAssigner = function (keysFunc, undefinedOnly) {
        return function (obj) {
            var length = arguments.length;
            if (length < 2 || obj == null) return obj;
            for (var index = 1; index < length; index++) {
                var source = arguments[index],
                    keys = keysFunc(source),
                    l = keys.length;
                for (var i = 0; i < l; i++) {
                    var key = keys[i];
                    if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
                }
            }
            return obj;
        };
    };

    // An internal function for creating a new object that inherits from another.
    var baseCreate = function (prototype) {
        if (!_.isObject(prototype)) return {};
        if (nativeCreate) return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor;
        Ctor.prototype = null;
        return result;
    };

    var property = function (key) {
        return function (obj) {
            return obj == null ? void 0 : obj[key];
        };
    };

    // Helper for collection methods to determine whether a collection
    // should be iterated as an array or as an object
    // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
    // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property('length');
    var isArrayLike = function (collection) {
        var length = getLength(collection);
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles raw objects in addition to array-likes. Treats all
    // sparse array-likes as if they were dense.
    _.each = _.forEach = function (obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj)) {
            for (i = 0, length = obj.length; i < length; i++) {
                iteratee(obj[i], i, obj);
            }
        } else {
            var keys = _.keys(obj);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    };

    // Return the results of applying the iteratee to each element.
    _.map = _.collect = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            results = Array(length);
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    };

    // Create a reducing function iterating left or right.
    function createReduce(dir) {
        // Optimized iterator function as using arguments.length
        // in the main function will deoptimize the, see #1991.
        function iterator(obj, iteratee, memo, keys, index, length) {
            for (; index >= 0 && index < length; index += dir) {
                var currentKey = keys ? keys[index] : index;
                memo = iteratee(memo, obj[currentKey], currentKey, obj);
            }
            return memo;
        }

        return function (obj, iteratee, memo, context) {
            iteratee = optimizeCb(iteratee, context, 4);
            var keys = !isArrayLike(obj) && _.keys(obj),
                length = (keys || obj).length,
                index = dir > 0 ? 0 : length - 1;
            // Determine the initial value if none is provided.
            if (arguments.length < 3) {
                memo = obj[keys ? keys[index] : index];
                index += dir;
            }
            return iterator(obj, iteratee, memo, keys, index, length);
        };
    }

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`.
    _.reduce = _.foldl = _.inject = createReduce(1);

    // The right-associative version of reduce, also known as `foldr`.
    _.reduceRight = _.foldr = createReduce(-1);

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function (obj, predicate, context) {
        var key;
        if (isArrayLike(obj)) {
            key = _.findIndex(obj, predicate, context);
        } else {
            key = _.findKey(obj, predicate, context);
        }
        if (key !== void 0 && key !== -1) return obj[key];
    };

    // Return all the elements that pass a truth test.
    // Aliased as `select`.
    _.filter = _.select = function (obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        _.each(obj, function (value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function (obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context);
    };

    // Determine whether all of the elements match a truth test.
    // Aliased as `all`.
    _.every = _.all = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
    };

    // Determine if at least one element in the object matches a truth test.
    // Aliased as `any`.
    _.some = _.any = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;
    };

    // Determine if the array or object contains a given item (using `===`).
    // Aliased as `includes` and `include`.
    _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
        if (!isArrayLike(obj)) obj = _.values(obj);
        if (typeof fromIndex != 'number' || guard) fromIndex = 0;
        return _.indexOf(obj, item, fromIndex) >= 0;
    };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function (obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function (value) {
            var func = isFunc ? method : value[method];
            return func == null ? func : func.apply(value, args);
        });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function (obj, key) {
        return _.map(obj, _.property(key));
    };

    // Convenience version of a common use case of `filter`: selecting only objects
    // containing specific `key:value` pairs.
    _.where = function (obj, attrs) {
        return _.filter(obj, _.matcher(attrs));
    };

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    _.findWhere = function (obj, attrs) {
        return _.find(obj, _.matcher(attrs));
    };

    // Return the maximum element (or element-based computation).
    _.max = function (obj, iteratee, context) {
        var result = -Infinity, lastComputed = -Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value > result) {
                    result = value;
                }
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function (value, index, list) {
                computed = iteratee(value, index, list);
                if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };

    // Return the minimum element (or element-based computation).
    _.min = function (obj, iteratee, context) {
        var result = Infinity, lastComputed = Infinity,
            value, computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value < result) {
                    result = value;
                }
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function (value, index, list) {
                computed = iteratee(value, index, list);
                if (computed < lastComputed || computed === Infinity && result === Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };

    // Shuffle a collection, using the modern version of the
    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
    _.shuffle = function (obj) {
        var set = isArrayLike(obj) ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
            rand = _.random(0, index);
            if (rand !== index) shuffled[index] = shuffled[rand];
            shuffled[rand] = set[index];
        }
        return shuffled;
    };

    // Sample **n** random values from a collection.
    // If **n** is not specified, returns a single random element.
    // The internal `guard` argument allows it to work with `map`.
    _.sample = function (obj, n, guard) {
        if (n == null || guard) {
            if (!isArrayLike(obj)) obj = _.values(obj);
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };

    // Sort the object's values by a criterion produced by an iteratee.
    _.sortBy = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        return _.pluck(_.map(obj, function (value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iteratee(value, index, list)
            };
        }).sort(function (left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index - right.index;
        }), 'value');
    };

    // An internal function used for aggregate "group by" operations.
    var group = function (behavior) {
        return function (obj, iteratee, context) {
            var result = {};
            iteratee = cb(iteratee, context);
            _.each(obj, function (value, index) {
                var key = iteratee(value, index, obj);
                behavior(result, value, key);
            });
            return result;
        };
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = group(function (result, value, key) {
        if (_.has(result, key)) result[key].push(value); else result[key] = [value];
    });

    // Indexes the object's values by a criterion, similar to `groupBy`, but for
    // when you know that your index values will be unique.
    _.indexBy = group(function (result, value, key) {
        result[key] = value;
    });

    // Counts instances of an object that group by a certain criterion. Pass
    // either a string attribute to count by, or a function that returns the
    // criterion.
    _.countBy = group(function (result, value, key) {
        if (_.has(result, key)) result[key]++; else result[key] = 1;
    });

    // Safely create a real, live array from anything iterable.
    _.toArray = function (obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (isArrayLike(obj)) return _.map(obj, _.identity);
        return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function (obj) {
        if (obj == null) return 0;
        return isArrayLike(obj) ? obj.length : _.keys(obj).length;
    };

    // Split a collection into two arrays: one whose elements all satisfy the given
    // predicate, and one whose elements all do not satisfy the predicate.
    _.partition = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var pass = [], fail = [];
        _.each(obj, function (value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [pass, fail];
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function (array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[0];
        return _.initial(array, array.length - n);
    };

    // Returns everything but the last entry of the array. Especially useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N.
    _.initial = function (array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array.
    _.last = function (array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[array.length - 1];
        return _.rest(array, Math.max(0, array.length - n));
    };

    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
    // Especially useful on the arguments object. Passing an **n** will return
    // the rest N values in the array.
    _.rest = _.tail = _.drop = function (array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
    };

    // Trim out all falsy values from an array.
    _.compact = function (array) {
        return _.filter(array, _.identity);
    };

    // Internal implementation of a recursive `flatten` function.
    var flatten = function (input, shallow, strict, startIndex) {
        var output = [], idx = 0;
        for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
            var value = input[i];
            if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
                //flatten current level of array or arguments object
                if (!shallow) value = flatten(value, shallow, strict);
                var j = 0, len = value.length;
                output.length += len;
                while (j < len) {
                    output[idx++] = value[j++];
                }
            } else if (!strict) {
                output[idx++] = value;
            }
        }
        return output;
    };

    // Flatten out an array, either recursively (by default), or just one level.
    _.flatten = function (array, shallow) {
        return flatten(array, shallow, false);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function (array) {
        return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function (array, isSorted, iteratee, context) {
        if (!_.isBoolean(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = false;
        }
        if (iteratee != null) iteratee = cb(iteratee, context);
        var result = [];
        var seen = [];
        for (var i = 0, length = getLength(array); i < length; i++) {
            var value = array[i],
                computed = iteratee ? iteratee(value, i, array) : value;
            if (isSorted) {
                if (!i || seen !== computed) result.push(value);
                seen = computed;
            } else if (iteratee) {
                if (!_.contains(seen, computed)) {
                    seen.push(computed);
                    result.push(value);
                }
            } else if (!_.contains(result, value)) {
                result.push(value);
            }
        }
        return result;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function () {
        return _.uniq(flatten(arguments, true, true));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays.
    _.intersection = function (array) {
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = getLength(array); i < length; i++) {
            var item = array[i];
            if (_.contains(result, item)) continue;
            for (var j = 1; j < argsLength; j++) {
                if (!_.contains(arguments[j], item)) break;
            }
            if (j === argsLength) result.push(item);
        }
        return result;
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function (array) {
        var rest = flatten(arguments, true, true, 1);
        return _.filter(array, function (value) {
            return !_.contains(rest, value);
        });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function () {
        return _.unzip(arguments);
    };

    // Complement of _.zip. Unzip accepts an array of arrays and groups
    // each array's elements on shared indices
    _.unzip = function (array) {
        var length = array && _.max(array, getLength).length || 0;
        var result = Array(length);

        for (var index = 0; index < length; index++) {
            result[index] = _.pluck(array, index);
        }
        return result;
    };

    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function (list, values) {
        var result = {};
        for (var i = 0, length = getLength(list); i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };

    // Generator function to create the findIndex and findLastIndex functions
    function createPredicateIndexFinder(dir) {
        return function (array, predicate, context) {
            predicate = cb(predicate, context);
            var length = getLength(array);
            var index = dir > 0 ? 0 : length - 1;
            for (; index >= 0 && index < length; index += dir) {
                if (predicate(array[index], index, array)) return index;
            }
            return -1;
        };
    }

    // Returns the first index on an array-like that passes a predicate test
    _.findIndex = createPredicateIndexFinder(1);
    _.findLastIndex = createPredicateIndexFinder(-1);

    // Use a comparator function to figure out the smallest index at which
    // an object should be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function (array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0, high = getLength(array);
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
        }
        return low;
    };

    // Generator function to create the indexOf and lastIndexOf functions
    function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function (array, item, idx) {
            var i = 0, length = getLength(array);
            if (typeof idx == 'number') {
                if (dir > 0) {
                    i = idx >= 0 ? idx : Math.max(idx + length, i);
                } else {
                    length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
                }
            } else if (sortedIndex && idx && length) {
                idx = sortedIndex(array, item);
                return array[idx] === item ? idx : -1;
            }
            if (item !== item) {
                idx = predicateFind(slice.call(array, i, length), _.isNaN);
                return idx >= 0 ? idx + i : -1;
            }
            for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
                if (array[idx] === item) return idx;
            }
            return -1;
        };
    }

    // Return the position of the first occurrence of an item in an array,
    // or -1 if the item is not included in the array.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function (start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }

        return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Determines whether to execute a function as a constructor
    // or a normal function with the provided arguments
    var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
    };

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
    // available.
    _.bind = function (func, context) {
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
        var args = slice.call(arguments, 2);
        var bound = function () {
            return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
        };
        return bound;
    };

    // Partially apply a function by creating a version that has had some of its
    // arguments pre-filled, without changing its dynamic `this` context. _ acts
    // as a placeholder, allowing any combination of arguments to be pre-filled.
    _.partial = function (func) {
        var boundArgs = slice.call(arguments, 1);
        var bound = function () {
            var position = 0, length = boundArgs.length;
            var args = Array(length);
            for (var i = 0; i < length; i++) {
                args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
            }
            while (position < arguments.length) args.push(arguments[position++]);
            return executeBound(func, bound, this, this, args);
        };
        return bound;
    };

    // Bind a number of an object's methods to that object. Remaining arguments
    // are the method names to be bound. Useful for ensuring that all callbacks
    // defined on an object belong to it.
    _.bindAll = function (obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error('bindAll must be passed function names');
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj);
        }
        return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function (func, hasher) {
        var memoize = function (key) {
            var cache = memoize.cache;
            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
            if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
            return cache[address];
        };
        memoize.cache = {};
        return memoize;
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function (func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function () {
            return func.apply(null, args);
        }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = _.partial(_.delay, _, 1);

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    _.throttle = function (func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function () {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function () {
            var now = _.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function (func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function () {
            var last = _.now() - timestamp;

            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                }
            }
        };

        return function () {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function (func, wrapper) {
        return _.partial(wrapper, func);
    };

    // Returns a negated version of the passed-in predicate.
    _.negate = function (predicate) {
        return function () {
            return !predicate.apply(this, arguments);
        };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function () {
        var args = arguments;
        var start = args.length - 1;
        return function () {
            var i = start;
            var result = args[start].apply(this, arguments);
            while (i--) result = args[i].call(this, result);
            return result;
        };
    };

    // Returns a function that will only be executed on and after the Nth call.
    _.after = function (times, func) {
        return function () {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    // Returns a function that will only be executed up to (but not including) the Nth call.
    _.before = function (times, func) {
        var memo;
        return function () {
            if (--times > 0) {
                memo = func.apply(this, arguments);
            }
            if (times <= 1) func = null;
            return memo;
        };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = _.partial(_.before, 2);

    // Object Functions
    // ----------------

    // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
    var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
        'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

    function collectNonEnumProps(obj, keys) {
        var nonEnumIdx = nonEnumerableProps.length;
        var constructor = obj.constructor;
        var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

        // Constructor is a special case.
        var prop = 'constructor';
        if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

        while (nonEnumIdx--) {
            prop = nonEnumerableProps[nonEnumIdx];
            if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
                keys.push(prop);
            }
        }
    }

    // Retrieve the names of an object's own properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function (obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    };

    // Retrieve all the property names of an object.
    _.allKeys = function (obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };

    // Returns the results of applying the iteratee to each element of the object
    // In contrast to _.map it returns an object
    _.mapObject = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = _.keys(obj),
            length = keys.length,
            results = {},
            currentKey;
        for (var index = 0; index < length; index++) {
            currentKey = keys[index];
            results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    };

    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function (obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function (obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = createAssigner(_.allKeys);

    // Assigns a given object with all the own properties in the passed-in object(s)
    // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    _.extendOwn = _.assign = createAssigner(_.keys);

    // Returns the first key on an object that passes a predicate test
    _.findKey = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = _.keys(obj), key;
        for (var i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            if (predicate(obj[key], key, obj)) return key;
        }
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function (object, oiteratee, context) {
        var result = {}, obj = object, iteratee, keys;
        if (obj == null) return result;
        if (_.isFunction(oiteratee)) {
            keys = _.allKeys(obj);
            iteratee = optimizeCb(oiteratee, context);
        } else {
            keys = flatten(arguments, false, false, 1);
            iteratee = function (value, key, obj) {
                return key in obj;
            };
            obj = Object(obj);
        }
        for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i];
            var value = obj[key];
            if (iteratee(value, key, obj)) result[key] = value;
        }
        return result;
    };

    // Return a copy of the object without the blacklisted properties.
    _.omit = function (obj, iteratee, context) {
        if (_.isFunction(iteratee)) {
            iteratee = _.negate(iteratee);
        } else {
            var keys = _.map(flatten(arguments, false, false, 1), String);
            iteratee = function (value, key) {
                return !_.contains(keys, key);
            };
        }
        return _.pick(obj, iteratee, context);
    };

    // Fill in a given object with default properties.
    _.defaults = createAssigner(_.allKeys, true);

    // Creates an object that inherits from the given prototype object.
    // If additional properties are provided then they will be added to the
    // created object.
    _.create = function (prototype, props) {
        var result = baseCreate(prototype);
        if (props) _.extendOwn(result, props);
        return result;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function (obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function (obj, interceptor) {
        interceptor(obj);
        return obj;
    };

    // Returns whether an object has a given set of `key:value` pairs.
    _.isMatch = function (object, attrs) {
        var keys = _.keys(attrs), length = keys.length;
        if (object == null) return !length;
        var obj = Object(object);
        for (var i = 0; i < length; i++) {
            var key = keys[i];
            if (attrs[key] !== obj[key] || !(key in obj)) return false;
        }
        return true;
    };


    // Internal recursive comparison function for `isEqual`.
    var eq = function (a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, regular expressions, dates, and booleans are compared by value.
            case '[object RegExp]':
            // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return '' + a === '' + b;
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive.
                // Object(NaN) is equivalent to NaN
                if (+a !== +a) return +b !== +b;
                // An `egal` comparison is performed for other numeric values.
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a === +b;
        }

        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if (typeof a != 'object' || typeof b != 'object') return false;

            // Objects with different constructors are not equivalent, but `Object`s or `Array`s
            // from different frames are.
            var aCtor = a.constructor, bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                _.isFunction(bCtor) && bCtor instanceof bCtor)
                && ('constructor' in a && 'constructor' in b)) {
                return false;
            }
        }
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

        // Initializing stack of traversed objects.
        // It's done here since we only need them for objects and arrays comparison.
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] === a) return bStack[length] === b;
        }

        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);

        // Recursively compare objects and arrays.
        if (areArrays) {
            // Compare array lengths to determine if a deep comparison is necessary.
            length = a.length;
            if (length !== b.length) return false;
            // Deep compare the contents, ignoring non-numeric properties.
            while (length--) {
                if (!eq(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            // Deep compare objects.
            var keys = _.keys(a), key;
            length = keys.length;
            // Ensure that both objects contain the same number of properties before comparing deep equality.
            if (_.keys(b).length !== length) return false;
            while (length--) {
                // Deep compare each member
                key = keys[length];
                if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return true;
    };

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function (a, b) {
        return eq(a, b);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function (obj) {
        if (obj == null) return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
        return _.keys(obj).length === 0;
    };

    // Is a given value a DOM element?
    _.isElement = function (obj) {
        return !!(obj && obj.nodeType === 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function (obj) {
            return toString.call(obj) === '[object Array]';
        };

    // Is a given variable an object?
    _.isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
    _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
        _['is' + name] = function (obj) {
            return toString.call(obj) === '[object ' + name + ']';
        };
    });

    // Define a fallback version of the method in browsers (ahem, IE < 9), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
        _.isArguments = function (obj) {
            return _.has(obj, 'callee');
        };
    }

    // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
    // IE 11 (#1621), and in Safari 8 (#1929).
    if (typeof /./ != 'function' && typeof Int8Array != 'object') {
        _.isFunction = function (obj) {
            return typeof obj == 'function' || false;
        };
    }

    // Is a given object a finite number?
    _.isFinite = function (obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function (obj) {
        return _.isNumber(obj) && obj !== +obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function (obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };

    // Is a given value equal to null?
    _.isNull = function (obj) {
        return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function (obj) {
        return obj === void 0;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function (obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Keep the identity function around for default iteratees.
    _.identity = function (value) {
        return value;
    };

    // Predicate-generating functions. Often useful outside of Underscore.
    _.constant = function (value) {
        return function () {
            return value;
        };
    };

    _.noop = function () {
    };

    _.property = property;

    // Generates a function for a given object that returns a given property.
    _.propertyOf = function (obj) {
        return obj == null ? function () {
        } : function (key) {
            return obj[key];
        };
    };

    // Returns a predicate for checking whether an object has a given set of
    // `key:value` pairs.
    _.matcher = _.matches = function (attrs) {
        attrs = _.extendOwn({}, attrs);
        return function (obj) {
            return _.isMatch(obj, attrs);
        };
    };

    // Run a function **n** times.
    _.times = function (n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
    };

    // Return a random integer between min and max (inclusive).
    _.random = function (min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    // A (possibly faster) way to get the current timestamp as an integer.
    _.now = Date.now || function () {
            return new Date().getTime();
        };

    // List of HTML entities for escaping.
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
    };
    var unescapeMap = _.invert(escapeMap);

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    var createEscaper = function (map) {
        var escaper = function (match) {
            return map[match];
        };
        // Regexes for identifying a key that needs to be escaped
        var source = '(?:' + _.keys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function (string) {
            string = string == null ? '' : '' + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);

    // If the value of the named `property` is a function then invoke it with the
    // `object` as context; otherwise, return it.
    _.result = function (object, property, fallback) {
        var value = object == null ? void 0 : object[property];
        if (value === void 0) {
            value = fallback;
        }
        return _.isFunction(value) ? value.call(object) : value;
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function (prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

    var escapeChar = function (match) {
        return '\\' + escapes[match];
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function (text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);

        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp([
                (settings.escape || noMatch).source,
                (settings.interpolate || noMatch).source,
                (settings.evaluate || noMatch).source
            ].join('|') + '|$', 'g');

        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;

            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }

            // Adobe VMs need the match returned to produce the correct offest.
            return match;
        });
        source += "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," +
            "print=function(){__p+=__j.call(arguments,'');};\n" +
            source + 'return __p;\n';

        try {
            var render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }

        var template = function (data) {
            return render.call(this, data, _);
        };

        // Provide the compiled source as a convenience for precompilation.
        var argument = settings.variable || 'obj';
        template.source = 'function(' + argument + '){\n' + source + '}';

        return template;
    };

    // Add a "chain" function. Start chaining a wrapped Underscore object.
    _.chain = function (obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
    };

    // OOP
    // ---------------
    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.

    // Helper function to continue chaining intermediate results.
    var result = function (instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
    };

    // Add your own custom functions to the Underscore object.
    _.mixin = function (obj) {
        _.each(_.functions(obj), function (name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function () {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result(this, func.apply(_, args));
            };
        });
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
        var method = ArrayProto[name];
        _.prototype[name] = function () {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
            return result(this, obj);
        };
    });

    // Add all accessor Array functions to the wrapper.
    _.each(['concat', 'join', 'slice'], function (name) {
        var method = ArrayProto[name];
        _.prototype[name] = function () {
            return result(this, method.apply(this._wrapped, arguments));
        };
    });

    // Extracts the result from a wrapped and chained object.
    _.prototype.value = function () {
        return this._wrapped;
    };

    // Provide unwrapping proxy for some methods used in engine operations
    // such as arithmetic and JSON stringification.
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

    _.prototype.toString = function () {
        return '' + this._wrapped;
    };


}());

/**
 * @preserve throbber.js v 0.0.2 2014-04-30
 * http://aino.com
 *
 * Copyright (c) Aino Aktiebolag
 * Licensed under the MIT license.
 *
 */

/*global Image, module, define, window */

var Throbber;

(function (global, factory) {


    Throbber = factory(global);


}(window || this, function (window) {

    var document = window.document,

        M = Math,
        setTimeout = window.setTimeout,

        support = ( 'getContext' in document.createElement('canvas') ),

        _extend = function (defaults, obj) {
            defaults = defaults || {};
            for (var i in obj) {
                defaults[i] = obj[i];
            }
            return defaults;
        },

        _animate = (function () {

            var loops = [];
            var animating = false;

            var requestFrame = (function () {
                var r = 'RequestAnimationFrame';
                return window.requestAnimationFrame ||
                    window['webkit' + r] ||
                    window['moz' + r] ||
                    window['o' + r] ||
                    window['ms' + r] ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
            }());

            function tick() {

                requestFrame(tick);
                var now = +(new Date());

                for (var i = 0; i < loops.length; i++) {
                    var loop = loops[i];
                    loop.elapsed = now - loop.then;
                    if (loop.elapsed > loop.fpsInterval) {
                        loop.then = now - (loop.elapsed % loop.fpsInterval);
                        loop.fn();
                    }
                }
            }

            return function animate(fps, draw) {

                var now = +(new Date());
                loops.push({
                    fpsInterval: 1000 / fps,
                    then: now,
                    startTime: now,
                    elapsed: 0,
                    fn: draw
                });
                if (!animating) {
                    animating = true;
                    tick();
                }
            };
        }()),

    // convert any color to RGB array
        _getRGB = function (color) {
            if (!support) {
                return {rgb: false, alpha: 1};
            }

            var t = document.createElement('i'), rgb;

            t.style.display = 'none';
            t.style.color = color;
            document.body.appendChild(t);

            rgb = window.getComputedStyle(t, null)
                .getPropertyValue('color')
                .replace(/^rgba?\(([^\)]+)\)/, '$1').replace(/\s/g, '').split(',').splice(0, 4);

            document.body.removeChild(t);
            t = null;

            return {
                alpha: rgb.length == 4 ? rgb.pop() : 1,
                rgb: rgb
            };
        },

    // used when rotating
        _restore = function (ctx, size, back) {
            var n = back ? -2 : 2;
            ctx.translate(size / n, size / n);
        },

    // locar vars
        fade, i, l, ad, rd,

    // draw the frame
        _draw = function (alpha, o, ctx, step) {

            fade = 1 - alpha || 0;
            ad = 1;
            rd = -1;

            var size = o.size;

            if (o.clockwise === false) {
                ad = -1;
                rd = 1;
            }

            ctx.clearRect(0, 0, size, size);
            ctx.globalAlpha = o.alpha;
            ctx.lineWidth = o.strokewidth;

            for (i = 0; i < o.lines; i++) {

                l = i + step >= o.lines ? i - o.lines + step : i + step;

                ctx.strokeStyle = 'rgba(' + o.color.join(',') + ',' + M.max(0, ((l / o.lines) - fade)).toFixed(2) + ')';
                ctx.beginPath();

                ctx.moveTo(size / 2, size / 2 - o.padding / 2);
                ctx.lineTo(size / 2, 0);
                ctx.lineWidth = o.strokewidth;
                ctx.stroke();
                _restore(ctx, size, false);
                ctx.rotate(ad * ( 360 / o.lines ) * M.PI / 180);
                _restore(ctx, size, true);
            }

            if (o.rotationspeed) {
                // ctx.save();   // TODO <- this is a resource leak,  ctx.restore() is never called.
                _restore(ctx, size, false);

                ctx.rotate(rd * ( 360 / o.lines / ( 20 - o.rotationspeed * 2 ) ) * M.PI / 180); //rotate in origin
                _restore(ctx, size, true);
            }
        };


    // Throbber constructor
    function Throbber(options) {

        if (!(this instanceof Throbber )) {
            return new Throbber(options);
        }

        var elem = this.elem = document.createElement('canvas'),
            scope = this;

        if (!isNaN(options)) {
            options = {size: options};
        }

        // default options
        // note that some of these are placeholder and calculated against size if not defined
        this.o = {
            size: 34,           // diameter of loader
            rotationspeed: 6,   // rotation speed (1-10)
            clockwise: true,    // direction, set to false for counter clockwise
            color: '#fff',      // color of the spinner, can be any CSS compatible value
            fade: 300,          // duration of fadein/out when calling .start() and .stop()
            fallback: false,    // a gif fallback for non-supported browsers
            alpha: 1            // global alpha, can be defined using rgba as color or separatly
        };

        /*
         // more options, but these are calculated from size if not defined:

         fps                     // frames per second (~size)
         padding                 // diameter of clipped inner area (~size/2)
         strokewidth             // width of the lines (~size/30)
         lines                   // number of lines (~size/2+4)

         */

        // _extend options
        this.configure(options);

        // fade phase
        // 0 = idle
        // 1 = fadein
        // 2 = running
        // 3 = fadeout
        this.phase = -1;

        // references
        if (support) {
            this.ctx = elem.getContext('2d');
            elem.width = elem.height = this.o.size;
        } else if (this.o.fallback) {
            elem = this.elem = new Image();
            elem.src = this.o.fallback;
        }

        ///////////////////
        // the loop

        this.loop = (function () {

            var o = scope.o,
                alpha = 0,
                fade = 1000 / o.fade / o.fps,
                interval = 1000 / o.fps,
                step = scope.step,

                style = elem.style,
                currentStyle = elem.currentStyle,
                filter = currentStyle && currentStyle.filter || style.filter,
                ie = 'filter' in style && o.fallback && !support;

            // the canvas loop
            return function () {

                if (scope.phase == 3) {

                    // fadeout
                    alpha -= fade;
                    if (alpha <= 0) {
                        scope.phase = 0;
                    }

                }

                if (scope.phase == 1) {

                    // fadein
                    alpha += fade;
                    if (alpha >= 1) {
                        scope.phase = 2;
                    }
                }

                if (ie) {
                    style.filter = 'alpha(opacity=' + M.min(o.alpha * 100, M.max(0, Math.round(alpha * 100))) + ')';
                } else if (!support && o.fallback) {
                    style.opacity = alpha;
                } else if (support) {
                    _draw(alpha, o, scope.ctx, step);
                    step = step === 0 ? scope.o.lines : step - 1;
                }
            };
        }());

        _animate(this.o.fps, this.loop);

    }

    // Throbber prototypes
    Throbber.prototype = {

        constructor: Throbber,

        // append the loader to a HTML element
        appendTo: function (elem) {

            this.elem.style.display = 'none';
            elem.appendChild(this.elem);

            return this;
        },

        // _extend options and apply calculate meassures
        configure: function (options) {

            var o = this.o, color;

            _extend(o, options || {});

            color = _getRGB(o.color);

            // do some sensible calculations if not defined
            _extend(o, _extend({
                padding: o.size / 2,
                strokewidth: M.max(1, M.min(o.size / 30, 3)),
                lines: M.min(30, o.size / 2 + 4),
                alpha: color.alpha || 1,
                fps: M.min(30, o.size + 4)
            }, options));

            // grab the rgba array
            o.color = color.rgb;

            // copy the amount of lines into steps
            this.step = o.lines;

            // double-up for retina screens
            if (!!window.devicePixelRatio) {
                // lock element into desired end size
                this.elem.style.width = o.size + 'px';
                this.elem.style.height = o.size + 'px';

                o.size *= window.devicePixelRatio;
                o.padding *= window.devicePixelRatio;
                o.strokewidth *= window.devicePixelRatio;
            }

            return this;
        },

        // starts the animation
        start: function () {

            this.elem.style.display = 'block';
            if (this.phase == -1) {
                this.loop();
            }
            this.phase = 1;

            return this;
        },

        // stops the animation
        stop: function () {
            this.phase = 3;
            return this;
        },

        toggle: function () {
            if (this.phase == 2) {
                this.stop();
            } else {
                this.start();
            }
        }
    };

    return Throbber;

}));

/**
 * @license Colors JS Library v1.2.4
 * Copyright 2012-2013 Matt Jordan
 * Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported. (http://creativecommons.org/licenses/by-sa/3.0/)
 * https://github.com/mbjordan/Colors
 */

var Colors = {};

(function () {
    var Utils = {};

    //## Internal Utilities
    // ###Render method
    //
    // `render(map, type)`
    //
    // `map` is an object of data to render, `type` can be RGB, HSV or HSL
    Utils.render = function (map, type) {
        var rtn = {},
            keys;
        if (typeof map != "object") {
            return;
        }
        if (type === "rgb") {
            keys = ["R", "G", "B", "RGB"];
        }
        if (type === "hsv") {
            keys = ["H", "S", "V", "HSV"];
        }
        if (type === "hsl") {
            keys = ["H", "S", "L", "HSL"];
        }
        rtn[keys[0]] = map[0];
        rtn[keys[1]] = map[1];
        rtn[keys[2]] = map[2];
        rtn[keys[3]] = map[0] + " " + map[1] + " " + map[2];
        rtn.a = map;
        return rtn;
    };




    // ### Padded Hex method
    //
    // `paddedHex(number)`
    //
    // Creates a hexadecimal number, and adds a zero to the beginning if its only one digit.
    Utils.paddedHex = function (n) {
        var hex = ((n < 10) ? "0" : "") + n.toString(16);
        return (hex.length === 1) ? "0" + hex : hex;
    };

    Number.prototype.round = function (points) {
        points = points || 10;
        return parseFloat(this.toFixed(points));
    };


    // ## The Colors methods
    // ### rgb2hex method
    //
    // Change 3 RGB Ints or a single Int to a Hexadecimal color.
    //
    // `rgb2hex( [multiple Ints: R,G,B] or [single Int: COLOR] )`
    Colors.rgb2hex = function (r, g, b) {
        r = Utils.paddedHex(r);
        g = (g !== undefined) ? Utils.paddedHex(g) : r;
        b = (b !== undefined) ? Utils.paddedHex(b) : r;
        return "#" + r + g + b;
    };

    // ### hex2rgb method
    //
    // Change a hexadecimal color string to an RGB color object.
    //
    // `hex2rgb( "hex color string" ).[obj R, G, B, RGB or a]`
    Colors.hex2rgb = function (h) {
        h = h.replace("#", "");
        if (h.length === 6) {
            return Utils.render([parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)], "rgb");
        } else {
            return parseInt(h, 16);
        }
    };

    // ### hex2hsv method
    //
    // Change a hexadecimal color string to an HSV color object.
    //
    // `hex2hsv ( "hex color string" ).[obj H, S, V, HSV or a]`
    Colors.hex2hsv = function (h) {
        h = (h.charAt(0) == "#") ? h.substring(1, 7) : h;
        var r = parseInt(h.substring(0, 2), 16) / 255,
            g = parseInt(h.substring(2, 4), 16) / 255,
            b = parseInt(h.substring(4, 6), 16) / 255,
            result = {
                "h": 0,
                "s": 0,
                "v": 0
            },
            minVal = Math.min(r, g, b),
            maxVal = Math.max(r, g, b),
            delta = (maxVal - minVal),
            del_R, del_G, del_B;

        result.v = maxVal;
        if (delta === 0) {
            result.h = 0;
            result.s = 0;
        } else {
            result.s = delta / maxVal;
            del_R = (((maxVal - r) / 6) + (delta / 2)) / delta;
            del_G = (((maxVal - g) / 6) + (delta / 2)) / delta;
            del_B = (((maxVal - b) / 6) + (delta / 2)) / delta;
            if (r == maxVal) {
                result.h = del_B - del_G;
            } else if (g == maxVal) {
                result.h = (1 / 3) + del_R - del_B;
            } else if (b == maxVal) {
                result.h = (2 / 3) + del_G - del_R;
            }
            if (result.h < 0) {
                result.h += 1;
            }
            if (result.h > 1) {
                result.h -= 1;
            }
        }
        return Utils.render([Math.round(result.h * 360), Math.round(result.s * 100), Math.round(result.v * 100)], "hsv");
    };

    // ### hsv2rgb method
    //
    // Change an HSV color object or Int string to an RGB color object.
    //
    // `hsv2rgb ([obj H, S, V] or [Int H, S, V]).[obj R, G, B, RGB or a]`
    Colors.hsv2rgb = function (HSV, S, V) {
        var rgb = [],
            h, s, v, hi, f, p, q, t;

        if (typeof HSV == "object") {
            h = HSV[0];
            s = HSV[1];
            v = HSV[2];
        } else {
            h = HSV;
            s = S;
            v = V;
        }
        s = s / 100;
        v = v / 100;
        hi = Math.floor((h / 60) % 6);
        f = (h / 60) - hi;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (hi) {
        case 0:
            rgb = [v, t, p];
            break;
        case 1:
            rgb = [q, v, p];
            break;
        case 2:
            rgb = [p, v, t];
            break;
        case 3:
            rgb = [p, q, v];
            break;
        case 4:
            rgb = [t, p, v];
            break;
        case 5:
            rgb = [v, p, q];
        }
        return Utils.render([Math.min(255, Math.floor(rgb[0] * 256)), Math.min(255, Math.floor(rgb[1] * 256)), Math.min(255, Math.floor(rgb[2] * 256))], "rgb");
    };

    // ### rgb2hsl method
    //
    // Change RGB to an HSL object.
    //
    // `rgb2hsl(RGB[, G, B])`
    Colors.rgb2hsl = function (RGB, G, B) {
        var r, g, b, min, max, h, s, l, d;

        if (typeof RGB === "object") {
            r = RGB[0];
            g = RGB[1];
            b = RGB[2];
        } else {
            r = RGB;
            g = G;
            b = B;
        }

        r /= 255;
        g /= 255;
        b /= 255;

        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;

        if (max == min) {
            h = s = 0;
        } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
            }
            h /= 6;
        }

        return Utils.render([Math.floor(h * 360), (s * 100).round(1), (l * 100).round(1)], "hsl");
    };

    // ### hsv2hsl method
    //
    // Change HSV to an HSL object
    //
    // `hsv2hsl(HSV[, S, V])`
    Colors.hsv2hsl = function (H, S, V) {
        var h, s, l, _H, _S, _L, hsv, r1, g1, b1, maxColor, minColor;

        if (typeof H == "object") {
            h = H[0];
            s = H[1];
            l = H[2];
        } else {
            h = H;
            s = S;
            l = V;
        }

        hsv = this.hsv2rgb(h, s, l);
        r1 = hsv.R / 255;
        g1 = hsv.G / 255;
        b1 = hsv.B / 255;
        maxColor = Math.max(r1, g1, b1);
        minColor = Math.min(r1, g1, b1);
        _L = (maxColor + minColor) / 2;
        _S = 0;
        _H = 0;
        if (maxColor != minColor) {
            if (_L < 0.5) {
                S = (maxColor - minColor) / (maxColor + minColor);
            } else {
                S = (maxColor - minColor) / (2.0 - maxColor - minColor);
            }
            if (r1 == maxColor) {
                H = (g1 - b1) / (maxColor - minColor);
            } else if (g1 == maxColor) {
                H = 2.0 + (b1 - r1) / (maxColor - minColor);
            } else {
                H = 4.0 + (r1 - g1) / (maxColor - minColor);
            }
        }
        _L = _L * 100;
        _S = _S * 100;
        _H = _H * 60;
        if (_H < 0) {
            _H += 360;
        }
        return Utils.render([Math.floor(H), Math.floor(S), Math.floor(V)], "hsl");
    };

    // ### name2hex method
    //
    // Get the hexadecimal value of an HTML color name. Must be one of the 176 HTML color names as defined by the HTML & CSS standards.
    //
    // `name2hex ( "color name" )`
    Colors.name2hex = function (n) {
        n = n.toLowerCase();
        var nar = {
            "aliceblue": "#f0f8ff",
            "antiquewhite": "#faebd7",
            "aqua": "#00ffff",
            "aquamarine": "#7fffd4",
            "azure": "#f0ffff",
            "beige": "#f5f5dc",
            "bisque": "#ffe4c4",
            "black": "#000000",
            "blanchedalmond": "#ffebcd",
            "blue": "#0000ff",
            "blueviolet": "#8a2be2",
            "brown": "#a52a2a",
            "burlywood": "#deb887",
            "cadetblue": "#5f9ea0",
            "chartreuse": "#7fff00",
            "chocolate": "#d2691e",
            "coral": "#ff7f50",
            "cornflowerblue": "#6495ed",
            "cornsilk": "#fff8dc",
            "crimson": "#dc143c",
            "cyan": "#00ffff",
            "darkblue": "#00008b",
            "darkcyan": "#008b8b",
            "darkgoldenrod": "#b8860b",
            "darkgray": "#a9a9a9",
            "darkgrey": "#a9a9a9",
            "darkgreen": "#006400",
            "darkkhaki": "#bdb76b",
            "darkmagenta": "#8b008b",
            "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00",
            "darkorchid": "#9932cc",
            "darkred": "#8b0000",
            "darksalmon": "#e9967a",
            "darkseagreen": "#8fbc8f",
            "darkslateblue": "#483d8b",
            "darkslategray": "#2f4f4f",
            "darkslategrey": "#2f4f4f",
            "darkturquoise": "#00ced1",
            "darkviolet": "#9400d3",
            "deeppink": "#ff1493",
            "deepskyblue": "#00bfff",
            "dimgray": "#696969",
            "dimgrey": "#696969",
            "dodgerblue": "#1e90ff",
            "firebrick": "#b22222",
            "floralwhite": "#fffaf0",
            "forestgreen": "#228b22",
            "fuchsia": "#ff00ff",
            "gainsboro": "#dcdcdc",
            "ghostwhite": "#f8f8ff",
            "gold": "#ffd700",
            "goldenrod": "#daa520",
            "gray": "#808080",
            "grey": "#808080",
            "green": "#008000",
            "greenyellow": "#adff2f",
            "honeydew": "#f0fff0",
            "hotpink": "#ff69b4",
            "indianred": "#cd5c5c",
            "indigo": "#4b0082",
            "ivory": "#fffff0",
            "khaki": "#f0e68c",
            "lavender": "#e6e6fa",
            "lavenderblush": "#fff0f5",
            "lawngreen": "#7cfc00",
            "lemonchiffon": "#fffacd",
            "lightblue": "#add8e6",
            "lightcoral": "#f08080",
            "lightcyan": "#e0ffff",
            "lightgoldenrodyellow": "#fafad2",
            "lightgray": "#d3d3d3",
            "lightgrey": "#d3d3d3",
            "lightgreen": "#90ee90",
            "lightpink": "#ffb6c1",
            "lightsalmon": "#ffa07a",
            "lightseagreen": "#20b2aa",
            "lightskyblue": "#87cefa",
            "lightslategray": "#778899",
            "lightslategrey": "#778899",
            "lightsteelblue": "#b0c4de",
            "lightyellow": "#ffffe0",
            "lime": "#00ff00",
            "limegreen": "#32cd32",
            "linen": "#faf0e6",
            "magenta": "#ff00ff",
            "maroon": "#800000",
            "mediumaquamarine": "#66cdaa",
            "mediumblue": "#0000cd",
            "mediumorchid": "#ba55d3",
            "mediumpurple": "#9370d8",
            "mediumseagreen": "#3cb371",
            "mediumslateblue": "#7b68ee",
            "mediumspringgreen": "#00fa9a",
            "mediumturquoise": "#48d1cc",
            "mediumvioletred": "#c71585",
            "midnightblue": "#191970",
            "mintcream": "#f5fffa",
            "mistyrose": "#ffe4e1",
            "moccasin": "#ffe4b5",
            "navajowhite": "#ffdead",
            "navy": "#000080",
            "oldlace": "#fdf5e6",
            "olive": "#808000",
            "olivedrab": "#6b8e23",
            "orange": "#ffa500",
            "orangered": "#ff4500",
            "orchid": "#da70d6",
            "palegoldenrod": "#eee8aa",
            "palegreen": "#98fb98",
            "paleturquoise": "#afeeee",
            "palevioletred": "#d87093",
            "papayawhip": "#ffefd5",
            "peachpuff": "#ffdab9",
            "peru": "#cd853f",
            "pink": "#ffc0cb",
            "plum": "#dda0dd",
            "powderblue": "#b0e0e6",
            "purple": "#800080",
            "red": "#ff0000",
            "rosybrown": "#bc8f8f",
            "royalblue": "#4169e1",
            "saddlebrown": "#8b4513",
            "salmon": "#fa8072",
            "sandybrown": "#f4a460",
            "seagreen": "#2e8b57",
            "seashell": "#fff5ee",
            "sienna": "#a0522d",
            "silver": "#c0c0c0",
            "skyblue": "#87ceeb",
            "slateblue": "#6a5acd",
            "slategray": "#708090",
            "slategrey": "#708090",
            "snow": "#fffafa",
            "springgreen": "#00ff7f",
            "steelblue": "#4682b4",
            "tan": "#d2b48c",
            "teal": "#008080",
            "thistle": "#d8bfd8",
            "tomato": "#ff6347",
            "turquoise": "#40e0d0",
            "violet": "#ee82ee",
            "wheat": "#f5deb3",
            "white": "#ffffff",
            "whitesmoke": "#f5f5f5",
            "yellow": "#ffff00",
            "yellowgreen": "#9acd32"
        },
            r = nar[n];
        if (r === undefined) {
            return "Invalid Color Name";
        }

        return r;
    };

    // ### name2rgb method
    //
    // Get an RGB object value of an HTML named color.
    //
    // `name2rgb ( "color name" )`
    Colors.name2rgb = function (n) {
        var v = this.name2hex(n),
            t = /^[a-fA-F0-9#]{7}$/,
            icn = "Invalid Color Name";

        if (t.test(v)) {
            return this.hex2rgb(v);
        }

        return Utils.render([icn, icn, icn], "rgb");
    };

    // ### name2hsv method
    //
    // Get an HSV object value of an HTML named color.
    //
    // `name2hsv ( "color name" )`
    Colors.name2hsv = function (n) {
        var v = this.name2hex(n),
            t = /^[a-fA-F0-9#]{7}$/,
            icn = "Invalid Color Name";
        if (t.test(v)) {
            return this.hex2hsv(v);
        }

        return Utils.render([icn, icn, icn], "hsv");
    };

    // ### complement method
    //
    // Get the complementary value of multiple types of input colors.
    //
    // ```complement ( "#ffffff" )
    // complement ( [obj R, G, B] or R, G, B )```
    Colors.complement = function (c, g, b) {
        var cval, rtn;
        if (typeof c == "string" && /(#([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/.test(c)) {
            c = c.replace("#", "");
            rtn = "#";
            if (c.length === 6) {
                rtn += Utils.paddedHex(255 - this.hex2rgb(c.substr(0, 2)));
                rtn += Utils.paddedHex(255 - this.hex2rgb(c.substr(2, 2)));
                rtn += Utils.paddedHex(255 - this.hex2rgb(c.substr(4, 2)));
            }
            if (c.length === 3) {
                rtn += Utils.paddedHex(255 - this.hex2rgb(c.substr(0, 1) + c.substr(0, 1)));
                rtn += Utils.paddedHex(255 - this.hex2rgb(c.substr(1, 1) + c.substr(1, 1)));
                rtn += Utils.paddedHex(255 - this.hex2rgb(c.substr(2, 1) + c.substr(2, 1)));
            }
            return rtn;
        } else {
            if (c !== undefined && g !== undefined && b !== undefined) {
                cval = [(255 - c), (255 - g), (255 - b)];
            }
            if (typeof c == "object") {
                cval = [(255 - c[0]), (255 - c[1]), (255 - c[2])];
            }
            return Utils.render(cval, "rgb");
        }
    };

    // ### rand method
    //
    // Get a random color in either hexadecimal or RGB color modes.
    //
    // `rand ( [color mode] )`
    Colors.rand = function (mode) {
        var R, G, B;

        if (mode === "hex" || mode === undefined) {
            var chars = "0123456789abcdef",
                string_length = 6,
                hexStr = "",
                rnum, i;

            for (i = 0; i < string_length; i++) {
                rnum = Math.floor(Math.random() * chars.length);
                hexStr += chars.substring(rnum, rnum + 1);
            }
            return "#" + hexStr;
        } else if (mode == "rgb") {
            R = Math.floor(Math.random() * (0 - 255 + 1) + 255);
            G = Math.floor(Math.random() * (0 - 255 + 1) + 255);
            B = Math.floor(Math.random() * (0 - 255 + 1) + 255);
            return Utils.render([R, G, B], "rgb");
        }
    };


}());

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

var hic = (function (hic) {

    hic.AnnotationWidget = function (browser, $parent, config, trackListRetrievalCallback) {

        var $container;

        this.browser = browser;
        this.trackListRetrievalCallback = trackListRetrievalCallback;

        $container = $("<div>", { class: 'hic-annotation-presentation-button-container' });
        $parent.append($container);

        annotationPresentationButton.call(this, $container, config.title, config.alertMessage);

        annotationPanel.call(this, this.browser.$root, config.title);

    };

    hic.AnnotationWidget.prototype.updateBody = function (tracks) {

        var self = this,
            trackRenderers,
            isTrack2D,
            zi;

        self.$annotationPanel.find('.hic-annotation-row-container').remove();

        isTrack2D = (_.first(tracks) instanceof hic.Track2D);

        if (isTrack2D) {
            // Reverse list to present layers in "z" order.
            for(zi = tracks.length - 1; zi >= 0; zi--) {
                annotationPanelRow.call(self, self.$annotationPanel, tracks[ zi ]);
            }
        } else {
            trackRenderers = tracks;
            _.each(trackRenderers, function (trackRenderer) {
                annotationPanelRow.call(self, self.$annotationPanel, trackRenderer);
            });
        }

    };

    function annotationPresentationButton($parent, title, alertMessage) {
        var self = this,
            $button;

        $button = $('<button>', { type: 'button' });
        $button.text(title);
        $parent.append($button);

        $button.on('click', function () {
            var list;

            list = self.trackListRetrievalCallback();
            if (list.length > 0) {
                self.updateBody(self.trackListRetrievalCallback());
                self.$annotationPanel.toggle();
            } else {
                igv.presentAlert(alertMessage);
            }

            self.browser.hideMenu();
        });
    }

    function annotationPanel($parent, title) {

        var self = this,
            $panel_header,
            $load_container,
            $div,
            $fa;

        this.$annotationPanel = $('<div>', { class:'hic-annotation-panel-container' });
        $parent.append(this.$annotationPanel);

        // close button container
        $panel_header = $('<div>', { class:'hic-annotation-panel-header' });
        this.$annotationPanel.append($panel_header);

        // panel title
        $div = $('<div>');
        $div.text(title);
        $panel_header.append($div);

        // close button
        $div = $('<div>', { class:'hic-menu-close-button' });
        $panel_header.append($div);

        $fa = $("<i>", { class:'fa fa-times' });
        $div.append($fa);

        $fa.on('click', function (e) {
            self.$annotationPanel.toggle();
        });

        // TODO: Continue changes for load functions added to side panel
        // load container
        // $load_container = $('<div>', { class:'hic-annotation-panel-load-container' });
        // this.$annotationPanel.append($load_container);
        //
        // // Load
        // $div = $('<div>');
        // $load_container.append($div);
        // $div.text('Load:');
        //
        // // Blah
        // $div = $('<div>');
        // $load_container.append($div);
        // $div.text('Blah');

        //this.$annotationPanel.draggable();
        igv.makeDraggable(this.$annotationPanel.get(0), $panel_header.get(0));
        this.$annotationPanel.hide();
    }

    function annotationPanelRow($container, track) {
        var self = this,
            $colorpickerContainer,
            $colorpickerButton,
            $colorpicker,
            $row_container,
            $row,
            $hideShowTrack,
            $deleteTrack,
            $upTrack,
            $downTrack,
            $e,
            $o,
            hidden_color = '#f7f7f7',
            str,
            isTrack2D,
            trackList,
            xyTrackRendererPair,
            trackRenderer,
            track1D,
            index,
            upp,
            dwn;

        isTrack2D = (track instanceof hic.Track2D);
        trackList = this.trackListRetrievalCallback();

        if (false === isTrack2D) {
            xyTrackRendererPair = track;
            track1D = xyTrackRendererPair.x.track;
            trackRenderer = xyTrackRendererPair.x.track.trackView;
        }

        // row container
        $row_container = $('<div>', {class: 'hic-annotation-row-container'});
        $container.append($row_container);

        // one row
        $row = $('<div>', {class: 'hic-annotation-modal-row'});
        $row_container.append($row);

        // track name
        $e = $("<div>");
        $e.text(isTrack2D ? track.config.name : track1D.config.name);
        $row.append($e);

        // track hide/show
        if (isTrack2D) {
            str = (true === track.isVisible) ? 'fa fa-eye fa-lg' : 'fa fa-eye-slash fa-lg';
            $hideShowTrack = $("<i>", {class: str, 'aria-hidden': 'true'});
            $row.append($hideShowTrack);
            $hideShowTrack.on('click', function (e) {

                if ($hideShowTrack.hasClass('fa-eye')) {
                    $hideShowTrack.addClass('fa-eye-slash');
                    $hideShowTrack.removeClass('fa-eye');
                    track.isVisible = false;
                } else {
                    $hideShowTrack.addClass('fa-eye');
                    $hideShowTrack.removeClass('fa-eye-slash');
                    track.isVisible = true;
                }

                self.browser.contactMatrixView.clearImageCaches();
                self.browser.contactMatrixView.update();

            });
        }

        if (isTrack2D) {

            // matrix diagonal widget
            const $matrix_diagonal_div = $('<div>', { class: 'matrix-diagonal-widget-container matrix-diagonal-widget-all' });
            $row.append($matrix_diagonal_div);
            $matrix_diagonal_div.on('click.matrix_diagonal_div', (e) => {
                e.preventDefault();
                matrixDiagionalWidgetHandler($matrix_diagonal_div, track);
            });

        }

        // color swatch selector button
        $colorpickerButton = annotationColorSwatch(isTrack2D ? track.getColor() : track1D.color);
        $row.append($colorpickerButton);

        // color swatch selector
        $colorpickerContainer = createAnnotationPanelColorpickerContainer($row_container, {width: ((29 * 24) + 1 + 1)}, function () {
            $row.next('.hic-color-swatch-container').toggle();
        });

        $colorpickerButton.on('click', function (e) {
            $row.next('.hic-color-swatch-container').toggle();
        });

        $colorpickerContainer.hide();

        igv.createColorSwatchSelector($colorpickerContainer, function (color) {
            var $swatch;

            $swatch = $row.find('.fa-square');
            $swatch.css({ 'color': color });

            if (isTrack2D) {
                track.color = color;
                self.browser.eventBus.post(hic.Event('TrackState2D', track));
            } else {
                trackRenderer.setColor(color);
            }

        });


        // track up/down
        $e = $('<div>', {class: 'up-down-arrow-container'});
        $row.append($e);

        $upTrack = $("<i>", {class: 'fa fa-arrow-up', 'aria-hidden': 'true'});
        $e.append($upTrack);

        $downTrack = $("<i>", {class: 'fa fa-arrow-down', 'aria-hidden': 'true'});
        $e.append($downTrack);

        if (1 === _.size(trackList)) {
            $upTrack.css('color', hidden_color);
            $downTrack.css('color', hidden_color);
        } else if (track === _.first(trackList)) {
            $o = isTrack2D ? $downTrack : $upTrack;
            $o.css('color', hidden_color);
        } else if (track === _.last(trackList)) {
            $o = isTrack2D ? $upTrack : $downTrack;
            $o.css('color', hidden_color);
        }

        index = _.indexOf(trackList, track);

        upp = function (e) {

            track = trackList[(index + 1)];
            trackList[(index + 1)] = trackList[index];
            trackList[index] = track;
            if (isTrack2D) {
                self.browser.eventBus.post(hic.Event('TrackState2D', trackList));
                self.updateBody(trackList);
            } else {
                self.browser.updateLayout();
                self.updateBody(trackList);
            }
        };

        dwn = function (e) {

            track = trackList[(index - 1)];
            trackList[(index - 1)] = trackList[index];
            trackList[index] = track;
            if (isTrack2D) {
                self.browser.eventBus.post(hic.Event('TrackState2D', trackList));
                self.updateBody(trackList);
            } else {
                self.browser.updateLayout();
                self.updateBody(trackList);
            }
        };

        $upTrack.on('click', isTrack2D ? upp : dwn);

        $downTrack.on('click', isTrack2D ? dwn : upp);



        // track delete
        $deleteTrack = $("<i>", {class: 'fa fa-trash-o fa-lg', 'aria-hidden': 'true'});
        $row.append($deleteTrack);
        $deleteTrack.on('click', function (e) {
            var index;

            if (isTrack2D) {

                index = _.indexOf(trackList, track);

                trackList.splice(index, 1);

                self.browser.contactMatrixView.clearImageCaches();
                self.browser.contactMatrixView.update();

                self.browser.eventBus.post(hic.Event('TrackLoad2D', trackList));
            } else {
                self.browser.layoutController.removeTrackRendererPair(trackRenderer.trackRenderPair);
            }

            self.updateBody(trackList);
        });
    }

    function matrixDiagionalWidgetHandler($icon, track2D) {

            if ($icon.hasClass('matrix-diagonal-widget-all')) {

                $icon.removeClass('matrix-diagonal-widget-all');

                $icon.addClass('matrix-diagonal-widget-lower');
                track2D.displayMode = hic.Track2DDisplaceModes.displayLowerMatrix;
            } else if ($icon.hasClass('matrix-diagonal-widget-lower')) {

                $icon.removeClass('matrix-diagonal-widget-lower');

                $icon.addClass('matrix-diagonal-widget-upper');
                track2D.displayMode = hic.Track2DDisplaceModes.displayUpperMatrix;
            } else if ($icon.hasClass('matrix-diagonal-widget-upper')) {

                $icon.removeClass('matrix-diagonal-widget-upper');

                $icon.addClass('matrix-diagonal-widget-all');
                track2D.displayMode = hic.Track2DDisplaceModes.displayAllMatrix;
            } else {

                $icon.addClass('matrix-diagonal-widget-all');
                track2D.displayMode = hic.Track2DDisplaceModes.displayAllMatrix;
            }
    }

    function annotationColorSwatch(rgbString) {
        var $swatch,
            $fa;

        $swatch = $('<div>', {class: 'igv-color-swatch'});

        $fa = $('<i>', {class: 'fa fa-square fa-lg', 'aria-hidden': 'true'});
        $swatch.append($fa);

        $fa.css({color: rgbString});

        return $swatch;
    }

    function createAnnotationPanelColorpickerContainer($parent, config, closeHandler) {

        var $container,
            $header,
            $fa;

        $container = $('<div>', { class:'hic-color-swatch-container' });
        $parent.append($container);

        // width
        if (config && config.width) {
            $container.width(config.width);
        }

        // height
        if (config && config.height) {
            $container.height(config.height);
        }

        // header
        $header = $('<div>');
        $container.append($header);

        // close button
        $fa = $("<i>", { class:'fa fa-times' });
        $header.append($fa);

        $fa.on('click', function (e) {
            closeHandler();
        });

        return $container;
    }

    return hic;
})(hic || {});


/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
var hic = (function (hic) {

    hic.CaptionManager = function ($caption) {

        var self = this;

        this.$caption = $caption;

        $caption.keyup(function (e) {
            self.getCaption($(this));
        });
    };

    hic.CaptionManager.prototype.getCaption = function ($caption) {
        this.text = $caption.text();
    };

    hic.CaptionManager.prototype.setCaption = function (string) {
        this.text = string;
        this.$caption.text(string);
    };

    return hic;
})(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including 
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial 
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND 
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/22/17.
 */
var hic = (function (hic) {

    hic.ChromosomeSelectorWidget = function (browser, $parent) {

        var self = this,
            $label,
            $selector_container,
            $doit;

        this.browser = browser;

        this.$container = $('<div class="hic-chromosome-selector-widget-container">');
        $parent.append(this.$container);

        $label = $('<div>');
        this.$container.append($label);
        $label.text('Chromosomes');

        $selector_container = $('<div>');
        this.$container.append($selector_container);

        this.$x_axis_selector = $('<select name="x-axis-selector">');
        $selector_container.append(this.$x_axis_selector);

        this.$y_axis_selector = $('<select name="y-axis-selector">');
        $selector_container.append(this.$y_axis_selector);

        this.$x_axis_selector.on('change', function (e) {

            if (0 === parseInt($(this).val(), 10)) {
                self.$y_axis_selector.val( $(this).val() );
            } else if (0 === parseInt(self.$y_axis_selector.val(), 10)) {
                self.$y_axis_selector.val( $(this).val() );
            }

        });

        this.$y_axis_selector.on('change', function (e) {

            if (0 === parseInt($(this).val(), 10)) {
                self.$x_axis_selector.val( $(this).val() );
            } else if (0 === parseInt(self.$x_axis_selector.val(), 10)) {
                self.$x_axis_selector.val( $(this).val() );
            }

        });


        $doit = $('<div>');
        $selector_container.append($doit);

        $doit.on('click', function (e) {
            var chr1Index,
                chr2Index;

            chr1Index = parseInt(self.$x_axis_selector.find('option:selected').val(), 10);
            chr2Index = parseInt(self.$y_axis_selector.find('option:selected').val(), 10);

            self.browser.setChromosomes(chr1Index, chr2Index);

        });

        this.dataLoadConfig = {
            receiveEvent: function (event) {
                if (event.type === "MapLoad") {
                    self.respondToDataLoadWithDataset(event.data);
                }
            }
        };
        
        this.browser.eventBus.subscribe("MapLoad", this.dataLoadConfig);

        this.locusChangeConfig = {
            receiveEvent: function (event) {
                if (event.type === "LocusChange") {
                    self.respondToLocusChangeWithState(event.data.state);
                }
            }
        };
        this.browser.eventBus.subscribe("LocusChange", this.locusChangeConfig);

    };

    hic.ChromosomeSelectorWidget.prototype.respondToDataLoadWithDataset = function (dataset) {

        var elements,
            str,
            $xFound,
            $yFound;

        this.$x_axis_selector.empty();
        this.$y_axis_selector.empty();

        elements = _.map(dataset.chromosomes, function (chr, index) {
            return '<option value=' + index.toString() + '>' + chr.name + '</option>';
        });

        this.$x_axis_selector.append(elements.join(''));
        this.$y_axis_selector.append(elements.join(''));

        str = 'option[value=' + this.browser.state.chr1.toString() + ']';
        $xFound = this.$x_axis_selector.find(str);
        $xFound.prop('selected', true);

        str = 'option[value=' + this.browser.state.chr2.toString() + ']';
        $yFound = this.$y_axis_selector.find(str);
        $yFound.prop('selected', true);
    };

    hic.ChromosomeSelectorWidget.prototype.respondToLocusChangeWithState = function (state) {
        var self = this,
            ssx,
            ssy,
            $xFound,
            $yFound,
            chr1,
            chr2;

        $xFound = this.$x_axis_selector.find('option');
        $yFound = this.$y_axis_selector.find('option');

        // this happens when the first dataset is loaded.
        if (0 === _.size($xFound) || 0 === _.size($yFound)) {
            return;
        }

        $xFound = this.$x_axis_selector.find('option:selected');
        $yFound = this.$y_axis_selector.find('option:selected');

        $xFound.prop('selected', false);
        $yFound.prop('selected', false);

        // chr1 = parseInt($xFound.val(), 10);
        // chr2 = parseInt($yFound.val(), 10);
        // // It is the pair of chromosomes that is important,  1-2 == 2-1,  so update only if the pair does not match
        // if (false === ((chr1 === state.chr1 && chr2 === state.chr2) || (chr1 === state.chr2 && chr2 === state.chr1))) {
        //     ssx = 'option[value=' + state.chr1.toString() + ']';
        //     this.$x_axis_selector.find(ssx).attr('selected', 'selected');
        //
        //     ssx = 'option[value=' + state.chr2.toString() + ']';
        //     this.$y_axis_selector.find(ssx).attr('selected', 'selected');
        // }

        ssx = 'option[value=' + state.chr1.toString() + ']';
        ssy = 'option[value=' + state.chr2.toString() + ']';

        this.$x_axis_selector.find(ssx).prop('selected', true);
        this.$y_axis_selector.find(ssy).prop('selected', true);

    };

    return hic;

})(hic || {});


/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * @author Jim Robinson
 */

"use strict;"

var hic = (function (hic) {

        const DRAG_THRESHOLD = 2;
        const DOUBLE_TAP_DIST_THRESHOLD = 20;
        const DOUBLE_TAP_TIME_THRESHOLD = 300;

        hic.ContactMatrixView = function (browser, $container) {
            var id;

            this.browser = browser;

            this.scrollbarWidget = new hic.ScrollbarWidget(browser);

            id = browser.id + '_' + 'viewport';
            this.$viewport = $("<div>", {id: id});
            $container.append(this.$viewport);

            // content canvas
            this.$canvas = $('<canvas>');
            this.$viewport.append(this.$canvas);


            // spinner
            this.$fa_spinner = $('<i class="fa fa-spinner fa-spin">');
            this.$fa_spinner.css("font-size", "48px");
            this.$fa_spinner.css("position", "absolute");
            this.$fa_spinner.css("left", "40%");
            this.$fa_spinner.css("top", "40%");
            this.$fa_spinner.css("display", "none");
            this.$viewport.append(this.$fa_spinner);
            this.spinnerCount = 0

            // ruler sweeper widget surface
            this.sweepZoom = new hic.SweepZoom(browser, this.$viewport);
            this.$viewport.append(this.sweepZoom.$rulerSweeper);


            // x - guide
            id = browser.id + '_' + 'x-guide';
            this.$x_guide = $("<div>", {id: id});
            this.$viewport.append(this.$x_guide);

            // y - guide
            id = browser.id + '_' + 'y-guide';
            this.$y_guide = $("<div>", {id: id});
            this.$viewport.append(this.$y_guide);


            $container.append(this.scrollbarWidget.$y_axis_scrollbar_container);

            this.displayMode = 'A';
            this.imageTileCache = {};
            this.imageTileCacheKeys = [];
            this.imageTileCacheLimit = 8; //8 is the minimum number required to support A/B cycling
            this.colorScaleThresholdCache = {};

            // Set initial color scales.  These might be overriden / adjusted via parameters
            this.colorScale = new ColorScale({threshold: 2000, r: 255, g: 0, b: 0});
            this.ratioColorScale = new RatioColorScale(5);
            // this.diffColorScale = new RatioColorScale(100, false);

            this.browser.eventBus.subscribe("NormalizationChange", this);
            this.browser.eventBus.subscribe("TrackLoad2D", this);
            this.browser.eventBus.subscribe("TrackState2D", this);
            this.browser.eventBus.subscribe("MapLoad", this)
            this.browser.eventBus.subscribe("LocusChange", this);
            this.browser.eventBus.subscribe("ControlMapLoad", this);
            this.browser.eventBus.subscribe("ColorChange", this)
            //this.browser.eventBus.subscribe("DragStopped", this)

            this.drawsInProgress = new Set()
        };

        hic.ContactMatrixView.prototype.setColorScale = function (colorScale) {

            switch (this.displayMode) {
                case 'AOB':
                case 'BOA':
                    this.ratioColorScale = colorScale;
                    break;
                case 'AMB':
                    this.diffColorScale = colorScale;
                    break;
                default:
                    this.colorScale = colorScale;
            }
            this.colorScaleThresholdCache[colorScaleKey(this.browser.state, this.displayMode)] = colorScale.threshold;
        };

        hic.ContactMatrixView.prototype.setColorScaleThreshold = async function (threshold) {

            this.getColorScale().setThreshold(threshold);
            this.colorScaleThresholdCache[colorScaleKey(this.browser.state, this.displayMode)] = threshold;
            this.imageTileCache = {};
            await this.update()
        };

        hic.ContactMatrixView.prototype.getColorScale = function () {
            switch (this.displayMode) {
                case 'AOB':
                case 'BOA':
                    return this.ratioColorScale;
                case 'AMB':
                    return this.diffColorScale;
                default:
                    return this.colorScale;
            }
        };

        hic.ContactMatrixView.prototype.setDisplayMode = async function (mode) {
            this.displayMode = mode;
            this.clearImageCaches();
            await this.update();
        }

        function colorScaleKey(state, displayMode) {
            return "" + state.chr1 + "_" + state.chr2 + "_" + state.zoom + "_" + state.normalization + "_" + displayMode;
        }

        hic.ContactMatrixView.prototype.clearImageCaches = function () {
            this.imageTileCache = {};
            this.imageTileCacheKeys = [];
        };

        hic.ContactMatrixView.prototype.getViewDimensions = function () {
            return {
                width: this.$viewport.width(),
                height: this.$viewport.height()
            }
        };

        hic.ContactMatrixView.prototype.receiveEvent = async function (event) {

            if ("MapLoad" === event.type || "ControlMapLoad" === event.type) {

                // Don't enable mouse actions until we have a dataset.
                if (!this.mouseHandlersEnabled) {
                    addTouchHandlers.call(this, this.$viewport);
                    addMouseHandlers.call(this, this.$viewport);
                    this.mouseHandlersEnabled = true;
                }
                this.clearImageCaches();
                this.colorScaleThresholdCache = {};
            }

            else {
                if (!("LocusChange" === event.type || "DragStopped" === event.type)) {
                    this.clearImageCaches();
                }
                await this.update();
            }
        }

        hic.ContactMatrixView.prototype.update = async function () {

            if (this.disableUpdates) return   // This flag is set during browser startup

            await this.repaint()

        }


        /**
         * Return a promise to load all neccessary data
         */
        hic.ContactMatrixView.prototype.repaint = async function () {

            if (!this.browser.dataset) {
                return;
            }

            if (!this.ctx) {
                this.ctx = this.$canvas.get(0).getContext("2d");
            }

            const viewportWidth = this.$viewport.width()
            const viewportHeight = this.$viewport.height()
            const canvasWidth = this.$canvas.width()
            const canvasHeight = this.$canvas.height()
            if (canvasWidth !== viewportWidth || canvasHeight !== viewportHeight) {
                this.$canvas.width(viewportWidth);
                this.$canvas.height(viewportHeight);
                this.$canvas.attr('width', this.$viewport.width());
                this.$canvas.attr('height', this.$viewport.height());
            }
            const state = this.browser.state;

            let ds;
            let dsControl;
            switch (this.displayMode) {
                case 'A':
                    ds = this.browser.dataset
                    break;
                case 'B':
                    ds = this.browser.controlDataset
                    break;
                case 'AOB':
                case 'AMB':
                    ds = this.browser.dataset
                    dsControl = this.browser.controlDataset
                    break;
                case 'BOA':
                    ds = this.browser.controlDataset
                    dsControl = this.browser.dataset
            }

            const matrix = await ds.getMatrix(state.chr1, state.chr2)
            const zd = matrix.bpZoomData[state.zoom]

            let zdControl;
            if (dsControl) {
                const matrixControl = await dsControl.getMatrix(state.chr1, state.chr2)
                zdControl = matrixControl.bpZoomData[state.zoom]
            }


            const blockBinCount = zd.blockBinCount  // Dimension in bins of a block (width = height = blockBinCount)
            const pixelSizeInt = Math.max(1, Math.floor(state.pixelSize))
            const widthInBins = this.$viewport.width() / pixelSizeInt
            const heightInBins = this.$viewport.height() / pixelSizeInt
            const blockCol1 = Math.floor(state.x / blockBinCount)
            const blockCol2 = Math.floor((state.x + widthInBins) / blockBinCount)
            const blockRow1 = Math.floor(state.y / blockBinCount)
            const blockRow2 = Math.floor((state.y + heightInBins) / blockBinCount)

            await checkColorScale.call(this, ds, zd, blockRow1, blockRow2, blockCol1, blockCol2, state.normalization)

            for (let r = blockRow1; r <= blockRow2; r++) {
                for (let c = blockCol1; c <= blockCol2; c++) {
                    const tile = await this.getImageTile(ds, dsControl, zd, zdControl, r, c, state)
                    this.paintTile(tile)
                }
            }

            // Record genomic extent of current canvas
            this.genomicExtent = {
                chr1: state.chr1,
                chr2: state.chr2,
                x: state.x * zd.zoom.binSize,
                y: state.y * zd.zoom.binSize,
                w: viewportWidth * zd.zoom.binSize / state.pixelSize,
                h: viewportHeight * zd.zoom.binSize / state.pixelSize
            }
        }

        /**
         * Returns a promise for an image tile
         *
         * @param zd
         * @param row
         * @param column
         * @param state
         * @returns {*}
         */

        const inProgressCache = {}

        function inProgressTile(imageSize) {

            let image = inProgressCache[imageSize]
            if (!image) {
                image = document.createElement('canvas');
                image.width = imageSize;
                image.height = imageSize;
                const ctx = image.getContext('2d');
                ctx.font = '24px sans-serif';
                ctx.fillStyle = 'rgb(230, 230, 230)'
                ctx.fillRect(0, 0, image.width, image.height)
                ctx.fillStyle = 'black'
                for (let i = 100; i < imageSize; i += 300) {
                    for (let j = 100; j < imageSize; j += 300) {
                        ctx.fillText('Loading...', i, j);
                    }
                }
                inProgressCache[imageSize] = image
            }
            return image;
        }

        hic.ContactMatrixView.prototype.getImageTile = async function (ds, dsControl, zd, zdControl, row, column, state) {

            const pixelSizeInt = Math.max(1, Math.floor(state.pixelSize))
            const useImageData = pixelSizeInt === 1
            const blockBinCount = zd.blockBinCount
            const key = "" + zd.chr1.name + "_" + zd.chr2.name + "_" + zd.zoom.binSize + "_" + zd.zoom.unit +
                "_" + row + "_" + column + "_" + pixelSizeInt + "_" + state.normalization + "_" + this.displayMode
            if (this.imageTileCache.hasOwnProperty(key)) {
                return this.imageTileCache[key]

            } else {
                if (this.drawsInProgress.has(key)) {
                    //console.log("In progress")
                    const imageSize = Math.ceil(blockBinCount * pixelSizeInt)
                    const image = inProgressTile(imageSize)
                    return {
                        row: row,
                        column: column,
                        blockBinCount: blockBinCount,
                        image: image,
                        inProgress: true
                    }  // TODO return an image at a coarser resolution if avaliable

                }
                this.drawsInProgress.add(key)

                try {
                    this.startSpinner()
                    const sameChr = zd.chr1.index === zd.chr2.index
                    const blockColumnCount = zd.blockColumnCount
                    const widthInBins = zd.blockBinCount
                    const transpose = sameChr && row < column

                    let blockNumber
                    if (sameChr && row < column) {
                        blockNumber = column * blockColumnCount + row;
                    }
                    else {
                        blockNumber = row * blockColumnCount + column;
                    }

                    // Get blocks
                    const block = await ds.getNormalizedBlock(zd, blockNumber, state.normalization, this.browser.eventBus)
                    let controlBlock
                    if (zdControl) {
                        controlBlock = await dsControl.getNormalizedBlock(zdControl, blockNumber, state.normalization, this.browser.eventBus)
                    }

                    const averageCount = zd.averageCount
                    const ctrlAverageCount = zdControl ? zdControl.averageCount : 1
                    const averageAcrossMapAndControl = (averageCount + ctrlAverageCount) / 2


                    let image;
                    if (block && block.records.length > 0) {
                        image = drawBlock.call(this, block, controlBlock, transpose);
                    }
                    else {
                        //console.log("No block for " + blockNumber);
                    }
                    var imageTile = {row: row, column: column, blockBinCount: blockBinCount, image: image}


                    if (this.imageTileCacheLimit > 0) {
                        if (this.imageTileCacheKeys.length > this.imageTileCacheLimit) {
                            delete this.imageTileCache[this.imageTileCacheKeys[0]]
                            this.imageTileCacheKeys.shift()
                        }
                        this.imageTileCache[key] = imageTile

                    }

                    this.drawsInProgress.delete(key)
                    return imageTile;

                    // Actual drawing happens here
                    function drawBlock(block, controlBlock, transpose) {

                        const imageSize = Math.ceil(widthInBins * pixelSizeInt)
                        const blockNumber = block.blockNumber;
                        const row = Math.floor(blockNumber / blockColumnCount);
                        const col = blockNumber - row * blockColumnCount;
                        const x0 = blockBinCount * col;
                        const y0 = blockBinCount * row;

                        const image = document.createElement('canvas');
                        image.width = imageSize;
                        image.height = imageSize;
                        const ctx = image.getContext('2d');
                        //ctx.clearRect(0, 0, image.width, image.height);

                        const controlRecords = {};
                        if ('AOB' === this.displayMode || 'BOA' === this.displayMode || 'AMB' === this.displayMode) {
                            for (let record of controlBlock.records) {
                                controlRecords[record.getKey()] = record
                            }
                        }

                        let id
                        if (useImageData) {
                            id = ctx.getImageData(0, 0, image.width, image.height);
                        }

                        for (let i = 0; i < block.records.length; i++) {

                            const rec = block.records[i];
                            let x = Math.floor((rec.bin1 - x0) * pixelSizeInt);
                            let y = Math.floor((rec.bin2 - y0) * pixelSizeInt);

                            if (transpose) {
                                const t = y;
                                y = x;
                                x = t;
                            }

                            let color
                            switch (this.displayMode) {

                                case 'AOB':
                                case 'BOA':
                                    let key = rec.getKey();
                                    let controlRec = controlRecords[key];
                                    if (!controlRec) {
                                        continue;    // Skip
                                    }
                                    let score = (rec.counts / averageCount) / (controlRec.counts / ctrlAverageCount);

                                    color = this.ratioColorScale.getColor(score);

                                    break;

                                case 'AMB':
                                    key = rec.getKey();
                                    controlRec = controlRecords[key];
                                    if (!controlRec) {
                                        continue;    // Skip
                                    }
                                    score = averageAcrossMapAndControl * ((rec.counts / averageCount) - (controlRec.counts / ctrlAverageCount));

                                    color = this.diffColorScale.getColor(score);

                                    break;

                                default:    // Either 'A' or 'B'
                                    color = this.colorScale.getColor(rec.counts);
                            }


                            if (useImageData) {
                                // TODO -- verify that this bitblting is faster than fillRect
                                setPixel(id, x, y, color.red, color.green, color.blue, 255);
                                if (sameChr && row === col) {
                                    setPixel(id, y, x, color.red, color.green, color.blue, 255);
                                }
                            }
                            else {
                                ctx.fillStyle = color.rgb;
                                ctx.fillRect(x, y, pixelSizeInt, pixelSizeInt);
                                if (sameChr && row === col) {
                                    ctx.fillRect(y, x, pixelSizeInt, pixelSizeInt);
                                }
                            }
                        }
                        if (useImageData) {
                            ctx.putImageData(id, 0, 0);
                        }

                        //Draw 2D tracks
                        ctx.save();
                        ctx.lineWidth = 2;
                        for (let track2D of this.browser.tracks2D) {

                            if (track2D.isVisible) {

                                var features = track2D.getFeatures(zd.chr1.name, zd.chr2.name);

                                if (features) {
                                    features.forEach(function (f) {

                                        var x1 = Math.round((f.x1 / zd.zoom.binSize - x0) * pixelSizeInt);
                                        var x2 = Math.round((f.x2 / zd.zoom.binSize - x0) * pixelSizeInt);
                                        var y1 = Math.round((f.y1 / zd.zoom.binSize - y0) * pixelSizeInt);
                                        var y2 = Math.round((f.y2 / zd.zoom.binSize - y0) * pixelSizeInt);
                                        var w = x2 - x1;
                                        var h = y2 - y1;

                                        if (transpose) {
                                            t = y1;
                                            y1 = x1;
                                            x1 = t;

                                            t = h;
                                            h = w;
                                            w = t;
                                        }

                                        var dim = Math.max(image.width, image.height);
                                        if (x2 > 0 && x1 < dim && y2 > 0 && y1 < dim) {

                                            ctx.strokeStyle = track2D.color ? track2D.color : f.color;
                                            ctx.strokeRect(x1, y1, w, h);
                                            if (sameChr && row === col) {
                                                ctx.strokeRect(y1, x1, h, w);
                                            }
                                        }
                                    })
                                }
                            }
                        }

                        ctx.restore();

                        // Uncomment to reveal tile boundaries for debugging.
                        // ctx.fillStyle = "rgb(255,255,255)";
                        // ctx.strokeRect(0, 0, image.width - 1, image.height - 1)

                        var t1 = (new Date()).getTime();

                        //console.log(t1 - t0);

                        return image;
                    }


                    function setPixel(imageData, x, y, r, g, b, a) {
                        const index = (x + y * imageData.width) * 4;
                        imageData.data[index + 0] = r;
                        imageData.data[index + 1] = g;
                        imageData.data[index + 2] = b;
                        imageData.data[index + 3] = a;
                    }
                } finally {
                    //console.log("Finish load for " + key)
                    this.stopSpinner()
                }
            }

            function getNormalizedBlocks(ds, dsControl, zd, zdControl, blockNumber, normalization) {
                var promises = [];

                promises.push(ds.getNormalizedBlock(zd, blockNumber, normalization, this.browser.eventBus));

                if (zdControl) {
                    promises.push(dsControl.getNormalizedBlock(zdControl, blockNumber, normalization, this.browser.eventBus));
                }

                return Promise.all(promises);

            }
        };


        hic.ContactMatrixView.prototype.zoomIn = async function () {
            const state = this.browser.state
            const viewportWidth = this.$viewport.width()
            const viewportHeight = this.$viewport.height()
            const matrices = await getMatrices.call(this, state.chr1, state.chr2)

            var matrix = matrices[0];

            if (matrix) {
                const zd = await matrix.bpZoomData[state.zoom]
                const newGenomicExtent = {
                    x: state.x * zd.zoom.binSize,
                    y: state.y * zd.zoom.binSize,
                    w: viewportWidth * zd.zoom.binSize / state.pixelSize,
                    h: viewportHeight * zd.zoom.binSize / state.pixelSize
                }

                // Zoom out not supported
                if (newGenomicExtent.w > this.genomicExtent.w) return

                const sx = ((newGenomicExtent.x - this.genomicExtent.x) / this.genomicExtent.w) * viewportWidth
                const sy = ((newGenomicExtent.y - this.genomicExtent.y) / this.genomicExtent.w) * viewportHeight
                const sWidth = (newGenomicExtent.w / this.genomicExtent.w) * viewportWidth
                const sHeight = (newGenomicExtent.h / this.genomicExtent.h) * viewportHeight
                const img = this.$canvas[0]

                const backCanvas = document.createElement('canvas');
                backCanvas.width = img.width;
                backCanvas.height = img.height;
                const backCtx = backCanvas.getContext('2d');
                backCtx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, viewportWidth, viewportHeight)

                this.ctx.clearRect(0, 0, viewportWidth, viewportHeight)
                this.ctx.drawImage(backCanvas, 0, 0)
            }
        }

        hic.ContactMatrixView.prototype.paintTile = function (imageTile) {

            const state = this.browser.state
            const viewportWidth = this.$viewport.width()
            const viewportHeight = this.$viewport.height()

            var image = imageTile.image,
                pixelSizeInt = Math.max(1, Math.floor(state.pixelSize))

            if (image != null) {
                const row = imageTile.row
                const col = imageTile.column
                const x0 = imageTile.blockBinCount * col
                const y0 = imageTile.blockBinCount * row
                const offsetX = (x0 - state.x) * state.pixelSize
                const offsetY = (y0 - state.y) * state.pixelSize
                const scale = state.pixelSize / pixelSizeInt
                const scaledWidth = image.width * scale
                const scaledHeight = image.height * scale
                if (offsetX <= viewportWidth && offsetX + scaledWidth >= 0 &&
                    offsetY <= viewportHeight && offsetY + scaledHeight >= 0) {
                    this.ctx.clearRect(offsetX, offsetY, scaledWidth, scaledHeight)
                    if (scale === 1) {
                        this.ctx.drawImage(image, offsetX, offsetY);
                    }
                    else {
                        this.ctx.drawImage(image, offsetX, offsetY, scaledWidth, scaledHeight);
                    }
                }
            }
        }

        function getMatrices(chr1, chr2) {

            var promises = [];
            if ('B' === this.displayMode && this.browser.controlDataset) {
                promises.push(this.browser.controlDataset.getMatrix(chr1, chr2));
            }

            else {
                promises.push(this.browser.dataset.getMatrix(chr1, chr2));
                if (this.displayMode && 'A' !== this.displayMode && this.browser.controlDataset) {
                    promises.push(this.browser.controlDataset.getMatrix(chr1, chr2));
                }
            }
            return Promise.all(promises);
        }

        /**
         * Return a promise to adjust the color scale, if needed.  This function might need to load the contact
         * data to computer scale.
         *
         * @param zd
         * @param row1
         * @param row2
         * @param col1
         * @param col2
         * @param normalization
         * @returns {*}
         */
        async function checkColorScale(ds, zd, row1, row2, col1, col2, normalization) {

            const colorKey = colorScaleKey(this.browser.state, this.displayMode);   // This doesn't feel right, state should be an argument
            if ('AOB' === this.displayMode || 'BOA' === this.displayMode) {
                return this.ratioColorScale;     // Don't adjust color scale for A/B.
            }

            if (this.colorScaleThresholdCache[colorKey]) {
                const changed = this.colorScale.threshold !== this.colorScaleThresholdCache[colorKey];
                this.colorScale.setThreshold(this.colorScaleThresholdCache[colorKey]);
                if (changed) {
                    this.browser.eventBus.post(hic.Event("ColorScale", this.colorScale));
                }
                return this.colorScale;
            }

            else {
                const promises = [];
                const sameChr = zd.chr1.index === zd.chr2.index;
                let blockNumber
                for (let row = row1; row <= row2; row++) {
                    for (let column = col1; column <= col2; column++) {
                        if (sameChr && row < column) {
                            blockNumber = column * zd.blockColumnCount + row;
                        }
                        else {
                            blockNumber = row * zd.blockColumnCount + column;
                        }

                        promises.push(ds.getNormalizedBlock(zd, blockNumber, normalization, this.browser.eventBus))
                    }
                }

                try {
                    this.startSpinner()
                    const blocks = await Promise.all(promises)
                    this.stopSpinner()

                    let s = computePercentile(blocks, 95);

                    if (!isNaN(s)) {  // Can return NaN if all blocks are empty

                        if (0 === zd.chr1.index) s *= 4;   // Heuristic for whole genome view

                        this.colorScale = new ColorScale(this.colorScale);
                        this.colorScale.setThreshold(s);
                        this.computeColorScale = false;
                        this.browser.eventBus.post(hic.Event("ColorScale", this.colorScale));
                    }

                    this.colorScaleThresholdCache[colorKey] = s;

                    return this.colorScale;
                } finally {
                    this.stopSpinner()
                }


            }

        }

        function computePercentile(blockArray, p) {

            var array = [];
            blockArray.forEach(function (block) {
                if (block) {
                    for (i = 0; i < block.records.length; i++) {
                        array.push(block.records[i].counts);
                    }
                }
            });
            return hic.Math.percentile(array, p);
        }

        hic.ContactMatrixView.prototype.startSpinner = function () {

            if (true === this.browser.isLoadingHICFile && this.browser.$user_interaction_shield) {
                this.browser.$user_interaction_shield.show();
            }
            this.$fa_spinner.css("display", "inline-block");
            this.spinnerCount++
        }

        hic.ContactMatrixView.prototype.stopSpinner = function () {
            this.spinnerCount--
            if (0 === this.spinnerCount) {
                this.$fa_spinner.css("display", "none")
            }
            this.spinnerCount = Math.max(0, this.spinnerCount)   // This should not be neccessary
        }


        function addMouseHandlers($viewport) {

            var self = this,
                isMouseDown = false,
                isDragging = false,
                isSweepZooming = false,
                mouseDown,
                mouseLast,
                mouseOver,
                lastWheelTime;

            this.isDragging = false;

            if (!this.browser.isMobile) {

                $viewport.dblclick(function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    var mouseX = e.offsetX || e.layerX,
                        mouseY = e.offsetY || e.layerX;

                    self.browser.zoomAndCenter(1, mouseX, mouseY);

                });

                $viewport.on('mouseover', function (e) {
                    mouseOver = true;
                });

                $viewport.on('mouseout', function (e) {
                    mouseOver = undefined;
                });

                $viewport.on('mousedown', function (e) {
                    var eFixed;

                    e.preventDefault();
                    e.stopPropagation();

                    if (self.browser.$menu.is(':visible')) {
                        self.browser.hideMenu();
                    }

                    mouseLast = {x: e.offsetX, y: e.offsetY};
                    mouseDown = {x: e.offsetX, y: e.offsetY};

                    isSweepZooming = (true === e.altKey);
                    if (isSweepZooming) {
                        eFixed = $.event.fix(e);
                        self.sweepZoom.initialize({x: eFixed.pageX, y: eFixed.pageY});
                    }

                    isMouseDown = true;

                });

                $viewport.on('mousemove', function (e) {

                    var coords,
                        eFixed,
                        xy;

                    e.preventDefault();
                    e.stopPropagation();

                    coords =
                        {
                            x: e.offsetX,
                            y: e.offsetY
                        };

                    // Sets pageX and pageY for browsers that don't support them
                    eFixed = $.event.fix(e);

                    xy =
                        {
                            x: eFixed.pageX - $viewport.offset().left,
                            y: eFixed.pageY - $viewport.offset().top
                        };

                    self.browser.eventBus.post(hic.Event("UpdateContactMapMousePosition", xy, false));

                    if (true === self.willShowCrosshairs) {
                        self.browser.updateCrosshairs(xy);
                        self.browser.showCrosshairs();
                    }

                    if (isMouseDown) { // Possibly dragging

                        if (isSweepZooming) {

                            self.sweepZoom.update({x: eFixed.pageX, y: eFixed.pageY});

                        } else if (mouseDown.x && Math.abs(coords.x - mouseDown.x) > DRAG_THRESHOLD) {

                            self.isDragging = true;

                            var dx = mouseLast.x - coords.x;
                            var dy = mouseLast.y - coords.y;

                            // If matrix data is updating shift current map image while we wait
                            if (self.updating) {
                                shiftCurrentImage(self, -dx, -dy);
                            }

                            self.browser.shiftPixels(dx, dy);

                        }

                        mouseLast = coords;
                    }


                })
                //, 10));

                $viewport.on('mouseup', panMouseUpOrMouseOut);

                $viewport.on('mouseleave', function () {

                    self.browser.layoutController.xAxisRuler.unhighlightWholeChromosome();
                    self.browser.layoutController.yAxisRuler.unhighlightWholeChromosome();

                    panMouseUpOrMouseOut();
                });

                // Mousewheel events -- ie exposes event only via addEventListener, no onwheel attribute
                // NOte from spec -- trackpads commonly map pinch to mousewheel + ctrl

                $viewport[0].addEventListener("wheel", mouseWheelHandler, 250, false);

                // document level events
                $(document).on('keydown.contact_matrix_view', function (e) {
                    if (undefined === self.willShowCrosshairs && true === mouseOver && true === e.shiftKey) {
                        self.willShowCrosshairs = true;
                    }
                });

                $(document).on('keyup.contact_matrix_view', function (e) {
                    self.browser.hideCrosshairs();
                    self.willShowCrosshairs = undefined;
                });

                // for sweep-zoom allow user to sweep beyond viewport extent
                // sweep area clamps since viewport mouse handlers stop firing
                // when the viewport boundary is crossed.
                $(document).on('mouseup.contact_matrix_view', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    if (isSweepZooming) {
                        isSweepZooming = false;
                        self.sweepZoom.commit();
                    }
                });
            }

            function panMouseUpOrMouseOut(e) {

                if (true === self.isDragging) {
                    self.isDragging = false;
                    self.browser.eventBus.post(hic.Event("DragStopped"));
                }

                isMouseDown = false;
                mouseDown = mouseLast = undefined;
            }

            function mouseWheelHandler(e) {

                e.preventDefault();
                e.stopPropagation();

                var t = Date.now();

                if (lastWheelTime === undefined || (t - lastWheelTime > 1000)) {

                    // cross-browser wheel delta  -- Firefox returns a "detail" object that is opposite in sign to wheelDelta
                    var direction = e.deltaY < 0 ? 1 : -1,
                        coords = igv.translateMouseCoordinates(e, $viewport),
                        x = coords.x,
                        y = coords.y;
                    self.browser.wheelClickZoom(direction, x, y);
                    lastWheelTime = t;
                }

            }


            function shiftCurrentImage(self, dx, dy) {
                var canvasWidth = self.$canvas.width(),
                    canvasHeight = self.$canvas.height(),
                    imageData;

                imageData = self.ctx.getImageData(0, 0, canvasWidth, canvasHeight);
                self.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                self.ctx.putImageData(imageData, dx, dy);
            }

        }


        /**
         * Add touch handlers.  Touches are mapped to one of the following application level events
         *  - double tap, equivalent to double click
         *  - move
         *  - pinch
         *
         * @param $viewport
         */

        function addTouchHandlers($viewport) {

            var self = this,

                lastTouch, pinch,
                viewport = $viewport[0];

            /**
             * Touch start -- 3 possibilities
             *   (1) beginning of a drag (pan)
             *   (2) first tap of a double tap
             *   (3) beginning of a pinch
             */
            viewport.ontouchstart = function (ev) {

                ev.preventDefault();
                ev.stopPropagation();

                var touchCoords = translateTouchCoordinates(ev.targetTouches[0], viewport),
                    offsetX = touchCoords.x,
                    offsetY = touchCoords.y,
                    count = ev.targetTouches.length,
                    timeStamp = ev.timeStamp || Date.now(),
                    resolved = false,
                    dx, dy, dist, direction;

                if (count === 2) {
                    touchCoords = translateTouchCoordinates(ev.targetTouches[0], viewport);
                    offsetX = (offsetX + touchCoords.x) / 2;
                    offsetY = (offsetY + touchCoords.y) / 2;
                }

                // NOTE: If the user makes simultaneous touches, the browser may fire a
                // separate touchstart event for each touch point. Thus if there are
                // two simultaneous touches, the first touchstart event will have
                // targetTouches length of one and the second event will have a length
                // of two.  In this case replace previous touch with this one and return
                if (lastTouch && (timeStamp - lastTouch.timeStamp < DOUBLE_TAP_TIME_THRESHOLD) && ev.targetTouches.length > 1 && lastTouch.count === 1) {
                    lastTouch = {x: offsetX, y: offsetY, timeStamp: timeStamp, count: ev.targetTouches.length};
                    return;
                }


                if (lastTouch && (timeStamp - lastTouch.timeStamp < DOUBLE_TAP_TIME_THRESHOLD)) {

                    direction = (lastTouch.count === 2 || count === 2) ? -1 : 1;
                    dx = lastTouch.x - offsetX;
                    dy = lastTouch.y - offsetY;
                    dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < DOUBLE_TAP_DIST_THRESHOLD) {
                        self.browser.zoomAndCenter(direction, offsetX, offsetY);
                        lastTouch = undefined;
                        resolved = true;
                    }
                }

                if (!resolved) {
                    lastTouch = {x: offsetX, y: offsetY, timeStamp: timeStamp, count: ev.targetTouches.length};
                }
            }

            viewport.ontouchmove = hic.throttle(function (ev) {

                var touchCoords1, touchCoords2, t;

                ev.preventDefault();
                ev.stopPropagation();

                if (ev.targetTouches.length === 2) {

                    // Update pinch  (assuming 2 finger movement is a pinch)
                    touchCoords1 = translateTouchCoordinates(ev.targetTouches[0], viewport);
                    touchCoords2 = translateTouchCoordinates(ev.targetTouches[1], viewport);

                    t = {
                        x1: touchCoords1.x,
                        y1: touchCoords1.y,
                        x2: touchCoords2.x,
                        y2: touchCoords2.y
                    };

                    if (pinch) {
                        pinch.end = t;
                    } else {
                        pinch = {start: t};
                    }
                }

                else {
                    // Assuming 1 finger movement is a drag

                    var touchCoords = translateTouchCoordinates(ev.targetTouches[0], viewport),
                        offsetX = touchCoords.x,
                        offsetY = touchCoords.y;
                    if (lastTouch) {
                        var dx = lastTouch.x - offsetX,
                            dy = lastTouch.y - offsetY;
                        if (!isNaN(dx) && !isNaN(dy)) {
                            self.isDragging = true
                            self.browser.shiftPixels(lastTouch.x - offsetX, lastTouch.y - offsetY);
                        }
                    }

                    lastTouch = {
                        x: offsetX,
                        y: offsetY,
                        timeStamp: ev.timeStamp || Date.now(),
                        count: ev.targetTouches.length
                    };
                }

            }, 50);

            viewport.ontouchend = function (ev) {

                ev.preventDefault();
                ev.stopPropagation();

                if (pinch && pinch.end !== undefined) {

                    var startT = pinch.start,
                        endT = pinch.end,
                        dxStart = startT.x2 - startT.x1,
                        dyStart = startT.y2 - startT.y1,
                        dxEnd = endT.x2 - endT.x1,
                        dyEnd = endT.y2 - endT.y1,
                        distStart = Math.sqrt(dxStart * dxStart + dyStart * dyStart),
                        distEnd = Math.sqrt(dxEnd * dxEnd + dyEnd * dyEnd),
                        scale = distEnd / distStart,
                        deltaX = (endT.x1 + endT.x2) / 2 - (startT.x1 + startT.x2) / 2,
                        deltaY = (endT.y1 + endT.y2) / 2 - (startT.y1 + startT.y2) / 2,
                        anchorPx = (startT.x1 + startT.x2) / 2,
                        anchorPy = (startT.y1 + startT.y2) / 2;

                    if (scale < 0.8 || scale > 1.2) {
                        lastTouch = undefined;
                        self.browser.pinchZoom(anchorPx, anchorPy, scale);
                    }
                } else if (self.isDragging) {
                    self.isDragging = false;
                    self.browser.eventBus.post(hic.Event("DragStopped"));
                }

                // a touch end always ends a pinch
                pinch = undefined;

            }

            function translateTouchCoordinates(e, target) {

                var $target = $(target),
                    eFixed,
                    posx,
                    posy;

                posx = e.pageX - $target.offset().left;
                posy = e.pageY - $target.offset().top;

                return {x: posx, y: posy}
            }

        }


        ColorScale = function (scale) {
            this.threshold = scale.threshold;
            this.r = scale.r;
            this.g = scale.g;
            this.b = scale.b;
            this.cache = []
            this.nbins = 2000
            this.binsize = this.threshold / this.nbins
        };


        ColorScale.prototype.setThreshold = function (threshold) {
            this.threshold = threshold;
            this.cache = []
            this.binsize = this.threshold / this.nbins
        }

        ColorScale.prototype.getThreshold = function () {
            return this.threshold;
        }

        ColorScale.prototype.setColorComponents = function (components) {
            this.r = components.r;
            this.g = components.g;
            this.b = components.b;
            this.cache = []
        }

        ColorScale.prototype.getColorComponents = function () {
            return {
                r: this.r,
                g: this.g,
                b: this.b
            }
        }


        ColorScale.prototype.equals = function (cs) {
            return JSON.stringify(this) === JSON.stringify(cs);
        };

        ColorScale.prototype.getColor = function (value) {

            const bin = Math.floor(Math.min(this.threshold, value) / this.binsize)
            let color = this.cache[bin]
            if (!color) {
                const low = 0;
                const lowR = 255;
                const lowB = 255;
                const lowG = 255;

                if (value <= low) value = low;
                else if (value >= this.threshold) value = this.threshold;

                const diff = this.threshold - low;

                const frac = (value - low) / diff;
                const r = Math.floor(lowR + frac * (this.r - lowR));
                const g = Math.floor(lowG + frac * (this.g - lowG));
                const b = Math.floor(lowB + frac * (this.b - lowB));

                color = {
                    red: r,
                    green: g,
                    blue: b,
                    rgb: "rgb(" + r + "," + g + "," + b + ")"
                }
                this.cache[bin] = color
            }
            return color
        }

        ColorScale.prototype.stringify = function () {
            return "" + this.threshold + ',' + this.r + ',' + this.g + ',' + this.b;
        };

        function RatioColorScale(threshold) {

            this.threshold = threshold;

            this.positiveScale = new ColorScale({
                threshold: Math.log(threshold),
                r: 255,
                g: 0,
                b: 0
            });
            this.negativeScale = new ColorScale(
                {
                    threshold: Math.log(threshold),
                    r: 0,
                    g: 0,
                    b: 255
                })
        }

        RatioColorScale.prototype.setThreshold = function (threshold) {
            this.threshold = threshold;
            this.positiveScale.setThreshold(Math.log(threshold));
            this.negativeScale.setThreshold(Math.log(threshold));
        }

        RatioColorScale.prototype.getThreshold = function () {
            return this.threshold;
        }

        RatioColorScale.prototype.setColorComponents = function (components, plusOrMinus) {
            if ('-' === plusOrMinus) {
                return this.negativeScale.setColorComponents(components);
            }
            else {
                return this.positiveScale.setColorComponents(components);
            }
        }

        RatioColorScale.prototype.getColorComponents = function (plusOrMinus) {

            if ('-' === plusOrMinus) {
                return this.negativeScale.getColorComponents();
            }
            else {
                return this.positiveScale.getColorComponents();
            }
        }

        RatioColorScale.prototype.getColor = function (score) {

            var logScore = Math.log(score);

            if (logScore < 0) {
                return this.negativeScale.getColor(-logScore);
            }
            else {
                return this.positiveScale.getColor(logScore);
            }
        }

        RatioColorScale.prototype.stringify = function () {
            return "R:" + this.threshold + ":" + this.positiveScale.stringify() + ":" + this.negativeScale.stringify();
        };


        hic.destringifyColorScale = function (string) {

            var pnstr, ratioCS;

            if (string.startsWith("R:")) {
                pnstr = string.substring(2).split(":");
                ratioCS = new RatioColorScale(Number.parseFloat(pnstr[0]));
                ratioCS.positiveScale = foo(pnstr[1]);
                ratioCS.negativeScale = foo(pnstr[2]);
                return ratioCS;
            }

            else {
                return foo(string);
            }

            function foo(str) {
                var cs, tokens;

                tokens = str.split(",");

                cs = {
                    threshold: tokens[0],
                    r: tokens[1],
                    g: tokens[2],
                    b: tokens[3]
                };
                return new ColorScale(cs);
            }

        };

        return hic;

    }
)
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/21/17.
 */
var hic = (function (hic) {

    hic.ControlMapWidget = function (browser, $parent) {

        const self = this

        this.browser = browser;

        // container
        this.$container = $('<div class="hic-control-map-selector-container">');
        this.$container.hide();
        $parent.append(this.$container);

        // select
        this.$select = $('<select>');
        this.$select.attr('name', 'control_map_selector');
        this.$container.append(this.$select);

        // a-b toggle icon
        const $toggle_container = $('<div>');
        this.$container.append($toggle_container);

        // cycle button
        const $cycle_container = $('<div>');
        this.$container.append($cycle_container);

        this.controlMapHash = new hic.ControlMapHash(browser, this.$select, $toggle_container, $cycle_container, toggle_arrows_up(), toggle_arrows_down());

        browser.eventBus.subscribe("ControlMapLoad", function (event) {
            self.controlMapHash.updateOptions( browser.getDisplayMode() );
            self.$container.show();
        });

        browser.eventBus.subscribe("MapLoad", function (event) {
            if (!browser.controlDataset) {
                self.$container.hide();
            }
        });

        browser.eventBus.subscribe("DisplayMode", function (event) {
            self.controlMapHash.updateOptions( event.data );
        });

    };
    
    hic.ControlMapWidget.prototype.toggleDisplayMode = function () {
        this.controlMapHash.toggleDisplayMode();
    }
    
    hic.ControlMapWidget.prototype.toggleDisplayModeCycle = function () {
        this.controlMapHash.toggleDisplayModeCycle();
    }
    
    hic.ControlMapWidget.prototype.getDisplayModeCycle = function () {
        return this.controlMapHash.cycleID;
    }
    
    hic.ControlMapWidget.prototype

    hic.ControlMapHash = function (browser, $select, $toggle, $cycle, $img_a, $img_b) {

        const self = this

        this.browser = browser;
        this.$select = $select;
        this.$toggle = $toggle;
        this.$cycle = $cycle;

        // a arrow
        this.$img_a = $img_a;
        this.$toggle.append(this.$img_a);

        // b arrow
        this.$img_b = $img_b;
        this.$toggle.append(this.$img_b);

        const A   = { title: 'A',   value: 'A',   other: 'B',   $hidden: $img_b, $shown: $img_a };
        const B   = { title: 'B',   value: 'B',   other: 'A',   $hidden: $img_a, $shown: $img_b };
        const AOB = { title: 'A/B', value: 'AOB', other: 'BOA', $hidden: $img_b, $shown: $img_a };
        const BOA = { title: 'B/A', value: 'BOA', other: 'AOB', $hidden: $img_a, $shown: $img_b };

        this.hash =
            {
                'A': A,
                'B': B,
                'AOB': AOB,
                'BOA': BOA
            };

        this.$select.on('change', function (e) {
            let value;

            self.disableDisplayModeCycle();

            value = $(this).val();
            self.setDisplayMode( value );
        });

        this.$toggle.on('click', function (e) {
            self.disableDisplayModeCycle();
            self.toggleDisplayMode();
        });

        // cycle outline
        this.$cycle_outline = cycle_outline();
        $cycle.append(this.$cycle_outline);

        // cycle solid
        this.$cycle_solid = cycle_solid();
        $cycle.append(this.$cycle_solid);
        this.$cycle_solid.hide();

        $cycle.on('click', function () {
            self.toggleDisplayModeCycle();
        });

        $cycle.hide();

    };

    hic.ControlMapHash.prototype.disableDisplayModeCycle = function () {

        if (this.cycleID) {

            clearTimeout(this.cycleID);
            this.cycleID = undefined;

            this.$cycle_solid.hide();
            this.$cycle_outline.show();
        }

    };

    hic.ControlMapHash.prototype.toggleDisplayModeCycle = function () {
        let self = this;

        if (this.cycleID) {

            this.disableDisplayModeCycle();
        } else {

            doToggle()

            this.$cycle_solid.show();
            this.$cycle_outline.hide();
        }

        function doToggle() {
            self.cycleID = setTimeout(async function () {
                await self.toggleDisplayMode()
                doToggle()
            }, 2500)
        }

    };

    hic.ControlMapHash.prototype.toggleDisplayMode = async function () {

        let displayModeOld,
            displayModeNew,
            str;

        displayModeOld = this.browser.getDisplayMode();

        // render new display mode
        displayModeNew = this.hash[ displayModeOld ].other;
        await this.browser.setDisplayMode(displayModeNew);

        // update exchange icon
        this.hash[ displayModeNew ].$hidden.hide();
        this.hash[ displayModeNew ].$shown.show();

        // update select element
        str = 'option[value=' + displayModeNew + ']';

        this.$select.find( str ).prop('selected', true);

    };

    hic.ControlMapHash.prototype.setDisplayMode = function (displayMode) {

        setDisplayModeHelper.call(this, displayMode);

        this.browser.setDisplayMode(displayMode);
    };

    hic.ControlMapHash.prototype.updateOptions = function (displayMode) {
        let self = this;

        this.$img_a.hide();
        this.$img_b.hide();

        this.$select.empty();

        Object.keys(this.hash).forEach(function (key) {
            let item,
                option;

            item = self.hash[ key ];

            option = $('<option>').attr('title', item.title).attr('value', item.value).text(item.title);

            if(displayMode === item.value) {

                option.attr('selected', true);
                item.$shown.show();

                setDisplayModeHelper.call(self, displayMode);
            }

            self.$select.append(option);

        });

    };

    function setDisplayModeHelper (displayMode) {

        this.hash[ displayMode ].$hidden.hide();
        this.hash[ displayMode ].$shown.show();

        this.$cycle.show();
        this.$toggle.show();

        // if ('A' === displayMode || 'B' === displayMode) {
        //     this.$cycle.show();
        //     this.$toggle.show();
        // } else {
        //     this.$cycle.hide();
        //     this.$toggle.hide();
        // }

    }

    function toggle_arrows_up() {
        let str,
            a;

        str = '<svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch -->\n' +
            '    <title>Toggle Maps</title>\n' +
            '    <desc>Created with Sketch.</desc>\n' +
            '    <defs></defs>\n' +
            '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="Group">\n' +
            '            <rect id="Rectangle" stroke="#A6A6A6" stroke-width="1.25201381" fill="#F8F8F8" x="0.626006904" y="0.626006904" width="32.7479862" height="32.7479862" rx="3.91254315"></rect>\n' +
            '            <g id="arrows" transform="translate(6.533947, 7.003452)" fill-rule="nonzero" stroke="#5F5F5F" stroke-width="0.626006904">\n' +
            '                <path d="M25.9411017,8.76431329 L11.8559464,8.76431329 L11.8559464,6.88629258 C11.8559464,6.05237313 10.8440845,5.63114873 10.2529383,6.22229488 L7.12290378,9.3523294 C6.75622024,9.71905207 6.75622024,10.3136021 7.12290378,10.6802857 L10.2529383,13.8103202 C10.8409153,14.3982581 11.8559464,13.9850935 11.8559464,13.1463616 L11.8559464,11.2683409 L25.9411017,11.2683409 C26.4597093,11.2683409 26.8801121,10.8479381 26.8801121,10.3293306 L26.8801121,9.70332365 C26.8801121,9.18471605 26.4597093,8.76431329 25.9411017,8.76431329 Z" id="down-arrow" fill="#F8F8F8" transform="translate(16.864002, 10.016110) rotate(-90.000000) translate(-16.864002, -10.016110) "></path>\n' +
            '                <path d="M13.1470856,8.76431329 L-0.938069748,8.76431329 L-0.938069748,6.88629258 C-0.938069748,6.05237313 -1.94993166,5.63114873 -2.5410778,6.22229488 L-5.67111233,9.3523294 C-6.03779587,9.71905207 -6.03779587,10.3136021 -5.67111233,10.6802857 L-2.5410778,13.8103202 C-1.95310082,14.3982581 -0.938069748,13.9850935 -0.938069748,13.1463616 L-0.938069748,11.2683409 L13.1470856,11.2683409 C13.6656932,11.2683409 14.086096,10.8479381 14.086096,10.3293306 L14.086096,9.70332365 C14.086096,9.18471605 13.6656932,8.76431329 13.1470856,8.76431329 Z" id="up-arrow" fill="#5F5F5F" transform="translate(4.069985, 10.016110) scale(1, -1) rotate(-90.000000) translate(-4.069985, -10.016110) "></path>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>';

        a = str.split('\n').join(' ');

        return $(a);
    }

    function toggle_arrows_down() {
        let str,
            b;

        str = '<svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch -->\n' +
            '    <title>Toggle Maps</title>\n' +
            '    <desc>Created with Sketch.</desc>\n' +
            '    <defs></defs>\n' +
            '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="Group">\n' +
            '            <rect id="Rectangle" stroke="#A6A6A6" stroke-width="1.25201381" fill="#F8F8F8" x="0.626006904" y="0.626006904" width="32.7479862" height="32.7479862" rx="3.91254315"></rect>\n' +
            '            <g id="arrows" transform="translate(6.533947, 7.003452)" fill-rule="nonzero" stroke="#5F5F5F" stroke-width="0.626006904">\n' +
            '                <path d="M25.9411017,8.76431329 L11.8559464,8.76431329 L11.8559464,6.88629258 C11.8559464,6.05237313 10.8440845,5.63114873 10.2529383,6.22229488 L7.12290378,9.3523294 C6.75622024,9.71905207 6.75622024,10.3136021 7.12290378,10.6802857 L10.2529383,13.8103202 C10.8409153,14.3982581 11.8559464,13.9850935 11.8559464,13.1463616 L11.8559464,11.2683409 L25.9411017,11.2683409 C26.4597093,11.2683409 26.8801121,10.8479381 26.8801121,10.3293306 L26.8801121,9.70332365 C26.8801121,9.18471605 26.4597093,8.76431329 25.9411017,8.76431329 Z" id="down-arrow" fill="#5F5F5F" transform="translate(16.864002, 10.016110) rotate(-90.000000) translate(-16.864002, -10.016110) "></path>\n' +
            '                <path d="M13.1470856,8.76431329 L-0.938069748,8.76431329 L-0.938069748,6.88629258 C-0.938069748,6.05237313 -1.94993166,5.63114873 -2.5410778,6.22229488 L-5.67111233,9.3523294 C-6.03779587,9.71905207 -6.03779587,10.3136021 -5.67111233,10.6802857 L-2.5410778,13.8103202 C-1.95310082,14.3982581 -0.938069748,13.9850935 -0.938069748,13.1463616 L-0.938069748,11.2683409 L13.1470856,11.2683409 C13.6656932,11.2683409 14.086096,10.8479381 14.086096,10.3293306 L14.086096,9.70332365 C14.086096,9.18471605 13.6656932,8.76431329 13.1470856,8.76431329 Z" id="up-arrow" fill="#F8F8F8" transform="translate(4.069985, 10.016110) scale(1, -1) rotate(-90.000000) translate(-4.069985, -10.016110) "></path>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>';

        b = str.split('\n').join(' ');

        return $(b);
    }

    function cycle_outline() {
        let str,
            b;

        str = '<svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch -->\n' +
            '    <title>Cycle Maps</title>\n' +
            '    <desc>Created with Sketch.</desc>\n' +
            '    <defs></defs>\n' +
            '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="Group" fill="#F8F8F8">\n' +
            '            <rect id="Rectangle" stroke="#A6A6A6" stroke-width="1.25201381" x="0.626006904" y="0.626006904" width="32.7479862" height="32.7479862" rx="3.91254315"></rect>\n' +
            '            <g id="circle-notch-group" transform="translate(5.947066, 6.103567)" fill-rule="nonzero" stroke="#5F5F5F" stroke-width="0.75">\n' +
            '                <path d="M12.5012159,1.07356655 L12.5012159,1.81734411 C12.5012159,2.29971235 12.8262916,2.71738683 13.2908449,2.84717621 C16.7518005,3.81392183 19.2875784,6.98762275 19.2875784,10.7595067 C19.2875784,15.2996349 15.6133435,18.9745898 11.072508,18.9745898 C6.53238683,18.9745898 2.85743758,15.3003493 2.85743758,10.7595067 C2.85743758,6.98815851 5.39276905,3.81401113 8.85408182,2.84717621 C9.31872442,2.71738683 9.64380011,2.29962306 9.64380011,1.81721016 L9.64380011,1.07392373 C9.64380011,0.372561009 8.98150471,-0.138381443 8.30233269,0.0365908983 C3.5094195,1.27117502 -0.0270343765,5.6342771 0.00015572077,10.8189768 C0.0323016485,16.9379636 4.97728293,21.8448684 11.0963496,21.8319654 C17.2005487,21.819107 22.1449942,16.8667067 22.1449942,10.7595067 C22.1449942,5.5968181 18.611621,1.2595221 13.831209,0.0336441837 C13.1565464,-0.139363681 12.5012159,0.377070376 12.5012159,1.07356655 Z" id="circle-notch---solid"></path>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>';

        b = str.split('\n').join(' ');

        return $(b);

    }

    function cycle_solid() {
        let str,
            b;

        str = '<svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch -->\n' +
            '    <title>Cycle Maps</title>\n' +
            '    <desc>Created with Sketch.</desc>\n' +
            '    <defs></defs>\n' +
            '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="Group">\n' +
            '            <rect id="Rectangle" stroke="#A6A6A6" stroke-width="1.25201381" fill="#F8F8F8" x="0.626006904" y="0.626006904" width="32.7479862" height="32.7479862" rx="3.91254315"></rect>\n' +
            '            <g id="circle-notch-group" transform="translate(5.947066, 6.103567)" fill="#5F5F5F" fill-rule="nonzero">\n' +
            '                <path d="M12.5012159,1.07356655 L12.5012159,1.81734411 C12.5012159,2.29971235 12.8262916,2.71738683 13.2908449,2.84717621 C16.7518005,3.81392183 19.2875784,6.98762275 19.2875784,10.7595067 C19.2875784,15.2996349 15.6133435,18.9745898 11.072508,18.9745898 C6.53238683,18.9745898 2.85743758,15.3003493 2.85743758,10.7595067 C2.85743758,6.98815851 5.39276905,3.81401113 8.85408182,2.84717621 C9.31872442,2.71738683 9.64380011,2.29962306 9.64380011,1.81721016 L9.64380011,1.07392373 C9.64380011,0.372561009 8.98150471,-0.138381443 8.30233269,0.0365908983 C3.5094195,1.27117502 -0.0270343765,5.6342771 0.00015572077,10.8189768 C0.0323016485,16.9379636 4.97728293,21.8448684 11.0963496,21.8319654 C17.2005487,21.819107 22.1449942,16.8667067 22.1449942,10.7595067 C22.1449942,5.5968181 18.611621,1.2595221 13.831209,0.0336441837 C13.1565464,-0.139363681 12.5012159,0.377070376 12.5012159,1.07356655 Z" id="circle-notch---solid"></path>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>';

        b = str.split('\n').join(' ');

        return $(b);

    }

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */


/**
 * Barebones event bus.
 */

var hic = (function (hic) {


    hic.EventBus = function () {


        // Map eventType -> list of subscribers
        this.subscribers = {};

        this.stack = []
    };

    hic.EventBus.prototype.subscribe = function (eventType, object) {

        var subscriberList = this.subscribers[eventType];
        if (subscriberList == undefined) {
            subscriberList = [];
            this.subscribers[eventType] = subscriberList;
        }
        subscriberList.push(object);

    };

    hic.EventBus.prototype.post = function (event) {

        const eventType = event.type

        if(this.hold) {
            this.stack.push(event)
        }
            else {
            const subscriberList = this.subscribers[eventType];

            if (subscriberList) {
                for (let subscriber of subscriberList) {

                    if ("function" === typeof subscriber.receiveEvent) {
                        subscriber.receiveEvent(event);
                    } else if ("function" === typeof subscriber) {
                        subscriber(event);
                    }
                }
            }
        }
    }

    hic.EventBus.prototype.hold = function() {
        this.hold = true;

    }

    hic.EventBus.prototype.release = function () {
        this.hold = false;
        for(let event of this.stack) {
            this.post(event)
        }
        this.stack = []
    }



    hic.Event = function (type, data, propogate) {
        return {
            type: type,
            data: data || {},
            propogate: propogate !== undefined ? propogate : true     // Default to true
        }
    };
    

    /**
     * The global event bus.  For events outside the scope of a single browser.
     *
     * @type {hic.EventBus}
     */
    hic.eventBus = new hic.EventBus();



    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */


var hic = (function (hic) {


    hic.geneSearch = function (genomeId, featureName) {

        return new Promise(function (fulfill, reject) {

            // Hardcode this for now
            var searchServiceURL = "https://portals.broadinstitute.org/webservices/igv/locus?genome=" + genomeId + "&name=" + featureName;

            igv.xhr.loadString(searchServiceURL)
                .then(function (data) {

                    var results = parseSearchResults(data);

                    if (results.length == 0) {
                        //alert('No feature found with name "' + feature + '"');
                        fulfill(undefined);
                    }
                    else {
                        // Just take first result for now
                        fulfill(results[0])

                    }
                })
                .catch(reject);
        });
    }

    function parseSearchResults(data) {

        var lines = igv.splitLines(data),
            linesTrimmed = [],
            results = [];

        lines.forEach(function (item) {
            if ("" === item) {
                // do nothing
            } else {
                linesTrimmed.push(item);
            }
        });

        linesTrimmed.forEach(function (line) {
            // Example result -  EGFR	chr7:55,086,724-55,275,031	refseq

            var tokens = line.split("\t");

            if (tokens.length >= 3) {
                results.push(tokens[1]);

            }

        });

        return results;

    }


    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */


var hic = (function (hic) {

    /**
     * 
     * @param id
     * @param chromosomes -- an array of hic.Chromosome objects.  
     * @constructor
     */
    hic.Genome = function (id, chromosomes) {

        var self = this;

        this.id = id;
        this.chromosomes = chromosomes;
        this.chromosomeLookupTable = {};

        // Alias for size for igv compatibility
        this.genomeLength = 0;
        this.chromosomes.forEach(function (c) {
            c.bpLength = c.size;
            if('all' !== c.name.toLowerCase()) {
                self.genomeLength += c.size;
            }
        })

        /**
         * Maps the official chromosome name to an alias.  Deals with
         * 1 <-> chr1,  chrM <-> MT,  IV <-> chr4, etc.
         * @param str
         */
        var chrAliasTable = {};

        // The standard mappings
        chromosomes.forEach(function (chromosome) {
            var name = chromosome.name,
                alias = name.startsWith("chr") ? name.substring(3) : "chr" + name;
            chrAliasTable[alias] = name;
            if (name === "chrM") chrAliasTable["MT"] = "chrM";
            if (name === "MT") chrAliasTable["chrmM"] = "MT";

            self.chromosomeLookupTable[name.toLowerCase()] = chromosome;
        });


        this.chrAliasTable = chrAliasTable;

    }

    hic.Genome.prototype.getChromosomeName = function (str) {
        var chr = this.chrAliasTable[str];
        return chr ? chr : str;
    };

    hic.Genome.prototype.getChromosome = function (str) {
        var chrname = this.getChromosomeName(str).toLowerCase();
        return this.chromosomeLookupTable[chrname];
    };

    /**
     * Return the genome coordinate for the give chromosome and position.
     */
    hic.Genome.prototype.getGenomeCoordinate = function (chr, bp) {
        return this.getCumulativeOffset(chr.name) + bp;
    };

    hic.Genome.prototype.getChromsosomeForCoordinate = function (bp) {
        var i = 0,
            offset = 0,
            l;

        for (i = 1; i < this.chromosomes.length; i++) {
            l = this.chromosomes[i].size;
            if (offset + l > bp) return this.chromosomes[i];
            offset += l;
        }
        return this.chromosomes[this.chromosomes.length - 1];

    }


    /**
     * Return the offset in genome coordinates (kb) of the start of the given chromosome
     */
    hic.Genome.prototype.getCumulativeOffset = function (chr) {

        var queryChr;

        queryChr = this.getChromosomeName(chr);

        if (this.cumulativeOffsets === undefined) {
            computeCumulativeOffsets.call(this);
        }
        return this.cumulativeOffsets[queryChr];
    };

    function computeCumulativeOffsets() {
        var self = this,
            list,
            cumulativeOffsets,
            offset,
            i,
            chromosome;

        cumulativeOffsets = {};
        offset = 0;
        // Skip first chromosome (its chr all).
        for (i = 1; i < self.chromosomes.length; i++) {

            chromosome = self.chromosomes[i];
            cumulativeOffsets[chromosome.name] = Math.floor(offset);

            // Genome coordinates are in KB.  Beware 32-bit max value limit
            offset += (chromosome.size); // / 1000);
        }
        self.cumulativeOffsets = cumulativeOffsets;

    }

    // Required for igv.js
    hic.Genome.prototype.getGenomeLength = function () {
        return this.genomeLength;
    }


    return hic;

})
(hic || {});


/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * @author Jim Robinson
 */


var hic = (function (hic) {

    const defaultPixelSize = 1
    const MAX_PIXEL_SIZE = 12;
    const DEFAULT_ANNOTATION_COLOR = "rgb(22, 129, 198)";
    const defaultSize =
        {
            width: 640,
            height: 640
        };
    let defaultState;

    hic.allBrowsers = [];

    hic.createBrowser = async function (hic_container, config, callback) {

        const $hic_container = $(hic_container);

        setDefaults(config);

        const apiKey = config.apiKey;
        if (apiKey) {
            igv.setApiKey(apiKey);
            hic.apiKey = apiKey;
        }

        let queryString = config.queryString || config.href;   // href for backward compatibility
        if (queryString === undefined && config.initFromUrl !== false) {
            queryString = window.location.href;
        }

        if (queryString) {
            if (!queryString.includes("?")) {
                queryString = "?" + queryString;
            }
            const query = hic.extractQuery(queryString);
            const uriDecode = queryString.includes("%2C");
            igv.Browser.decodeQuery(query, config, uriDecode);
        }

        const browser = new hic.Browser($hic_container, config);

        browser.eventBus.hold()

        hic.allBrowsers.push(browser);

        hic.Browser.setCurrentBrowser(browser);

        if (hic.allBrowsers.length > 1) {
            hic.allBrowsers.forEach(function (b) {
                b.$browser_panel_delete_button.show();
            });
        }

        if (undefined === igv.browser) {
            createIGV($hic_container, browser);
        }

        ///////////////////////////////////
        try {
            browser.contactMatrixView.startSpinner();
            browser.$user_interaction_shield.show();

            const hasControl = config.controlUrl !== undefined

            // if (!config.name) config.name = await extractName(config)
            // const prefix = hasControl ? "A: " : "";
            // browser.$contactMaplabel.text(prefix + config.name);
            // browser.$contactMaplabel.attr('title', config.name);

            await browser.loadHicFile(config, true)
            await loadControlFile(config)

            if (config.cycle) {
                config.displayMode = "A"
            }

            if (config.displayMode) {
                browser.contactMatrixView.displayMode = config.displayMode;
                browser.eventBus.post({type: "DisplayMode", data: config.displayMode});
            }
            if (config.colorScale) {
                // This must be done after dataset load
                browser.contactMatrixView.setColorScale(config.colorScale);
                browser.eventBus.post({type: "ColorScale", data: browser.contactMatrixView.getColorScale()});
            }

            var promises = [];
            if (config.tracks) {
                promises.push(browser.loadTracks(config.tracks))
            }

            if (config.normVectorFiles) {
                config.normVectorFiles.forEach(function (nv) {
                    promises.push(browser.loadNormalizationFile(nv));
                })
            }
            await Promise.all(promises);

            const tmp = browser.contactMatrixView.colorScaleThresholdCache;
            browser.eventBus.release()
            browser.contactMatrixView.colorScaleThresholdCache = tmp

            if (config.cycle) {
                browser.controlMapWidget.toggleDisplayModeCycle();
            } else {
                browser.update()
            }

            if (typeof callback === "function") callback();
        } finally {
            browser.contactMatrixView.stopSpinner();
            browser.$user_interaction_shield.hide();
        }


        return browser;


        // Explicit set dataset, do not need to load.  Used by "interactive figures"
        async function setInitialDataset(browser, config) {

            if (config.dataset) {
                config.dataset.name = config.name;
                browser.$contactMaplabel.text(config.name);
                browser.$contactMaplabel.attr('title', config.name);
                browser.dataset = config.dataset;
                browser.genome = new hic.Genome(browser.dataset.genomeId, browser.dataset.chromosomes);
                igv.browser.genome = browser.genome;
                browser.eventBus.post(hic.Event("GenomeChange", browser.genome.id));
                browser.eventBus.post(hic.Event("MapLoad", browser.dataset));
                return config.dataset;
            } else {
                return undefined;
            }
        }

        // Load the control file, if any
        async function loadControlFile(config) {
            if (config.controlUrl) {
                return browser.loadHicControlFile({
                    url: config.controlUrl,
                    name: config.controlName,
                    nvi: config.controlNvi,
                    isControl: true
                }, true);
            } else {
                return undefined;
            }
        }
    };

    hic.deleteBrowserPanel = function (browser) {

        if (browser === hic.Browser.getCurrentBrowser()) {
            hic.Browser.setCurrentBrowser(undefined);
        }

        hic.allBrowsers.splice(_.indexOf(hic.allBrowsers, browser), 1);
        browser.$root.remove();
        browser = undefined;

        if (1 === hic.allBrowsers.length) {
            hic.Browser.setCurrentBrowser(hic.allBrowsers[0]);
            hic.Browser.getCurrentBrowser().$browser_panel_delete_button.hide();
        }

    };


    /**
     * Load a dataset outside the context of a browser.  Purpose is to "pre load" a shared dataset when
     * instantiating multiple browsers in a page.
     *
     * @param config
     */
    hic.loadDataset = async function (config) {


        const name = await extractName(config)
        config.name = name;
        var hicReader;
        hicReader = new hic.HiCReader(config);

        const straw = new HicStraw(config)
        const dataset = await loadDataset(config)
        dataset.name = name

        dataset.name = this.name;

        if (config.nvi) {
            var nviArray = decodeURIComponent(config.nvi).split(","),
                range = {start: parseInt(nviArray[0]), size: parseInt(nviArray[1])};

            await hicReader.readNormVectorIndex(dataset, range)
            return dataset;
        } else {
            return dataset;
        }


    };

    hic.syncBrowsers = function (browsers) {

        var browsersWithMaps, genome, incompatibleDatasets, gid;

        browsersWithMaps = browsers.filter(function (b) {
            return b.dataset !== undefined;
        })

        if (browsersWithMaps.length < 2) {
            // Nothing to sync
            return;
        }

        // Canonical browser is the first one, arbitrarily
        genome = canonicalGenomeId(browsers[0].dataset.genomeId);

        // Sync compatible maps only

        incompatibleDatasets = [];
        browsersWithMaps.forEach(function (b1) {

            gid = canonicalGenomeId(b1.dataset.genomeId);

            if (areCompatible(browsers[0].dataset, b1.dataset)) {
                browsers.forEach(function (b2) {
                    if (b1 !== b2 && !b1.synchedBrowsers.includes(b2)) {
                        b1.synchedBrowsers.push(b2);
                    }

                })
            } else {
                incompatibleDatasets.push(b1.dataset.genomeId);
            }
        });

        if (incompatibleDatasets.length > 0) {
            igv.presentAlert("Not all maps could be synchronized.  Incompatible assemblies: " + browsers[0].dataset.genomeId + " vs " + incompatibleDatasets.join());
        }


        function canonicalGenomeId(genomeId) {

            switch (genomeId) {
                case "GRCh38":
                    return "hg38";
                case "GRCh37":
                    return "hg19";
                case "GRCm38" :
                    return "mm10";
                default:
                    return genomeId;
            }
        }

    };

    hic.Browser = function ($app_container, config) {

        this.customCrosshairsHandler = true;

        this.config = config;
        this.figureMode = config.figureMode || config.miniMode;    // Mini mode for backward compatibility
        this.resolutionLocked = false;
        this.eventBus = new hic.EventBus();


        this.id = _.uniqueId('browser_');
        this.trackRenderers = [];
        this.tracks2D = [];
        this.normVectorFiles = [];

        this.synchedBrowsers = [];

        this.isMobile = hic.isMobile();

        this.$root = $('<div class="hic-root unselect">');

        if (config.width) {
            this.$root.css("width", String(config.width));
        }
        if (config.height) {
            this.$root.css("height", String(config.height + hic.LayoutController.navbarHeight(this.config.figureMode)));
        }

        $app_container.append(this.$root);

        this.layoutController = new hic.LayoutController(this, this.$root);  // <- contactMatixView created here, nasty side-effect!

        // prevent user interaction during lengthy data loads
        this.$user_interaction_shield = $('<div>', {class: 'hic-root-prevent-interaction'});
        this.$root.append(this.$user_interaction_shield);
        this.$user_interaction_shield.hide();

        this.hideCrosshairs();

        this.state = config.state ? config.state : defaultState.clone();

        this.eventBus.subscribe("LocusChange", this);

    };


    hic.Browser.getCurrentBrowser = function () {

        if (hic.allBrowsers.length === 1) {
            return hic.allBrowsers[0];
        } else {
            return hic.Browser.currentBrowser;
        }

    };

    hic.Browser.setCurrentBrowser = function (browser) {

        // unselect current browser
        if (undefined === browser) {

            if (hic.Browser.currentBrowser) {
                hic.Browser.currentBrowser.$root.removeClass('hic-root-selected');
            }

            hic.Browser.currentBrowser = browser;
            return;
        }


        if (browser !== hic.Browser.currentBrowser) {

            if (hic.Browser.currentBrowser) {
                hic.Browser.currentBrowser.$root.removeClass('hic-root-selected');
            }

            browser.$root.addClass('hic-root-selected');
            hic.Browser.currentBrowser = browser;

            hic.eventBus.post(hic.Event("BrowserSelect", browser));
        }

    };

    hic.Browser.prototype.toggleMenu = function () {

        if (this.$menu.is(':visible')) {
            this.hideMenu();
        } else {
            this.showMenu();
        }

    };

    hic.Browser.prototype.showMenu = function () {
        this.$menu.show();
    };

    hic.Browser.prototype.hideMenu = function () {
        this.$menu.hide();
    };

    hic.Browser.prototype.startSpinner = function () {
        this.contactMatrixView.startSpinner();
    };

    hic.Browser.prototype.stopSpinner = function () {
        this.contactMatrixView.stopSpinner();
    };

    hic.Browser.prototype.setDisplayMode = async function (mode) {
        await this.contactMatrixView.setDisplayMode(mode);
        this.eventBus.post(hic.Event("DisplayMode", mode));
    };

    hic.Browser.prototype.getDisplayMode = function () {
        return this.contactMatrixView ? this.contactMatrixView.displayMode : undefined;
    };

    hic.Browser.prototype.toggleDisplayMode = function () {
        this.controlMapWidget.toggleDisplayMode();
    };

    hic.Browser.prototype.getColorScale = function () {

        if (!this.contactMatrixView) return undefined;

        switch (this.getDisplayMode()) {
            case 'AOB':
            case 'BOA':
                return this.contactMatrixView.ratioColorScale;
            case 'AMB':
                return this.contactMatrixView.diffColorScale;
            default:
                return this.contactMatrixView.colorScale;
        }
    };

    hic.Browser.prototype.setColorScaleThreshold = function (threshold) {
        this.contactMatrixView.setColorScaleThreshold(threshold);
    };

    hic.Browser.prototype.updateCrosshairs = function (coords) {
        var xGuide,
            yGuide;

        xGuide = coords.y < 0 ? {left: 0} : {top: coords.y, left: 0};
        this.contactMatrixView.$x_guide.css(xGuide);
        this.layoutController.$x_track_guide.css(xGuide);

        yGuide = coords.x < 0 ? {top: 0} : {top: 0, left: coords.x};
        this.contactMatrixView.$y_guide.css(yGuide);
        this.layoutController.$y_track_guide.css(yGuide);

        if (this.customCrosshairsHandler) {
            let { x, y } = coords;
            let { startBP: startX, endBP: endX } = this.genomicState('x');
            let { startBP: startY, endBP: endY } = this.genomicState('y');
            console.log('custom crosshairs handler');
         }

    };

    igv.Browser.prototype.setCustomCrosshairsHandler = function (crosshairsHandler) {
        this.customCrosshairsHandler = crosshairsHandler;
    };

    hic.Browser.prototype.hideCrosshairs = function () {

        this.contactMatrixView.$x_guide.hide();
        this.layoutController.$x_track_guide.hide();

        this.contactMatrixView.$y_guide.hide();
        this.layoutController.$y_track_guide.hide();

    };

    hic.Browser.prototype.showCrosshairs = function () {

        this.contactMatrixView.$x_guide.show();
        this.layoutController.$x_track_guide.show();

        this.contactMatrixView.$y_guide.show();
        this.layoutController.$y_track_guide.show();
    };

    hic.Browser.prototype.genomicState = function (axis) {
        var gs,
            bpResolution;

        bpResolution = this.dataset.bpResolutions[this.state.zoom];
        gs = {
            bpp: bpResolution / this.state.pixelSize
        };

        if (axis === "x") {
            gs.chromosome = this.dataset.chromosomes[this.state.chr1];
            gs.startBP = this.state.x * bpResolution;
            gs.endBP = gs.startBP + gs.bpp * this.contactMatrixView.getViewDimensions().width;
        } else {
            gs.chromosome = this.dataset.chromosomes[this.state.chr2];
            gs.startBP = this.state.y * bpResolution;
            gs.endBP = gs.startBP + gs.bpp * this.contactMatrixView.getViewDimensions().height;
        }
        return gs;
    };


    /**
     * Load a list of 1D genome tracks (wig, etc).
     *
     * NOTE: public API function
     *
     * @param configs
     */
    hic.Browser.prototype.loadTracks = async function (configs) {

        var self = this, errorPrefix;

        // If loading a single track remember its name, for error message
        errorPrefix = 1 === configs.length ? ("Error loading track " + configs[0].name) : "Error loading tracks";

        try {
            this.contactMatrixView.startSpinner();
            const ps = inferTypes(configs)
            const trackConfigurations = await Promise.all(ps)

            var trackXYPairs, promises2D;

            trackXYPairs = [];
            promises2D = [];
            const promisesNV = []

            for (let config of trackConfigurations) {
                if (config) {
                    var isLocal = config.url instanceof File,
                        fn = isLocal ? config.url.name : config.url;
                    if ("annotation" === config.type && config.color === undefined) {
                        config.color = DEFAULT_ANNOTATION_COLOR;
                    }
                    config.height = this.layoutController.track_height;

                    if (fn.endsWith(".juicerformat") || fn.endsWith("nv") || fn.endsWith(".juicerformat.gz") || fn.endsWith("nv.gz")) {
                        promisesNV.push(this.loadNormalizationFile(config.url))
                    }

                    if (config.type === undefined || "interaction" === config.type) {
                        // Assume this is a 2D track
                        promises2D.push(hic.loadTrack2D(config));
                    } else {
                        var track = igv.createTrack(config, this);
                        trackXYPairs.push({x: track, y: track});
                    }
                }
            }

            if (trackXYPairs.length > 0) {
                this.layoutController.tracksLoaded(trackXYPairs);
                await this.updateLayout();
            }

            const tracks2D = await Promise.all(promises2D)
            if (tracks2D && tracks2D.length > 0) {
                this.tracks2D = self.tracks2D.concat(tracks2D);
                this.eventBus.post(hic.Event("TrackLoad2D", this.tracks2D));
            }

            const normVectors = await Promise.all(promisesNV)

        } catch (error) {
            hic.presentError(errorPrefix, error);
            console.error(error)

        } finally {
            this.contactMatrixView.stopSpinner();
        }

        function inferTypes(trackConfigurations) {

            var promises = [];
            trackConfigurations.forEach(function (config) {

                var url = config.url;

                if (url && typeof url === "string" && url.includes("drive.google.com")) {

                    promises.push(igv.google.getDriveFileInfo(config.url)

                        .then(function (json) {
                            // Temporarily switch URL to infer tipes
                            config.url = json.originalFilename;
                            igv.inferTrackTypes(config);
                            if (config.name === undefined) {
                                config.name = json.originalFilename;
                            }
                            config.url = url;
                            return config;
                        })
                    );
                } else {
                    igv.inferTrackTypes(config);
                    if (!config.name) {
                        config.name = hic.extractFilename(config.url);
                    }
                    promises.push(Promise.resolve(config));
                }

            });

            return promises;
        }


    }


    hic.Browser.prototype.loadNormalizationFile = function (url) {

        var self = this;

        if (!this.dataset) return;

        self.eventBus.post(hic.Event("NormalizationFileLoad", "start"));

        return this.dataset.hicFile.readNormalizationVectorFile(url, this.dataset.chromosomes)

            .then(function (normVectors) {

                Object.assign(self.dataset.normVectorCache, normVectors);

                normVectors["types"].forEach(function (type) {

                    if (!self.dataset.normalizationTypes) {
                        self.dataset.normalizationTypes = [];
                    }
                    if (_.contains(self.dataset.normalizationTypes, type) === false) {
                        self.dataset.normalizationTypes.push(type);
                    }

                    self.eventBus.post(hic.Event("NormVectorIndexLoad", self.dataset));
                });

                return normVectors;
            })

    }


    hic.Browser.prototype.renderTracks = function () {
        var self = this;
        this.trackRenderers.forEach(function (xyTrackRenderPair, index) {
            self.renderTrackXY(xyTrackRenderPair);
        });

    };

    /**
     * Render the XY pair of tracks.
     *
     * @param xy
     */
    hic.Browser.prototype.renderTrackXY = async function (xy) {

        try {
            this.startSpinner()
            await xy.x.repaint();
            await xy.y.repaint();
        } finally {
            this.stopSpinner()
        }

    }


    hic.Browser.prototype.reset = function () {
        this.layoutController.removeAllTrackXYPairs();
        this.contactMatrixView.clearImageCaches();
        this.tracks2D = [];
        this.tracks = [];
        this.$contactMaplabel.text("");
        this.$contactMaplabel.attr('title', "");
        this.$controlMaplabel.text("");
        this.$controlMaplabel.attr('title', "");
        this.dataset = undefined;
        this.controlDataset = undefined;
    }


    hic.Browser.prototype.clearSession = function () {
        // Clear current datasets.
        this.dataset = undefined;
        this.controlDataset = undefined;
        this.setDisplayMode('A');
    }

    /**
     * Load a .hic file
     *
     * NOTE: public API function
     *
     * @return a promise for a dataset
     * @param config
     */
    hic.Browser.prototype.loadHicFile = async function (config, noUpdates) {

        if (!config.url) {
            console.log("No .hic url specified");
            return undefined;
        }

        this.clearSession();

        try {

            if (!noUpdates) {
                this.contactMatrixView.startSpinner();
                this.$user_interaction_shield.show();
            }

            const name = await extractName(config)
            const prefix = this.controlDataset ? "A: " : "";
            this.$contactMaplabel.text(prefix + name);
            this.$contactMaplabel.attr('title', name);
            config.name = name;

            this.dataset = await loadDataset(config)
            this.dataset.name = name

            const previousGenomeId = this.genome ? this.genome.id : undefined;
            this.genome = new hic.Genome(this.dataset.genomeId, this.dataset.chromosomes);

            // TODO -- this is not going to work with browsers on different assemblies on the same page.
            igv.browser.genome = this.genome;

            if (this.genome.id !== previousGenomeId) {
                this.eventBus.post(hic.Event("GenomeChange", this.genome.id));
            }
            this.eventBus.post(hic.Event("MapLoad", this.dataset));

            if (config.state) {
                this.setState(config.state);
            } else if (config.synchState && this.canBeSynched(config.synchState)) {
                this.syncState(config.synchState);
            } else {
                this.setState(defaultState.clone());
            }
        } finally {
            if (!noUpdates) {
                this.$user_interaction_shield.hide();
                this.stopSpinner();
            }
        }

        // Initiate loading of the norm vector index, but don't block if the "nvi" parameter is not available.
        // Let it load in the background
        const eventBus = this.eventBus

        // If nvi is not supplied, try reading it from remote lambda service
        if (!config.nvi && typeof config.url === "string") {
            const url = new URL(config.url)
            const key = encodeURIComponent(url.hostname + url.pathname)
            const nviResponse = await fetch('https://t5dvc6kn3f.execute-api.us-east-1.amazonaws.com/dev/nvi/' + key)
            if (nviResponse.status === 200) {
                const nvi = await nviResponse.text()
                if (nvi) {
                    config.nvi = nvi
                }
            }
        }

        if (config.nvi) {
            await this.dataset.getNormVectorIndex(config)
            eventBus.post(hic.Event("NormVectorIndexLoad", this.dataset));
        } else {
            const dataset = this.dataset
            dataset.getNormVectorIndex(config)
                .then(function (normVectorIndex) {
                    if (!config.isControl) {
                        eventBus.post(hic.Event("NormVectorIndexLoad", dataset));
                    }
                })
        }
    }

    /**
     * Compare 2 datasets for compatibility.  Compatibility is defined as from the same assembly, even if
     * different IDs are used (e.g. GRCh38 vs hg38)
     * @param d1
     * @param d2
     */
    function areCompatible(d1, d2) {
        return (d1.genomeId === d2.genomeId) || d1.compareChromosomes(d2)
    }

    /**
     * Load a .hic file for a control map
     *
     * NOTE: public API function
     *
     * @return a promise for a dataset
     * @param config
     */
    hic.Browser.prototype.loadHicControlFile = async function (config, noUpdates) {

        try {
            this.$user_interaction_shield.show()
            this.contactMatrixView.startSpinner()
            this.controlUrl = config.url
            const name = await extractName(config)
            config.name = name

            const controlDataset = await loadDataset(config)
            controlDataset.name = name

            if (!this.dataset || areCompatible(this.dataset, controlDataset)) {
                this.controlDataset = controlDataset;
                if (this.dataset) {
                    this.$contactMaplabel.text("A: " + this.dataset.name);
                }
                this.$controlMaplabel.text("B: " + controlDataset.name);
                this.$controlMaplabel.attr('title', controlDataset.name);

                //For the control dataset, block until the norm vector index is loaded
                await controlDataset.getNormVectorIndex(config)
                this.eventBus.post(hic.Event("ControlMapLoad", this.controlDataset));

                if (!noUpdates) {
                    this.update();
                }
            } else {
                igv.presentAlert('"B" map genome (' + controlDataset.genomeId + ') does not match "A" map genome (' + this.genome.id + ')');
            }
        } finally {
            this.$user_interaction_shield.hide();
            this.stopSpinner();
        }
    }


    /**
     * Return a promise to extract the name of the dataset.  The promise is neccessacary because
     * google drive urls require a call to the API
     *
     * @returns Promise for the name
     */
    async function extractName(config) {

        if (config.name === undefined && typeof config.url === "string" && config.url.includes("drive.google.com")) {
            const json = await igv.google.getDriveFileInfo(config.url)
            return json.name;
        } else {
            if (config.name === undefined) {
                return hic.extractFilename(config.url);
            } else {
                return config.name;
            }
        }
    }


    function findDefaultZoom(bpResolutions, defaultPixelSize, chrLength) {

        var viewDimensions = this.contactMatrixView.getViewDimensions(),
            d = Math.max(viewDimensions.width, viewDimensions.height),
            nBins = d / defaultPixelSize,
            z;

        for (z = bpResolutions.length - 1; z >= 0; z--) {
            if (chrLength / bpResolutions[z] <= nBins) {
                return z;
            }
        }
        return 0;

    }

    hic.Browser.prototype.parseGotoInput = async function (string) {

        var self = this,
            loci = string.split(' '),
            xLocus,
            yLocus;


        if (loci.length === 1) {
            xLocus = self.parseLocusString(loci[0]);
            yLocus = xLocus;
        } else {
            xLocus = self.parseLocusString(loci[0]);
            yLocus = self.parseLocusString(loci[1]);
            if (yLocus === undefined) yLocus = xLocus;
        }

        if (xLocus === undefined) {
            // Try a gene name search.
            const result = await hic.geneSearch(this.genome.id, loci[0].trim())

            if (result) {
                igv.selectedGene = loci[0].trim();
                xLocus = self.parseLocusString(result);
                yLocus = xLocus;
                self.state.selectedGene = loci[0].trim();
                self.goto(xLocus.chr, xLocus.start, xLocus.end, yLocus.chr, yLocus.start, yLocus.end, 5000);
            } else {
                alert('No feature found with name "' + loci[0] + '"');
            }

        } else {

            if (xLocus.wholeChr && yLocus.wholeChr) {
                self.setChromosomes(xLocus.chr, yLocus.chr);
            } else {
                self.goto(xLocus.chr, xLocus.start, xLocus.end, yLocus.chr, yLocus.start, yLocus.end);
            }
        }

    };

    hic.Browser.prototype.findMatchingZoomIndex = function (targetResolution, resolutionArray) {
        var z;
        for (z = resolutionArray.length - 1; z > 0; z--) {
            if (resolutionArray[z] >= targetResolution) {
                return z;
            }
        }
        return 0;
    };

    hic.Browser.prototype.parseLocusString = function (locus) {

        var self = this,
            parts,
            chromosome,
            extent,
            locusObject = {},
            numeric;

        parts = locus.trim().split(':');


        chromosome = this.genome.getChromosome(_.first(parts).toLowerCase());

        if (!chromosome) {
            return undefined;
        } else {
            locusObject.chr = chromosome.index;
        }


        if (parts.length === 1) {
            // Chromosome name only
            locusObject.start = 0;
            locusObject.end = this.dataset.chromosomes[locusObject.chr].size;
            locusObject.wholeChr = true;
        } else {
            extent = parts[1].split("-");
            if (extent.length !== 2) {
                return undefined;
            } else {
                numeric = extent[0].replace(/\,/g, '');
                locusObject.start = isNaN(numeric) ? undefined : parseInt(numeric, 10) - 1;

                numeric = extent[1].replace(/\,/g, '');
                locusObject.end = isNaN(numeric) ? undefined : parseInt(numeric, 10);
            }
        }
        return locusObject;
    };


    /**
     * @param scaleFactor Values range from greater then 1 to decimal values less then one
     *                    Value > 1 are magnification (zoom in)
     *                    Decimal values (.9, .75, .25, etc.) are minification (zoom out)
     * @param anchorPx -- anchor position in pixels (should not move after transformation)
     * @param anchorPy
     */
    hic.Browser.prototype.pinchZoom = async function (anchorPx, anchorPy, scaleFactor) {

        if (this.state.chr1 === 0) {
            await this.zoomAndCenter(1, anchorPx, anchorPy);
        }
        else {
            try {
                this.startSpinner()

                const bpResolutions = this.dataset.bpResolutions
                const currentResolution = bpResolutions[this.state.zoom];

                let newResolution
                let newZoom
                let newPixelSize
                let zoomChanged

                if (this.resolutionLocked ||
                    (this.state.zoom === bpResolutions.length - 1 && scaleFactor > 1) ||
                    (this.state.zoom === 0 && scaleFactor < 1)) {
                    // Can't change resolution level, must adjust pixel size
                    newResolution = currentResolution;
                    newPixelSize = Math.min(MAX_PIXEL_SIZE, this.state.pixelSize * scaleFactor);
                    newZoom = this.state.zoom;
                    zoomChanged = false;
                } else {
                    const targetResolution = (currentResolution / this.state.pixelSize) / scaleFactor;
                    newZoom = this.findMatchingZoomIndex(targetResolution, bpResolutions);
                    newResolution = bpResolutions[newZoom];
                    zoomChanged = newZoom !== this.state.zoom;
                    newPixelSize = Math.min(MAX_PIXEL_SIZE, newResolution / targetResolution);
                }
                const z = await minZoom.call(this, this.state.chr1, this.state.chr2)


                if (!this.resolutionLocked && scaleFactor < 1 && newZoom < z) {
                    // Zoom out to whole genome
                    this.setChromosomes(0, 0);
                } else {

                    const minPS = await minPixelSize.call(this, this.state.chr1, this.state.chr2, newZoom)

                    const state = this.state;

                    newPixelSize = Math.max(newPixelSize, minPS);

                    // Genomic anchor  -- this position should remain at anchorPx, anchorPy after state change
                    const gx = (state.x + anchorPx / state.pixelSize) * currentResolution;
                    const gy = (state.y + anchorPy / state.pixelSize) * currentResolution;

                    state.x = gx / newResolution - anchorPx / newPixelSize;
                    state.y = gy / newResolution - anchorPy / newPixelSize;

                    state.zoom = newZoom;
                    state.pixelSize = newPixelSize;

                    this.clamp();

                    this.contactMatrixView.zoomIn(anchorPx, anchorPy, 1 / scaleFactor)

                    this.eventBus.post(hic.Event("LocusChange", {
                        state: state,
                        resolutionChanged: zoomChanged
                    }));
                }
            } finally {
                this.stopSpinner()
            }
        }

    }

    hic.Browser.prototype.wheelClickZoom = async function (direction, centerPX, centerPY) {

        if (this.resolutionLocked || this.state.chr1 === 0) {   // Resolution locked OR whole genome view
            this.zoomAndCenter(direction, centerPX, centerPY);
        } else {
            const z = await minZoom.call(this, this.state.chr1, this.state.chr2)
            var newZoom = this.state.zoom + direction;
            if (direction < 0 && newZoom < z) {
                this.setChromosomes(0, 0);
            } else {
                this.zoomAndCenter(direction, centerPX, centerPY);
            }

        }

    }

    // Zoom in response to a double-click
    hic.Browser.prototype.zoomAndCenter = async function (direction, centerPX, centerPY) {

        if (!this.dataset) return;

        if (this.state.chr1 === 0 && direction > 0) {
            // jump from whole genome to chromosome
            var genomeCoordX = centerPX * this.dataset.wholeGenomeResolution / this.state.pixelSize,
                genomeCoordY = centerPY * this.dataset.wholeGenomeResolution / this.state.pixelSize,
                chrX = this.genome.getChromsosomeForCoordinate(genomeCoordX),
                chrY = this.genome.getChromsosomeForCoordinate(genomeCoordY);
            this.setChromosomes(chrX.index, chrY.index);
        } else {
            const bpResolutions = this.dataset.bpResolutions
            const viewDimensions = this.contactMatrixView.getViewDimensions()
            const dx = centerPX === undefined ? 0 : centerPX - viewDimensions.width / 2
            const dy = centerPY === undefined ? 0 : centerPY - viewDimensions.height / 2

            this.state.x += (dx / this.state.pixelSize);
            this.state.y += (dy / this.state.pixelSize);

            if (this.resolutionLocked ||
                (direction > 0 && this.state.zoom === bpResolutions.length - 1) ||
                (direction < 0 && this.state.zoom === 0)) {

                const minPS = await minPixelSize.call(this, this.state.chr1, this.state.chr2, this.state.zoom)
                const state = this.state;
                const newPixelSize = Math.max(Math.min(MAX_PIXEL_SIZE, state.pixelSize * (direction > 0 ? 2 : 0.5)), minPS);

                const shiftRatio = (newPixelSize - state.pixelSize) / newPixelSize;
                state.pixelSize = newPixelSize;
                state.x += shiftRatio * (viewDimensions.width / state.pixelSize);
                state.y += shiftRatio * (viewDimensions.height / state.pixelSize);

                this.clamp();
                this.eventBus.post(hic.Event("LocusChange", {state: state, resolutionChanged: false}));

            } else {
                this.setZoom(this.state.zoom + direction, centerPY, centerPY);
            }
        }

    };

    hic.Browser.prototype.setZoom = async function (zoom, cpx, cpy) {

        try {
            // this.startSpinner()
            var bpResolutions, currentResolution, viewDimensions, xCenter, yCenter, newResolution, newXCenter,
                newYCenter,
                newPixelSize, zoomChanged,
                self = this;


            // Shift x,y to maintain center, if possible
            bpResolutions = this.dataset.bpResolutions;
            currentResolution = bpResolutions[this.state.zoom];
            viewDimensions = this.contactMatrixView.getViewDimensions();
            xCenter = this.state.x + viewDimensions.width / (2 * this.state.pixelSize);    // center in bins
            yCenter = this.state.y + viewDimensions.height / (2 * this.state.pixelSize);    // center in bins
            newResolution = bpResolutions[zoom];
            newXCenter = xCenter * (currentResolution / newResolution);
            newYCenter = yCenter * (currentResolution / newResolution);

            const minPS = await minPixelSize.call(this, this.state.chr1, this.state.chr2, zoom)

            var state = self.state;
            newPixelSize = Math.max(defaultPixelSize, minPS);
            zoomChanged = (state.zoom !== zoom);

            state.zoom = zoom;
            state.x = Math.max(0, newXCenter - viewDimensions.width / (2 * newPixelSize));
            state.y = Math.max(0, newYCenter - viewDimensions.height / (2 * newPixelSize));
            state.pixelSize = newPixelSize;
            self.clamp();

            await self.contactMatrixView.zoomIn()

            self.eventBus.post(hic.Event("LocusChange", {state: state, resolutionChanged: zoomChanged}));
        } finally {
            // this.stopSpinner()
        }

    };

    hic.Browser.prototype.setChromosomes = async function (chr1, chr2) {

        try {
            this.startSpinner()

            this.state.chr1 = Math.min(chr1, chr2);
            this.state.chr2 = Math.max(chr1, chr2);
            this.state.x = 0;
            this.state.y = 0;

            const z = await minZoom.call(this, chr1, chr2)
            this.state.zoom = z;

            const minPS = await minPixelSize.call(this, this.state.chr1, this.state.chr2, this.state.zoom)
            this.state.pixelSize = Math.min(100, Math.max(defaultPixelSize, minPS));
            this.eventBus.post(hic.Event("LocusChange", {state: this.state, resolutionChanged: true}));
        } finally {
            this.stopSpinner()
        }
    }

    hic.Browser.prototype.updateLayout = async function () {

        var self = this;
        this.clamp();

        this.trackRenderers.forEach(function (xyTrackRenderPair, index) {
            sync(xyTrackRenderPair.x, index);
            sync(xyTrackRenderPair.y, index);
        });

        function sync(trackRenderer, index) {
            trackRenderer.$viewport.css({order: index});
            trackRenderer.syncCanvas();
        }

        this.layoutController.xAxisRuler.update();
        this.layoutController.yAxisRuler.update();

        await this.update();

    };

    async function minZoom(chr1, chr2) {

        const viewDimensions = this.contactMatrixView.getViewDimensions();
        const chr1Length = this.dataset.chromosomes[chr1].size;
        const chr2Length = this.dataset.chromosomes[chr2].size;
        const binSize = Math.max(chr1Length / viewDimensions.width, chr2Length / viewDimensions.height);

        const matrix = await this.dataset.getMatrix(chr1, chr2)
        return matrix.findZoomForResolution(binSize);
    }

    async function minPixelSize(chr1, chr2, z) {

        const viewDimensions = this.contactMatrixView.getViewDimensions();
        const chr1Length = this.dataset.chromosomes[chr1].size;
        const chr2Length = this.dataset.chromosomes[chr2].size;

        const matrix = await this.dataset.getMatrix(chr1, chr2)
        const zd = matrix.getZoomDataByIndex(z, "BP");
        const binSize = zd.zoom.binSize;
        const nBins1 = chr1Length / binSize;
        const nBins2 = chr2Length / binSize;
        return (Math.min(viewDimensions.width / nBins1, viewDimensions.height / nBins2));

    }

    /**
     * Set the matrix state.  Used to restore state from a bookmark
     * @param state  browser state
     */
    hic.Browser.prototype.setState = async function (state) {

        this.state = state;
        // Possibly adjust pixel size
        const minPS = await minPixelSize.call(this, this.state.chr1, this.state.chr2, this.state.zoom)
        this.state.pixelSize = Math.max(state.pixelSize, minPS);
        this.eventBus.post(new hic.Event("LocusChange", {state: this.state, resolutionChanged: true}));
    };


    /**
     * Return a modified state object used for synching.  Other datasets might have different chromosome ordering
     * and resolution arrays
     */
    hic.Browser.prototype.getSyncState = function () {
        return {
            chr1Name: this.dataset.chromosomes[this.state.chr1].name,
            chr2Name: this.dataset.chromosomes[this.state.chr2].name,
            binSize: this.dataset.bpResolutions[this.state.zoom],
            binX: this.state.x,            // TODO -- tranlsate to lower right corner
            binY: this.state.y,
            pixelSize: this.state.pixelSize
        };
    }

    /**
     * Return true if this browser can be synched to the given state
     * @param syncState
     */
    hic.Browser.prototype.canBeSynched = function (syncState) {

        return this.dataset &&
            (this.dataset.getChrIndexFromName(syncState.chr1Name) !== undefined) &&
            (this.dataset.getChrIndexFromName(syncState.chr2Name) !== undefined);

    }

    /**
     * Used to synch state with other browsers
     * @param state  browser state
     */
    hic.Browser.prototype.syncState = function (syncState) {

        if (!this.dataset) return;

        var chr1 = this.genome.getChromosome(syncState.chr1Name),
            chr2 = this.genome.getChromosome(syncState.chr2Name),
            zoom = this.dataset.getZoomIndexForBinSize(syncState.binSize, "BP"),
            x = syncState.binX,
            y = syncState.binY,
            pixelSize = syncState.pixelSize;

        if (!(chr1 && chr2)) {
            return;   // Can't be synched.
        }

        if (zoom === undefined) {
            // Get the closest zoom available and adjust pixel size.   TODO -- cache this somehow
            zoom = this.findMatchingZoomIndex(syncState.binSize, this.dataset.bpResolutions);

            // Compute equivalent in basepairs / pixel
            pixelSize = (syncState.pixelSize / syncState.binSize) * this.dataset.bpResolutions[zoom];

            // Translate bins so that origin is unchanged in basepairs
            x = (syncState.binX / syncState.pixelSize) * pixelSize;
            y = (syncState.binY / syncState.pixelSize) * pixelSize;

            if (pixelSize > MAX_PIXEL_SIZE) {
                console.log("Cannot synch map " + this.dataset.name + " (resolution " + syncState.binSize + " not available)");
                return;
            }
        }


        var zoomChanged = (this.state.zoom !== zoom);
        this.state.chr1 = chr1.index;
        this.state.chr2 = chr2.index;
        this.state.zoom = zoom;
        this.state.x = x;
        this.state.y = y;
        this.state.pixelSize = pixelSize;

        this.eventBus.post(hic.Event("LocusChange", {state: this.state, resolutionChanged: zoomChanged}, false));

    };

    hic.Browser.prototype.setNormalization = function (normalization) {

        this.state.normalization = normalization;
        this.eventBus.post(hic.Event("NormalizationChange", this.state.normalization))
    };


    hic.Browser.prototype.shiftPixels = function (dx, dy) {

        var self = this;

        if (!this.dataset) return;

        this.state.x += (dx / this.state.pixelSize);
        this.state.y += (dy / this.state.pixelSize);
        this.clamp();

        var locusChangeEvent = hic.Event("LocusChange", {
            state: this.state,
            resolutionChanged: false,
            dragging: true
        });
        locusChangeEvent.dragging = true;
        this.eventBus.post(locusChangeEvent);


    };


    hic.Browser.prototype.goto = function (chr1, bpX, bpXMax, chr2, bpY, bpYMax, minResolution) {


        var xCenter,
            yCenter,
            targetResolution,
            newResolution,
            viewDimensions = this.contactMatrixView.getViewDimensions(),
            bpResolutions = this.dataset.bpResolutions,
            viewWidth = viewDimensions.width,
            maxExtent, newZoom, newPixelSize, newXBin, newYBin,
            zoomChanged;

        targetResolution = Math.max((bpXMax - bpX) / viewDimensions.width, (bpYMax - bpY) / viewDimensions.height);

        if (minResolution && targetResolution < minResolution) {
            maxExtent = viewWidth * minResolution;
            xCenter = (bpX + bpXMax) / 2;
            yCenter = (bpY + bpYMax) / 2;
            bpX = Math.max(xCenter - maxExtent / 2);
            bpY = Math.max(0, yCenter - maxExtent / 2);
            targetResolution = minResolution;
        }


        if (true === this.resolutionLocked && minResolution === undefined) {
            zoomChanged = false;
            newZoom = this.state.zoom;
        } else {
            newZoom = this.findMatchingZoomIndex(targetResolution, bpResolutions);
            zoomChanged = (newZoom !== this.state.zoom);
        }

        newResolution = bpResolutions[newZoom];
        newPixelSize = Math.min(MAX_PIXEL_SIZE, Math.max(1, newResolution / targetResolution));
        newXBin = bpX / newResolution;
        newYBin = bpY / newResolution;

        this.state.chr1 = chr1;
        this.state.chr2 = chr2;
        this.state.zoom = newZoom;
        this.state.x = newXBin;
        this.state.y = newYBin;
        this.state.pixelSize = newPixelSize;

        this.contactMatrixView.clearImageCaches();
        this.eventBus.post(hic.Event("LocusChange", {state: this.state, resolutionChanged: zoomChanged}));

    };

    hic.Browser.prototype.clamp = function () {
        var viewDimensions = this.contactMatrixView.getViewDimensions(),
            chr1Length = this.dataset.chromosomes[this.state.chr1].size,
            chr2Length = this.dataset.chromosomes[this.state.chr2].size,
            binSize = this.dataset.bpResolutions[this.state.zoom],
            maxX = (chr1Length / binSize) - (viewDimensions.width / this.state.pixelSize),
            maxY = (chr2Length / binSize) - (viewDimensions.height / this.state.pixelSize);

        // Negative maxX, maxY indicates pixelSize is not enough to fill view.  In this case we clamp x, y to 0,0
        maxX = Math.max(0, maxX);
        maxY = Math.max(0, maxY);


        this.state.x = Math.min(Math.max(0, this.state.x), maxX);
        this.state.y = Math.min(Math.max(0, this.state.y), maxY);
    };

    hic.Browser.prototype.receiveEvent = function (event) {
        var self = this;

        if ("LocusChange" === event.type) {

            if (event.propogate) {

                self.synchedBrowsers.forEach(function (browser) {
                    browser.syncState(self.getSyncState());
                })

            }

            this.update(event);
        }

    };

    /**
     * Update the maps and tracks.
     *
     * @param event
     */
    hic.Browser.prototype.update = async function (event) {

        try {
            this.startSpinner();

            if (event !== undefined && "LocusChange" === event.type) {
                this.layoutController.xAxisRuler.locusChange(event);
                this.layoutController.yAxisRuler.locusChange(event);
            }

            this.renderTracks();
            //this.contactMatrixView.update();

        } finally {
            this.stopSpinner();
        }
    }


    hic.Browser.prototype.repaintMatrix = function () {
        this.contactMatrixView.imageTileCache = {};
        this.contactMatrixView.initialImage = undefined;
        this.contactMatrixView.update();
    }


    hic.Browser.prototype.resolution = function () {
        return this.dataset.bpResolutions[this.state.zoom];
    };


// Set default values for config properties
    function setDefaults(config) {


        defaultState = new hic.State(0, 0, 0, 0, 0, defaultPixelSize, "NONE");

        if (config.figureMode === true) {
            config.showLocusGoto = false;
            config.showHicContactMapLabel = false;
            config.showChromosomeSelector = false;
        } else {
            if (undefined === config.width) {
                config.width = defaultSize.width;
            }
            if (undefined === config.height) {
                config.height = defaultSize.height;
            }
            if (undefined === config.showLocusGoto) {
                config.showLocusGoto = true;
            }
            if (undefined === config.showHicContactMapLabel) {
                config.showHicContactMapLabel = true;
            }
            if (undefined === config.showChromosomeSelector) {
                config.showChromosomeSelector = true
            }
        }

        if (config.state) {
            // convert to state object
            config.state = new hic.State(config.state.chr1, config.state.chr2, config.state.zoom, config.state.x,
                config.state.y, config.state.pixelSize, config.state.normalization)
        }
    }

    function getNviString(dataset) {

        return dataset.hicFile.config.nvi
        // if (dataset.hicFile.normalizationVectorIndexRange) {
        //     var range = dataset.hicFile.normalizationVectorIndexRange,
        //         nviString = String(range.start) + "," + String(range.size);
        //     return nviString
        // } else {
        //     return undefined;
        // }
    }

    function getBlockString(dataset) {


    }

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

    function parseUri(str) {
        var o = parseUri.options,
            m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
            uri = {},
            i = 14;

        while (i--) uri[o.key[i]] = m[i] || "";

        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) uri[o.q.name][$1] = $2;
        });

        return uri;
    }

    parseUri.options = {
        strictMode: false,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };


    function gup(href, name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(href);
        if (results == null)
            return undefined;
        else
            return results[1];
    }


    function replaceAll(str, target, replacement) {
        return str.split(target).join(replacement);
    }


    var urlShortcuts = {
        "*s3e/": "https://hicfiles.s3.amazonaws.com/external/",
        "*s3/": "https://hicfiles.s3.amazonaws.com/",
        "*s3e_/": "http://hicfiles.s3.amazonaws.com/external/",
        "*s3_/": "http://hicfiles.s3.amazonaws.com/",
        "*enc/": "https://www.encodeproject.org/files/"
    }


    hic.Browser.prototype.getQueryString = function () {

        var queryString, nviString, trackString, displayMode;

        if (!(this.dataset && this.dataset.url)) return "";   // URL is required

        queryString = [];

        queryString.push(paramString("hicUrl", this.dataset.url));

        if (this.dataset.name) {
            queryString.push(paramString("name", this.dataset.name));
        }

        queryString.push(paramString("state", this.state.stringify()));

        queryString.push(paramString("colorScale", this.contactMatrixView.getColorScale().stringify()));

        if (igv.selectedGene) {
            queryString.push(paramString("selectedGene", igv.selectedGene));
        }

        nviString = getNviString(this.dataset);
        if (nviString) {
            queryString.push(paramString("nvi", nviString));
        }

        if (this.controlDataset) {

            queryString.push(paramString("controlUrl", this.controlUrl));

            if (this.controlDataset.name) {
                queryString.push(paramString("controlName", this.controlDataset.name))
            }

            displayMode = this.getDisplayMode();
            if (displayMode) {
                queryString.push(paramString("displayMode", this.getDisplayMode()));
            }

            nviString = getNviString(this.controlDataset);
            if (nviString) {
                queryString.push(paramString("controlNvi", nviString));
            }

            if (this.controlMapWidget.getDisplayModeCycle() !== undefined) {
                queryString.push(paramString("cycle", "true"))
            }

        }


        if (this.trackRenderers.length > 0 || this.tracks2D.length > 0) {
            trackString = "";

            this.trackRenderers.forEach(function (trackRenderer) {
                var track = trackRenderer.x.track,
                    config = track.config,
                    url = config.url,
                    dataRange = track.dataRange;

                if (typeof url === "string") {
                    if (trackString.length > 0) trackString += "|||";
                    trackString += url;
                    trackString += "|" + (track.name ? replaceAll(track.name, "|", "$") : '');
                    trackString += "|" + (dataRange ? (dataRange.min + "-" + dataRange.max) : "");
                    trackString += "|" + track.color;
                }
            });

            this.tracks2D.forEach(function (track) {

                var config = track.config,
                    url = config.url;

                if (typeof url === "string") {
                    if (trackString.length > 0) trackString += "|||";
                    trackString += url;
                    trackString += "|" + (track.name ? replaceAll(track.name, "|", "$") : '');
                    trackString += "|";   // Data range
                    trackString += "|" + track.color;
                }
            });

            if (trackString.length > 0) {
                queryString.push(paramString("tracks", trackString));
            }
        }

        var captionDiv = document.getElementById('hic-caption');
        if (captionDiv) {
            var captionText = captionDiv.textContent;
            if (captionText) {
                captionText = captionText.trim();
                if (captionText) {
                    queryString.push(paramString("caption", captionText));
                }
            }
        }

        // if (this.config.normVectorFiles && this.config.normVectorFiles.length > 0) {
        //
        //     var normVectorString = "";
        //     this.config.normVectorFiles.forEach(function (url) {
        //
        //         if (normVectorString.length > 0) normVectorString += "|||";
        //         normVectorString += url;
        //
        //     });
        //     queryString.push(paramString("normVectorFiles", normVectorString));
        // }

        return queryString.join("&");

        function paramString(key, value) {
            return key + "=" + paramEncode(value)
        }

    };

    /**
     * Extend config properties with query parameters
     *
     * @param query
     * @param config
     */
    igv.Browser.decodeQuery = function (query, config, uriDecode) {

        var hicUrl, name, stateString, colorScale, trackString, selectedGene, nvi, normVectorString,
            controlUrl, ratioColorScale, controlName, displayMode, controlNvi, captionText, cycle;


        hicUrl = query["hicUrl"];
        name = query["name"];
        stateString = query["state"];
        colorScale = query["colorScale"];
        trackString = query["tracks"];
        selectedGene = query["selectedGene"];
        nvi = query["nvi"];
        normVectorString = query["normVectorFiles"];

        controlUrl = query["controlUrl"];
        controlName = query["controlName"];
        ratioColorScale = query["ratioColorScale"];
        displayMode = query["displayMode"];
        controlNvi = query["controlNvi"];
        captionText = query["caption"];
        cycle = query["cycle"];

        if (hicUrl) {
            hicUrl = paramDecode(hicUrl, uriDecode);
            Object.keys(urlShortcuts).forEach(function (key) {
                var value = urlShortcuts[key];
                if (hicUrl.startsWith(key)) hicUrl = hicUrl.replace(key, value);
            });
            config.url = hicUrl;

        }
        if (name) {
            config.name = paramDecode(name, uriDecode);
        }
        if (controlUrl) {
            controlUrl = paramDecode(controlUrl, uriDecode);
            Object.keys(urlShortcuts).forEach(function (key) {
                var value = urlShortcuts[key];
                if (controlUrl.startsWith(key)) controlUrl = controlUrl.replace(key, value);
            });
            config.controlUrl = controlUrl;
        }
        if (controlName) {
            config.controlName = paramDecode(controlName, uriDecode);
        }

        if (stateString) {
            stateString = paramDecode(stateString, uriDecode);
            config.state = destringifyStateV0(stateString);

        }
        if (colorScale) {
            colorScale = paramDecode(colorScale, uriDecode);
            config.colorScale = hic.destringifyColorScale(colorScale);
        }

        if (displayMode) {
            config.displayMode = paramDecode(displayMode, uriDecode);
        }

        if (trackString) {
            trackString = paramDecode(trackString, uriDecode);
            config.tracks = destringifyTracksV0(trackString);

            // If an oAuth token is provided append it to track configs.
            if (config.tracks && config.oauthToken) {
                config.tracks.forEach(function (t) {
                    t.oauthToken = config.oauthToken;
                })
            }
        }

        if (selectedGene) {
            igv.selectedGene = selectedGene;
        }

        if (captionText) {
            captionText = paramDecode(captionText, uriDecode);
            var captionDiv = document.getElementById("hic-caption");
            if (captionDiv) {
                captionDiv.textContent = captionText;
            }
        }

        config.cycle = cycle;

        // Norm vector file loading disabled -- too slow
        // if (normVectorString) {
        //     config.normVectorFiles = normVectorString.split("|||");
        // }

        if (nvi) {
            config.nvi = paramDecode(nvi, uriDecode);
        }
        if (controlNvi) {
            config.controlNvi = paramDecode(controlNvi, uriDecode);
        }

        function destringifyStateV0(string) {
            var tokens = string.split(",");
            return new hic.State(
                parseInt(tokens[0]),    // chr1
                parseInt(tokens[1]),    // chr2
                parseFloat(tokens[2]), // zoom
                parseFloat(tokens[3]), // x
                parseFloat(tokens[4]), // y
                parseFloat(tokens[5]), // pixelSize
                tokens.length > 6 ? tokens[6] : "NONE"   // normalization
            )
        }

        function destringifyTracksV0(tracks) {

            var trackStringList = tracks.split("|||"),
                configList = [], keys, key, i, len;

            trackStringList.forEach(function (trackString) {
                var tokens,
                    url,
                    config,
                    name,
                    dataRangeString,
                    color,
                    r;

                tokens = trackString.split("|");
                color = tokens.pop();

                url = tokens[0];

                if (url && url.trim().length > 0) {

                    keys = Object.keys(urlShortcuts);
                    for (i = 0, len = keys.length; i < len; i++) {
                        key = keys[i];
                        var value = urlShortcuts[key];
                        if (url.startsWith(key)) {
                            url = url.replace(key, value);
                            break;
                        }
                    }
                    config = {url: url};

                    if (tokens.length > 1) {
                        name = tokens[1];
                    }

                    if (tokens.length > 2) {
                        dataRangeString = tokens[2];
                    }

                    if (name) {
                        config.name = replaceAll(name, "$", "|");
                    }

                    if (dataRangeString) {
                        if (dataRangeString.startsWith("-")) {
                            r = dataRangeString.substring(1).split("-");
                            config.min = -parseFloat(r[0]);
                            config.max = parseFloat(r[1]);
                        } else {
                            r = dataRangeString.split("-");
                            config.min = parseFloat(r[0]);
                            config.max = parseFloat(r[1]);
                        }
                    }

                    if (color) {
                        config.color = color;
                    }

                    configList.push(config);
                }

            });

            return configList;

        }

    }

    /**
     * Minimally encode a parameter string (i.e. value in a query string).  In general its not neccessary
     * to fully % encode parameter values (see RFC3986).
     *
     * @param str
     */
    function paramEncode(str) {
        var s = replaceAll(str, '&', '%26');
        s = replaceAll(s, ' ', '+');
        s = replaceAll(s, "#", "%23");
        s = replaceAll(s, "?", "%3F");
        s = replaceAll(s, "=", "%3D");
        return s;
    }

    function paramDecode(str, uriDecode) {

        if (uriDecode) {
            return decodeURIComponent(str);   // Still more backward compatibility
        } else {
            var s = replaceAll(str, '%26', '&');
            s = replaceAll(s, '%20', ' ');
            s = replaceAll(s, '+', ' ');
            s = replaceAll(s, "%7C", "|");
            s = replaceAll(s, "%23", "#");
            s = replaceAll(s, "%3F", "?");
            s = replaceAll(s, "%3D", "=");
            return s;
        }
    }

    /**
     * Encode an array of strings.  A "|" is used as a delimiter, therefore any "|" in individual elements
     * must be encoded.
     *
     * @param array
     * @returns {string}
     */
    function encodeArray(array) {

        var arrayStr = "", i;

        if (array.length > 0) {
            arrayStr += encodeArrayElement(array[0]);
            for (i = 1; i < array.length; i++) {
                arrayStr += "|";
                arrayStr += encodeArrayElement(array[i]);
            }
        }
        return arrayStr;

        function encodeArrayElement(elem) {
            var s = paramEncode(elem);
            s = replaceAll(s, "|", "%7C");
            return s;
        }
    }

    /**
     * Decode a string to an array of strings.  Its assumed that the string was created with encodeArray.
     *
     * @param str
     * @returns {Array}
     */
    function decodeArray(str) {

        var array, elements;
        array = [];
        elements = str.split("|");
        elements.forEach(function (elem) {
            array.push(decodeArrayElement(elem));
        })
        return array;

        function decodeArrayElement(elem) {
            var s = paramDecode(elem, false);
            s = replaceAll(s, "%7C", "|");
            return s;
        }
    }


    // mock igv browser objects for igv.js compatibility
    function createIGV($hic_container, hicBrowser) {

        igv.browser =
            {
                constants: {defaultColor: "rgb(0,0,150)"},

                // Compatibility wit igv menus
                trackContainerDiv: hicBrowser.layoutController.$x_track_container.get(0)
            };

        // replace IGV functions with HIC equivalents
        hic.IGVReplacements(igv);

        igv.popover = new igv.Popover($hic_container, igv.browser);

        igv.alertDialog = new igv.AlertDialog(hicBrowser.$root, hicBrowser);

        hicBrowser.inputDialog = new igv.InputDialog($hic_container, hicBrowser);

        hicBrowser.trackRemovalDialog = new igv.TrackRemovalDialog($hic_container, hicBrowser);

        hicBrowser.dataRangeDialog = new igv.DataRangeDialog($hic_container, hicBrowser);

    }

    async function loadDataset(config) {

        // If this is a local file, supply an io.File object.  Straw knows nothing about browser local files
        if (config.url instanceof File) {
            config.blob = config.url
            //config.file = new hic.LocalFile(config.url)
            delete config.url
        } else {
            // If this is a google url, add api KEY
            if(config.url.indexOf("drive.google.com") >= 0 || config.url.indexOf("www.googleapis.com") > 0) {
                config.url = igv.google.driveDownloadURL(config.url)
                config.apiKey = igv.google.apiKey
            }
        }

        const straw = new HicStraw(config)
        const hicFile = straw.hicFile
        await hicFile.init()
        const dataset = new hic.Dataset(hicFile)
        dataset.url = config.url
        return dataset
    }

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/3/17.
 */

var hic = (function (hic) {

    hic.ColorScaleWidget = function (browser, $container) {

        var self = this,
            $fa,
            rgbString;

        this.browser = browser;

        this.$container = $('<div class="hic-colorscale-widget-container">');
        $container.append(this.$container);


        // '-' color swatch
        rgbString = getRGBString(browser, '-', "blue");                    // TODO -- get the default from browser.
        this.$minusButton = hic.colorSwatch(rgbString);
        this.$container.append(this.$minusButton);
        this.$minusButton.hide();

        this.minusColorPicker = createColorPicker(browser, this.$minusButton, '-', function () {
            self.minusColorPicker.$container.hide()
        });

        this.minusColorPicker.$container.hide();

        // '+' color swatch
        rgbString = getRGBString(browser, '+', "red");                     // TODO -- get the default from browser
        this.$plusButton = hic.colorSwatch(rgbString);
        this.$container.append(this.$plusButton);

        this.plusColorPicker = createColorPicker(browser, this.$plusButton, '+', function () {
            self.plusColorPicker.$container.hide()
        });

        this.plusColorPicker.$container.hide();

        this.$minusButton.on('click', function (e) {
            self.presentColorPicker($(this), self.minusColorPicker.$container);
        });

        this.$plusButton.on('click', function (e) {
            self.presentColorPicker($(this), self.plusColorPicker.$container);
        });


        // threshold
        this.$high_colorscale_input = $('<input>', { 'type': 'text', 'placeholder': '', 'title': 'color scale input'});
        this.$container.append(this.$high_colorscale_input);
        this.$high_colorscale_input.on('change', function (e) {
            var numeric;
            numeric = igv.numberUnFormatter($(this).val());
            if (isNaN(numeric)) {
                // do nothing
            } else {
                browser.setColorScaleThreshold(numeric);
            }
        });

        // threshold -
        $fa = $("<i>", { class: 'fa fa-minus', 'aria-hidden': 'true', 'title': 'negative threshold' });
        $fa.on('click', function (e) {
            updateThreshold(1.0 / 2.0);
        });
        this.$container.append($fa);

        // threshold +
        $fa = $("<i>", { class: 'fa fa-plus', 'aria-hidden': 'true', 'title': 'positive threshold' });
        $fa.on('click', function (e) {
            updateThreshold(2.0);
        });
        this.$container.append($fa);


        this.browser.eventBus.subscribe("MapLoad", this);
        this.browser.eventBus.subscribe("ColorScale", this);
        this.browser.eventBus.subscribe("DisplayMode", this);

        function updateThreshold(scaleFactor) {
            var threshold, colorScale;
            colorScale = browser.getColorScale();
            threshold = colorScale.getThreshold() * scaleFactor;
            browser.setColorScaleThreshold(threshold);
            self.$high_colorscale_input.val(igv.numberFormatter(colorScale.getThreshold()));
        }

    };

    hic.ColorScaleWidget.prototype.receiveEvent = function (event) {

        if ('ColorScale' === event.type) {
            this.$high_colorscale_input.val(event.data.threshold);
            this.$plusButton.find('.fa-square').css({ color: igv.Color.rgbColor(event.data.r, event.data.g, event.data.b) })
        } else if ("DisplayMode" === event.type) {

            if ("AOB" === event.data || "BOA" === event.data) {
                this.$minusButton.show();
            } else {
                this.$minusButton.hide();
            }
        }


    };

    hic.ColorScaleWidget.prototype.presentColorPicker = function ($presentingButton, $colorpicker) {

        this.$plusButton.find('.fa-square').css({'-webkit-text-stroke-color': 'transparent'});
        this.$minusButton.find('.fa-square').css({'-webkit-text-stroke-color': 'transparent'});

        this.$presentingButton = $presentingButton;
        this.$presentingButton.find('.fa-square').css({'-webkit-text-stroke-color': 'black'});

        $colorpicker.show();
    };

    function getRGBString(browser, type, defaultColor) {
        var colorScale, comps;

        colorScale = browser.getColorScale();
        if (colorScale) {
            comps = colorScale.getColorComponents(type);
            return igv.Color.rgbColor(comps.r, comps.g, comps.b);
        }
        else {
            return defaultColor;
        }
    }

    function createColorPicker(browser, $presentingButton, type, closeHandler) {

        const config =
            {
                $parent: $presentingButton,
                width: 456,
                height: undefined,
                closeHandler: closeHandler
            };

        let colorPicker = new igv.genericContainer(config);

        function colorHandler(hexString) {
            var rgbString,
                rgb;

            $presentingButton.find('.fa-square').css({ color: hexString });

            rgbString = igv.Color.hexToRgb(hexString);

            rgb = rgbString
                .split('(')
                .pop()
                .split(')')
                .shift()
                .split(',')
                .map(function (str) { return parseInt(str, 10); });

            browser.getColorScale().setColorComponents({ r: rgb[0], g: rgb[1], b: rgb[2] }, type);
            browser.repaintMatrix();

        }

        igv.createColorSwatchSelector(colorPicker.$container, colorHandler, undefined);


        return colorPicker;
    }

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */


var hic = (function (hic) {

    const knownGenomes = {

        "hg19": [249250621, 243199373, 198022430],
        "hg38": [248956422, 242193529, 198295559],
        "mm10": [195471971, 182113224, 160039680],
        "mm9": [197195432, 181748087, 159599783]

    }

    hic.Dataset = function (hicFile) {

        this.hicFile = hicFile;
        this.matrixCache = {};
        this.blockCache = {};
        this.blockCacheKeys = [];
        this.normVectorCache = {};
        this.normalizationTypes = ['NONE'];

        // Cache at most 10 blocks
        this.blockCacheLimit = hic.isMobile() ? 4 : 10;

        this.genomeId = hicFile.genomeId
        this.chromosomes = hicFile.chromosomes
        this.bpResolutions = hicFile.bpResolutions
        this.wholeGenomeChromosome = hicFile.wholeGenomeChromosome
        this.wholeGenomeResolution = hicFile.wholeGenomeResolution

        // Attempt to determine genomeId if not recognized
        if (!Object.keys(knownGenomes).includes(this.genomeId)) {
            const tmp = matchGenome(this.chromosomes);
            if (tmp) this.genomeId = tmp;
        }

    }

    hic.Dataset.prototype.clearCaches = function () {
        this.matrixCache = {};
        this.blockCache = {};
        this.normVectorCache = {};
        this.colorScaleCache = {};
    };

    hic.Dataset.prototype.getMatrix = async function (chr1, chr2) {
        if (chr1 > chr2) {
            const tmp = chr1
            chr1 = chr2
            chr2 = tmp
        }
        const key = `${chr1}_${chr2}`

        if (this.matrixCache.hasOwnProperty(key)) {
            return this.matrixCache[key];

        } else {
            const matrix = await this.hicFile.readMatrix(chr1, chr2)
            this.matrixCache[key] = matrix;
            return matrix;

        }
    }

    hic.Dataset.prototype.getNormalizedBlock = async function (zd, blockNumber, normalization, eventBus) {

        const block = await this.getBlock(zd, blockNumber)

        if (normalization === undefined || "NONE" === normalization || block === null || block === undefined) {
            return block;
        }
        else {
            // Get the norm vectors serially, its very likely they are the same and the second will be cached
            const nv1 = await this.getNormalizationVector(normalization, zd.chr1.index, zd.zoom.unit, zd.zoom.binSize)
            const nv2 = zd.chr1 === zd.chr2 ?
                nv1 :
                await this.getNormalizationVector(normalization, zd.chr2.index, zd.zoom.unit, zd.zoom.binSize)

            var normRecords = [],
                normBlock;

            if (nv1 === undefined || nv2 === undefined) {
                igv.presentAlert("Normalization option " + normalization + " unavailable at this resolution.");
                if (eventBus) {
                    eventBus.post(new hic.Event("NormalizationExternalChange", "NONE"));
                }
                return block;
            }

            else {
                for (let record of block.records) {

                    const x = record.bin1
                    const y = record.bin2
                    const nvnv = nv1.data[x] * nv2.data[y];

                    if (nvnv[x] !== 0 && !isNaN(nvnv)) {
                        const counts = record.counts / nvnv;
                        normRecords.push(new hic.ContactRecord(x, y, counts));
                    }
                }

                normBlock = new hic.Block(blockNumber, zd, normRecords);   // TODO - cache this?

                //normBlock.percentile95 = block.percentile95;

                return normBlock;
            }

        }

    }

    hic.Dataset.prototype.getBlock = async function (zd, blockNumber) {

        const key = "" + zd.chr1.name + "_" + zd.chr2.name + "_" + zd.zoom.binSize + "_" + zd.zoom.unit + "_" + blockNumber;

        if (this.blockCache.hasOwnProperty(key)) {
            return this.blockCache[key];

        } else {

            const block = await this.hicFile.readBlock(blockNumber, zd)
            if (this.blockCacheKeys.length > this.blockCacheLimit) {
                delete this.blockCache[this.blockCacheKeys[0]];
                this.blockCacheKeys.shift();
            }
            this.blockCacheKeys.push(key);
            this.blockCache[key] = block;

            return block;

        }
    };

    hic.Dataset.prototype.getNormalizationVector = async function (type, chrIdx, unit, binSize) {

        const key = hic.getNormalizationVectorKey(type, chrIdx, unit, binSize);

        if (this.normVectorCache.hasOwnProperty(key)) {
            return this.normVectorCache[key];
        } else {

            const nv = await this.hicFile.getNormalizationVector(type, chrIdx, unit, binSize)
            this.normVectorCache[key] = nv;
            return nv;


        }
    };

    hic.Dataset.prototype.getZoomIndexForBinSize = function (binSize, unit) {
        var i,
            resolutionArray;

        unit = unit || "BP";

        if (unit === "BP") {
            resolutionArray = this.bpResolutions;
        }
        else if (unit === "FRAG") {
            resolutionArray = this.fragResolutions;
        } else {
            throw new Error("Invalid unit: " + unit);
        }

        for (i = 0; i < resolutionArray.length; i++) {
            if (resolutionArray[i] === binSize) return i;
        }

        return -1;
    }

    hic.Dataset.prototype.getChrIndexFromName = function (chrName) {
        var i;
        for (i = 0; i < this.chromosomes.length; i++) {
            if (chrName === this.chromosomes[i].name) return i;
        }
        return undefined;
    }

    hic.Dataset.prototype.compareChromosomes = function (otherDataset) {
        const chrs = this.chromosomes;
        const otherChrs = otherDataset.chromosomes;
        if (chrs.length !== otherChrs.length) {
            return false;
        }
        for (let i = 0; i < chrs.length; i++) {
            if (chrs[i].size !== otherChrs[i].size) {
                return false;
            }
        }
        return true;
    }

    hic.Dataset.prototype.getNormVectorIndex = async function () {
        return this.hicFile.getNormVectorIndex()

    }

    hic.Dataset.prototype.getNormalizationOptions = async function () {
        return this.hicFile.getNormalizationOptions()
    }

    hic.Block = function (blockNumber, zoomData, records) {
        this.blockNumber = blockNumber;
        this.zoomData = zoomData;
        this.records = records;
    };

    hic.ContactRecord = function (bin1, bin2, counts) {
        this.bin1 = bin1;
        this.bin2 = bin2;
        this.counts = counts;
    };

    hic.ContactRecord.prototype.getKey = function () {
        return "" + this.bin1 + "_" + this.bin2;
    }


    function matchGenome(chromosomes) {


        var keys = Object.keys(knownGenomes),
            i, l;

        if (chromosomes.length < 4) return undefined;

        for (i = 0; i < keys.length; i++) {
            l = knownGenomes[keys[i]];
            if (chromosomes[1].size === l[0] && chromosomes[2].size === l[1] && chromosomes[3].size === l[2]) {
                return keys[i];
            }
        }

        return undefined;


    }


    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/3/17.
 */

var hic = (function (hic) {

    hic.LocusGoto = function (browser, $container) {
        var $label;

        this.browser = browser;

        this.$container = $("<div>", { class:'hic-chromosome-goto-container',  title:'Chromosome Goto' });
        $container.append(this.$container);

        this.$resolution_selector = $('<input type="text" placeholder="chr-x-axis chr-y-axis">');
        this.$container.append(this.$resolution_selector);

        this.$resolution_selector.on('change', function (e) {
            browser.parseGotoInput( $(this).val() );
            $(this).blur();
        });

        this.browser.eventBus.subscribe("LocusChange", this);
    };

    hic.LocusGoto.prototype.receiveEvent = function (event) {

        var self = this,
            bpPerBin,
            pixelsPerBin,
            dimensionsPixels,
            chrs,
            startBP1,
            startBP2,
            endBP1,
            endBP2,
            xy,
            state,
            chr1,
            chr2;

        if (event.type === "LocusChange") {

            state = event.data.state || self.browser.state;
            if (0 === state.chr1) {
                xy = 'All';
            } else {
                chr1 = self.browser.dataset.chromosomes[state.chr1];
                chr2 = self.browser.dataset.chromosomes[state.chr2];

                bpPerBin = this.browser.dataset.bpResolutions[state.zoom];
                dimensionsPixels = this.browser.contactMatrixView.getViewDimensions();
                pixelsPerBin = state.pixelSize;

                startBP1 = 1 + Math.round(state.x * bpPerBin);
                startBP2 = 1 + Math.round(state.y * bpPerBin);

                endBP1 = Math.min(chr1.size, Math.round(((dimensionsPixels.width / pixelsPerBin) * bpPerBin)) + startBP1 - 1);
                endBP2 = Math.min(chr2.size, Math.round(((dimensionsPixels.height / pixelsPerBin) * bpPerBin)) + startBP2 - 1);

                xy = chr1.name + ":" + igv.numberFormatter(startBP1) + "-" + igv.numberFormatter(endBP1) + " " +
                    chr2.name + ":" + igv.numberFormatter(startBP2) + "-" + igv.numberFormatter(endBP2);

            }

            this.$resolution_selector.val(xy);
        }


    };

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/4/17.
 */

var hic = (function (hic) {

    hic.ResolutionSelector = function (browser, $parent) {
        var self = this;

        this.browser = browser;

        this.$container = $("<div>", {class: 'hic-resolution-selector-container', title: 'Resolution'});
        $parent.append(this.$container);

        // label container
        this.$label_container = $('<div id="hic-resolution-label-container">');
        this.$container.append(this.$label_container);

        // Resolution (kb)
        this.$label = $("<div>");
        this.$label_container.append(this.$label);
        this.$label.text('Resolution (kb)');
        this.$label.hide();

        // lock/unlock
        this.$resolution_lock = $('<i id="hic-resolution-lock" class="fa fa-unlock" aria-hidden="true">');
        this.$label_container.append(this.$resolution_lock);
        this.$label_container.on('click', function (e) {
            self.browser.resolutionLocked = !(self.browser.resolutionLocked);
            self.setResolutionLock(self.browser.resolutionLocked);
        });

        this.$resolution_selector = $('<select name="select">');
        this.$container.append(this.$resolution_selector);

        this.$resolution_selector.attr('name', 'resolution_selector');

        this.$resolution_selector.on('change', function (e) {
            var zoomIndex = parseInt($(this).val());
            self.browser.setZoom(zoomIndex);
        });


        this.browser.eventBus.subscribe("LocusChange", this);
        this.browser.eventBus.subscribe("MapLoad", this);
        this.browser.eventBus.subscribe("ControlMapLoad", this);
    };

    hic.ResolutionSelector.prototype.setResolutionLock = function (resolutionLocked) {
        this.$resolution_lock.removeClass((true === resolutionLocked) ? 'fa-unlock' : 'fa-lock');
        this.$resolution_lock.addClass((true === resolutionLocked) ? 'fa-lock' : 'fa-unlock');
    };

    hic.ResolutionSelector.prototype.receiveEvent = function (event) {

        var self = this,
            htmlString,
            selectedIndex,
            isWholeGenome,
            divisor,
            list;

        if (event.type === "LocusChange") {

            if (true === event.data.resolutionChanged) {
                this.browser.resolutionLocked = false;
                self.setResolutionLock(this.browser.resolutionLocked);
            }

            isWholeGenome = (0 === event.data.state.chr1);

            this.$label.text(isWholeGenome ? 'Resolution (mb)' : 'Resolution (kb)');

            selectedIndex = isWholeGenome ? 0 : this.browser.state.zoom;
            divisor = isWholeGenome ? 1e6 : 1e3;
            list = isWholeGenome ? [this.browser.dataset.wholeGenomeResolution] : this.browser.dataset.bpResolutions;

            htmlString = optionListHTML(list, selectedIndex, divisor);
            this.$resolution_selector.empty();
            this.$resolution_selector.append(htmlString);

            this.$resolution_selector
                .find('option')
                .filter(function (index) {
                    return index === selectedIndex;
                })
                .prop('selected', true);


        } else if (event.type === "MapLoad") {

            this.browser.resolutionLocked = false;
            this.setResolutionLock(this.browser.resolutionLocked);

            htmlString = optionListHTML(event.data.bpResolutions, this.browser.state.zoom, 1e3);
            this.$resolution_selector.empty();
            this.$resolution_selector.append(htmlString);
        } else if (event.type === "ControlMapLoad") {


        }

        function harmonizeContactAndControlResolutuionOptions($options, resolutions) {

            var dictionary;

            dictionary = resolutionDictionary(resolutions);

            // reset
            $options.removeAttr('disabled');
            $options.each(function (index) {
                var $option,
                    str;

                $option = $(this);
                str = $option.data('resolution');
                if (undefined === dictionary[str]) {
                    $option.attr('disabled', 'disabled');
                }

            });

            function resolutionDictionary(list) {
                var d = {};
                list.forEach(function (resolution) {
                    d[resolution.toString()] = resolution;
                });
                return d;
            }

        }

        function optionListHTML(resolutions, selectedIndex, divisor) {
            var list;

            list = resolutions.map(function (resolution, index) {
                var selected, unit, pretty;

                if (resolution >= 1e6) {
                    divisor = 1e6
                    unit = 'mb'
                } else if (resolution >= 1e3) {
                    divisor = 1e3
                    unit = 'kb'
                } else {
                    divisor = 1
                    unit = 'bp'
                }

                pretty = igv.numberFormatter(Math.round(resolution / divisor)) + ' ' + unit;
                selected = selectedIndex === index;

                if (resolution)
                    return '<option' + ' data-resolution=' + resolution.toString() + ' value=' + index + (selected ? ' selected' : '') + '>' + pretty + '</option>';
                else
                    return ''
            });

            return list.join('');
        }

    };

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */

var hic = (function (hic) {

    hic.Ruler = function (browser, axis, $parent) {
        var id;

        this.browser = browser;
        this.axis = axis;

        id = browser.id + '_' + this.axis + '-axis';
        this.$axis = $("<div>", {id: id});
        $parent.append(this.$axis);

        // canvas
        this.$canvas = $('<canvas>');
        this.$axis.append(this.$canvas);

        this.$canvas.width(this.$axis.width());
        this.$canvas.attr('width', this.$axis.width());

        this.$canvas.height(this.$axis.height());
        this.$canvas.attr('height', this.$axis.height());

        // whole genome container
        id = browser.id + '_' + this.axis + '-axis-whole-genome-container';
        this.$wholeGenomeContainer = $("<div>", { id: id });
        this.$axis.append(this.$wholeGenomeContainer);

        this.ctx = this.$canvas.get(0).getContext("2d");

        this.yAxisTransformWithContext = function (context) {
            context.scale(-1, 1);
            context.rotate(Math.PI / 2.0);
        };

        this.setAxisTransform(axis);

        this.browser.eventBus.subscribe('MapLoad', this);
        this.browser.eventBus.subscribe("UpdateContactMapMousePosition", this);


    };

    hic.Ruler.prototype.wholeGenomeLayout = function ($axis, $wholeGenomeContainer, axisName, dataset) {

        var self = this,
            list,
            dimen,
            extent,
            scraps,
            $div,
            $firstDiv,
            $e,
            id,
            className;

        // discard current tiles
        $wholeGenomeContainer.empty();

        list = dataset.chromosomes.filter(function (chromosome) {
            return 'all' !== chromosome.name.toLowerCase();
        });

        extent = 0;    // could use reduce for this
        list.forEach(function (chromosome) {
            extent += chromosome.size;
        });


        dimen = 'x' === axisName ? $axis.width() : $axis.height();
        scraps = 0;
        this.bboxes = [];
        $firstDiv = undefined;

        list.forEach(function (chr) {
            var size,
                percentage;

            percentage = (chr.bpLength) / extent;

            if (percentage * dimen < 1.0) {
                scraps += percentage;
            } else {

                className = self.axis + '-axis-whole-genome-chromosome-container';
                $div = $("<div>", { class: className });
                $wholeGenomeContainer.append($div);
                $div.data('label', chr.name);

                if (!$firstDiv) {
                    $firstDiv = $div;
                }

                if ('x' === axisName) {
                    size = Math.round(percentage * dimen) - 2;
                    $div.width(size);
                } else {
                    size = Math.round(percentage * dimen) - 2;
                    $div.height(size);
                }

                className = self.axis + '-axis-whole-genome-chromosome';
                $e = $("<div>", { class: className });
                $div.append($e);
                $e.text($div.data('label'));
                // $e.css({ 'background-color': igv.Color.randomRGBConstantAlpha(128, 255, 0.75) });

                decorate.call(self, $div);
            }

        });

        scraps *= dimen;
        scraps = Math.floor(scraps);
        if (scraps >= 1) {

            className = self.axis + '-axis-whole-genome-chromosome-container';
            $div = $("<div>", { class: className });
            $wholeGenomeContainer.append($div);
            $div.data('label', '-');

            $div.width(scraps);

            className = self.axis + '-axis-whole-genome-chromosome';
            $e = $("<div>", { class: className });
            $div.append($e);
            $e.text($div.data('label'));
            // $e.css({ 'background-color': igv.Color.randomRGBConstantAlpha(128, 255, 0.75) });

            decorate.call(self, $div);
        }

        $wholeGenomeContainer.children().each(function (index) {
            self.bboxes.push(bbox(axisName, $(this), $firstDiv));
        });


        // initially hide
        this.hideWholeGenome();

        function decorate($d) {
            var self = this;

            $d.on('click', function (e) {
                var $o;
                $o = $(this).first();
                self.browser.parseGotoInput( $o.text() );

                self.unhighlightWholeChromosome();
                self.otherRuler.unhighlightWholeChromosome();
            });

            // DIAGNOSTIC BACKGROUND COLOR
            // $d.css({ 'background-color': igv.Color.randomRGB(128, 255) });
            // return;

            $d.hover(
                function () {
                    hoverHandler.call(self, $(this), true);
                },

                function () {
                    hoverHandler.call(self, $(this), false);
                }
            );

        }

        function hoverHandler($e, doHover) {

            var target,
                $target;

            target = $e.data('label');

            this.otherRuler.$wholeGenomeContainer.children().each(function (index) {
                if (target === $(this).data('label')) {
                    $target = $(this);
                }
            });

            if (true === doHover) {
                $e.addClass('hic-whole-genome-chromosome-highlight');
                $target.addClass('hic-whole-genome-chromosome-highlight');
            } else {
                $e.removeClass('hic-whole-genome-chromosome-highlight');
                $target.removeClass('hic-whole-genome-chromosome-highlight');
            }
        }

    };

    function bbox(axis, $child, $firstChild) {
        var delta,
            size,
            o,
            fo;

        o = 'x' === axis ? $child.offset().left : $child.offset().top;
        fo = 'x' === axis ? $firstChild.offset().left : $firstChild.offset().top;

        delta = o - fo;
        size = 'x' === axis ? $child.width() : $child.height();

        return {$e: $child, a: delta, b: delta + size};

    }

    function hitTest(bboxes, value) {
        var $result,
            success;

        success = false;
        $result = undefined;
        bboxes.forEach(function (bbox) {

            if (false === success) {

                if (value < bbox.a) {
                    // nuthin
                } else if (value > bbox.b) {
                    // nuthin
                } else {
                    $result = bbox.$e;
                    success = true;
                }

            }

        });

        return $result;
    }

    hic.Ruler.prototype.hideWholeGenome = function () {
        this.$wholeGenomeContainer.hide();
        this.$canvas.show();
    };

    hic.Ruler.prototype.showWholeGenome = function () {
        this.$canvas.hide();
        this.$wholeGenomeContainer.show();
    };

    hic.Ruler.prototype.setAxisTransform = function (axis) {

        this.canvasTransform = ('y' === axis) ? this.yAxisTransformWithContext : identityTransformWithContext;

        this.labelReflectionTransform = ('y' === axis) ? reflectionTransformWithContext : function (context, exe) {
        };

    };

    hic.Ruler.prototype.unhighlightWholeChromosome = function () {
        this.$wholeGenomeContainer.children().removeClass('hic-whole-genome-chromosome-highlight');
    };

    hic.Ruler.prototype.receiveEvent = function (event) {
        var offset,
            $e;

        if ('MapLoad' === event.type) {
            this.wholeGenomeLayout(this.$axis, this.$wholeGenomeContainer, this.axis, event.data);
        } else if ('UpdateContactMapMousePosition' === event.type) {

            if(this.bboxes) {
                this.unhighlightWholeChromosome();
                offset = 'x' === this.axis ? event.data.x : event.data.y;
                $e = hitTest(this.bboxes, offset);
                if ($e) {
                    // console.log(this.axis + ' highlight chr ' + $e.text());
                    $e.addClass('hic-whole-genome-chromosome-highlight');
                }
            }
        }

    };

    hic.Ruler.prototype.locusChange = function (event) {

        this.update();

    };

    hic.Ruler.prototype.updateWidthWithCalculation = function (calc) {

        this.$axis.css('width', calc);

        this.$canvas.width(this.$axis.width());
        this.$canvas.attr('width', this.$axis.width());

        this.wholeGenomeLayout(this.$axis, this.$wholeGenomeContainer, this.axis, this.browser.dataset);

        this.update();
    };

    hic.Ruler.prototype.updateHeight = function (height) {

        this.$canvas.height(height);
        this.$canvas.attr('height', height);

        this.wholeGenomeLayout(this.$axis, this.$wholeGenomeContainer, this.axis, this.browser.dataset);

        this.update();
    };

    hic.Ruler.prototype.update = function () {

        var w,
            h,
            bin,
            config = {},
            browser = this.browser;

        if (isBrowserInWholeGenomeView(browser.state)) {
            this.showWholeGenome();
            return;
        }

        this.hideWholeGenome();

        identityTransformWithContext(this.ctx);
        igv.graphics.fillRect(this.ctx, 0, 0, this.$canvas.width(), this.$canvas.height(), {fillStyle: igv.Color.rgbColor(255, 255, 255)});

        this.canvasTransform(this.ctx);

        w = ('x' === this.axis) ? this.$canvas.width() : this.$canvas.height();
        h = ('x' === this.axis) ? this.$canvas.height() : this.$canvas.width();

        igv.graphics.fillRect(this.ctx, 0, 0, w, h, {fillStyle: igv.Color.rgbColor(255, 255, 255)});

        config.bpPerPixel = browser.dataset.bpResolutions[browser.state.zoom] / browser.state.pixelSize;

        bin = ('x' === this.axis) ? browser.state.x : browser.state.y;
        config.bpStart = bin * browser.dataset.bpResolutions[browser.state.zoom];

        config.rulerTickMarkReferencePixels = Math.max(Math.max(this.$canvas.width(), this.$canvas.height()), Math.max(this.$otherRulerCanvas.width(), this.$otherRulerCanvas.height()));

        config.rulerLengthPixels = w;
        config.rulerHeightPixels = h;

        config.height = Math.min(this.$canvas.width(), this.$canvas.height());

        this.draw(config);
    };

    hic.Ruler.prototype.draw = function (options) {

        var self = this,
            fontStyle,
            tickSpec,
            majorTickSpacing,
            nTick,
            pixelLast,
            pixel,
            tickSpacingPixels,
            labelWidthPixels,
            modulo,
            l,
            yShim,
            tickHeight,
            rulerLabel,
            chrSize,
            chrName,
            chromosomes = this.browser.dataset.chromosomes;

        chrName = ('x' === this.axis) ? chromosomes[this.browser.state.chr1].name : chromosomes[this.browser.state.chr2].name;
        chrSize = ('x' === this.axis) ? chromosomes[this.browser.state.chr1].size : chromosomes[this.browser.state.chr2].size;

        if (options.chrName === "all") {

        } else {

            igv.graphics.fillRect(this.ctx, 0, 0, options.rulerLengthPixels, options.rulerHeightPixels, {fillStyle: igv.Color.rgbColor(255, 255, 255)});

            fontStyle = {
                textAlign: 'center',
                font: '9px PT Sans',
                fillStyle: "rgba(64, 64, 64, 1)",
                strokeStyle: "rgba(64, 64, 64, 1)"
            };

            tickSpec = findSpacing(Math.floor(options.rulerTickMarkReferencePixels * options.bpPerPixel));
            majorTickSpacing = tickSpec.majorTick;

            // Find starting point closest to the current origin
            nTick = Math.floor(options.bpStart / majorTickSpacing) - 1;

            pixel = pixelLast = 0;

            igv.graphics.setProperties(this.ctx, fontStyle);
            this.ctx.lineWidth = 1.0;

            yShim = 1;
            tickHeight = 8;
            while (pixel < options.rulerLengthPixels) {

                l = Math.floor(nTick * majorTickSpacing);

                pixel = Math.round(((l - 1) - options.bpStart + 0.5) / options.bpPerPixel);

                rulerLabel = formatNumber(l / tickSpec.unitMultiplier, 0) + " " + tickSpec.majorUnit;

                tickSpacingPixels = Math.abs(pixel - pixelLast);
                labelWidthPixels = this.ctx.measureText(rulerLabel).width;

                if (labelWidthPixels > tickSpacingPixels) {

                    if (tickSpacingPixels < 32) {
                        modulo = 4;
                    } else {
                        modulo = 2;
                    }
                } else {
                    modulo = 1;
                }

                // modulo = 1;
                if (0 === nTick % modulo) {

                    if (Math.floor((pixel * options.bpPerPixel) + options.bpStart) < chrSize) {

                        // console.log('   label delta(' + Math.abs(pixel - pixelLast) + ') modulo(' + modulo + ') bpp(' + options.bpPerPixel + ')');

                        this.ctx.save();
                        this.labelReflectionTransform(this.ctx, pixel);
                        igv.graphics.fillText(this.ctx, rulerLabel, pixel, options.height - (tickHeight / 0.75));
                        this.ctx.restore();

                    }

                } else {
                    // console.log('no label');
                }

                if (Math.floor((pixel * options.bpPerPixel) + options.bpStart) < chrSize) {
                    igv.graphics.strokeLine(this.ctx,
                        pixel, options.height - tickHeight,
                        pixel, options.height - yShim);
                }

                pixelLast = pixel;
                nTick++;

            } // while (pixel < options.rulerLengthPixels)

            igv.graphics.strokeLine(this.ctx, 0, options.height - yShim, options.rulerLengthPixels, options.height - yShim);

        }

        function formatNumber(anynum, decimal) {
            //decimal  - the number of decimals after the digit from 0 to 3
            //-- Returns the passed number as a string in the xxx,xxx.xx format.
            //anynum = eval(obj.value);
            var divider = 10;
            switch (decimal) {
                case 0:
                    divider = 1;
                    break;
                case 1:
                    divider = 10;
                    break;
                case 2:
                    divider = 100;
                    break;
                default:       //for 3 decimal places
                    divider = 1000;
            }

            var workNum = Math.abs((Math.round(anynum * divider) / divider));

            var workStr = "" + workNum;

            if (-1 === workStr.indexOf(".")) {
                workStr += "."
            }

            var dStr = workStr.substr(0, workStr.indexOf("."));
            var dNum = dStr - 0;
            var pStr = workStr.substr(workStr.indexOf("."));

            while (pStr.length - 1 < decimal) {
                pStr += "0"
            }

            if ('.' === pStr) {
                pStr = '';
            }

            //--- Adds a comma in the thousands place.
            if (dNum >= 1000) {
                var dLen = dStr.length;
                dStr = parseInt("" + (dNum / 1000)) + "," + dStr.substring(dLen - 3, dLen)
            }

            //-- Adds a comma in the millions place.
            if (dNum >= 1000000) {
                dLen = dStr.length;
                dStr = parseInt("" + (dNum / 1000000)) + "," + dStr.substring(dLen - 7, dLen)
            }
            var retval = dStr + pStr;
            //-- Put numbers in parentheses if negative.
            if (anynum < 0) {
                retval = "(" + retval + ")";
            }

            //You could include a dollar sign in the return value.
            //retval =  "$"+retval
            return retval;
        }

        function drawAll() {

            var self = this,
                lastX = 0,
                yShim = 2,
                tickHeight = 10;

            _.each(self.browser.genome.chromosomes, function (chromosome) {

                var chrName = chromosome.name,
                    bp = self.browser.genome.getGenomeCoordinate(chrName, chromosome.size),
                    x = Math.round((bp - options.bpStart ) / options.bpPerPixel),
                    chrLabel = chrName.startsWith("chr") ? chrName.substr(3) : chrName;

                self.ctx.textAlign = 'center';
                igv.graphics.strokeLine(self.ctx, x, self.height - tickHeight, x, self.height - yShim);
                igv.graphics.fillText(self.ctx, chrLabel, (lastX + x) / 2, self.height - (tickHeight / 0.75));

                lastX = x;

            });
            igv.graphics.strokeLine(self.ctx, 0, self.height - yShim, options.rulerLengthPixels, self.height - yShim);
        }

    };

    function isBrowserInWholeGenomeView (state) {
        return 0 === state.chr1 && state.chr1 === state.chr1;
    }

    function TickSpacing(majorTick, majorUnit, unitMultiplier) {
        this.majorTick = majorTick;
        this.majorUnit = majorUnit;
        this.unitMultiplier = unitMultiplier;
    }

    function findSpacing(rulerLengthBP) {

        if (rulerLengthBP < 10) {
            return new TickSpacing(1, "", 1);
        }


        // How many zeroes?
        var nZeroes = Math.floor(log10(rulerLengthBP));
        var majorUnit = "";
        var unitMultiplier = 1;
        if (nZeroes > 9) {
            majorUnit = "gb";
            unitMultiplier = 1000000000;
        }
        if (nZeroes > 6) {
            majorUnit = "mb";
            unitMultiplier = 1000000;
        } else if (nZeroes > 3) {
            majorUnit = "kb";
            unitMultiplier = 1000;
        }

        var nMajorTicks = rulerLengthBP / Math.pow(10, nZeroes - 1);
        if (nMajorTicks < 25) {
            return new TickSpacing(Math.pow(10, nZeroes - 1), majorUnit, unitMultiplier);
        } else {
            return new TickSpacing(Math.pow(10, nZeroes) / 2, majorUnit, unitMultiplier);
        }

        function log10(x) {
            var dn = Math.log(10);
            return Math.log(x) / dn;
        }
    }

    function reflectionTransformWithContext(context, exe) {
        context.translate(exe, 0);
        context.scale(-1, 1);
        context.translate(-exe, 0);
    }

    function identityTransformWithContext(context) {
        // 3x2 matrix. column major. (sx 0 0 sy tx ty).
        context.setTransform(1, 0, 0, 1, 0, 0);
    }

    return hic;
})(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */


var hic = (function (hic) {


    hic.State = function (chr1, chr2, zoom, x, y, pixelSize, normalization) {

        if(chr1 !== undefined) {
            if (chr1 <= chr2) {
                this.chr1 = chr1;
                this.chr2 = chr2;
                this.x = x;
                this.y = y;
            }
            else {
                // Transpose
                this.chr1 = chr2;
                this.chr2 = chr1;
                this.x = y;
                this.y = x;
            }
            this.zoom = zoom;
            this.pixelSize = pixelSize;

            if ("undefined" === normalization) {
                console.log("No normalization defined !!!");
                normalization = undefined;
            }

            this.normalization = normalization;
        }
    };

    hic.State.prototype.stringify = function () {
        return "" + this.chr1 + "," + this.chr2 + "," + this.zoom + "," + this.x + "," + this.y + "," + this.pixelSize + "," + this.normalization;
    }

    hic.State.prototype.clone = function () {
        return Object.assign(new hic.State(), this);
    }

    hic.State.prototype.equals = function(state) {
        var s1 = JSON.stringify(this);
        var s2 = JSON.stringify(state);
        return s1 === s2;
    }


    hic.destringifyState = function (string) {

        var tokens = string.split(",");
        return new hic.State(
            parseInt(tokens[0]),    // chr1
            parseInt(tokens[1]),    // chr2
            parseFloat(tokens[2]), // zoom
            parseFloat(tokens[3]), // x
            parseFloat(tokens[4]), // y
            parseFloat(tokens[5]), // pixelSize
            tokens.length > 6 ? tokens[6] : "NONE"   // normalization
        )

    }

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */


var hic = (function (hic) {

    hic.Track2DDisplaceModes =
        {
            displayAllMatrix: 'displayAllMatrix',
            displayLowerMatrix: 'displayLowerMatrix',
            displayUpperMatrix: 'displayUpperMatrix'
        };

    hic.Track2D = function (config, features) {

        var self = this;

        this.config = config;
        this.name = config.name;
        this.featureMap = {};
        this.featureCount = 0;
        this.isVisible = true;

        this.displayMode = hic.Track2DDisplaceModes.displayAllMatrix;

        if(config.color && hic.validateColor(config.color)) {
            this.color = this.color = config.color;    // If specified, this will override colors of individual records.
        }
        this.repColor = features.length > 0 ? features[0].color : "black";

        features.forEach(function (f) {

            self.featureCount++;

            var key = getKey(f.chr1, f.chr2),
                list = self.featureMap[key];

            if (!list) {
                list = [];
                self.featureMap[key] = list;
            }
            list.push(f);
        });

    };

    hic.Track2D.prototype.getColor = function() {
        return this.color || this.repColor;
    }

    hic.Track2D.prototype.getFeatures = function (chr1, chr2) {
        var key = getKey(chr1, chr2),
            features = this.featureMap[key];

        return features || this.featureMap[getAltKey(chr1, chr2)];
    };

    hic.loadTrack2D = function (config) {

        return igv.xhr.loadString(config.url, igv.buildOptions(config))

            .then(function (data) {

                var features = parseData(data, isBedPE(config));

                return new hic.Track2D(config, features);
            })
    }

    function isBedPE(config) {

        if (typeof config.url === "string") {
            return config.url.toLowerCase().indexOf(".bedpe") > 0;
        } else if (typeof config.name === "string") {
            return config.name.toLowerCase().indexOf(".bedpe") > 0;
        }
        else {
            return true;  // Default
        }
    }

    function parseData(data, isBedPE) {

        if (!data) return null;

        var feature,
            lines = igv.splitLines(data),
            len = lines.length,
            tokens,
            allFeatures = [],
            line,
            i,
            delimiter = "\t",
            start,
            colorColumn;

        start = isBedPE ? 0 : 1;
        colorColumn = isBedPE ? 10 : 6;

        for (i = start; i < len; i++) {

            line = lines[i];

            if(line.startsWith("#") || line.startsWith("track") || line.startsWith("browser")) {
                continue;
            }

            tokens = lines[i].split(delimiter);
            if (tokens.length < 7) {
                //console.log("Could not parse line: " + line);
                continue;
            }

            feature = {
                chr1: tokens[0],
                x1: parseInt(tokens[1]),
                x2: parseInt(tokens[2]),
                chr2: tokens[3],
                y1: parseInt(tokens[4]),
                y2: parseInt(tokens[5]),
                color: "rgb(" + tokens[colorColumn] + ")"
            }

            if(!Number.isNaN(feature.x1)) {
                allFeatures.push(feature);
            }
        }

        return allFeatures;
    }

    function getKey(chr1, chr2) {
        return chr1 > chr2 ? chr2 + "_" + chr1 : chr1 + "_" + chr2;
    }

    function getAltKey(chr1, chr2) {
        var chr1Alt = chr1.startsWith("chr") ? chr1.substr(3) : "chr" + chr1,
            chr2Alt = chr2.startsWith("chr") ? chr2.substr(3) : "chr" + chr2;
        return chr1 > chr2 ? chr2Alt + "_" + chr1Alt : chr1Alt + "_" + chr2Alt;
    }

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/8/17.
 */

var hic = (function (hic) {

    var urlShorteners;

    hic.setURLShortener = function (shortenerConfigs) {

        if (!shortenerConfigs || shortenerConfigs === "none") {

        } else {
            urlShorteners = [];
            shortenerConfigs.forEach(function (config) {
                urlShorteners.push(getShortener(config));
            })
        }

        function getShortener(shortener) {
            if (shortener.provider) {
                if (shortener.provider === "google") {
                    return new GoogleURL(shortener);
                }
                else if (shortener.provider === "bitly") {
                    return new BitlyURL(shortener);
                }
                else {
                    igv.presentAlert("Unknown url shortener provider: " + shortener.provider);
                }
            }
            else {    // Custom
                if (typeof shortener.shortenURL === "function" &&
                    typeof shortener.expandURL === "function" &&
                    typeof shortener.hostname === "string") {
                    return shortener;
                }
                else {
                    igv.presentAlert("URL shortener object must define functions 'shortenURL' and 'expandURL' and string constant 'hostname'")
                }
            }
        }
    }

    hic.shortenURL = function (url) {
        if (urlShorteners) {
            return urlShorteners[0].shortenURL(url);
        }
        else {
            return Promise.resolve(url);
        }
    }

    /**
     * Returns a promise to expand the URL
     */
    hic.expandURL = function (url) {

        var urlObject = new URL(url),
            hostname = urlObject.hostname,
            i,
            expander;

        if (urlShorteners) {
            for (i = 0; i < urlShorteners.length; i++) {
                expander = urlShorteners[i];
                if (hostname === expander.hostname) {
                    return expander.expandURL(url);
                }
            }
        }

        igv.presentAlert("No expanders for URL: " + url);

        return Promise.resolve(url);
    }

    hic.shortJuiceboxURL = async function (base) {

        var url, queryString,
            self = this;

        queryString = "{";
        hic.allBrowsers.forEach(function (browser, index) {
            queryString += encodeURIComponent(browser.getQueryString());
            queryString += (index === hic.allBrowsers.length - 1 ? "}" : "},{");
        });

        const compressedString = compressQueryParameter(queryString)

        url = base + "?juiceboxData=" + compressedString

        if (url.length > 2048) {
            return url
        }
        else {
            return self.shortenURL(url)
        }
    };


    hic.decodeJBUrl = function (jbURL) {

        let q
        const queryMap = hic.extractQuery(jbURL)

        if (queryMap.hasOwnProperty("juicebox")) {
            q = queryMap["juicebox"];
            if (q.startsWith("%7B")) {
                q = decodeURIComponent(q);
            }
        }
        else if (queryMap.hasOwnProperty("juiceboxData")) {
            const compressed = queryMap["juiceboxData"]
            q = hic.decompressQueryParameter(compressed)
        }

        if (q) {
            q = q.substr(1, q.length - 2);  // Strip leading and trailing bracket
            const parts = q.split("},{");

            return {
                queryString: decodeURIComponent(parts[0]),
                oauthToken: oauthToken
            }
        }
        else {
            return undefined
        }
    }

    hic.decompressQueryParameter = function (enc) {

        enc = enc.replace(/\./g, '+').replace(/_/g, '/').replace(/-/g, '=')

        const compressedString = atob(enc);
        const compressedBytes = [];
        for (let i = 0; i < compressedString.length; i++) {
            compressedBytes.push(compressedString.charCodeAt(i));
        }
        const bytes = new Zlib.RawInflate(compressedBytes).decompress();

        let str = ''
        for (let b of bytes) {
            str += String.fromCharCode(b)
        }

        return str;
    }


    var BitlyURL = function (config) {
        this.api = "https://api-ssl.bitly.com";
        this.apiKey = (!config.apiKey || "ABCD" === config.apiKey) ? fetchBitlyApiKey : config.apiKey;
        this.hostname = config.hostname ? config.hostname : "bit.ly";
        this.devIP = "192.168.1.11";   // For development, replace with your IP address. Bitly will not shorten localhost !
    }


    BitlyURL.prototype.shortenURL = function (url) {

        var self = this;

        if (url.startsWith("http://localhost")) url = url.replace("localhost", this.devIP);  // Dev hack

        return getApiKey.call(this)

            .then(function (key) {
                var endpoint = self.api + "/v3/shorten?access_token=" + key + "&longUrl=" + encodeURIComponent(url);

                return igv.xhr.loadJson(endpoint, {})
            })

            .then(function (json) {
                // TODO check status code
                if (500 === json.status_code) {
                    igv.presentAlert("Error shortening URL: " + json.status_txt)
                    return undefined
                } else {
                    return json.data.url;
                }
            })
    };


    BitlyURL.prototype.expandURL = function (url) {

        var self = this;

        return getApiKey.call(this)

            .then(function (key) {

                var endpoint = self.api + "/v3/expand?access_token=" + key + "&shortUrl=" + encodeURIComponent(url);

                return igv.xhr.loadJson(endpoint, {})
            })

            .then(function (json) {

                var longUrl = json.data.expand[0].long_url;

                // Fix some Bitly "normalization"
                longUrl = longUrl.replace("{", "%7B").replace("}", "%7D");

                return longUrl;

            })
    }


    var GoogleURL = function (config) {
        this.api = "https://www.googleapis.com/urlshortener/v1/url";
        this.apiKey = (!config.apiKey || "ABCD" === config.apiKey) ? fetchGoogleApiKey : config.apiKey;
        this.hostname = config.hostname || "goo.gl";
    }

    GoogleURL.prototype.shortenURL = function (url) {

        var self = this;

        return getApiKey.call(this)

            .then(function (key) {

                var endpoint = self.api + "?key=" + key;

                return igv.xhr.loadJson(endpoint,
                    {
                        sendData: JSON.stringify({"longUrl": url}),
                        contentType: "application/json"
                    })
            })
            .then(function (json) {
                return json.id;
            })
    }


    GoogleURL.prototype.expandURL = function (url) {

        var self = this;
        return getApiKey.call(this)

            .then(function (apiKey) {

                var endpoint;

                if (url.includes("goo.gl")) {

                    endpoint = self.api + "?shortUrl=" + url + "&key=" + apiKey;

                    return igv.xhr.loadJson(endpoint, {contentType: "application/json"})
                        .then(function (json) {
                            return json.longUrl;
                        })
                }
                else {
                    // Not a google url or no api key
                    return Promise.resolve(url);
                }
            })
    }

    function getApiKey() {

        var self = this, token;

        if (typeof self.apiKey === "string") {
            return Promise.resolve(self.apiKey);
        }
        else if (typeof self.apiKey === "function") {

            token = self.apiKey();

            if (typeof token.then === "function") {
                return token.then(function (key) {
                    self.apiKey = key;
                    return key;
                })
            } else {
                self.apiKey = token;
                return Promise.resolve(token);
            }
        }
        else {
            throw new Error("Unknown apiKey type: " + this.apiKey);
        }
    }


// Example function for fetching an api key.
    function fetchBitlyApiKey() {
        return igv.xhr.loadJson("https://s3.amazonaws.com/igv.org.restricted/bitly.json", {})
            .then(function (json) {
                return json["apiKey"];
            })
            .catch(function (error) {
                console.error(error);
            })
    }

// Example function for fetching an api key.
    function fetchGoogleApiKey() {
        return igv.xhr.loadJson("https://s3.amazonaws.com/igv.org.restricted/google.json", {})
            .then(function (json) {
                return json["apiKey"];
            })
            .catch(function (error) {
                console.error(error);
            })
    }


    function compressQueryParameter(str) {

        var bytes, deflate, compressedBytes, compressedString, enc;

        bytes = [];
        for (var i = 0; i < str.length; i++) {
            bytes.push(str.charCodeAt(i));
        }
        compressedBytes = new Zlib.RawDeflate(bytes).compress();            // UInt8Arry
        compressedString = String.fromCharCode.apply(null, compressedBytes);      // Convert to string
        enc = btoa(compressedString);
        enc = enc.replace(/\+/g, '.').replace(/\//g, '_').replace(/\=/g, '-');   // URL safe

        //console.log(json);
        //console.log(enc);

        return enc;
    }

    // function decompressQueryParameter(enc) {
    //
    //     enc = enc.replace(/\./g, '+').replace(/_/g, '/').replace(/-/g, '=')
    //
    //     const compressedString = atob(enc);
    //     const compressedBytes = [];
    //     for (let i = 0; i < compressedString.length; i++) {
    //         compressedBytes.push(compressedString.charCodeAt(i));
    //     }
    //     const bytes = new Zlib.RawInflate(compressedBytes).decompress();
    //
    //     let str = ''
    //     for (let b of bytes) {
    //         str += String.fromCharCode(b)
    //     }
    //
    //     return str;
    // }


    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/8/17.
 */
var hic = (function (hic) {

    hic.colorSwatch = function (rgbString, doPlusOrMinusOrUndefined) {
        var $swatch,
            $span,
            $fa_square,
            $fa_plus_minus,
            $fa,
            str;

        $swatch = $('<div>', { class: 'igv-color-swatch' });

        $fa = $('<i>', { class: 'fa fa-square fa-2x', 'title': 'Present color swatches' });
        $swatch.append($fa);
        $fa.css({ color: rgbString });

        // if (undefined === doPlusOrMinusOrUndefined) {
        //     $fa = $('<i>', { class: 'fa fa-square fa-lg' });
        //     $swatch.append($fa);
        //     $fa.css({color: rgbString});
        //
        // } else {
        //
        //     $span = $('<span>', { class: 'fa-stack' });
        //     $swatch.append($span);
        //
        //     // background square
        //     $fa_square = $('<i>', { class: 'fa fa-square fa-stack-2x' });
        //     $span.append($fa_square);
        //     $fa_square.css({ color: rgbString, '-webkit-text-stroke-width':'2px', '-webkit-text-stroke-color':'transparent' });
        //
        //     // foreground +/-
        //     // str = '+' === doPlusOrMinusOrUndefined ? 'fa fa-plus fa-stack-1x' : 'fa fa-minus fa-stack-1x';
        //     str = '';
        //     $fa_plus_minus = $('<i>', { class: str });
        //     $span.append($fa_plus_minus);
        //     $fa_plus_minus.css({ color: 'white' });
        //
        // }


        return $swatch;
    };

    hic.setApiKey = function (key) {

        hic.apiKey = key;
        igv.setApiKey(key);

    };

    hic.extractFilename = function (urlOrFile) {
        var idx,
            str;

        if (igv.isFilePath(urlOrFile)) {
            return urlOrFile.name;
        }
        else {

            str = urlOrFile.split('?').shift();
            idx = urlOrFile.lastIndexOf("/");

            return idx > 0 ? str.substring(idx + 1) : str;
        }
    };

    hic.igvSupports = function (path) {
        var config = {url: path};
        igv.inferTrackTypes(config);
        return config.type !== undefined;
    };

    hic.throttle = function (fn, threshhold, scope) {
        var last,
            deferTimer;

        threshhold || (threshhold = 200);

        return function () {
            var context,
                now,
                args;

            context = scope || this;
            now = +new Date;
            args = arguments;

            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        }
    };

    hic.reflectionRotationWithContext = function (context) {
        context.scale(-1, 1);
        context.rotate(Math.PI / 2.0);
    };

    hic.reflectionAboutYAxisAtOffsetWithContext = function (context, exe) {
        context.translate(exe, 0);
        context.scale(-1, 1);
        context.translate(-exe, 0);
    };

    hic.identityTransformWithContext = function (context) {
        // 3x2 matrix. column major. (sx 0 0 sy tx ty).
        context.setTransform(1, 0, 0, 1, 0, 0);
    };

    hic.Math = {

        mean: function (array) {

            var t = 0, n = 0,
                i;
            for (i = 0; i < array.length; i++) {
                if (!isNaN(array[i])) {
                    t += array[i];
                    n++;
                }
            }
            return n > 0 ? t / n : 0;
        },

        percentile: function (array, p) {

            if (array.length === 0) return undefined;

            var k = Math.floor(array.length * ((100 - p) / 100));
            if (k == 0) {
                array.sort(function (a, b) {
                    return b - a
                });
                return array[0];
            }

            return this.selectElement(array, k);

        },

        selectElement: function (array, k) {

            // Credit Steve Hanov http://stevehanov.ca/blog/index.php?id=122
            var heap = new BinaryHeap(),
                i;

            for (i = 0; i < array.length; i++) {

                var item = array[i];

                // If we have not yet found k items, or the current item is larger than
                // the smallest item on the heap, add current item
                if (heap.content.length < k || item > heap.content[0]) {
                    // If the heap is full, remove the smallest element on the heap.
                    if (heap.content.length === k) {
                        var r = heap.pop();
                    }
                    heap.push(item)
                }
            }

            return heap.content[0];
        }
    };

    hic.extractQuery = function (uri) {
        var i1, i2, i, j, s, query, tokens;

        query = {};
        i1 = uri.indexOf("?");
        i2 = uri.lastIndexOf("#");

        if (i1 >= 0) {
            if (i2 < 0) i2 = uri.length;

            for (i = i1 + 1; i < i2;) {

                j = uri.indexOf("&", i);
                if (j < 0) j = i2;

                s = uri.substring(i, j);
                tokens = s.split("=", 2);
                if (tokens.length === 2) {
                    query[tokens[0]] = tokens[1];
                }

                i = j + 1;
            }
        }
        return query;
    }


    function BinaryHeap() {
        this.content = [];
    }

    BinaryHeap.prototype = {
        push: function (element) {
            // Add the new element to the end of the array.
            this.content.push(element);
            // Allow it to bubble up.
            this.bubbleUp(this.content.length - 1);
        },

        pop: function () {
            // Store the first element so we can return it later.
            var result = this.content[0];
            // Get the element at the end of the array.
            var end = this.content.pop();
            // If there are any elements left, put the end element at the
            // start, and let it sink down.
            if (this.content.length > 0) {
                this.content[0] = end;
                this.sinkDown(0);
            }
            return result;
        },

        remove: function (node) {
            var length = this.content.length;
            // To remove a value, we must search through the array to find
            // it.
            for (var i = 0; i < length; i++) {
                if (this.content[i] != node) continue;
                // When it is found, the process seen in 'pop' is repeated
                // to fill up the hole.
                var end = this.content.pop();
                // If the element we popped was the one we needed to remove,
                // we're done.
                if (i == length - 1) break;
                // Otherwise, we replace the removed element with the popped
                // one, and allow it to float up or sink down as appropriate.
                this.content[i] = end;
                this.bubbleUp(i);
                this.sinkDown(i);
                break;
            }
        },

        size: function () {
            return this.content.length;
        },

        bubbleUp: function (n) {
            // Fetch the element that has to be moved.
            var element = this.content[n], score = element;
            // When at 0, an element can not go up any further.
            while (n > 0) {
                // Compute the parent element's index, and fetch it.
                var parentN = Math.floor((n + 1) / 2) - 1,
                    parent = this.content[parentN];
                // If the parent has a lesser score, things are in order and we
                // are done.
                if (score >= parent)
                    break;

                // Otherwise, swap the parent with the current element and
                // continue.
                this.content[parentN] = element;
                this.content[n] = parent;
                n = parentN;
            }
        },

        sinkDown: function (n) {
            // Look up the target element and its score.
            var length = this.content.length,
                element = this.content[n],
                elemScore = element;

            while (true) {
                // Compute the indices of the child elements.
                var child2N = (n + 1) * 2, child1N = child2N - 1;
                // This is used to store the new position of the element,
                // if any.
                var swap = null;
                // If the first child exists (is inside the array)...
                if (child1N < length) {
                    // Look it up and compute its score.
                    var child1 = this.content[child1N],
                        child1Score = child1;
                    // If the score is less than our element's, we need to swap.
                    if (child1Score < elemScore)
                        swap = child1N;
                }
                // Do the same checks for the other child.
                if (child2N < length) {
                    var child2 = this.content[child2N],
                        child2Score = child2;
                    if (child2Score < (swap == null ? elemScore : child1Score))
                        swap = child2N;
                }

                // No need to swap further, we are done.
                if (swap == null) break;

                // Otherwise, swap and continue.
                this.content[n] = this.content[swap];
                this.content[swap] = element;
                n = swap;
            }
        }
    };

    hic.isMobile = function () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    igv.presentAlert = function (alert, $parent) {

        var string;

        string = alert.message || alert;

        if (httpMessages.hasOwnProperty(string)) {
            string = httpMessages[string];
        }

        igv.alertDialog.configure({ label: string });
        igv.alertDialog.present($parent);
    };

    hic.presentError = function(prefix, error) {

        var msg = error.message;
        if(httpMessages.hasOwnProperty(msg)) {
            msg = httpMessages[msg];
        }
        igv.presentAlert(prefix + ": " + msg);

    };

    hic.validateColor = function (str) {
        var div = document.createElement("div");
        div.style.borderColor = str;
        return div.style.borderColor !== "";
    };

    var httpMessages = {
        "401": "Access unauthorized",
        "403": "Access forbidden",
        "404": "Not found"
    }

    return hic;

})(hic || {});

/**
 * Created by dat on 5/7/17.
 */

var hic = (function (hic) {

    hic.IGVReplacements = function (igv) {

        igv.trackMenuItem = function (trackRenderer, menuItemLabel, dialogLabelHandler, dialogInputValue, dialogClickHandler) {

            var $e,
                clickHandler;

            $e = $('<div>');
            $e.text(menuItemLabel);

            clickHandler = function () {
                igv.inputDialog.configure(dialogLabelHandler, dialogInputValue, dialogClickHandler, undefined, undefined);
                igv.inputDialog.show(trackRenderer.$viewport);
            };

            return { object: $e, click: clickHandler };

        };

        igv.trackMenuItemList = function (trackRenderer) {

            var menuItems = [];

            menuItems.push(hic.colorPickerMenuItem(trackRenderer));

            menuItems.push(hic.trackRenameMenuItem(trackRenderer));

            if (trackRenderer.track.menuItemList) {
                menuItems = menuItems.concat(trackRenderer.track.menuItemList());
            }

            menuItems.push('<hr/>');
            menuItems.push(hic.trackRemovalMenuItem(trackRenderer));

            return menuItems;
        };

    };

    hic.colorPickerMenuItem = function (trackRender) {
        var $e,
            clickHandler;

        $e = $('<div>');
        $e.text('Set track color');

        clickHandler = function () {
            trackRender.colorPicker.$container.show();
        };

        return { object: $e, click: clickHandler };

    };

    hic.trackRenameMenuItem = function (trackRenderer) {

        var $e, menuClickHandler;

        $e = $('<div>');
        $e.text('Set track name');

        menuClickHandler = function menuClickHandler() {

            var dialogClickHandler;

            dialogClickHandler = function dialogClickHandler() {
                var value = trackRenderer.browser.inputDialog.$input.val().trim();
                value = ('' === value || undefined === value) ? 'untitled' : value;
                trackRenderer.setTrackName(value);
            };

            trackRenderer.browser.inputDialog.configure({
                label: 'Track Name',
                input: trackRenderer.track.name,
                click: dialogClickHandler
            });
            trackRenderer.browser.inputDialog.present($(trackRenderer.trackDiv));
        };

        return { object: $e, click: menuClickHandler };
    };

    hic.trackRemovalMenuItem = function (trackRenderer) {

        var $e, menuClickHandler;

        $e = $('<div>');
        $e.text('Remove track');

        menuClickHandler = function menuClickHandler() {
            var browser = trackRenderer.browser;
            browser.layoutController.removeTrackRendererPair(trackRenderer.trackRenderPair);
        };

        return { object: $e, click: menuClickHandler };
    };

    return hic;
})(hic || {});


/**
 * Created by dat on 4/4/17.
 */
var hic = (function (hic) {

    hic.LayoutController = function (browser, $root) {

        this.browser = browser;

        createNavBar.call(this, browser, $root);

        createAllContainers.call(this, browser, $root);

        this.scrollbar_height = 20;

        this.axis_height = 32;

        // track dimension
        this.track_height = 32;

        // Keep in sync with .x-track-canvas-container (margin-bottom) and .y-track-canvas-container (margin-right)
        this.track_margin = 2;

    };

    // Dupes of corresponding juicebox.scss variables
    // Invariant during app running. If edited in juicebox.scss they MUST be kept in sync
    hic.LayoutController.nav_bar_label_height = 36;
    hic.LayoutController.nav_bar_widget_container_height = 36;
    hic.LayoutController.nav_bar_shim_height = 4;

    hic.LayoutController.navbarHeight = function () {
        var height;
        height = (2 * hic.LayoutController.nav_bar_label_height) + (2 * hic.LayoutController.nav_bar_widget_container_height) + hic.LayoutController.nav_bar_shim_height;
        return height;
    };

    function createNavBar(browser, $root) {

        var id,
            $navbar_container,
            $map_container,
            $upper_widget_container,
            $lower_widget_container,
            $e,
            $browser_panel_delete_button,
            $fa;

        $navbar_container = $('<div class="hic-navbar-container">');
        $root.append($navbar_container);


        $navbar_container.on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            hic.Browser.setCurrentBrowser(browser);
        });

        // container: contact map label | menu button | browser delete button
        id = browser.id + '_contact-map-' + 'hic-nav-bar-map-container';
        $map_container = $("<div>", {id: id});
        $navbar_container.append($map_container);

        // contact map label
        id = browser.id + '_contact-map-' + 'hic-nav-bar-map-label';
        browser.$contactMaplabel = $("<div>", {id: id});
        $map_container.append(browser.$contactMaplabel);

        // navbar button container
        $e = $("<div>", {class: 'hic-nav-bar-button-container'});
        $map_container.append($e);

        // menu present/dismiss button
        browser.$menuPresentDismiss = $("<i>", {class: 'fa fa-bars fa-lg', 'title': 'Present menu'});
        $e.append(browser.$menuPresentDismiss);
        browser.$menuPresentDismiss.on('click', function (e) {
            browser.toggleMenu();
        });

        // browser delete button
        browser.$browser_panel_delete_button = $("<i>", {
            class: 'fa fa-minus-circle fa-lg',
            'title': 'Delete browser panel'
        });
        $e.append(browser.$browser_panel_delete_button);

        browser.$browser_panel_delete_button.on('click', function (e) {
            hic.deleteBrowserPanel(browser);
        });

        // hide delete buttons for now. Delete button is only
        // if there is more then one browser instance.
        browser.$browser_panel_delete_button.hide();


        // container: control map label
        id = browser.id + '_control-map-' + 'hic-nav-bar-map-container';
        $map_container = $("<div>", {id: id});
        $navbar_container.append($map_container);

        // control map label
        id = browser.id + '_control-map-' + 'hic-nav-bar-map-label';
        browser.$controlMaplabel = $("<div>", {id: id});
        $map_container.append(browser.$controlMaplabel);

        // upper widget container
        id = browser.id + '_upper_' + 'hic-nav-bar-widget-container';
        $upper_widget_container = $("<div>", {id: id});
        $navbar_container.append($upper_widget_container);

        // location box / goto
        browser.locusGoto = new hic.LocusGoto(browser, $upper_widget_container);

        // resolution widget
        browser.resolutionSelector = new hic.ResolutionSelector(browser, $upper_widget_container);
        browser.resolutionSelector.setResolutionLock(browser.resolutionLocked);


        // lower widget container
        id = browser.id + '_lower_' + 'hic-nav-bar-widget-container';
        $lower_widget_container = $("<div>", {id: id});
        $navbar_container.append($lower_widget_container);

        // colorscale
        browser.colorscaleWidget = new hic.ColorScaleWidget(browser, $lower_widget_container);

        // control map
        browser.controlMapWidget = new hic.ControlMapWidget(browser, $lower_widget_container);

        // normalization
        browser.normalizationSelector = new hic.NormalizationWidget(browser, $lower_widget_container);


    }

    function createAllContainers(browser, $root) {

        var id,
            tokens,
            height_calc,
            $container,
            $e;

        // .hic-x-track-container
        id = browser.id + '_' + 'x-track-container';
        this.$x_track_container = $("<div>", {id: id});
        $root.append(this.$x_track_container);

        // track labels
        id = browser.id + '_' + 'track-shim';
        this.$track_shim = $("<div>", {id: id});
        this.$x_track_container.append(this.$track_shim);

        // x-tracks
        id = browser.id + '_' + 'x-tracks';
        this.$x_tracks = $("<div>", {id: id});
        this.$x_track_container.append(this.$x_tracks);

        // crosshairs guide
        id = browser.id + '_' + 'y-track-guide';
        this.$y_track_guide = $("<div>", {id: id});
        this.$x_tracks.append(this.$y_track_guide);

        // content container
        id = browser.id + '_' + 'content-container';
        this.$content_container = $("<div>", {id: id});
        $root.append(this.$content_container);

        // menu
        createMenu(browser, $root);

        // container: x-axis
        id = browser.id + '_' + 'x-axis-container';
        $container = $("<div>", {id: id});
        this.$content_container.append($container);
        this.xAxisRuler = new hic.Ruler(browser, 'x', $container);


        // container: y-tracks | y-axis | viewport | y-scrollbar
        id = browser.id + '_' + 'y-tracks-y-axis-viewport-y-scrollbar';
        $container = $("<div>", {id: id});
        this.$content_container.append($container);

        // y-tracks
        id = browser.id + '_' + 'y-tracks';
        this.$y_tracks = $("<div>", {id: id});
        $container.append(this.$y_tracks);

        // crosshairs guide
        id = browser.id + '_' + 'x-track-guide';
        this.$x_track_guide = $("<div>", {id: id});
        this.$y_tracks.append(this.$x_track_guide);

        // y-axis
        this.yAxisRuler = new hic.Ruler(browser, 'y', $container);

        this.xAxisRuler.$otherRulerCanvas = this.yAxisRuler.$canvas;
        this.xAxisRuler.otherRuler = this.yAxisRuler;

        this.yAxisRuler.$otherRulerCanvas = this.xAxisRuler.$canvas;
        this.yAxisRuler.otherRuler = this.xAxisRuler;

        // viewport | y-scrollbar
        browser.contactMatrixView = new hic.ContactMatrixView(browser, $container);

        // container: x-scrollbar
        id = browser.id + '_' + 'x-scrollbar-container';
        $container = $("<div>", {id: id});
        this.$content_container.append($container);

        // x-scrollbar
        $container.append(browser.contactMatrixView.scrollbarWidget.$x_axis_scrollbar_container);

    }

    function createMenu(browser, $root) {

        var $menu,
            $div,
            $fa,
            config;

        // menu
        $menu = $('<div>', {class: 'hic-menu'});
        $root.append($menu);

        // menu close button
        $div = $('<div>', {class: 'hic-menu-close-button'});
        $menu.append($div);

        // $fa = $("<i>", { class:'fa fa-minus-circle fa-lg' });
        $fa = $("<i>", {class: 'fa fa-times'});
        $div.append($fa);

        $fa.on('click', function (e) {
            browser.toggleMenu();
        });


        // chromosome select widget
        browser.chromosomeSelector = new hic.ChromosomeSelectorWidget(browser, $menu);

        config =
            {
                title: '2D Annotations',
                loadTitle: 'Load:',
                alertMessage: 'No 2D annotations currently loaded for this map'
            };
        browser.annotation2DWidget = new hic.AnnotationWidget(browser, $menu, config, function () {
            return browser.tracks2D;
        });

        // config =
        //     {
        //         title: 'Tracks',
        //         loadTitle: 'Load Tracks:',
        //         alertMessage: 'No tracks currently loaded for this map'
        //     };
        //
        // browser.annotation1DDWidget = new hic.AnnotationWidget(browser, $menu, config, function () {
        //     return browser.trackRenderers;
        // });

        browser.$menu = $menu;

        browser.$menu.hide();

    }

    hic.LayoutController.prototype.tracksLoaded = function (trackXYPairs) {
        var self = this,
            trackRendererPair;

        self.doLayoutTrackXYPairCount(trackXYPairs.length + self.browser.trackRenderers.length);

        trackXYPairs.forEach(function (trackPair, index) {

            var w, h;

            trackRendererPair = {};
            w = h = self.track_height;
            trackRendererPair.x = new hic.TrackRenderer(self.browser, {
                width: undefined,
                height: h
            }, self.$x_tracks, trackRendererPair, trackPair, 'x', index);
            trackRendererPair.y = new hic.TrackRenderer(self.browser, {
                width: w,
                height: undefined
            }, self.$y_tracks, trackRendererPair, trackPair, 'y', index);

            self.browser.trackRenderers.push(trackRendererPair);

        });


    }


    hic.LayoutController.prototype.removeAllTrackXYPairs = function () {
        var self = this,
            indices;

        indices = _.range(_.size(this.browser.trackRenderers));

        if (0 === _.size(indices)) {
            return;
        }

        _.each(indices, function (unused) {
            var discard,
                index;

            // select last track to dicard
            discard = _.last(self.browser.trackRenderers);

            // discard DOM element's
            discard['x'].$viewport.remove();
            discard['y'].$viewport.remove();

            // remove discard from list
            index = self.browser.trackRenderers.indexOf(discard);
            self.browser.trackRenderers.splice(index, 1);

            discard = undefined;
            self.doLayoutTrackXYPairCount(_.size(self.browser.trackRenderers));
        });

        // this.browser.updateLayout();
    };

    hic.LayoutController.prototype.removeLastTrackXYPair = function () {
        var index,
            discard;

        if (_.size(this.browser.trackRenderers) > 0) {

            // select last track to dicard
            discard = _.last(this.browser.trackRenderers);

            // discard DOM element's
            discard['x'].$viewport.remove();
            discard['y'].$viewport.remove();

            // remove discard from list
            index = this.browser.trackRenderers.indexOf(discard);
            this.browser.trackRenderers.splice(index, 1);

            discard = undefined;
            this.doLayoutTrackXYPairCount(_.size(this.browser.trackRenderers));

            this.browser.updateLayout();

        } else {
            //console.log('No more tracks.');
        }

    };

    hic.LayoutController.prototype.removeTrackRendererPair = function (trackRendererPair) {

        var index,
            discard;

        if (_.size(this.browser.trackRenderers) > 0) {

            discard = trackRendererPair;

            // discard DOM element's
            discard['x'].$viewport.remove();
            discard['y'].$viewport.remove();

            // remove discard from list
            index = this.browser.trackRenderers.indexOf(discard);
            this.browser.trackRenderers.splice(index, 1);

            this.doLayoutTrackXYPairCount(_.size(this.browser.trackRenderers));

            this.browser.updateLayout();


        } else {
            //console.log('No more tracks.');
        }

    };

    hic.LayoutController.prototype.doLayoutTrackXYPairCount = function (trackXYPairCount) {

        var track_aggregate_height,
            tokens,
            width_calc,
            height_calc;


        track_aggregate_height = (0 === trackXYPairCount) ? 0 : trackXYPairCount * (this.track_height + this.track_margin);

        tokens = _.map([hic.LayoutController.navbarHeight(), track_aggregate_height], function (number) {
            return number.toString() + 'px';
        });
        height_calc = 'calc(100% - (' + tokens.join(' + ') + '))';

        tokens = _.map([track_aggregate_height, this.axis_height, this.scrollbar_height], function (number) {
            return number.toString() + 'px';
        });
        width_calc = 'calc(100% - (' + tokens.join(' + ') + '))';

        // x-track container
        this.$x_track_container.height(track_aggregate_height);

        // track labels
        this.$track_shim.width(track_aggregate_height);

        // x-tracks
        this.$x_tracks.css('width', width_calc);


        // content container
        this.$content_container.css('height', height_calc);

        // x-axis - repaint canvas
        this.xAxisRuler.updateWidthWithCalculation(width_calc);

        // y-tracks
        this.$y_tracks.width(track_aggregate_height);

        // y-axis - repaint canvas
        this.yAxisRuler.updateHeight(this.yAxisRuler.$axis.height());

        // viewport
        this.browser.contactMatrixView.$viewport.css('width', width_calc);

        // x-scrollbar
        this.browser.contactMatrixView.scrollbarWidget.$x_axis_scrollbar_container.css('width', width_calc);

    };

    hic.LayoutController.prototype.doLayoutWithRootContainerSize = function (size) {

        var count;

        this.browser.$root.width(size.width);
        this.browser.$root.height(size.height + hic.LayoutController.navbarHeight());

        count = _.size(this.browser.trackRenderers) > 0 ? _.size(this.browser.trackRenderers) : 0;
        this.doLayoutTrackXYPairCount(count);

        this.browser.updateLayout();
    };

    return hic;
})(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

var hic = (function (hic) {

    hic.LocalFile = class {

        constructor(file) {
            this.file = file
        }

        async read(position, length) {

            const file = this.file;

            return new Promise(function (fullfill, reject) {

                const fileReader = new FileReader();

                fileReader.onload = function (e) {
                    fullfill(fileReader.result);
                };

                fileReader.onerror = function (e) {
                    console.err("Error reading local file " + localfile.name);
                    reject(null, fileReader);
                };

                if (position !== undefined) {
                    const blob = file.slice(position, position + length);
                    fileReader.readAsArrayBuffer(blob);

                } else {
                    fileReader.readAsArrayBuffer(file);

                }

            });
        }
    }

    return hic;
})(hic || {});
/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including 
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial 
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND 
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
 * THE SOFTWARE.
 *
 */


/**
 * @author Jim Robinson
 */


var hic = (function (hic) {


    hic.NormalizationVector = function (type, chrIdx, unit, resolution, values) {
     

        var mean = hic.Math.mean(values), i;
        if (mean > 0) {
            for (i = 0; i < values.length; i++) {
                values[i] /= mean;
            }
        }
        
        this.type = type;
        this.chrIdx = chrIdx;
        this.unit = unit;
        this.resolution = resolution;
        this.data = values;
    }

    hic.getNormalizationVectorKey = function (type, chrIdx, unit, resolution) {
        return type + "_" + chrIdx + "_" + unit + "_" + resolution;
    }

    hic.NormalizationVector.prototype.getKey = function () {
        return NormalizationVector.getKey(this.type, this.chrIdx, this.unit, this.resolution);
    }

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/21/17.
 */
var hic = (function (hic) {

    var labels =
    {
        NONE: 'None',
        VC: 'Coverage',
        VC_SQRT: 'Coverage - Sqrt',
        KR: 'Balanced',
        INTER_VC: 'Interchromosomal Coverage',
        INTER_VC_SQRT: 'Interchromosomal Coverage - Sqrt',
        INTER_KR: 'Interchromosomal Balanced',
        GW_VC: 'Genome-wide Coverage',
        GW_VC_SQRT: 'Genome-wide Coverage - Sqrt',
        GW_KR: 'Genome-wide Balanced'
    };

    hic.NormalizationWidget = function (browser, $parent) {
        var self = this,
            $label;

        this.browser = browser;

        // container
        this.$container = $("<div>", { class:'hic-normalization-selector-container',  title:'Normalization' });
        $parent.append(this.$container);

        // label
        $label = $('<div>');
        $label.text( 'Norm');
        this.$container.append($label);
        // $label.hide();

        // select
        this.$normalization_selector = $('<select name="select">');
        this.$normalization_selector.attr('name', 'normalization_selector');
        this.$normalization_selector.on('change', function (e) {
            self.browser.setNormalization($(this).val());
        });
        this.$container.append(this.$normalization_selector);

        // spinner
        this.$spinner = $('<div>');
        this.$spinner.text('Loading ...');
        this.$container.append(this.$spinner);
        this.$spinner.hide();

        this.browser.eventBus.subscribe("MapLoad", this);
        this.browser.eventBus.subscribe("NormVectorIndexLoad", this);
        this.browser.eventBus.subscribe("NormalizationFileLoad", this);
        this.browser.eventBus.subscribe("NormalizationExternalChange", this);

    };

    hic.NormalizationWidget.prototype.startNotReady = function () {
        this.$normalization_selector.hide();
        this.$spinner.show();
    };

    hic.NormalizationWidget.prototype.stopNotReady = function () {
        this.$spinner.hide();
        this.$normalization_selector.show();
    };

    hic.NormalizationWidget.prototype.receiveEvent = function (event) {

        // TODO -- this is quite fragile.  If the NormVectorIndexLoad event is received before MapLoad you'll never see the pulldown widget
        // if ("MapLoad" === event.type) {
        //     // TODO -- start norm widget "not ready" state
        //     this.startNotReady();
        //
        //     updateOptions.call(this);
        //
        // } else
            if ("NormVectorIndexLoad" === event.type) {

            updateOptions.call(this);

            // TODO -- end norm widget "not ready" state
            this.stopNotReady();

        } else if ("NormalizationFileLoad" === event.type) {
            if(event.data === "start") {
                this.startNotReady();
            } else {
                this.stopNotReady();
            }
        }  else if ("NormalizationExternalChange" === event.type) {

            var filter = this.$normalization_selector
                .find('option')
                .filter(function (index) {
                    var s1 = this.value;
                    var s2 = event.data;
                    return s1 === s2;
                })
                .prop('selected', true);
        }

        async function updateOptions() {
            var dataset = event.data,
                normalizationTypes,
                elements,
                norm = this.browser.state.normalization;

            normalizationTypes = await dataset.getNormalizationOptions();
            if(normalizationTypes) {
                elements = normalizationTypes.map(function (normalization) {
                    var label,
                        labelPresentation,
                        isSelected,
                        titleString,
                        valueString;

                    label = labels[normalization] || normalization;
                    isSelected = (norm === normalization);
                    titleString = (label === undefined ? '' : ' title = "' + label + '" ');
                    valueString = ' value=' + normalization + (isSelected ? ' selected' : '');

                    labelPresentation = '&nbsp &nbsp' + label + '&nbsp &nbsp';
                    return '<option' + titleString + valueString + '>' + labelPresentation + '</option>';
                });

                this.$normalization_selector.empty();
                this.$normalization_selector.append(elements.join(''));
            }
        }
    };

    return hic;

})
(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/7/17.
 */
var hic = (function (hic) {

    hic.ScrollbarWidget = function (browser) {

        var self = this,
            id;

        this.browser = browser;
        this.isDragging = false;

        // x-axis
        id = browser.id + '_' + 'x-axis-scrollbar-container';
        this.$x_axis_scrollbar_container = $("<div>", { id:id });

        id = browser.id + '_' + 'x-axis-scrollbar';
        this.$x_axis_scrollbar = $("<div>", { id:id });
        this.$x_axis_scrollbar_container.append(this.$x_axis_scrollbar);

        this.$x_label = $('<div>');
        this.$x_label.text('');
        this.$x_axis_scrollbar.append(this.$x_label);

        // y-axis
        id = browser.id + '_' + 'y-axis-scrollbar-container';
        this.$y_axis_scrollbar_container = $("<div>", { id:id });

        id = browser.id + '_' + 'y-axis-scrollbar';
        this.$y_axis_scrollbar = $("<div>", { id:id });
        this.$y_axis_scrollbar_container.append(this.$y_axis_scrollbar);

        this.$y_label = $('<div class="scrollbar-label-rotation-in-place">');
        this.$y_label.text('');
        this.$y_axis_scrollbar.append(this.$y_label);

        // this.$x_axis_scrollbar_container.hide();
        // this.$y_axis_scrollbar_container.hide();

        // this.$x_axis_scrollbar.draggable({
        //     containment: 'parent',
        //     start: function() {
        //         self.isDragging = true;
        //     },
        //     drag: hic.throttle(xAxisDragger, 250),
        //     stop: function() {
        //         self.isDragging = false;
        //     }
        // });

        // this.$y_axis_scrollbar.draggable({
        //
        //     containment: 'parent',
        //     start: function() {
        //         self.isDragging = true;
        //     },
        //     drag: hic.throttle(yAxisDragger, 250),
        //     stop: function() {
        //         self.isDragging = false;
        //     }
        // });

        this.browser.eventBus.subscribe("LocusChange", this);

        // function xAxisDragger () {
        //     var bin,
        //         st = self.browser.state;
        //
        //     bin = self.css2Bin(self.browser.hicReader.chromosomes[ self.browser.state.chr1 ], self.$x_axis_scrollbar, 'left');
        //     self.browser.setState( new hic.State(st.chr1, st.chr2, st.zoom, bin, st.y, st.pixelSize) );
        // }

        // function yAxisDragger () {
        //     var bin,
        //         st = self.browser.state;
        //
        //     bin = self.css2Bin(self.browser.hicReader.chromosomes[ self.browser.state.chr2 ], self.$y_axis_scrollbar, 'top');
        //     self.browser.setState( new hic.State(st.chr1, st.chr2, st.zoom, st.x, bin, st.pixelSize) );
        // }
    };

    hic.ScrollbarWidget.prototype.css2Bin = function(chromosome, $element, attribute) {
        var numer,
            denom,
            percentage;

        numer = $element.css(attribute).slice(0, -2);
        denom = $element.parent().css('left' === attribute ? 'width' : 'height').slice(0, -2);
        percentage = parseInt(numer, 10)/parseInt(denom, 10);

        return percentage * chromosome.size / this.browser.dataset.bpResolutions[ this.browser.state.zoom ];
    };

    hic.ScrollbarWidget.prototype.receiveEvent = function(event) {
        var self = this,
            chromosomeLengthsBin,
            chromosomeLengthsPixel,
            width,
            height,
            pixels,
            widthBin,
            heightBin,
            bins,
            percentage,
            percentages,
            str;

        if (!this.isDragging && event.type === "LocusChange") {

            var state = event.data.state,
                dataset = self.browser.dataset;

            if (0 === state.chr1) {
                this.$x_axis_scrollbar.hide();
                this.$y_axis_scrollbar.hide();
            } else {

                this.$x_axis_scrollbar.show();
                this.$y_axis_scrollbar.show();

                this.$x_axis_scrollbar_container.show();
                this.$y_axis_scrollbar_container.show();

                chromosomeLengthsBin = _.map([state.chr1, state.chr2], function (index) {
                    // bp / bp-per-bin -> bin
                    return dataset.chromosomes[index].size / dataset.bpResolutions[state.zoom];
                });

                chromosomeLengthsPixel = _.map(chromosomeLengthsBin, function (bin) {
                    // bin * pixel-per-bin -> pixel
                    return bin * state.pixelSize;
                });

                pixels = [this.browser.contactMatrixView.getViewDimensions().width, this.browser.contactMatrixView.getViewDimensions().height];

                // pixel / pixel-per-bin -> bin
                bins = [ _.first(pixels)/state.pixelSize, _.last(pixels)/state.pixelSize ];

                // bin / bin -> percentage
                percentages = _.map(bins, function(bin, i){
                    var binPercentage,
                        pixelPercentage;

                    binPercentage = Math.min(bin, chromosomeLengthsBin[ i ]) / chromosomeLengthsBin[ i ];
                    pixelPercentage = Math.min(chromosomeLengthsPixel[ i ], pixels[ i ])/pixels[ i ];
                    return Math.max(1, Math.round(100 * binPercentage * pixelPercentage));
                });
                this.$x_axis_scrollbar.css('width', (_.first(percentages).toString() + '%'));
                this.$y_axis_scrollbar.css('height', (_.last(percentages).toString() + '%'));


                // bin / bin -> percentage
                percentage = Math.round(100 * state.x / _.first(chromosomeLengthsBin));
                percentage = percentage.toString() + '%';
                this.$x_axis_scrollbar.css('left', percentage);

                // bin / bin -> percentage
                percentage = Math.round(100 * state.y / _.last(chromosomeLengthsBin));
                percentage = percentage.toString() + '%';
                this.$y_axis_scrollbar.css('top', percentage);

                this.$x_label.text( dataset.chromosomes[ state.chr1 ].name );
                this.$y_label.text( dataset.chromosomes[ state.chr2 ].name );

            }

        }
    };

    return hic;
})(hic || {});

/*
 *  The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 The Regents of the University of California
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/**
 * Created by dat on 3/14/17.
 */
var hic = (function (hic) {

    hic.SweepZoom = function (browser, $target) {
        var id;

        id = browser.id + '_' + 'sweep-zoom-container';

        this.browser = browser;
        this.$rulerSweeper = $("<div>", {id: id});
        this.$rulerSweeper.hide();
        this.$target = $target;
        this.sweepRect = {};
    };

    hic.SweepZoom.prototype.initialize = function (pageCoords) {

        this.anchor = pageCoords;
        this.coordinateFrame = this.$rulerSweeper.parent().offset();
        this.aspectRatio = this.$target.width() / this.$target.height();
        this.sweepRect.x = {
            x: pageCoords.x,
            y: pageCoords.y,
            width: 1,
            height: 1
        };
        this.clipped = {value: false};
    };

    hic.SweepZoom.prototype.update = function (pageCoords) {

        var anchor = this.anchor,
            dx = Math.abs(pageCoords.x - anchor.x),
            dy = Math.abs(pageCoords.y - anchor.y);

        // Adjust deltas to conform to aspect ratio
        if (dx / dy > this.aspectRatio) {
            dy = dx / this.aspectRatio;
        } else {
            dx = dy * this.aspectRatio;
        }

        this.sweepRect.width = dx;
        this.sweepRect.height = dy;
        this.sweepRect.x = anchor.x < pageCoords.x ? anchor.x : anchor.x - dx;
        this.sweepRect.y = anchor.y < pageCoords.y ? anchor.y : anchor.y - dy;


        this.$rulerSweeper.width(this.sweepRect.width);
        this.$rulerSweeper.height(this.sweepRect.height);


        this.$rulerSweeper.offset(
            {
                left: this.sweepRect.x,
                top: this.sweepRect.y
            }
        );
        this.$rulerSweeper.show();

    };

    hic.SweepZoom.prototype.commit = function () {
        var state,
            resolution,
            posX,
            posY,
            x,
            y,
            width,
            height,
            xMax,
            yMax,
            minimumResolution;

        this.$rulerSweeper.hide();

        state = this.browser.state;

        // bp-per-bin
        resolution = this.browser.resolution();

        // Convert page -> offset coordinates
        posX = this.sweepRect.x - this.$target.offset().left;
        posY = this.sweepRect.y - this.$target.offset().top;


        // bp = ((bin + pixel/pixel-per-bin) / bp-per-bin)
        x = (state.x + (posX / state.pixelSize)) * resolution;
        y = (state.y + (posY / state.pixelSize)) * resolution;

        // bp = ((bin + pixel/pixel-per-bin) / bp-per-bin)
        width = (this.sweepRect.width / state.pixelSize) * resolution;
        height = (this.sweepRect.height / state.pixelSize) * resolution;

        // bp = bp + bp
        xMax = x + width;
        yMax = y + height;

        minimumResolution = this.browser.dataset.bpResolutions[ this.browser.dataset.bpResolutions.length - 1 ];
        this.browser.goto(state.chr1, x, xMax, state.chr2, y, yMax, minimumResolution);

    };


    return hic;
})(hic || {});

/**
 * Created by dat on 5/3/17.
 */

var hic = (function (hic) {

    hic.TrackLabel = function ($track) {

        var $container;

        this.$track = $track;

        $('.clickedit')
            .hide()
            .focusout(endEdit)
            .keyup(function(e) {
                if ((e.which && 13 === e.which) || (e.keyCode && 13 === e.keyCode)) {
                    endEdit(e);
                    return false;
                } else {
                    return true;
                }
            })
            .prev()
            .click(function() {
                $(this).hide();
                $(this)
                    .next()
                    .show()
                    .focus();
            });

        function endEdit(e) {
            var input,
                label,
                str;

            input = $(e.target);
            str = ('' === input.val()) ? hic.TrackLabel.defaultText() : input.val();

            label = input && input.prev();
            label.text(str);

            input.hide();
            label.show();
        }

    };

    hic.TrackLabel.defaultText = function () {
        return 'Untitled';
    };

    return hic;
})(hic || {});








/**
 * Created by dat on 4/5/17.
 */
var hic = (function (hic) {

    hic.TrackRenderer = function (browser, size, $container, trackRenderPair, trackPair, axis, order) {

        this.browser = browser;

        this.trackRenderPair = trackRenderPair;

        this.track = trackPair[axis];

        this.id = _.uniqueId('trackRenderer_');
        this.axis = axis;
        this.initializationHelper($container, size, order);
    };

    hic.TrackRenderer.prototype.initializationHelper = function ($container, size, order) {

        var self = this,
            str,
            doShowLabelAndGear,
            $x_track_label;

        // track canvas container
        this.$viewport = ('x' === this.axis) ? $('<div class="x-track-canvas-container">') : $('<div class="y-track-canvas-container">');
        if (size.width) {
            this.$viewport.width(size.width);
        }
        if (size.height) {
            this.$viewport.height(size.height);
        }
        $container.append(this.$viewport);
        this.$viewport.css({order: order});

        // canvas
        this.$canvas = $('<canvas>');
        this.$viewport.append(this.$canvas);
        this.ctx = this.$canvas.get(0).getContext("2d");

        if ('x' === this.axis) {

            // label
            this.$label = $('<div class="x-track-label">');
            str = this.track.name || 'untitled';
            this.$label.text(str);

            // note the pre-existing state of track labels/gear. hide/show accordingly.
            $x_track_label = $container.find(this.$label);
            doShowLabelAndGear = (0 === _.size($x_track_label)) ? true : $x_track_label.is(':visible');

            this.$viewport.append(this.$label);
        }

        // track spinner container
        this.$spinner = ('x' === this.axis) ? $('<div class="x-track-spinner">') : $('<div class="y-track-spinner">');
        this.$viewport.append(this.$spinner);

        // throbber
        // size: see $hic-viewport-spinner-size in .scss files
        this.throbber = Throbber({color: 'rgb(64, 64, 64)', size: 32, padding: 7});
        this.throbber.appendTo(this.$spinner.get(0));
        this.stopSpinner();

        // color picker
        if ('x' === this.axis) {
            this.colorPicker = createColorPicker_ColorScaleWidget_version(this.$viewport, () => {
                this.colorPicker.$container.hide();
            }, (color) => {
                this.setColor(color);
            });
            this.colorPicker.$container.hide();
        }

        if ('x' === this.axis) {

            // igvjs compatibility
            this.track.trackView = this;
            this.track.trackView.trackDiv = this.$viewport.get(0);

            igv.appendRightHandGutter.call(this, this.$viewport);

            this.$viewport.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $container.find('.x-track-label').toggle();
                $container.find('.igv-right-hand-gutter').toggle();
            });

        }

        this.configTrackTransforms();

    };

    hic.TrackRenderer.prototype.configTrackTransforms = function () {

        this.canvasTransform = ('y' === this.axis) ? hic.reflectionRotationWithContext : hic.identityTransformWithContext;

        this.labelReflectionTransform = ('y' === this.axis) ? hic.reflectionAboutYAxisAtOffsetWithContext : function (context, exe) { /* nuthin */
        };

    };

    hic.TrackRenderer.prototype.syncCanvas = function () {

        this.$canvas.width(this.$viewport.width());
        this.$canvas.attr('width', this.$viewport.width());

        this.$canvas.height(this.$viewport.height());
        this.$canvas.attr('height', this.$viewport.height());

    };

    hic.TrackRenderer.prototype.presentColorPicker = function () {
        const bbox = this.trackDiv.getBoundingClientRect();
        this.colorPicker.origin = {x: bbox.x, y: 0};
        this.colorPicker.$container.offset({left: this.colorPicker.origin.x, top: this.colorPicker.origin.y});
        this.colorPicker.$container.show();
    };

    hic.TrackRenderer.prototype.setTrackName = function (name) {

        if ('x' === this.axis) {
            this.track.name = name;
            this.$label.text(name);
        }

    };

    hic.TrackRenderer.prototype.setColor = function (color) {

        setColor(this.trackRenderPair.x);
        setColor(this.trackRenderPair.y);

        function setColor(trackRenderer) {
            trackRenderer.tile = undefined;
            trackRenderer.track.color = color;
        }

        this.browser.renderTrackXY(this.trackRenderPair);

    };

    hic.TrackRenderer.prototype.dataRange = function () {
        return this.track.dataRange ? this.track.dataRange : undefined;
    };

    hic.TrackRenderer.prototype.setDataRange = function (min, max, autoscale) {

        if (min !== undefined) {
            this.track.dataRange.min = min;
            this.track.config.min = min;
        }

        if (max !== undefined) {
            this.track.dataRange.max = max;
            this.track.config.max = max;
        }

        this.track.autoscale = autoscale;
        this.track.config.autoScale = autoscale;

        this.repaint();
    };


    /**
     * Return a promise to get the renderer ready to paint,  that is with a valid tile, loading features
     * and drawing tile if neccessary.
     *
     * @returns {*}
     */
    hic.TrackRenderer.prototype.readyToPaint = async function () {

        var self = this,
            genomicState, chrName, lengthPixel, lengthBP, startBP, endBP;

        genomicState = self.browser.genomicState(self.axis);
        chrName = genomicState.chromosome.name;

        if (self.tile && self.tile.containsRange(chrName, genomicState.startBP, genomicState.endBP, genomicState.bpp)) {

            return;

        } else if (genomicState.bpp * Math.max(self.$canvas.width(), self.$canvas.height()) > self.track.visibilityWindow) {

            return;

        } else {

            // Expand the requested range so we can pan a bit without reloading
            lengthPixel = 3 * Math.max(self.$canvas.width(), self.$canvas.height());
            lengthBP = Math.round(genomicState.bpp * lengthPixel);
            startBP = Math.max(0, Math.round(genomicState.startBP - lengthBP / 3));
            endBP = startBP + lengthBP;

            const features = await self.track.getFeatures(genomicState.chromosome.name, startBP, endBP, genomicState.bpp)


            var buffer, ctx;
            buffer = document.createElement('canvas');
            buffer.width = 'x' === self.axis ? lengthPixel : self.$canvas.width();
            buffer.height = 'x' === self.axis ? self.$canvas.height() : lengthPixel;
            ctx = buffer.getContext("2d");
            if (features) {

                if (typeof self.track.doAutoscale === 'function') {
                    self.track.doAutoscale(features);
                } else {
                    self.track.dataRange = igv.doAutoscale(features);
                }

                self.canvasTransform(ctx);

                self.drawConfiguration =
                    {
                        features: features,
                        context: ctx,
                        pixelWidth: lengthPixel,
                        pixelHeight: Math.min(buffer.width, buffer.height),
                        bpStart: startBP,
                        bpEnd: endBP,
                        bpPerPixel: genomicState.bpp,
                        genomicState: genomicState,
                        viewportContainerX: (genomicState.startBP - startBP) / genomicState.bpp,
                        viewportContainerWidth: Math.max(self.$canvas.width(), self.$canvas.height()),
                        labelTransform: self.labelReflectionTransform
                    };

                self.track.draw(self.drawConfiguration);


            } else {
                ctx.clearRect(0, 0, self.$canvas.width(), self.$canvas.height());
            }

            self.tile = new Tile(chrName, startBP, endBP, genomicState.bpp, buffer);

            return self.tile
        }
    }

    /**
     *
     */
    hic.TrackRenderer.prototype.repaint = async function () {

        const genomicState = this.browser.genomicState(this.axis);
        if (!this.checkZoomIn()) {
            this.tile = undefined;
            this.ctx.clearRect(0, 0, this.$canvas.width(), this.$canvas.height());
        }

        const chrName = genomicState.chromosome.name;
        if (!(this.tile && this.tile.containsRange(chrName, genomicState.startBP, genomicState.endBP, genomicState.bpp))) {
            await this.readyToPaint()
        }
        this.drawTileWithGenomicState(this.tile, genomicState);
    };

    hic.TrackRenderer.prototype.checkZoomIn = function () {

        if (this.track.visibilityWindow && this.track.visibilityWindow > 0) {

            if ((genomicState.bpp * Math.max(this.$canvas.width(), this.$canvas.height()) > this.track.visibilityWindow)) {
                return false;
            }
        }
        return true;
    }

    hic.TrackRenderer.prototype.drawTileWithGenomicState = function (tile, genomicState) {

        if (tile) {

            this.ctx.clearRect(0, 0, this.$canvas.width(), this.$canvas.height());

            this.offsetPixel = Math.round((tile.startBP - genomicState.startBP) / genomicState.bpp);
            if ('x' === this.axis) {
                this.ctx.drawImage(tile.buffer, this.offsetPixel, 0);
            } else {
                this.ctx.drawImage(tile.buffer, 0, this.offsetPixel);
            }

            // this.ctx.save();
            // this.ctx.restore();
        }
    };

    hic.TrackRenderer.prototype.startSpinner = function () {

        this.browser.startSpinner();

        //igv.startSpinnerAtParentElement(this.$viewport[0]);

        //    this.$spinner.show();
        //    this.throbber.start();
        //    console.log("Spinner show");
    };

    hic.TrackRenderer.prototype.stopSpinner = function () {

        this.browser.stopSpinner();

        //igv.stopSpinnerAtParentElement(this.$viewport[0]);

        //    this.throbber.stop();
        //    this.$spinner.hide();
        //    console.log("Spinner stop");
    };

    hic.TrackRenderer.prototype.isLoading = function () {
        return !(undefined === this.loading);
    };

    // ColorScaleWidget version of color picker
    function createColorPicker_ColorScaleWidget_version($parent, closeHandler, colorHandler) {

        const config =
            {
                $parent: $parent,
                width: 456,
                height: undefined,
                closeHandler: closeHandler
            };

        let genericContainer = new igv.genericContainer(config);

        igv.createColorSwatchSelector(genericContainer.$container, colorHandler);

        return genericContainer;
    }


    Tile = function (chr, startBP, endBP, bpp, buffer) {
        this.chr = chr;
        this.startBP = startBP;
        this.endBP = endBP;
        this.bpp = bpp;
        this.buffer = buffer;
    };

    Tile.prototype.containsRange = function (chr, startBP, endBP, bpp) {
        return chr === this.chr && this.bpp === bpp && this.startBP <= startBP && this.endBP >= endBP;
    };

    return hic;

})
(hic || {});

/* Module header based on https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */

//  HEADER
// (function (root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         // AMD. Register as an anonymous module.
//         define([], factory);
//     } else if (typeof module === 'object' && module.exports) {
//         // Node. Does not work with strict CommonJS, but
//         // only CommonJS-like environments that support module.exports,
//         // like Node.
//         module.exports = factory();
//     } else {
//         // Browser globals (root is window)
//         root.igv = factory();
//     }
//}(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return hic;

}));


