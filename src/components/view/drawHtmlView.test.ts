import { HtmlView } from './drawHtmlView';

const html = document.querySelector<HTMLDivElement>('.field-html');

describe('HtmlView', () => {
  it('should work', () => {
    expect(HtmlView).toBeDefined();
  });
  it('metod edit() add a class 2, 3, 4 lines block html', () => {
    if (html) {
      expect(html.classList.contains('padding')).toEqual(true);
    }
  });
});
