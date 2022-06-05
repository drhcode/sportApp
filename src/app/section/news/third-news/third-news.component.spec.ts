import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdNewsComponent } from './third-news.component';

describe('ThirdNewsComponent', () => {
  let component: ThirdNewsComponent;
  let fixture: ComponentFixture<ThirdNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
