import { TestBed } from '@angular/core/testing';

import { TweetGuardService } from './tweet-guard.service';

describe('TweetGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TweetGuardService = TestBed.get(TweetGuardService);
    expect(service).toBeTruthy();
  });
});
