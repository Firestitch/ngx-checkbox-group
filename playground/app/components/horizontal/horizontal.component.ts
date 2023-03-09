import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'horizontal',
  templateUrl: 'horizontal.component.html'
})
export class HorizontalComponent implements OnInit {

  public selected: any[] = [];

  public items = [];

  public ngOnInit() {
    setTimeout(() => {
      this.items = [
        { name: 'Item 1', id: 1, disabled: true },
        { name: 'Item 2', id: 2 },
        { name: 'Item 3', id: 3 },
        { name: 'Item 4', id: 4 }
      ];

      this.selected = [this.items[0]];
    }, 50);
  }

  public compareWith(o1, o2) {
    return o1 && o2 && o1.id === o2.id;
  }
}
