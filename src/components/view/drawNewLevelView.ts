import { FlowersView } from './drawFlowerView';
import { HtmlView } from './drawHtmlView';

export class NewLevel {
  public html: void;

  public table: void;

  constructor() {
    this.html = new HtmlView().edit();
    this.table = new FlowersView().edit();
  }
}
