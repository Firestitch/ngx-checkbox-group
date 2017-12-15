import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsCheckboxGroupComponent } from './fscheckboxgroup.component';
import { MatDialogModule } from '@angular/material';

export * from './fscheckboxgroup.component';

@NgModule({
imports: [
    CommonModule,
    MatDialogModule
],
declarations: [
    FsCheckboxGroupComponent
],
providers: [
    
],
exports: [
  FsCheckboxGroupComponent
]
})
export class FsCheckboxGroupModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsCheckboxGroupModule,
      providers: []
    };
  }
}
