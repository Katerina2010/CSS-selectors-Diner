import { EventHandler } from './eventHandler';

const numBlock = document.querySelector<HTMLDivElement>('.level-num');
const flowers = document.querySelector('.flower');

describe('EventHandler', () => {
  it('should work', () => {
    expect(EventHandler).toBeDefined();
  });
  it('metod listeners() add a class 2, 3, 4 lines block html', () => {
    if (numBlock) {
      expect(numBlock.classList.contains('show')).toEqual(true);
    }
  });
  it(' metod listeners() adds a class to the new element for flower tag ', () => {
    if (flowers) {
      expect(flowers.classList.contains('designation')).toEqual(true);
    }
  });
  it('metod listeners() adds 3 block tag for flowers', () => {
    if (flowers) {
      expect(flowers.childElementCount).toBe(3);
    }
  });
});
