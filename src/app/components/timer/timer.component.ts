import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  countEndListener: Subscription = null;
  counterListener: Subscription = null;

  progresoCountDown: number;

  get progress() {
    console.log('get progress');
    return ((this.init - this.progresoCountDown) / this.init) * 100;
  }

  constructor(
    public timerService: TimerService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.timerService.restartCountDown(this.init);

    this.countEndListener = this.timerService.countDownEnd$.subscribe((res) => {
      // console.log('Termino la cuenta atras')
      this.onComplete.emit();
    });

    this.counterListener = this.timerService.countDown$.subscribe((value) => {
      this.cdRef.markForCheck()
      this.progresoCountDown = value;
    });
  }

  ngOnDestroy(): void {
    this.timerService.destroy();
    this.countEndListener.unsubscribe();
  }
}
