import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragolBallPage } from './dragol-ball.page';

describe('DragolBallPage', () => {
  let component: DragolBallPage;
  let fixture: ComponentFixture<DragolBallPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DragolBallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
