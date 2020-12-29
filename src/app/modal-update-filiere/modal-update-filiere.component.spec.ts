import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateFiliereComponent } from './modal-update-filiere.component';

describe('ModalUpdateFiliereComponent', () => {
  let component: ModalUpdateFiliereComponent;
  let fixture: ComponentFixture<ModalUpdateFiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateFiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
