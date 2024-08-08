// formatFlightDuration.test.ts

import { formatFlightDuration } from './formatFlightDuration';

describe('formatFlightDuration', () => {
  it('should format duration correctly', () => {
    const departure = '2024-08-01T10:00:00Z';
    const duration = 120;

    expect(formatFlightDuration(departure, duration)).toBe('2Ч 0М');
  });

  it('should handle different times of day', () => {
    const departure = '2024-08-01T23:00:00Z';
    const duration = 75;

    expect(formatFlightDuration(departure, duration)).toBe('1Ч 15М');
  });

  it('should handle a duration that spans multiple days', () => {
    const departure = '2024-08-01T23:00:00Z';
    const duration = 1440;

    expect(formatFlightDuration(departure, duration)).toBe('24Ч 0М');
  });

  it('should handle zero duration', () => {
    const departure = '2024-08-01T10:00:00Z';
    const duration = 0;

    expect(formatFlightDuration(departure, duration)).toBe('0Ч 0М');
  });
});
