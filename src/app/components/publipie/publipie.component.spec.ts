import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublipieComponent } from './publipie.component';

describe('PublipieComponent', () => {
  let component: PublipieComponent;
  let fixture: ComponentFixture<PublipieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublipieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
