import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal',
  templateUrl: 'horizontal.component.html'
})
export class HorizontalComponent implements OnInit {

  selected: object[] = [];

  items = [];

  ngOnInit() {

    // Simulate API deplay
    setTimeout(() => {
        this.items = [
        { name: 'Item 1', id: 1 },
        { name: 'Item 2', id: 2 },
        { name: 'Item 3', id: 3 },
        { name: 'Item 4', id: 4 }
      ];
    }, 50);
  }
}
