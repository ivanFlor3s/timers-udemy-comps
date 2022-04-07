import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss']
})
export class TimersContainerComponent implements OnInit {

  isAddTimerVisible: boolean = false
  isFinishAlertVisible: boolean = false

  time: number = 0
  timers: number[] = [3,60,120]
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTimer(){
    this.isAddTimerVisible = !this.isAddTimerVisible
  }

  showAlertFinish(){
    this.isFinishAlertVisible = true
    setTimeout(() => {
    this.isFinishAlertVisible = false
      
    }, 3000);
  }

  addTimer(){
    this.timers.push(this.time)
    this.toggleAddTimer()
  }

}
