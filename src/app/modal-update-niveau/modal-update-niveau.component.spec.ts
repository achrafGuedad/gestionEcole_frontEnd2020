import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateNiveauComponent } from './modal-update-niveau.component';

describe('ModalUpdateNiveauComponent', () => {
  let component: ModalUpdateNiveauComponent;
  let fixture: ComponentFixture<ModalUpdateNiveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateNiveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
