import { LevelData } from './LevelDataModel';

describe('LevelData', () => {
  it('should work', () => {
    expect(LevelData).toBeDefined();
  });
  it('types array', () => {
    expect(LevelData instanceof Array).toEqual(true);
  });
  it('LevelData is array length === 11', () => {
    expect(LevelData).toHaveLength(11);
  });
});
