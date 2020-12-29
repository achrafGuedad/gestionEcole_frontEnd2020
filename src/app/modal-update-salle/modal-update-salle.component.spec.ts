import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateSalleComponent } from './modal-update-salle.component';

describe('ModalUpdateSalleComponent', () => {
  let component: ModalUpdateSalleComponent;
  let fixture: ComponentFixture<ModalUpdateSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
