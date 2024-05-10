import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceComponentComponent } from './residence-component.component';

describe('ResidenceComponentComponent', () => {
  let component: ResidenceComponentComponent;
  let fixture: ComponentFixture<ResidenceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
