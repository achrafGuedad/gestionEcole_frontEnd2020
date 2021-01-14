import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateClasseComponent } from './modal-update-classe.component';

describe('ModalUpdateClasseComponent', () => {
  let component: ModalUpdateClasseComponent;
  let fixture: ComponentFixture<ModalUpdateClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
