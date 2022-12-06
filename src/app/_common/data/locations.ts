import { Direction } from '../models/direction.model';
import { GameLocation } from '../models/game-location.model';

export const locations: GameLocation[] = [
  {
    id: 'myhome',
    name: 'My Home',
    description:
      'You are at your home. It is a small wooden house. There are a table with chair, small kitchen, bed, bathroom and picture of cat.',
    directions: [new Direction('street1')],
    objectIds: ['home-note'],
  },
  {
    id: 'street1',
    name: 'Street 1',
    description: '',
    directions: [new Direction('myhome'), new Direction('street2')],
  },
  {
    id: 'street2',
    name: 'Street 2',
    description: '',
    directions: [new Direction('street1')],
  },
];
