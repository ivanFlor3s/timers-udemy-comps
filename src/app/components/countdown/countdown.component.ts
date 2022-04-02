import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input() init: number=null;
  counter: number = 0;

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onFinish = new EventEmitter<void>();

  private timeOutRef: any = null

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.startCountDown()
  }

  ngOnDestroy(): void {
    this.clearTimeOut()
  }

  ngOnInit(): void {
    this.startCountDown()
  }

  startCountDown(){
    if(!!this.init && this.init > 0){
      this.clearTimeOut()
      this.counter = this.init
      this.doCountDown()
    }
  }
  doCountDown() {
    
    this.timeOutRef = setTimeout(() => {
      this.counter -= 1
      this.onDecrease.emit(this.counter)
      this.processCounter()
    }, 1000);
  }

  clearTimeOut(){
    clearTimeout(this.timeOutRef)
    this.timeOutRef = null
  }

  processCounter() {
    if(this.counter == 0){
      this.onFinish.emit()
    }else {
      this.doCountDown()
    }
  }

}
