(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/checkboxgroup", [], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/checkboxgroup"] = factory();
	else
		root["@firestitch/checkboxgroup"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./fscheckboxgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  -webkit-transform: scale(0.75) translateZ(0.001px);\n          transform: scale(0.75) translateZ(0.001px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox {\n  margin-left: 15px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep .checkboxes.vertical mat-checkbox {\n  display: block;\n}\n\n:host ::ng-deep mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-checkbox-group/src/src/fscheckboxgroup.component.scss","/Users/mendor/work/fs-checkbox-group/fscheckboxgroup.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;CCCH;;ADED;EACI,eAAA;EACA,OAAA;EACA,mDAAA;UAAA,2CAAA;EACA,8BAAA;UAAA,sBAAA;CCCH;;ADGwB;EACjB,kBAAA;CCAP;;ADG8B;EACvB,kBAAA;CCAP;;ADND;EASY,eAAA;CCCX;;ADGwB;EACjB,eAAA;CCAP;;ADGG;EACI,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;CCAP","file":"fscheckboxgroup.component.scss","sourcesContent":[":host {\n    position: relative;\n    padding-top: .84375em;\n    min-height: 30px;\n    display: inline-block;\n}\n\n.mat-form-field-label {\n    display: block;\n    top: 0;    \n    transform: scale(.75) translateZ(.001px);\n    transform-origin: 0 0;\n}\n\n:host ::ng-deep {\n    .mat-checkbox-layout .mat-checkbox-label {\n        line-height: 29px;\n    }\n\n    .checkboxes:not(.vertical) mat-checkbox {\n        margin-left: 15px;\n\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n\n    .checkboxes.vertical mat-checkbox {\n        display: block;\n    }\n\n    mat-hint {\n        font-size: 75%;\n        font-weight: 400;\n        line-height: 1.125;\n        display: block;\n        margin-top: 0.54166667em;\n    }\n}\n\n",":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(0.75) translateZ(0.001px);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox {\n  margin-left: 15px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep .checkboxes.vertical mat-checkbox {\n  display: block;\n}\n\n:host ::ng-deep mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n"],"sourceRoot":""}]);

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
var common_1 = __webpack_require__("@firestitch/common");
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
var common_2 = __webpack_require__("@firestitch/common");
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

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = require("@angular/material");

/***/ }),

/***/ "@angular/material/form-field":
/***/ (function(module, exports) {

module.exports = require("@angular/material/form-field");

/***/ }),

/***/ "@firestitch/common":
/***/ (function(module, exports) {

module.exports = require("@firestitch/common");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map