
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  template: '',
})

export class BaseCounterDownComponent implements OnInit {
  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;
  
  private countdownTimerRef: any;
  public countdown:number = 0;

  get progressCountDown(){
    return (this.init - this.countdown)/this.init * 100
  }

  constructor() { }

  ngOnInit(): void { }

  startCountdown() {
    if(this.init && this.init >0){
        this.clearTimeout();
        this.countdown = this.init;
        this.doCountdown();
      }
  }

  private doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.countdown = this.countdown - 1;
      this.processCountdown();
    }, 1000);
  }

  private processCountdown() {
    if (this.countdown == 0) {
      this.onComplete.emit();
      console.log('--countdown end--');
    } else {
      this.doCountdown();
    }
  }

  private clearTimeout(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

}

