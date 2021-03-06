import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal',
  templateUrl: 'horizontal.component.html'
})
export class HorizontalComponent implements OnInit {

  public selected: any[] = [
    { name: 'Item 1', id: 1 },
  ];
  public disabled = false;
  public items = [];

  ngOnInit() {

    setTimeout(() => {
        this.items = [
        { name: 'Item 1', id: 1 },
        { name: 'Item 2', id: 2 },
        { name: 'Item 3', id: 3 },
        { name: 'Item 4', id: 4 }
      ];
    }, 50);
  }

  public compareWith(o1, o2) {
    return o1 && o2 && o1.id === o2.id;
  }
}
