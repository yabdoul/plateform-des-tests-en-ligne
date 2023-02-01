import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneQuizzComponent } from './done-quizz.component';

describe('DoneQuizzComponent', () => {
  let component: DoneQuizzComponent;
  let fixture: ComponentFixture<DoneQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
