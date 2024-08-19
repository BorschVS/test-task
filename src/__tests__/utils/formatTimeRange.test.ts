import { formatTimeRange } from 'utils/formatters/formatTimeRange';
export {};

describe('formatTimeRange', () => {
  test('should format time range correctly', () => {
    const departure = '2024-08-01T10:00:00Z';
    const duration = 120;

    expect(formatTimeRange(departure, duration)).toBe('10:00 - 12:00');
  });

  test('should format zero duration', () => {
    const departure = '2024-08-01T10:00:00Z';
    const duration = 0;

    expect(formatTimeRange(departure, duration)).toBe('10:00 - 10:00');
  });

  test('should handle times crossing midnight', () => {
    const departure = '2024-08-01T23:30:00Z';
    const duration = 90;

    expect(formatTimeRange(departure, duration)).toBe('23:30 - 01:00');
  });

  test('should handle short duration', () => {
    const departure = '2024-08-01T09:15:00Z';
    const duration = 15;

    expect(formatTimeRange(departure, duration)).toBe('09:15 - 09:30');
  });

  test('should handle large duration', () => {
    const departure = '2024-08-01T01:00:00Z';
    const duration = 1440;

    expect(formatTimeRange(departure, duration)).toBe('01:00 - 01:00');
  });
});
