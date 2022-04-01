import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  @Input() counterStart: number = null

  @Output() onCounterZero = new EventEmitter<void>()
  @Output() onDecrease = new EventEmitter<number>()

  public counter: number = 0

  constructor() { }

  ngOnInit(): void {
    this.startCountDown()
  }

  startCountDown(){
    if(!!this.counterStart && this.counterStart > 0  ){
      this.counter = this.counterStart
      this.doCountDown()
    }
      
   
  }

  doCountDown(){
    this.onDecrease.emit(this.counter)
    setTimeout(() => {
      this.counter = this.counter - 1
      this.processCountDown()
    }, 1000);
  }

  processCountDown(){
    if(this.counter == 0){
      this.onCounterZero.emit(null)
    } else {
      this.doCountDown()
    }
  }

}
