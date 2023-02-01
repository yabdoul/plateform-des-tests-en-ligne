import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiochoiceComponent } from './radiochoice.component';

describe('RadiochoiceComponent', () => {
  let component: RadiochoiceComponent;
  let fixture: ComponentFixture<RadiochoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiochoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiochoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
