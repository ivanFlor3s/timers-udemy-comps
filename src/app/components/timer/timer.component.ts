import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { BaseCounterDownComponent } from '../../base/counter-down.component';
import { TimerService } from '../../services/timer.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers:[TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {
  
  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  countEndListener: Subscription = null
  
  constructor(public timerService: TimerService){
  }

  ngOnInit(): void {
    this.timerService.restartCountDown(this.init)

    this.countEndListener = this.timerService.countDownEnd$.subscribe(res => {
      console.log('Termino la cuenta atras')
    })

  }

  ngOnDestroy(): void {
    this.timerService.destroy()
    this.countEndListener.unsubscribe()
  }
}
