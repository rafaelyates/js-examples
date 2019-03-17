'use strict';
import { ArmstrongNumber } from './armstrong-number';

describe('Armstrong Number', () => {

  const armstrong = new ArmstrongNumber();

  it('should validate armstrong numbers', () => {
    expect(armstrong.isArmstrong(407)).toBe(true);
    expect(armstrong.isArmstrong(1634)).toBe(true);
    expect(armstrong.isArmstrong(0)).toBe(true);
  });

  it('should reject non armstrong numbers', () => {
    expect(armstrong.isArmstrong(633)).toBe(false);
    expect(armstrong.isArmstrong(2000)).toBe(false);
    expect(armstrong.isArmstrong(-1)).toBe(false);
  });
});
