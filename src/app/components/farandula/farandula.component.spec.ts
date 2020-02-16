import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarandulaComponent } from './farandula.component';

describe('FarandulaComponent', () => {
  let component: FarandulaComponent;
  let fixture: ComponentFixture<FarandulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarandulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarandulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
