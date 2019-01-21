import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FsCheckboxGroupModule } from '@firestitch/checkboxgroup';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { VerticalComponent } from './components/vertical/vertical.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsCheckboxGroupModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FlexLayoutModule,
    FsExampleModule.forRoot(),
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    FsFormModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    HorizontalComponent,
    VerticalComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
