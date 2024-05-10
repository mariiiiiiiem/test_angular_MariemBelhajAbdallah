import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppartComponent } from './show-appart.component';

describe('ShowAppartComponent', () => {
  let component: ShowAppartComponent;
  let fixture: ComponentFixture<ShowAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAppartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
