import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs: Tab[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTab(tab: Tab){
    if(this.tabs.length == 0){
      tab.isActive = true
    }
    this.tabs.push(tab);
  }

  selectTab(tab: Tab): void {
    this.tabs.forEach( t => {
      t.isActive = t==tab
      return t;
    })
  }



}
