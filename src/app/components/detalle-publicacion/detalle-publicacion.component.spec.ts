import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePublicacionComponent } from './detalle-publicacion.component';

describe('DetallePublicacionComponent', () => {
  let component: DetallePublicacionComponent;
  let fixture: ComponentFixture<DetallePublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
