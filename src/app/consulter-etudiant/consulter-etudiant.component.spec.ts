import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEtudiantComponent } from './consulter-etudiant.component';

describe('ConsulterEtudiantComponent', () => {
  let component: ConsulterEtudiantComponent;
  let fixture: ComponentFixture<ConsulterEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
