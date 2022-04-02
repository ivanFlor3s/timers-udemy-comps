import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-down-container',
  templateUrl: './counter-down-container.component.html',
  styleUrls: ['./counter-down-container.component.scss']
})
export class CounterDownContainerComponent implements OnInit {

  counterProgress: number = 0;
  totalCountDown: number = 15;
  constructor() {

  }
  ngOnInit(): void {
  }

  updateProgress(value: number){

    this.counterProgress = (this.totalCountDown - value )/this.totalCountDown * 100
  }

  countDownFinish(){
    console.log('termino la cuenta atras')
  }

}
