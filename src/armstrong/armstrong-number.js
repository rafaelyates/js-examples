'use strict';

export class ArmstrongNumber {

  /**
   * Checks if the given number is an Armstrong number.
   *
   * @param value The value to be checked.
   * @returns If the value is an Armstrong number.
   */
  isArmstrong(value) {
    // An impossible situation
    if (value < 0) {
      return false;
    }
    // Sanity check
    if (value === 0 || value === 1) {
      return true;
    }

    const log10 = Math.log10(value) + 1;
    const numberOfDigits = parseInt(log10);

    const recursiveArmstrong = (num) => {
      if (num === 0) {
        return 0;
      }

      const digit = parseInt(num % 10);
      const next = parseInt(num / 10);

      return Math.pow(digit, numberOfDigits) + recursiveArmstrong(next);
    };

    return value === recursiveArmstrong(value);
  }

}
