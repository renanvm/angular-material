import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <div class="example-button-row">
    <button mat-button>Basic
      <mat-icon>face</mat-icon>
    </button>
  <mat-checkbox>Check me!</mat-checkbox>
</div>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
