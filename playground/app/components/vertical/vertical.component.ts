import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FsCheckboxGroupComponent } from '../../../../src/app/components/checkbox-group/checkbox-group.component';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatCheckbox } from '@angular/material/checkbox';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'vertical',
    templateUrl: './vertical.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsCheckboxGroupComponent,
        FormsModule,
        FsFormModule,
        MatCheckbox,
        JsonPipe,
    ],
})
export class VerticalComponent implements OnInit {

  public selected: any[] = [];

  public items = [];

  public ngOnInit(): void {
    this.items = [
      { name: 'Item 1', id: 1, disabled: true },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 },
    ];

    this.selected = [this.items[0]];
  }
}
