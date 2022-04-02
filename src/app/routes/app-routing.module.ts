import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterDownContainerComponent } from '../components/containers/counter-down-container/counter-down-container.component';
import { TimersContainerComponent } from '../components/containers/timers-container/timers-container.component';

const routes: Routes = [
  {path: 'counter-down', component: CounterDownContainerComponent},
  {path: 'timers', component: TimersContainerComponent},
  {path:'**', pathMatch:'full', redirectTo: 'counter-down'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
