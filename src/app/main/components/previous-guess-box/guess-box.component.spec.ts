import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousGuessBoxComponent } from './guess-box.component';

describe('GuessBoxComponent', () => {
  let component: PreviousGuessBoxComponent;
  let fixture: ComponentFixture<PreviousGuessBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousGuessBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousGuessBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
