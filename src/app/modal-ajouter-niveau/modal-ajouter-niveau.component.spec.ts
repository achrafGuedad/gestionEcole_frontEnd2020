import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterNiveauComponent } from './modal-ajouter-niveau.component';

describe('ModalAjouterNiveauComponent', () => {
  let component: ModalAjouterNiveauComponent;
  let fixture: ComponentFixture<ModalAjouterNiveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterNiveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
