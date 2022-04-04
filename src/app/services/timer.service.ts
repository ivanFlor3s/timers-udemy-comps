import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class TimerService {

  public paused: boolean = true;
  private countdownTimerRef: any;
  private init: number = 0

  private countDownEndSource:Subject<void> = new Subject<void>()
  private countDownSource: BehaviorSubject<number> = new BehaviorSubject(0)

  public countDownEnd$ = this.countDownEndSource.asObservable()
  public countDown$ = this.countDownSource.asObservable()

  get progressCountDown() {
    return ((this.init - this.countDownSource.value) / this.init) * 100;
  }

  constructor() {}

  

  restartCountDown(init?: number){
    if(init){
      this.init = init
    }
    if (this.init && this.init > 0) {
      this.paused = true;
      this.clearTimeout();
      this.countDownSource.next(this.init)
    }
  }

  private doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.countDownSource.next(this.countDownSource.getValue() - 1) 
      this.processCountdown();
    }, 1000);
  }

  private processCountdown() {
    if (this.countDownSource.getValue()  <= 0) {
      this.countDownEndSource.next()
    } else {
      this.doCountdown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  toggleActionButton() {
    this.paused = !this.paused;
    if(!this.paused){
      this.doCountdown()
    } else {
      this.clearTimeout()
    }
  }

  destroy(){
    this.clearTimeout()
  }
}
