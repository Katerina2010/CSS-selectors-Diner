import './style.scss';

import { NewLevel } from './components/view/drawNewLevelView';
import { LabelsView } from './components/view/drawLabelsView';

new NewLevel();
const labels: LabelsView = new LabelsView();
labels.edit();
