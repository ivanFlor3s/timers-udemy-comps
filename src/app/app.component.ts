import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  counterProgress: number = 0
  totalCountDown : number = 15

  constructor(){

  }

  procesarAvance(value: number){
    this.counterProgress = (this.totalCountDown - value )/this.totalCountDown * 100
  }

  informarFin(){
    console.log('Termino')
  }


}
