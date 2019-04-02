import { TestBed, async, inject } from '@angular/core/testing';

import { SpaceAPIFeatureGuard } from './feature.guard';

describe('FeatureGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceAPIFeatureGuard]
    });
  });

  it('should ...', inject([SpaceAPIFeatureGuard], (guard: SpaceAPIFeatureGuard) => {
    expect(guard).toBeTruthy();
  }));
});
