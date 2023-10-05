import { IView } from '../../types/view';
import { ControllerLevel } from '../controller/controllerLevel';
import { EventHandler } from '../controller/eventHandler';
import { NewLevel } from './drawNewLevelView';

export class LabelsView implements IView {
  public listen: EventHandler;

  public controller: ControllerLevel;

  constructor() {
    this.listen = new EventHandler();
    this.controller = new ControllerLevel();
  }

  private createLabels(): void {
    const htmlLevel = document.querySelectorAll('.num');
    const winBlock = document.querySelector<HTMLDivElement>('.level-win');
    const helpBlock = document.querySelector<HTMLDivElement>('.level-help');
    htmlLevel.forEach(() => {
      const win = document.createElement('div');
      win.classList.add('metka-win');
      win.textContent = '✔️';
      if (winBlock) {
        winBlock.append(win);
      }
      const help = document.createElement('div');
      help.classList.add('metka-help');
      help.textContent = '+help';
      if (helpBlock) {
        helpBlock.append(help);
      }
    });
  }

  private listenLevelBtn(): void {
    const htmlLevel = document.querySelectorAll('.num');
    const input = document.querySelector<HTMLInputElement>('.input');
    htmlLevel.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.textContent) {
          localStorage.setItem('Level', String(el.textContent));
          this.controller.showActiveLevel();
          new NewLevel();
          if (input) {
            input.focus();
          }
        }
      });
    });
  }

  public edit(): void {
    this.createLabels();
    this.listenLevelBtn();
    this.listen.listeners();
  }
}
