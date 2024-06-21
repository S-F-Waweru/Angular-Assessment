import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMessageComponent } from './random-message.component';

describe('RandomMessageComponent', () => {
  let component: RandomMessageComponent;
  let fixture: ComponentFixture<RandomMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
