import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterSalleComponent } from './modal-ajouter-salle.component';

describe('ModalAjouterSalleComponent', () => {
  let component: ModalAjouterSalleComponent;
  let fixture: ComponentFixture<ModalAjouterSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
