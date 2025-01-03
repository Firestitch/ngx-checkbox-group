import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'vertical',
  templateUrl: './vertical.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
