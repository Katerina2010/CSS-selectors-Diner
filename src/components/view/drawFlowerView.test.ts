import { FlowersView } from './drawFlowerView';

const table = document.querySelector<HTMLDivElement>('.table-surface');

describe('FlowersView', () => {
  it('should work', () => {
    expect(FlowersView).toBeDefined();
  });
  it('metod edit() add a class to the new element flower', () => {
    if (table) {
      expect(table.classList.contains('flower')).toEqual(true);
    }
  });
  it('metod edit() adds 3 flowers', () => {
    if (table) {
      expect(table.childElementCount).toBe(3);
    }
  });
});
