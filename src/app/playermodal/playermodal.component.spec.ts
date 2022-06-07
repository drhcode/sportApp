import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayermodalComponent } from './playermodal.component';

describe('PlayermodalComponent', () => {
  let component: PlayermodalComponent;
  let fixture: ComponentFixture<PlayermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayermodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
