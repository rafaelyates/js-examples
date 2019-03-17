'use strict';

export class PossiblePairs {

  /**
   * Checks if is possible to transform an pair [a, b],
   * into another given pair [x, y] by performing
   * successive sum transformations, E.g.:
   *  - [a + b, b] = [x, y]
   *  - [a, b + a] = [x, y]
   *
   * @param a The first value of the initial pair.
   * @param b The second value of the initial pair.
   * @param x The first value of the desired pair.
   * @param y The second value of the desired pair.
   * @returns If the transformation is possible.
   */
  isPossible(a, b, x, y) {
    // The desired result.
    if (a === x && b === y) {
      return true;
    }
    // An irreversible situation.
    if (a > x || b > y) {
      return false;
    }

    return this.isPossible(a + b, b, x, y) || this.isPossible(a, a + b, x, y);
  }

}
