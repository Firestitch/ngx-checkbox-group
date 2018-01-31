"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fscheckboxgroup_component_1 = require("./fscheckboxgroup.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.CHECKBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return fscheckboxgroup_component_1.FsCheckboxGroupComponent; }),
    multi: true
};
//# sourceMappingURL=fscheckboxgroup.value-accessor.js.map