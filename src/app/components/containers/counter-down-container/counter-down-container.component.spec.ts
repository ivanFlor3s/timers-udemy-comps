import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDownContainerComponent } from './counter-down-container.component';

describe('CounterDownContainerComponent', () => {
  let component: CounterDownContainerComponent;
  let fixture: ComponentFixture<CounterDownContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDownContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
