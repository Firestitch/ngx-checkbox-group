import { ChangeDetectionStrategy, Component } from '@angular/core';

import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { HorizontalComponent } from './components/horizontal/horizontal.component';
import { VerticalComponent } from './components/vertical/vertical.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsExampleModule,
        HorizontalComponent,
        VerticalComponent,
    ],
})
export class AppComponent {
  public config = environment;
}
