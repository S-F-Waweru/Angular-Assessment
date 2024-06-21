import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningGameComponent } from './spinning-game.component';

describe('SpinningGameComponent', () => {
  let component: SpinningGameComponent;
  let fixture: ComponentFixture<SpinningGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinningGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinningGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
