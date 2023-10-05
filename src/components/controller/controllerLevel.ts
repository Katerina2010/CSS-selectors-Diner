import { IController } from '../../types/controller';
import { ILevel } from '../../types/model';
import { LevelData } from '../model/LevelDataModel';
import { WinFieldView } from '../view/drawWinFieldView';
import { NewLevel } from '../view/drawNewLevelView';
import { getLevel } from './getLevel';

export class ControllerLevel implements IController {
  public level: number;

  public data: ILevel;

  constructor(level = getLevel()) {
    this.level = level;
    this.data = LevelData[this.level];
  }

  public saveUsedHelp(): void {
    const level = getLevel();
    const helpMetka = document.querySelectorAll('.metka-help') as NodeListOf<Element>;
    helpMetka[level - 1].classList.add('showhelp');

    if (localStorage.getItem('HelpNumber') === null) {
      localStorage.setItem('HelpNumber', String(level));
    } else {
      const helpNums = localStorage.getItem('HelpNumber')?.split(',');
      if (helpNums) {
        helpNums.push(String(level));
        localStorage.setItem('HelpNumber', helpNums.join(''));
      }
    }
  }

  private saveWinLevel(): void {
    const winMetka = document.querySelectorAll('.metka-win');
    winMetka[this.level - 1].classList.add('showwin');
    if (localStorage.getItem('WinNumber') === null) {
      localStorage.setItem('WinNumber', String(this.level));
    } else {
      const winNums = localStorage.getItem('WinNumber')?.split(',');
      if (winNums) {
        winNums.push(String(this.level));
        localStorage.setItem('WinNumber', winNums.join(''));
      }
    }
  }

  public showActiveLevel(): void {
    this.level = getLevel();
    const htmlLevel = document.querySelectorAll('.num');
    htmlLevel.forEach((el) => {
      el.classList.remove('show');
      if (el.textContent) {
        if (el.textContent === String(this.level)) {
          el.classList.add('show');
        }
      }
    });
  }

  public showWinHelpLabels(): void {
    const winMetka = document.querySelectorAll('.metka-win');
    const helpMetka = document.querySelectorAll('.metka-help');
    const winNumbersArr = localStorage.getItem('WinNumber')?.split('');
    if (winNumbersArr) {
      winNumbersArr.forEach((el) => {
        winMetka[+el - 1].classList.add('showwin');
      });
    }
    const helpNumbersArr = localStorage.getItem('HelpNumber')?.split('');
    if (helpNumbersArr) {
      helpNumbersArr.forEach((el) => {
        helpMetka[+el - 1].classList.add('showhelp');
      });
    }
  }

  private expectAllWinLevels(): void {
    const allWin = document.querySelectorAll('.showwin');
    if (allWin.length === 10) {
      setTimeout(() => {
        new WinFieldView();
      }, 1000);
      setTimeout(() => {
        this.restartGame();
      }, 13000);
    }
  }

  public restartGame(): void {
    const winMetka = document.querySelectorAll('.metka-win');
    const helpMetka = document.querySelectorAll('.metka-help');
    localStorage.clear();
    this.showActiveLevel();
    new NewLevel();
    winMetka.forEach((el) => el.classList.remove('showwin'));
    helpMetka.forEach((el) => el.classList.remove('showhelp'));
    const titleWin = document.querySelector<HTMLDivElement>('.title-win');
    if (titleWin) {
      if (titleWin.classList.contains('open')) {
        titleWin.classList.remove('open');
      }
    }
    this.inputClear();
  }

  private shake(): void {
    const block = document.querySelector<HTMLDivElement>('.file-wrapper');
    if (block) {
      block.classList.add('anim3');
      setTimeout(() => {
        block.classList.remove('anim3');
      }, 500);
    }
    this.inputClear();
  }

  private inputClear(): void {
    const input = document.querySelector<HTMLInputElement>('.input');
    if (input) {
      input.value = '';
      input.focus();
      input.classList.add('mig');
    }
  }

  public pressEnter(): void {
    const input = document.querySelector<HTMLInputElement>('.input');
    if (input) {
      this.level = getLevel();
      this.data = LevelData[this.level];
      if (input.value === this.data.answer) {
        this.saveWinLevel();
        setTimeout(() => {
          const arr: number[] = [];
          document.querySelectorAll('.metka-win').forEach((el, i) => {
            if (!el.classList.contains('showwin')) {
              arr.push(+(document.querySelectorAll('.num')[i].textContent as string));
            }
          });
          [this.level] = arr;
          if (this.level < LevelData.length) {
            localStorage.setItem('Level', String(this.level));
            this.showActiveLevel();
            new NewLevel();
          }
        }, 1000);
        this.inputClear();
        document.querySelectorAll('.anim2').forEach((el) => {
          el.classList.remove('anim2');
          el.classList.add('anim4');
        });
        setTimeout(() => {
          this.expectAllWinLevels();
        }, 500);
      } else if (+input.value < LevelData.length && input.value !== '' && input.value !== '0') {
        localStorage.setItem('Level', input.value);
        new NewLevel();
        this.inputClear();
      } else {
        this.shake();
      }
    }
  }

  public showHint(): void {
    const input = document.querySelector<HTMLInputElement>('.input');
    if (input) {
      input.value = '';
      const level = getLevel();
      const answer = String(LevelData[level].answer);
      const count = answer.length;
      let k = 0;
      setInterval(() => {
        if (k < count) {
          if (input) {
            input.value += answer[k];
          }
          k += 1;
        }
      }, 200);
      input.focus();
    }
  }
}
