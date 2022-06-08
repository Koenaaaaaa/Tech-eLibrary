import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShelfComponent } from './about-shelf.component';

describe('AboutShelfComponent', () => {
  let component: AboutShelfComponent;
  let fixture: ComponentFixture<AboutShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
