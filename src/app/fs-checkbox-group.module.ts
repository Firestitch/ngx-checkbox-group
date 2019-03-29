import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsCommonModule } from '@firestitch/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FsLabelModule } from '@firestitch/label';
import { FsCheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';


@NgModule({
imports: [
    CommonModule,
    MatInputModule,
    FsCommonModule,
    FsLabelModule

],
declarations: [
    FsCheckboxGroupComponent
],
exports: [
  FsCheckboxGroupComponent
]
})
export class FsCheckboxGroupModule {}
