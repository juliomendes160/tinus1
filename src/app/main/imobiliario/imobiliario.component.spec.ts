import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImobiliarioComponent } from './imobiliario.component';

describe('ImobiliarioComponent', () => {
  let component: ImobiliarioComponent;
  let fixture: ComponentFixture<ImobiliarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImobiliarioComponent]
    });
    fixture = TestBed.createComponent(ImobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
