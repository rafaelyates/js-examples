'use strict';
import { PossiblePairs } from './possible-pairs';

describe('Possible Pairs', () => {

  const possiblePairs = new PossiblePairs();

  it('should identify valid pair transformations', () => {
    expect(possiblePairs.isPossible(1, 4, 5, 9)).toBe(true);
  });

  it('should identify invalid pair transformations', () => {
    expect(possiblePairs.isPossible(2, 4, 6, 9)).toBe(false);
  });
});
