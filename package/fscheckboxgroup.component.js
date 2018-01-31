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
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var common_1 = require("@firestitch/common");
var fscheckboxgroup_value_accessor_1 = require("./fscheckboxgroup.value-accessor");
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
            styleUrls: ['fscheckboxgroup.component.css'],
            providers: [fscheckboxgroup_value_accessor_1.CHECKBOX_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [common_1.FsArray,
            core_1.IterableDiffers])
    ], FsCheckboxGroupComponent);
    return FsCheckboxGroupComponent;
}());
exports.FsCheckboxGroupComponent = FsCheckboxGroupComponent;
//# sourceMappingURL=fscheckboxgroup.component.js.map