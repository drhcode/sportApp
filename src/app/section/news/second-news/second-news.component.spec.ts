import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNewsComponent } from './second-news.component';

describe('SecondNewsComponent', () => {
  let component: SecondNewsComponent;
  let fixture: ComponentFixture<SecondNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
