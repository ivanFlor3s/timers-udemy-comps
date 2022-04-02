import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CounterDownContainerComponent } from './components/containers/counter-down-container/counter-down-container.component';
import { TimersContainerComponent } from './components/containers/timers-container/timers-container.component';
import { DisplayComponent } from './components/display/display.component';
import { AlertViewComponent } from './components/alert-view/alert-view.component';
import { SimpleAlertViewComponent } from './components/simple-alert-view/simple-alert-view.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    CountdownComponent,
    CounterDownContainerComponent,
    TimersContainerComponent,
    DisplayComponent,
    AlertViewComponent,
    SimpleAlertViewComponent,
    TabComponent,
    TabsComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
