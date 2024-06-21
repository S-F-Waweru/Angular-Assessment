import { TestBed } from '@angular/core/testing';

import { SpinningGameService } from './spinning-game.service';

describe('SpinningGameService', () => {
  let service: SpinningGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinningGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
