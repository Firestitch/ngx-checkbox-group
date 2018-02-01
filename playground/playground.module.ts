import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FsCheckboxGroupModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppMaterialModule } from './app/material.module';
import { FsComponentExampleComponent } from './app/components/fs-component-example/fs-component-example.component';
import { FsComponentExamplesComponent } from './app/components/fs-component-examples/fs-component-examples.component';
import { VerticalComponent } from './app/components/vertical/vertical.component';
import { HorizontalComponent } from './app/components/horizontal/horizontal.component';
import { FsExampleModule } from '@firestitch/example';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsCheckboxGroupModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FlexLayoutModule,
    FsExampleModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FsComponentExampleComponent,
    FsComponentExamplesComponent,
    HorizontalComponent,
    VerticalComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
