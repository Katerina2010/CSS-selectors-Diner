import { ILevel } from '../../types/model';
import { LevelData } from '../model/LevelDataModel';
import { getLevel } from './getLevel';

export class Controller {
  public level: number;

  public model: ILevel[];

  public data: ILevel;

  constructor(level = getLevel()) {
    this.level = level;
    this.model = LevelData;
    this.data = LevelData[this.level];
  }

  public getFlower(): number[] {
    return this.data.arrUrl;
  }

  public getTitle(): string {
    return this.data.title;
  }

  public getLength(): number {
    return this.data.arrUrl.length;
  }

  public getAnim(): number[] {
    return this.data.child;
  }

  public getAnswer(): string {
    return this.data.answer;
  }
}
