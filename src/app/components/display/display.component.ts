import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() time: number = null;

  minutos: string = '00';
  segundos: string = '00';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.time){
      const mins = Math.trunc(changes.time.currentValue / 60)
      const segs = changes.time.currentValue - mins * 60
      this.minutos = ('0' + mins).slice(-2)
      this.segundos = ('0' + segs).slice(-2)
    }
  }

  ngOnInit(): void {
  }



}
