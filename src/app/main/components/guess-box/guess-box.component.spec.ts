import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessBoxComponent } from './guess-box.component';

describe('GuessBoxComponent', () => {
  let component: GuessBoxComponent;
  let fixture: ComponentFixture<GuessBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
