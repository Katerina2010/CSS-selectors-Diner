import { LabelsView } from './drawLabelsView';

const winBlock = document.querySelector<HTMLDivElement>('.level-win');
const win = document.querySelector<HTMLDivElement>('.metka-win');
const helpBlock = document.querySelector<HTMLDivElement>('.level-help');
const help = document.querySelector<HTMLDivElement>('.metka-help');

describe('LabelsView', () => {
  it('should work', () => {
    expect(LabelsView).toBeDefined();
  });
  it('metod edit() add class to the new element label win', () => {
    if (winBlock) {
      expect(winBlock.classList.contains('metka-win')).toEqual(true);
    }
  });
  it('metod edit() add textContent to the new element label win', () => {
    if (win) {
      expect(win.textContent).toBe('✔️');
    }
  });
  it('metod edit() creates 10 victory labels', () => {
    if (winBlock) {
      expect(winBlock.childElementCount).toBe(10);
    }
  });
  it('metod edit() add class to the new element label help', () => {
    if (helpBlock) {
      expect(helpBlock.classList.contains('metka-help')).toEqual(true);
    }
  });
  it('metod edit() add textContent to the new element label help', () => {
    if (help) {
      expect(help.textContent).toBe('+help');
    }
  });
  it('metod edit() creates 10 helps labels', () => {
    if (helpBlock) {
      expect(helpBlock.childElementCount).toBe(10);
    }
  });
});
