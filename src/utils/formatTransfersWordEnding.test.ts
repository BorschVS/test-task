import { formatTransfersWordEnding } from './formatTransfersWordEnding';
export {};

describe('formatTransfersWordEnding', () => {
  it('should return "1 пересадка" for 1 transfer', () => {
    expect(formatTransfersWordEnding(1)).toBe('1 пересадка');
  });

  it('should return "2 пересадки" for 2 transfers', () => {
    expect(formatTransfersWordEnding(2)).toBe('2 пересадки');
  });

  it('should return "3 пересадки" for 3 transfers', () => {
    expect(formatTransfersWordEnding(3)).toBe('3 пересадки');
  });

  it('should return "4 пересадки" for 4 transfers', () => {
    expect(formatTransfersWordEnding(4)).toBe('4 пересадки');
  });

  it('should return "5 пересадок" for 5 transfers', () => {
    expect(formatTransfersWordEnding(5)).toBe('5 пересадок');
  });

  it('should return "10 пересадок" for 10 transfers', () => {
    expect(formatTransfersWordEnding(10)).toBe('10 пересадок');
  });

  it('should return "11 пересадок" for 11 transfers', () => {
    expect(formatTransfersWordEnding(11)).toBe('11 пересадок');
  });

  it('should return "20 пересадок" for 20 transfers', () => {
    expect(formatTransfersWordEnding(20)).toBe('20 пересадок');
  });
});
