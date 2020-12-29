import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterFiliereComponent } from './modal-ajouter-filiere.component';

describe('ModalAjouterFiliereComponent', () => {
  let component: ModalAjouterFiliereComponent;
  let fixture: ComponentFixture<ModalAjouterFiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterFiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
