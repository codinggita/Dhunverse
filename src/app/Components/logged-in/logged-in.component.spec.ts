import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInComponent } from './logged-in.component';

describe('LoggedInComponent', () => {
  let component: LoggedInComponent;
  let fixture: ComponentFixture<LoggedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedInComponent]
    });
    fixture = TestBed.createComponent(LoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
