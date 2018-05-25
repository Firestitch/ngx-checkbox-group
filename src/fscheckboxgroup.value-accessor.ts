import { FsCheckboxGroupComponent } from './components/checkboxgroup/checkboxgroup.component';
import { Provider, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FsCheckboxGroupComponent),
  multi: true
};
