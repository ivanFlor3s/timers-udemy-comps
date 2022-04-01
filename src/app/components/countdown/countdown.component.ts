import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() counterStart: number = null

  @Output() onCounterZero = new EventEmitter<void>()
  @Output() onDecrease = new EventEmitter<number>()

  public counter: number = 0

  private timerCountdownRef: any = null

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.startCountDown()
  }

  ngOnInit(): void {
    this.startCountDown()
  }

  startCountDown(){
    if(!!this.counterStart && this.counterStart > 0  ){
      this.clearTimeOut()
      this.counter = this.counterStart
      this.doCountDown()
    }
      
   
  }

  doCountDown(){
    
    this.timerCountdownRef = setTimeout(() => {
      this.counter = this.counter - 1
      this.onDecrease.emit(this.counter)
      this.processCountDown()
    }, 500);
  }

  private clearTimeOut(){
    if(!!this.timerCountdownRef){
      clearTimeout(this.timerCountdownRef)
      this.timerCountdownRef = null
    }
  }

  ngOnDestroy(): void {
    this.clearTimeOut()
  }

  processCountDown(){
    if(this.counter == 0){
      this.onCounterZero.emit(null)
    } else {
      this.doCountDown()
    }
  }

}
