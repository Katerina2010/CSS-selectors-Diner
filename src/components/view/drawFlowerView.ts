import { IView } from '../../types/view';
import { Controller } from '../controller/controller';

export class FlowersView implements IView {
  public controller: Controller;

  constructor() {
    this.controller = new Controller();
  }

  private createFlowers(): void {
    const table = document.querySelector<HTMLDivElement>('.table-surface');
    if (table) {
      table.textContent = '';
      this.controller.getFlower().forEach((el) => {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.classList.add(`f${el}`);
        table.appendChild(flower);
      });
    }
  }

  private cteateAnimWhisHelpFlowers(): void {
    const keys = Object.values(this.controller.data);
    const flowers = document.querySelectorAll('.flower');
    this.controller.getAnim().forEach((el) => flowers[el].classList.add('anim2'));
    for (let i = 0; i < this.controller.getLength(); i += 1) {
      const designation = document.createElement('div');
      designation.classList.add('designation');
      designation.textContent = `${keys[i]}`;
      flowers[i].append(designation);
    }
  }

  private highlightTagWhisHtml(): void {
    const flowers = document.querySelectorAll('.flower');
    const designation = document.querySelectorAll('.designation');
    const htmlParagraph = document.querySelectorAll('.content');
    for (let i = 0; i < this.controller.getLength(); i += 1) {
      flowers[i].addEventListener('mouseenter', () => {
        designation[i].classList.add('showHelp');
        htmlParagraph[i + 1].classList.add('showHtml');
      });
      flowers[i].addEventListener('mouseleave', () => {
        designation[i].classList.remove('showHelp');
        htmlParagraph[i + 1].classList.remove('showHtml');
      });
      htmlParagraph[i + 1].addEventListener('mouseenter', () => {
        designation[i].classList.add('showHelp');
        htmlParagraph[i + 1].classList.add('showHtml');
      });
      htmlParagraph[i + 1].addEventListener('mouseleave', () => {
        designation[i].classList.remove('showHelp');
        htmlParagraph[i + 1].classList.remove('showHtml');
      });
    }
  }

  public edit(): void {
    this.createFlowers();
    this.cteateAnimWhisHelpFlowers();
    this.highlightTagWhisHtml();
  }
}
