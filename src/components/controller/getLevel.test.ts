import { getLevel } from './getLevel';

describe('getLevel', () => {
  it('should work', () => {
    expect(getLevel).toBeDefined();
  });
  it('return 1', () => {
    expect(getLevel()).toBe(1);
  });
});
