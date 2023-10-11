import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}} </h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetTo(10)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(amount:number):void{
    this.counter += amount;
  }

  resetTo(amount:number):void{
    this.counter = amount;
  }

}
