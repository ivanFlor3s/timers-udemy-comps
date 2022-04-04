import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { BaseCounterDownComponent } from '../../base/counter-down.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent extends BaseCounterDownComponent implements OnInit {

  public paused: boolean = true

  constructor() {
    super()
   }

  restartCountDown(){
    
  }

  toggleActionButton(){
    this.paused = !this.paused
  }

  

  ngOnInit(): void {
    
  }

}
