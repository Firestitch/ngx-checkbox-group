import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { FsCheckboxGroupModule }  from '@firestitch/checkboxgroup';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [ 'styles.css' ],
  encapsulation: ViewEncapsulation.None
})
class AppComponent {

  selectedItemsHorizontal: object[] = [];
  
  items = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 }
    ];
  constructor() {}
  ngOnInit() {  
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsCheckboxGroupModule, BrowserAnimationsModule, FormsModule, MatCheckboxModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
