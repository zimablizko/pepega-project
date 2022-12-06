import { Direction } from './direction.model';
import { GameEntity } from './game-entity.model';
import { GameObject } from './game-object.model';

export interface GameLocation extends GameEntity {
  directions: Direction[];
  objectIds?: string[];
}

export class GameLocation implements GameLocation {
  constructor(
    id: string,
    name: string,
    description: string,
    directions: Direction[],
    objectIds: string[] = []
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.directions = directions;
    this.objectIds = objectIds;
  }
}
