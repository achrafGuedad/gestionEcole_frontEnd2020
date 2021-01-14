import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterClasseComponent } from './modal-ajouter-classe.component';

describe('ModalAjouterClasseComponent', () => {
  let component: ModalAjouterClasseComponent;
  let fixture: ComponentFixture<ModalAjouterClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
