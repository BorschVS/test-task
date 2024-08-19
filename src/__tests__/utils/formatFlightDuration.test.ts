import { formatFlightDuration } from 'utils/formatters/formatFlightDuration';
export {};

describe('formatFlightDuration', () => {
  test('should format duration correctly', () => {
    const departure = '2024-08-01T10:00:00Z';
    const duration = 120;

    expect(formatFlightDuration(departure, duration)).toBe('2Ч 0М');
  });

  test('should handle flight duration', () => {
    const departure = '2024-08-01T23:00:00Z';
    const duration = 75;

    expect(formatFlightDuration(departure, duration)).toBe('1Ч 15М');
  });

  test('should handle a duration that spans multiple days', () => {
    const departure = '2024-08-01T23:00:00Z';
    const duration = 1440;

    expect(formatFlightDuration(departure, duration)).toBe('24Ч 0М');
  });

  test('should handle zero duration', () => {
    const departure = '2024-08-01T10:00:00Z';
    const duration = 0;

    expect(formatFlightDuration(departure, duration)).toBe('0Ч 0М');
  });
});
