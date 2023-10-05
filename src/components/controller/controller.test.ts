import { Controller } from './controller';

const data = new Controller();

describe('Controller', () => {
  it('should work', () => {
    expect(data).toBeDefined();
  });
  it('metod getFlower() return [5, 3, 5]', () => {
    expect(data.getFlower()).toStrictEqual([5, 3, 5]);
  });
  it('metod getTitle() return "1. Selector by element type"', () => {
    expect(data.getTitle()).toStrictEqual('1. Selector by element type');
  });
  it('metod getLength() return 3', () => {
    expect(data.getLength()).toStrictEqual(3);
  });
  it('metod getAnim() return [0, 1, 2]', () => {
    expect(data.getAnim()).toStrictEqual([0, 1, 2]);
  });
  it('metod getAnswer() return "flower"', () => {
    expect(data.getAnswer()).toStrictEqual('flower');
  });
});
