import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

import { FsLabelModule } from '@firestitch/label';

import { FsCheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';


@NgModule({
  imports: [
    CommonModule,

    MatInputModule,

    FsLabelModule,
  ],
  declarations: [
    FsCheckboxGroupComponent,
  ],
  exports: [
    FsCheckboxGroupComponent,
  ],
})
export class FsCheckboxGroupModule {}
