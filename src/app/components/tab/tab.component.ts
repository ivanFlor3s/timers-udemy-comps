import { Component, Input, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/tab.interface';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Input() title: string;
  public isActive: boolean = false;

  constructor(public tabComp: TabsComponent) {
    this.tabComp.addTab(this)
   }

  ngOnInit(): void {
  }

}
