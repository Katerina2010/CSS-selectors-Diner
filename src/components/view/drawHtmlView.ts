import { IView } from '../../types/view';
import { Controller } from '../controller/controller';

export class HtmlView implements IView {
  public controller: Controller;

  constructor() {
    this.controller = new Controller();
  }

  private createHtml(): void {
    const keys = Object.values(this.controller.data);
    const htmlParagraph = document.querySelectorAll('.content');
    htmlParagraph.forEach((item) => {
      const el = item;
      el.textContent = '';
    });
    htmlParagraph[0].textContent = `<div class="luzhaika">`;
    htmlParagraph[this.controller.getLength() + 1].classList.remove('padding');
    htmlParagraph[this.controller.getLength() + 1].textContent = `</div>`;
    for (let i = 0; i < this.controller.getLength(); i += 1) {
      htmlParagraph[i + 1].textContent = `${keys[i]}`;
      htmlParagraph[i + 1].classList.add('padding');
    }
    const title = document.querySelector<HTMLDivElement>('.title');
    if (title) {
      title.textContent = `${this.controller.getTitle()}`;
    }
  }

  public edit(): void {
    this.createHtml();
  }
}
