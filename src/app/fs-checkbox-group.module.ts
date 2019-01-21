import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsCommonModule } from '@firestitch/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FsCheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';


@NgModule({
imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FsCommonModule
],
declarations: [
    FsCheckboxGroupComponent
],
providers: [],
exports: [
  FsCheckboxGroupComponent
]
})
export class FsCheckboxGroupModule {}
