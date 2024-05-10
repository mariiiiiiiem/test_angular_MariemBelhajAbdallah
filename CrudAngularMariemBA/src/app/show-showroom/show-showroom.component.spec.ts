import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShowroomComponent } from './show-showroom.component';

describe('ShowShowroomComponent', () => {
  let component: ShowShowroomComponent;
  let fixture: ComponentFixture<ShowShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShowroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
