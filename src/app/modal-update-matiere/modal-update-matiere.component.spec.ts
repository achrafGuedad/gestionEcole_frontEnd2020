import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateMatiereComponent } from './modal-update-matiere.component';

describe('ModalUpdateMatiereComponent', () => {
  let component: ModalUpdateMatiereComponent;
  let fixture: ComponentFixture<ModalUpdateMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
