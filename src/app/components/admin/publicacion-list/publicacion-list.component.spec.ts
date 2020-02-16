import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionListComponent } from './publicacion-list.component';

describe('PublicacionListComponent', () => {
  let component: PublicacionListComponent;
  let fixture: ComponentFixture<PublicacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
