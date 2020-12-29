import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterMatiereComponent } from './modal-ajouter-matiere.component';

describe('ModalAjouterMatiereComponent', () => {
  let component: ModalAjouterMatiereComponent;
  let fixture: ComponentFixture<ModalAjouterMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
