import { ControllerLevel } from './controllerLevel';

export class EventHandler {
  private controller: ControllerLevel;

  private input: HTMLDivElement | null;

  private btnHelp: HTMLDivElement | null;

  private btnEnter: HTMLDivElement | null;

  private btnRestart: HTMLDivElement | null;

  constructor() {
    this.controller = new ControllerLevel();
    this.input = document.querySelector<HTMLInputElement>('.input');
    this.btnHelp = document.querySelector<HTMLDivElement>('.help');
    this.btnEnter = document.querySelector<HTMLDivElement>('.enter');
    this.btnRestart = document.querySelector<HTMLDivElement>('.restart');
  }

  private listenInput(): void {
    if (this.input) {
      this.input.addEventListener('keyup', (e) => {
        this.input?.classList.remove('mig');
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          this.controller.pressEnter();
        }
      });
    }
  }

  private listenBtnHelp(): void {
    if (this.btnHelp) {
      this.btnHelp.addEventListener('click', () => {
        this.input?.classList.remove('mig');
        this.controller.saveUsedHelp();
        this.controller.showHint();
      });
    }
  }

  private listenBtnEnter(): void {
    if (this.btnEnter) {
      this.btnEnter.addEventListener('click', () => this.controller.pressEnter());
    }
  }

  private listenerBtnRestart(): void {
    if (this.btnRestart) {
      this.btnRestart.addEventListener('click', () => this.controller.restartGame());
    }
  }

  public listeners(): void {
    this.listenInput();
    this.listenBtnHelp();
    this.listenBtnEnter();
    this.listenerBtnRestart();
    this.controller.showWinHelpLabels();
    this.controller.showActiveLevel();
  }
}
