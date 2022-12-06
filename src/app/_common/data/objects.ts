import { Action, showTextAction } from '../models/action.model';
import { Direction } from '../models/direction.model';
import { GameObject } from '../models/game-object.model';

export const objects: GameObject[] = [
  {
    id: 'home-note',
    name: 'Note',
    description: '',
    isActive: true,
    actions: [
      new Action(this, 'Read', () => showTextAction('Never gonna give you up!')),
      new Action('Destroy'),
    ],
  },
];
