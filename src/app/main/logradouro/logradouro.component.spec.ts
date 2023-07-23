import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogradouroComponent } from './logradouro.component';

describe('LogradouroComponent', () => {
  let component: LogradouroComponent;
  let fixture: ComponentFixture<LogradouroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogradouroComponent]
    });
    fixture = TestBed.createComponent(LogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
