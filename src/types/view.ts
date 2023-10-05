import { IController } from './controller';

export interface IView {
  edit: () => void;
  controller: IController;
}
