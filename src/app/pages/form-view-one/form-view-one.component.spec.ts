import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewOneComponent } from './form-view-one.component';

describe('FormViewOneComponent', () => {
  let component: FormViewOneComponent;
  let fixture: ComponentFixture<FormViewOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormViewOneComponent]
    });
    fixture = TestBed.createComponent(FormViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
