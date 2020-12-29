import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjouterUserComponent } from './modal-ajouter-user.component';

describe('ModalAjouterUserComponent', () => {
  let component: ModalAjouterUserComponent;
  let fixture: ComponentFixture<ModalAjouterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjouterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjouterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
