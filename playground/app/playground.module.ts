import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FsCheckboxGroupModule } from '@firestitch/checkboxgroup';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';
import { VerticalComponent } from './components/vertical/vertical.component';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsCheckboxGroupModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot([]),
    FsFormModule,
  ],
  declarations: [
    AppComponent,
    HorizontalComponent,
    VerticalComponent,
  ],
})
export class PlaygroundModule {
}
