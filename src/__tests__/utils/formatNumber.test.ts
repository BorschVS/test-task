import { formatNumber } from 'utils/romatters/formatNumber';
export {};

describe('formatNumber', () => {
  test('should format numbers with spaces as thousand separators', () => {
    expect(formatNumber(1000)).toBe('1 000');
    expect(formatNumber(1234567)).toBe('1 234 567');
    expect(formatNumber(1234567890)).toBe('1 234 567 890');
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber(123)).toBe('123');
  });

  test('should format large numbers correctly', () => {
    expect(formatNumber(12345678901234)).toBe('12 345 678 901 234');
  });

  test('should format numbers with fewer than 1000 correctly', () => {
    expect(formatNumber(999)).toBe('999');
  });

  test('should format negative numbers', () => {
    expect(formatNumber(-1234567)).toBe('-1 234 567');
  });
});
