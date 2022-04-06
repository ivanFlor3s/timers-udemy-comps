import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss']
})
export class TimersContainerComponent implements OnInit {

  isAddTimerVisible: boolean = false
  time: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  loguearFinish(){
    console.log('Termino el timer')
  }

  toggleAddTimer(){
    this.isAddTimerVisible = !this.isAddTimerVisible
  }

}
