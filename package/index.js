(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/material"), require("@angular/common"), require("@angular/material/form-field"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/checkboxgroup", ["@angular/material", "@angular/common", "@angular/material/form-field", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/checkboxgroup"] = factory(require("@angular/material"), require("@angular/common"), require("@angular/material/form-field"), require("@angular/core"), require("@angular/forms"));
	else
		root["@firestitch/checkboxgroup"] = factory(root["@angular/material"], root["@angular/common"], root["@angular/material/form-field"], root["@angular/core"], root["@angular/forms"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_material__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_material_form_field__, __WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_forms__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@firestitch/common/common.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("@angular/core"), __webpack_require__("@angular/common")) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.common = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsArray = (function () {
    function FsArray() {
    }
    /**
     * @param {?} array
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    FsArray.prototype.nameValue = /**
     * @param {?} array
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (array, name, value) {
        var /** @type {?} */ list = [];
        if (name || value) {
            var /** @type {?} */ nameFn_1 = typeof name === 'function' ? name : function (item) { return item[name]; };
            var /** @type {?} */ valueFn_1 = typeof value === 'function' ? value : function (item) { return item[value]; };
            array.forEach(function (item) {
                list.push({ name: nameFn_1(item), value: valueFn_1(item) });
            });
        }
        else {
            array.forEach(function (name, value) {
                list.push({ name: name, value: value });
            });
        }
        return list;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.remove = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var /** @type {?} */ idx = this.indexOf(array, query);
        if (idx >= 0) {
            return array.splice(idx, 1);
        }
        return idx;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.indexOf = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var /** @type {?} */ queryObj_1 = query;
            query = function (item) {
                return _this.compare(queryObj_1, item);
            };
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ len = array.length; i < len; i++) {
            if (query(array[i])) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @param {?} query
     * @param {?} item
     * @return {?}
     */
    FsArray.prototype.compare = /**
     * @param {?} query
     * @param {?} item
     * @return {?}
     */
    function (query, item) {
        var /** @type {?} */ value = true;
        for (var /** @type {?} */ key in query) {
            value = value && item[key] == query[key];
        }
        return value;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.filter = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var /** @type {?} */ queryObj_2 = query;
            query = function (item) {
                return _this.compare(queryObj_2, item);
            };
        }
        var /** @type {?} */ isarray = Array.isArray(array);
        var /** @type {?} */ list = isarray ? [] : {};
        if (isarray)
            array.forEach(function (item, idx) {
                if (query(item)) {
                    list.push(item);
                }
            });
        else
            Object.keys(array).forEach(function (key) {
                if (query(array[key])) {
                    list[key] = array[key];
                }
            });
        return list;
    };
    /**
     * @param {?} array
     * @param {?} property
     * @return {?}
     */
    FsArray.prototype.index = /**
     * @param {?} array
     * @param {?} property
     * @return {?}
     */
    function (array, property) {
        var /** @type {?} */ list = {};
        array.forEach(function (item, idx) {
            list[item[property]] = item;
        });
        return list;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @param {?=} reverse
     * @return {?}
     */
    FsArray.prototype.sort = /**
     * @param {?} array
     * @param {?} query
     * @param {?=} reverse
     * @return {?}
     */
    function (array, query, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (typeof query !== 'function') {
            var /** @type {?} */ queryStr_1 = query;
            query = function (a, b) {
                if (reverse) {
                    if (a[queryStr_1] < b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] > b[queryStr_1]) {
                        return -1;
                    }
                }
                else {
                    if (a[queryStr_1] > b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] < b[queryStr_1]) {
                        return -1;
                    }
                }
                return 0;
            };
        }
        array.sort(query);
        return array;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.rsort = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        return this.sort(array, query, true);
    };
    /**
     * @param {?} array
     * @param {?} property
     * @param {?=} index
     * @return {?}
     */
    FsArray.prototype.list = /**
     * @param {?} array
     * @param {?} property
     * @param {?=} index
     * @return {?}
     */
    function (array, property, index) {
        if (index === void 0) { index = null; }
        var /** @type {?} */ list = index ? {} : [];
        array.forEach(function (item, idx) {
            if (index) {
                list[item[index]] = item[property];
            }
            else {
                list.push(item[property]);
            }
        });
        return list;
    };
    /**
     * @param {?} objects
     * @param {?} parent_property
     * @param {?=} id_property
     * @param {?=} depth_property
     * @return {?}
     */
    FsArray.prototype.applyDepth = /**
     * @param {?} objects
     * @param {?} parent_property
     * @param {?=} id_property
     * @param {?=} depth_property
     * @return {?}
     */
    function (objects, parent_property, id_property, depth_property) {
        if (id_property === void 0) { id_property = 'id'; }
        if (depth_property === void 0) { depth_property = 'depth'; }
        var /** @type {?} */ keyed = {};
        objects.forEach(function (object) {
            if (!object[parent_property])
                object[depth_property] = 0;
            keyed[object[id_property]] = object;
        });
        Object.keys(keyed).forEach(function (key) {
            Object.keys(keyed).forEach(function (key) {
                if (!keyed[key][depth_property]) {
                    if (keyed[key][parent_property]) {
                        keyed[key][depth_property] = keyed[keyed[key][parent_property]][depth_property] + 1;
                    }
                }
            });
        });
        return keyed;
    };
    /**
     * @param {?} values
     * @param {?} array
     * @return {?}
     */
    FsArray.prototype.inArray = /**
     * @param {?} values
     * @param {?} array
     * @return {?}
     */
    function (values, array) {
        if (!Array.isArray(values)) {
            values = [values];
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ len = values.length; i < len; i++) {
            if (array.indexOf(values[i]) >= 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    FsArray.prototype.keyExists = /**
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    function (array, key) {
        return array.hasOwnProperty(key);
    };
    /**
     * @param {?} array
     * @return {?}
     */
    FsArray.prototype.length = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return array.length;
    };
    /**
     * @param {?} unordered
     * @return {?}
     */
    FsArray.prototype.ksort = /**
     * @param {?} unordered
     * @return {?}
     */
    function (unordered) {
        Object.keys(unordered).sort().forEach(function (key) {
            var /** @type {?} */ value = unordered[key];
            delete unordered[key];
            unordered[key] = value;
        });
    };
    FsArray.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsArray.ctorParameters = function () { return []; };
    return FsArray;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsMath = (function () {
    function FsMath() {
    }
    /**
     * @param {?} number
     * @param {?} precision
     * @return {?}
     */
    FsMath.prototype.round = /**
     * @param {?} number
     * @param {?} precision
     * @return {?}
     */
    function (number, precision) {
        precision = precision || 0;
        var /** @type {?} */ factor = Math.pow(10, precision);
        var /** @type {?} */ tempNumber = number * factor;
        var /** @type {?} */ roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
    FsMath.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsMath.ctorParameters = function () { return []; };
    return FsMath;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var KEY_CANCEL = 3;
var KEY_HELP = 6;
var KEY_BACKSPACE = 8;
var KEY_TAB = 9;
var KEY_CLEAR = 12;
var KEY_RETURN = 13;
var KEY_ENTER = 14;
var KEY_SHIFT = 16;
var KEY_CONTROL = 17;
var KEY_ALT = 18;
var KEY_PAUSE = 19;
var KEY_CAPS_LOCK = 20;
var KEY_ESCAPE = 27;
var KEY_SPACE = 32;
var KEY_PAGE_UP = 33;
var KEY_PAGE_DOWN = 34;
var KEY_END = 35;
var KEY_HOME = 36;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_PRINTSCREEN = 44;
var KEY_INSERT = 45;
var KEY_DELETE = 46;
var KEY_0 = 48;
var KEY_1 = 49;
var KEY_2 = 50;
var KEY_3 = 51;
var KEY_4 = 52;
var KEY_5 = 53;
var KEY_6 = 54;
var KEY_7 = 55;
var KEY_8 = 56;
var KEY_9 = 57;
var KEY_SEMICOLON = 59;
var KEY_EQUALS = 61;
var FsUtil = (function () {
    function FsUtil() {
        this.intervals = {};
    }
    /**
     * @param {?=} pattern
     * @return {?}
     */
    FsUtil.prototype.guid = /**
     * @param {?=} pattern
     * @return {?}
     */
    function (pattern) {
        pattern = pattern || 'xxxxxx';
        return pattern.replace(/[xy]/g, function (c) {
            var /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    /**
     * @return {?}
     */
    FsUtil.prototype.uuid = /**
     * @return {?}
     */
    function () {
        return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    };
    /**
     * @param {?} promise
     * @param {?=} defaults
     * @return {?}
     */
    FsUtil.prototype.resolve = /**
     * @param {?} promise
     * @param {?=} defaults
     * @return {?}
     */
    function (promise, defaults) {
        if (defaults === void 0) { defaults = []; }
        var /** @type {?} */ result = defaults;
        return new Promise(function (resolve) {
            promise.then(function (data) {
                Object.keys(data).forEach(function (key) { return result[key] = data[key]; });
                resolve(result);
            });
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.int = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.float = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @param {?} string
     * @return {?}
     */
    FsUtil.prototype.string = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        if (string === null || string === undefined) {
            string = '';
        }
        return (string).toString();
    };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FsUtil.prototype.isEmpty = /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        options = options || {};
        return value === undefined ||
            value === null ||
            value === false ||
            value === '' ||
            !this.string(value).length ||
            (this.isObject(value) &&
                (value.constructor.name === 'Object' && !Object.keys(value).length)) ||
            (!options.zero && (value === 0 || value === '0'));
    };
    /**
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    FsUtil.prototype.isInt = /**
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    function (value, type) {
        var /** @type {?} */ int = !!this.string(value).match(/^\d+$/);
        if (!int) {
            return false;
        }
        if (type) {
            return Number.isInteger(value);
        }
        return true;
    };
    /**
     * @param {?} object
     * @param {?} func
     * @return {?}
     */
    FsUtil.prototype.each = /**
     * @param {?} object
     * @param {?} func
     * @return {?}
     */
    function (object, func) {
        if (!this.isArray(object) && !this.isObject(object)) {
            return;
        }
        Object.keys(object).forEach(function (key) {
            func(object[key], key);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && typeof value === 'object' && !this.isArray(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isArray = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof Array;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isNumeric = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    };
    /**
     * @param {?} value
     * @param {?} cls
     * @return {?}
     */
    FsUtil.prototype.isClass = /**
     * @param {?} value
     * @param {?} cls
     * @return {?}
     */
    function (value, cls) {
        if (this.isObject(value)) {
            if (this.isString(cls)) {
                if (value.constructor) {
                    if (value.constructor.name === cls) {
                        return true;
                    }
                }
            }
            else {
                if (value instanceof cls) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === true || value === false;
    };
    /**
     * @param {?} object
     * @param {?} key
     * @param {?} def
     * @return {?}
     */
    FsUtil.prototype.value = /**
     * @param {?} object
     * @param {?} key
     * @param {?} def
     * @return {?}
     */
    function (object, key, def) {
        if (this.isObject(object) || this.isArray(object)) {
            if (object.hasOwnProperty(key)) {
                return object[key];
            }
        }
        return def;
    };
    /**
     * @param {?} fn
     * @param {?} delay
     * @param {?} name
     * @return {?}
     */
    FsUtil.prototype.interval = /**
     * @param {?} fn
     * @param {?} delay
     * @param {?} name
     * @return {?}
     */
    function (fn, delay, name) {
        var /** @type {?} */ instance = setInterval(fn, delay);
        if (name) {
            this.intervals[name] = instance;
        }
        return function () {
            window.clearInterval(instance);
        };
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FsUtil.prototype.clearInterval = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ instance = this.intervals[name];
        if (instance) {
            window.clearInterval(instance);
        }
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    FsUtil.prototype.throttle = /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        var /** @type {?} */ waiting = false; // Initially, we're not waiting
        return function () {
            // We return a throttled function
            if (!waiting) {
                // If we're not waiting
                func.apply(null, arguments); // Execute users function
                waiting = true; // Prevent future invocations
                setTimeout(function () {
                    // After a period of time
                    waiting = false; // And allow future invocations
                }, wait);
            }
        };
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    FsUtil.prototype.debounce = /**
     * @param {?} func
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    function (func, wait, immediate) {
        var /** @type {?} */ timeout;
        return function () {
            var /** @type {?} */ context = this, /** @type {?} */ args = arguments;
            var /** @type {?} */ later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var /** @type {?} */ callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FsUtil.prototype.length = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (this.isObject(object)) {
            return Object.keys(object).length;
        }
        if (this.isArray(object)) {
            return object.length;
        }
        return 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.boolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.string(value).toLowerCase() !== 'false' && !!value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.stringify = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return JSON.stringify(value);
    };
    FsUtil.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsUtil.ctorParameters = function () { return []; };
    return FsUtil;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsValidate = (function () {
    function FsValidate(fsUtil) {
        this.fsUtil = fsUtil;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FsValidate.prototype.phone = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
        return valid || !String(value).length;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsValidate.prototype.email = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return !!this.fsUtil.string(value).match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    FsValidate.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsValidate.ctorParameters = function () { return [
        { type: FsUtil, },
    ]; };
    return FsValidate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsUtilStringifyPipe = (function () {
    function FsUtilStringifyPipe(FsUtil$$1) {
        this.FsUtil = FsUtil$$1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtilStringifyPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.FsUtil.stringify(value);
    };
    FsUtilStringifyPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'fsUtilStringify'
                },] },
    ];
    /** @nocollapse */
    FsUtilStringifyPipe.ctorParameters = function () { return [
        { type: FsUtil, },
    ]; };
    return FsUtilStringifyPipe;
}());
var FsUtilGuidPipe = (function () {
    function FsUtilGuidPipe(FsUtil$$1) {
        this.FsUtil = FsUtil$$1;
    }
    /**
     * @return {?}
     */
    FsUtilGuidPipe.prototype.transform = /**
     * @return {?}
     */
    function () {
        return this.FsUtil.guid();
    };
    FsUtilGuidPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'fsUtilGuid'
                },] },
    ];
    /** @nocollapse */
    FsUtilGuidPipe.ctorParameters = function () { return [
        { type: FsUtil, },
    ]; };
    return FsUtilGuidPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsCommonModule = (function () {
    function FsCommonModule() {
    }
    /**
     * @return {?}
     */
    FsCommonModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FsCommonModule,
            providers: [
                FsArray,
                FsUtil,
                FsMath,
                FsValidate
            ]
        };
    };
    FsCommonModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        FsUtilStringifyPipe,
                        FsUtilGuidPipe
                    ],
                    providers: [
                        FsArray,
                        FsUtil,
                        FsMath,
                        FsValidate
                    ],
                    exports: [
                        FsUtilStringifyPipe,
                        FsUtilGuidPipe
                    ]
                },] },
    ];
    /** @nocollapse */
    FsCommonModule.ctorParameters = function () { return []; };
    return FsCommonModule;
}());

exports.FsCommonModule = FsCommonModule;
exports.FsUtilStringifyPipe = FsUtilStringifyPipe;
exports.FsUtilGuidPipe = FsUtilGuidPipe;
exports.KEY_CANCEL = KEY_CANCEL;
exports.KEY_HELP = KEY_HELP;
exports.KEY_BACKSPACE = KEY_BACKSPACE;
exports.KEY_TAB = KEY_TAB;
exports.KEY_CLEAR = KEY_CLEAR;
exports.KEY_RETURN = KEY_RETURN;
exports.KEY_ENTER = KEY_ENTER;
exports.KEY_SHIFT = KEY_SHIFT;
exports.KEY_CONTROL = KEY_CONTROL;
exports.KEY_ALT = KEY_ALT;
exports.KEY_PAUSE = KEY_PAUSE;
exports.KEY_CAPS_LOCK = KEY_CAPS_LOCK;
exports.KEY_ESCAPE = KEY_ESCAPE;
exports.KEY_SPACE = KEY_SPACE;
exports.KEY_PAGE_UP = KEY_PAGE_UP;
exports.KEY_PAGE_DOWN = KEY_PAGE_DOWN;
exports.KEY_END = KEY_END;
exports.KEY_HOME = KEY_HOME;
exports.KEY_LEFT = KEY_LEFT;
exports.KEY_UP = KEY_UP;
exports.KEY_RIGHT = KEY_RIGHT;
exports.KEY_DOWN = KEY_DOWN;
exports.KEY_PRINTSCREEN = KEY_PRINTSCREEN;
exports.KEY_INSERT = KEY_INSERT;
exports.KEY_DELETE = KEY_DELETE;
exports.KEY_0 = KEY_0;
exports.KEY_1 = KEY_1;
exports.KEY_2 = KEY_2;
exports.KEY_3 = KEY_3;
exports.KEY_4 = KEY_4;
exports.KEY_5 = KEY_5;
exports.KEY_6 = KEY_6;
exports.KEY_7 = KEY_7;
exports.KEY_8 = KEY_8;
exports.KEY_9 = KEY_9;
exports.KEY_SEMICOLON = KEY_SEMICOLON;
exports.KEY_EQUALS = KEY_EQUALS;
exports.FsUtil = FsUtil;
exports.FsArray = FsArray;
exports.FsMath = FsMath;
exports.FsValidate = FsValidate;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./fscheckboxgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  -webkit-transform: scale(0.75) translateZ(0.001px);\n          transform: scale(0.75) translateZ(0.001px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox {\n  margin-left: 15px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep .checkboxes.vertical mat-checkbox {\n  display: block;\n}\n\n", "", {"version":3,"sources":["C:/Projects/fs-checkboxgroup/src/C:/Projects/fs-checkboxgroup/src/src/fscheckboxgroup.component.scss","C:/Projects/fs-checkboxgroup/src/C:/Projects/fs-checkboxgroup/fscheckboxgroup.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;CCCH;;ADED;EACI,eAAA;EACA,OAAA;EACA,mDAAA;UAAA,2CAAA;EACA,8BAAA;UAAA,sBAAA;CCCH;;ADED;EAEQ,kBAAA;CCAP;;ADFD;EAMQ,kBAAA;CCAP;;ADD8B;EAInB,eAAA;CCCX;;ADVD;EAcQ,eAAA;CCAP","file":"fscheckboxgroup.component.scss","sourcesContent":[":host {\r\n    position: relative;\r\n    padding-top: .84375em;\r\n    min-height: 30px;\r\n    display: inline-block;\r\n}\r\n\r\n.mat-form-field-label {\r\n    display: block;\r\n    top: 0;    \r\n    transform: scale(.75) translateZ(.001px);\r\n    transform-origin: 0 0;\r\n}\r\n\r\n:host ::ng-deep {\r\n    .mat-checkbox-layout .mat-checkbox-label {\r\n        line-height: 29px;\r\n    }\r\n\r\n    .checkboxes:not(.vertical) mat-checkbox {\r\n        margin-left: 15px;\r\n\r\n        &:first-child {\r\n            margin-left: 0;\r\n        }\r\n    }\r\n\r\n    .checkboxes.vertical mat-checkbox {\r\n        display: block;\r\n    }\r\n}\r\n\r\n",":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(0.75) translateZ(0.001px);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox {\n  margin-left: 15px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep .checkboxes.vertical mat-checkbox {\n  display: block;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./fscheckboxgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./fscheckboxgroup.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./fscheckboxgroup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var material_1 = __webpack_require__("@angular/material");
var common_1 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
var fscheckboxgroup_value_accessor_1 = __webpack_require__("./fscheckboxgroup.value-accessor.ts");
var FsCheckboxGroupComponent = (function () {
    function FsCheckboxGroupComponent(FsArray, _iterableDiffers) {
        this.FsArray = FsArray;
        this._iterableDiffers = _iterableDiffers;
        this.change = new core_1.EventEmitter();
        this.orientation = 'horizontal';
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    ;
    FsCheckboxGroupComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.iterableDiffer.diff(this.innerValue);
        if (changes && this.innerValue) {
            this.contentChildren.toArray().forEach(function (input) {
                var index = _this.FsArray.indexOf(_this.innerValue, input.value);
                if (index !== -1) {
                    input.checked = true;
                }
                else {
                    input.checked = false;
                }
            });
            this.change.emit(this.innerValue);
        }
    };
    FsCheckboxGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.contentChildren.toArray().forEach(function (input, index) {
            input.change
                .subscribe(function (value) {
                if (value.checked) {
                    _this.innerValue.push(value.source.value);
                }
                else {
                    var index_1 = _this.FsArray.indexOf(_this.innerValue, input.value);
                    if (index_1 !== -1) {
                        _this.innerValue.splice(index_1, 1);
                    }
                }
            });
        });
    };
    FsCheckboxGroupComponent.prototype.isEquals = function (obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };
    FsCheckboxGroupComponent.prototype.writeValue = function (value) {
        if (!this.isEquals(value, this.innerValue)) {
            this.innerValue = value;
        }
    };
    FsCheckboxGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FsCheckboxGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FsCheckboxGroupComponent.prototype.ngOnDestroy = function () {
        this.contentChildren.toArray().forEach(function (input) {
            input.change.unsubscribe();
        });
        this.change.unsubscribe();
    };
    __decorate([
        core_1.Output('change'),
        __metadata("design:type", core_1.EventEmitter)
    ], FsCheckboxGroupComponent.prototype, "change", void 0);
    __decorate([
        core_1.Input('orientation'),
        __metadata("design:type", String)
    ], FsCheckboxGroupComponent.prototype, "orientation", void 0);
    __decorate([
        core_1.Input('label'),
        __metadata("design:type", Object)
    ], FsCheckboxGroupComponent.prototype, "label", void 0);
    __decorate([
        core_1.ContentChildren(material_1.MatCheckbox),
        __metadata("design:type", core_1.QueryList)
    ], FsCheckboxGroupComponent.prototype, "contentChildren", void 0);
    FsCheckboxGroupComponent = __decorate([
        core_1.Component({
            selector: 'fs-checkbox-group',
            template: "<div class=\"mat-form-field-label\">{{label}}</div>\n              <span class=\"checkboxes\" [ngClass]=\"{ vertical: orientation=='vertical' }\">\n                  <ng-content></ng-content>\n              </span>",
            styles: [__webpack_require__("./fscheckboxgroup.component.scss")],
            providers: [fscheckboxgroup_value_accessor_1.CHECKBOX_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [common_1.FsArray,
            core_1.IterableDiffers])
    ], FsCheckboxGroupComponent);
    return FsCheckboxGroupComponent;
}());
exports.FsCheckboxGroupComponent = FsCheckboxGroupComponent;


/***/ }),

/***/ "./fscheckboxgroup.value-accessor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fscheckboxgroup_component_1 = __webpack_require__("./fscheckboxgroup.component.ts");
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
exports.CHECKBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return fscheckboxgroup_component_1.FsCheckboxGroupComponent; }),
    multi: true
};


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var fscheckboxgroup_component_1 = __webpack_require__("./fscheckboxgroup.component.ts");
var common_2 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
var form_field_1 = __webpack_require__("@angular/material/form-field");
var material_1 = __webpack_require__("@angular/material");
__export(__webpack_require__("./fscheckboxgroup.component.ts"));
var FsCheckboxGroupModule = (function () {
    function FsCheckboxGroupModule() {
    }
    FsCheckboxGroupModule_1 = FsCheckboxGroupModule;
    FsCheckboxGroupModule.forRoot = function () {
        return {
            ngModule: FsCheckboxGroupModule_1,
            providers: []
        };
    };
    FsCheckboxGroupModule = FsCheckboxGroupModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                form_field_1.MatFormFieldModule,
                material_1.MatInputModule,
                common_2.FsCommonModule
            ],
            declarations: [
                fscheckboxgroup_component_1.FsCheckboxGroupComponent
            ],
            providers: [],
            exports: [
                fscheckboxgroup_component_1.FsCheckboxGroupComponent
            ]
        })
    ], FsCheckboxGroupModule);
    return FsCheckboxGroupModule;
    var FsCheckboxGroupModule_1;
}());
exports.FsCheckboxGroupModule = FsCheckboxGroupModule;


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_forms__;

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material__;

/***/ }),

/***/ "@angular/material/form-field":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material_form_field__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map