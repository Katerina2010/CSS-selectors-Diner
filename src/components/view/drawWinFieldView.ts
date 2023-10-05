export class WinFieldView {
  constructor() {
    this.cteateWinField();
  }

  private cteateWinField(): void {
    const titleWin = document.querySelector<HTMLDivElement>('.title-win');
    if (titleWin) {
      titleWin.classList.add('open');
    }
    this.countdownTimer();
    const flower = document.querySelectorAll('.anim2');
    flower.forEach((el) => {
      el.classList.remove('anim2');
      el.classList.add('anim4');
    });
    const table = document.querySelector<HTMLDivElement>('.table-surface');
    if (table) {
      table.textContent = '';
    }
    const arr: number[] = [15, 3, 13, 6];
    arr.forEach((el) => {
      const flowerBlock = document.createElement('div');
      flowerBlock.classList.add('flower');
      flowerBlock.classList.add(`f${el}`);
      flowerBlock.classList.add('anim1');
      if (table) {
        table.appendChild(flowerBlock);
      }
    });
    const htmlParagraph = document.querySelectorAll('.content');
    htmlParagraph.forEach((item) => {
      const el = item;
      el.textContent = '';
    });
    htmlParagraph[0].textContent = `<div class="win">Congrats!</div>`;
  }

  private countdownTimer(): void {
    const titleWin = document.querySelector<HTMLDivElement>('.title-win');
    const titleTimer = document.createElement('div');
    titleTimer.classList.add('title-timer');
    titleTimer.textContent = 'restart';
    if (titleWin) {
      titleWin.append(titleTimer);
    }
    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.textContent = `...`;
    if (titleTimer) {
      titleTimer.append(timer);
    }
    let k = 10;
    setInterval(() => {
      if (k >= 0) {
        if (timer) {
          timer.textContent = `${k}`;
        }
        k -= 1;
      }
    }, 1000);
  }
}
