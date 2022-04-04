import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TimerService {

  public paused: boolean = true;
  private countdownTimerRef: any;
  public countdown: number = 0;
  private init: number = 0

  private countDownEndSubject:Subject<void> = new Subject<void>()
  public countDownEnd$ = this.countDownEndSubject.asObservable()

  get progressCountDown() {
    return ((this.init - this.countdown) / this.init) * 100;
  }

  constructor() {}

  

  restartCountDown(init?: number){
    if(init){
      this.init = init
    }
    if (this.init && this.init > 0) {
      this.paused = true;
      this.clearTimeout();
      this.countdown = this.init;
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
      this.countDownEndSubject.next()
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
