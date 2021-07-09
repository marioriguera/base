import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContadoresComponent } from './lista-contadores.component';

describe('ListaContadoresComponent', () => {
  let component: ListaContadoresComponent;
  let fixture: ComponentFixture<ListaContadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
