import { ILevel } from '../../types/model';

export const LevelData: ILevel[] = [
  {
    line1: '',
    line2: '',
    line3: '',
    line4: '',
    title: '',
    coutnFlower: 1,
    answer: '',
    arrUrl: [0],
    child: [0],
  },
  {
    line1: '<flower class="pink"/>',
    line2: '<flower id="bezel"/>',
    line3: '<flower class="pink"/>',
    line4: '',
    title: '1. Selector by element type',
    coutnFlower: 3,
    answer: 'flower',
    arrUrl: [5, 3, 5],
    child: [0, 1, 2],
  },
  {
    line1: '<flower class="violet"/>',
    line2: '<flower class="blue"/>',
    line3: '<flower class="violet"/>',
    line4: '',
    title: '2. Selector by class',
    coutnFlower: 3,
    answer: '.blue',
    arrUrl: [6, 16, 6],
    child: [1],
  },
  {
    line1: '<flower class="red"/>',
    line2: '<flower id="blue"/>',
    line3: '<flower id="black"/>',
    line4: '<flower class="pink"/>',
    title: '3. Selector by id',
    coutnFlower: 4,
    answer: '#black',
    arrUrl: [7, 13, 12, 1],
    child: [2],
  },
  {
    line1: '<flower class="violet"/>',
    line2: '<flower class="pink"/>',
    line3: '<flower class="blue"/>',
    line4: '<flower class="red"/>',
    title: '4.Combinators',
    coutnFlower: 4,
    answer: '.pink.blue',
    arrUrl: [8, 5, 4, 7],
    child: [1, 2],
  },
  {
    line1: '<flower class="violet"/>',
    line2: '<wow id="colorful"/>',
    line3: '<flower/>',
    line4: '<flower id="orange"/>',
    title: '5. Selector any elements',
    coutnFlower: 4,
    answer: '*',
    arrUrl: [13, 9, 6, 10],
    child: [0, 1, 2, 3],
  },
  {
    line1: '<flower/>',
    line2: '<flower class="wow"/>',
    line3: '<flower class="wow"/>',
    line4: '',
    title: '6. First right neighbor selector',
    coutnFlower: 3,
    answer: 'flower + .wow',
    arrUrl: [14, 11, 8],
    child: [1],
  },
  {
    line1: '<flower/>',
    line2: '<div class="wow"/>',
    line3: '<flower class="wow"/>',
    line4: '<div class="wow"/>',
    title: '7. Selector all right neighbors',
    coutnFlower: 3,
    answer: 'flower ~ div',
    arrUrl: [1, 9, 5, 9],
    child: [1, 3],
  },
  {
    line1: '<flower/>',
    line2: '<flower/>',
    line3: '<flower/>',
    line4: '',
    title: '8. Selector the last child of its parent',
    coutnFlower: 3,
    answer: 'flower:last-child',
    arrUrl: [10, 8, 4],
    child: [2],
  },
  {
    line1: '<flower/>',
    line2: '<flower/>',
    line3: '<flower/>',
    line4: '',
    title: '9. Selector descendants of parents',
    coutnFlower: 3,
    answer: 'flower:nth-child(odd)',
    arrUrl: [13, 15, 16],
    child: [0, 2],
  },
  {
    line1: '<flower class="wow red"/>',
    line2: '<flower class="wow"/>',
    line3: '<flower class="wow"/>',
    line4: '',
    title: '10. Combinators',
    coutnFlower: 3,
    answer: '.wow.red',
    arrUrl: [3, 7, 2],
    child: [0],
  },
];