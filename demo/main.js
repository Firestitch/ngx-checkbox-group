webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/fscheckboxgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  -webkit-transform: scale(0.75) translateZ(0.001px);\n          transform: scale(0.75) translateZ(0.001px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox {\n  margin-left: 15px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep .checkboxes.vertical mat-checkbox {\n  display: block;\n}\n\n:host ::ng-deep mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-checkbox-group/src/src/fscheckboxgroup.component.scss","/Users/mendor/work/fs-checkbox-group/fscheckboxgroup.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;CCCH;;ADED;EACI,eAAA;EACA,OAAA;EACA,mDAAA;UAAA,2CAAA;EACA,8BAAA;UAAA,sBAAA;CCCH;;ADGwB;EACjB,kBAAA;CCAP;;ADG8B;EACvB,kBAAA;CCAP;;ADND;EASY,eAAA;CCCX;;ADGwB;EACjB,eAAA;CCAP;;ADGG;EACI,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;CCAP","file":"fscheckboxgroup.component.scss","sourcesContent":[":host {\n    position: relative;\n    padding-top: .84375em;\n    min-height: 30px;\n    display: inline-block;\n}\n\n.mat-form-field-label {\n    display: block;\n    top: 0;    \n    transform: scale(.75) translateZ(.001px);\n    transform-origin: 0 0;\n}\n\n:host ::ng-deep {\n    .mat-checkbox-layout .mat-checkbox-label {\n        line-height: 29px;\n    }\n\n    .checkboxes:not(.vertical) mat-checkbox {\n        margin-left: 15px;\n\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n\n    .checkboxes.vertical mat-checkbox {\n        display: block;\n    }\n\n    mat-hint {\n        font-size: 75%;\n        font-weight: 400;\n        line-height: 1.125;\n        display: block;\n        margin-top: 0.54166667em;\n    }\n}\n\n",":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(0.75) translateZ(0.001px);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox {\n  margin-left: 15px;\n}\n\n:host ::ng-deep .checkboxes:not(.vertical) mat-checkbox:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep .checkboxes.vertical mat-checkbox {\n  display: block;\n}\n\n:host ::ng-deep mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/fscheckboxgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/fscheckboxgroup.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/fscheckboxgroup.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var common_1 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
var fscheckboxgroup_value_accessor_1 = __webpack_require__("../src/fscheckboxgroup.value-accessor.ts");
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
            styles: [__webpack_require__("../src/fscheckboxgroup.component.scss")],
            providers: [fscheckboxgroup_value_accessor_1.CHECKBOX_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [common_1.FsArray,
            core_1.IterableDiffers])
    ], FsCheckboxGroupComponent);
    return FsCheckboxGroupComponent;
}());
exports.FsCheckboxGroupComponent = FsCheckboxGroupComponent;


/***/ }),

/***/ "../src/fscheckboxgroup.value-accessor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fscheckboxgroup_component_1 = __webpack_require__("../src/fscheckboxgroup.component.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
exports.CHECKBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return fscheckboxgroup_component_1.FsCheckboxGroupComponent; }),
    multi: true
};


/***/ }),

/***/ "../src/index.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var fscheckboxgroup_component_1 = __webpack_require__("../src/fscheckboxgroup.component.ts");
var common_2 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
var form_field_1 = __webpack_require__("../node_modules/@angular/material/esm2015/form-field.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
__export(__webpack_require__("../src/fscheckboxgroup.component.ts"));
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

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"example\">\n    <fs-example title=\"Horizontal Checkboxes\" componentName=\"horizontal\">\n        <horizontal></horizontal>\n    </fs-example>  \n</div>  \n\n<div class=\"example\">\n    <fs-example title=\"Vertical Checkboxes\" componentName=\"vertical\">\n        <vertical></vertical>\n    </fs-example>  \n</div>  "

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/horizontal/horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "\n<fs-checkbox-group [(ngModel)]=\"selected\" name=\"selected\" label=\"Checkboxes\">    \n    <mat-checkbox *ngFor=\"let item of items\" [value]=\"item\">{{ item.name }}</mat-checkbox>\n    <mat-hint>Hint hint hint!!!</mat-hint>\n</fs-checkbox-group>\n\n<fieldset>\n    <legend>Selected</legend>\n    {{ selected | json }}\n</fieldset>"

/***/ }),

/***/ "./app/components/horizontal/horizontal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var HorizontalComponent = (function () {
    function HorizontalComponent() {
        this.selected = [];
        this.items = [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
            { name: 'Item 3', id: 3 },
            { name: 'Item 4', id: 4 }
        ];
    }
    HorizontalComponent = __decorate([
        core_1.Component({
            selector: 'horizontal',
            template: __webpack_require__("./app/components/horizontal/horizontal.component.html")
        })
    ], HorizontalComponent);
    return HorizontalComponent;
}());
exports.HorizontalComponent = HorizontalComponent;


/***/ }),

/***/ "./app/components/vertical/vertical.component.html":
/***/ (function(module, exports) {

module.exports = "\n<fs-checkbox-group [(ngModel)]=\"selected\" name=\"selected\" label=\"Checkboxes\" orientation=\"vertical\">\n    <mat-checkbox *ngFor=\"let item of items\" [value]=\"item\">{{ item.name }}</mat-checkbox>\n    <mat-hint>Hint hint hint!!!</mat-hint>\n</fs-checkbox-group>\n\n<fieldset>\n    <legend>Selected</legend>\n    {{ selected | json }}\n</fieldset>"

/***/ }),

/***/ "./app/components/vertical/vertical.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var VerticalComponent = (function () {
    function VerticalComponent() {
        this.selected = [];
        this.items = [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
            { name: 'Item 3', id: 3 },
            { name: 'Item 4', id: 4 }
        ];
    }
    VerticalComponent = __decorate([
        core_1.Component({
            selector: 'vertical',
            template: __webpack_require__("./app/components/vertical/vertical.component.html")
        })
    ], VerticalComponent);
    return VerticalComponent;
}());
exports.VerticalComponent = VerticalComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var flex_layout_1 = __webpack_require__("../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var vertical_component_1 = __webpack_require__("./app/components/vertical/vertical.component.ts");
var horizontal_component_1 = __webpack_require__("./app/components/horizontal/horizontal.component.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsCheckboxGroupModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                example_1.FsExampleModule
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                horizontal_component_1.HorizontalComponent,
                vertical_component_1.VerticalComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map