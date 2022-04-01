import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  @Input() counterStart: number = null

  public counter: number = 0

  constructor() { }

  ngOnInit(): void {
    this.startCountDown()
  }

  startCountDown(){
    if(!!this.counterStart && this.counterStart > 0  ){
      this.counter = this.counterStart
      this.doCountDown()
    }
      
   
  }

  doCountDown(){
    setTimeout(() => {
      this.counter = this.counter - 1
      this.processCountDown()
    }, 1000);
  }

  processCountDown(){
    if(this.counter == 0){
      console.log('termine')

    } else {
      this.doCountDown()
    }
  }

}
