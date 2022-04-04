import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { BaseCounterDownComponent } from '../../base/counter-down.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  public paused: boolean = true;

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  private countdownTimerRef: any;
  public countdown: number = 0;

  get progressCountDown() {
    return ((this.init - this.countdown) / this.init) * 100;
  }

  constructor() {}

  ngOnInit(): void {
    if (this.init && this.init > 0) {
      this.countdown = this.init;
    }
  }

  restartCountDown(){
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
      this.onComplete.emit();
      console.log('--countdown end--');
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
}
