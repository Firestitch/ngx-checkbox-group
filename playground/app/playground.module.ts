import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsCheckboxGroupModule } from '@firestitch/checkboxgroup';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';

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
        FlexLayoutModule,
        FsExampleModule.forRoot(),
        FsExampleModule.forRoot(),
        FsMessageModule.forRoot(),
        FsFormModule
    ],
    declarations: [
        AppComponent,
        HorizontalComponent,
        VerticalComponent
    ],
    providers: []
})
export class PlaygroundModule {
}
