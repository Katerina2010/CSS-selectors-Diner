import { WinFieldView } from './drawWinFieldView';

const titleWin = document.querySelector<HTMLDivElement>('.title-win');
const table = document.querySelector<HTMLDivElement>('.table-surface');

describe('WinFieldView', () => {
  it('should work', () => {
    expect(WinFieldView).toBeDefined();
  });
  it('add class for displaying victory header', () => {
    if (titleWin) {
      expect(titleWin.classList.contains('open')).toEqual(true);
    }
  });
  it('replaces one animation with another', () => {
    if (table) {
      expect(table.classList.contains('anim2')).toEqual(false);
      expect(table.classList.contains('anim4')).toEqual(true);
    }
  });
  it('add 4 flowers', () => {
    if (table) {
      expect(table.childElementCount).toBe(4);
    }
  });
});

const titleTimer = document.querySelector<HTMLDivElement>('.title-timer');

describe('metod countdownTimer()', () => {
  it('metod countdownTimer() add class for new element title timer', () => {
    if (titleWin) {
      expect(titleWin.classList.contains('title-timer')).toEqual(true);
      expect(titleWin.classList.contains('timer')).toEqual(true);
      expect(titleWin.childElementCount).toBe(1);
    }
  });
  it('metod countdownTimer() add title timer', () => {
    if (titleTimer) {
      expect(titleTimer.textContent).toBe('restart');
    }
  });
});
