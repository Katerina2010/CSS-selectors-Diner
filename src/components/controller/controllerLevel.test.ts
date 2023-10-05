import { ControllerLevel } from './controllerLevel';

const numBlock = document.querySelector<HTMLDivElement>('.level-num');
const html = document.querySelector<HTMLDivElement>('.field-html');
const table = document.querySelector<HTMLDivElement>('.table-surface');
const flower = document.querySelector<HTMLDivElement>('.flower');
const flowers = document.querySelector('.flower');

describe('ControllerLevel', () => {
  it('should work', () => {
    expect(ControllerLevel).toBeDefined();
  });
  it('metod showActiveLevel() add a class 2, 3, 4 lines block html', () => {
    if (numBlock) {
      expect(numBlock.classList.contains('show')).toEqual(true);
    }
  });
  it('metod highlightTagWhisHtml() delete a class when cursor is not hovered', () => {
    if (flower) {
      expect(flower.classList.contains('showHelp')).toEqual(false);
    }
    if (html) {
      expect(html.classList.contains('showHtml')).toEqual(false);
    }
  });
  it('metod highlightTagWhisHtml() interacts with 3 elements ', () => {
    if (flower) {
      expect(flower.childElementCount).toBe(3);
    }
    if (table) {
      expect(table.childElementCount).toBe(3);
    }
  });
  it(' metod cteateAnimWhisHelpFlowers() adds a class to the new element for flower tag ', () => {
    if (flowers) {
      expect(flowers.classList.contains('designation')).toEqual(true);
    }
  });
  it('metod cteateAnimWhisHelpFlowers() adds 3 block tag for flowers', () => {
    if (flowers) {
      expect(flowers.childElementCount).toBe(3);
    }
  });
});
