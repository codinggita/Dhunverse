import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMkainComponent } from './navbar-mkain.component';

describe('NavbarMkainComponent', () => {
  let component: NavbarMkainComponent;
  let fixture: ComponentFixture<NavbarMkainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMkainComponent]
    });
    fixture = TestBed.createComponent(NavbarMkainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
