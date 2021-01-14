import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdatePaiementComponent } from './modal-update-paiement.component';

describe('ModalUpdatePaiementComponent', () => {
  let component: ModalUpdatePaiementComponent;
  let fixture: ComponentFixture<ModalUpdatePaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdatePaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdatePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
