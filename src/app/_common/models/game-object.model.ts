import { Action } from './action.model';
import { GameEntity } from './game-entity.model';

export interface GameObject extends GameEntity {
  actions: Action[];
  isActive: boolean;
}

export class GameObject implements GameObject {
  constructor(
    id: string,
    name: string,
    description: string,
    actions: Action[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.actions = actions;
    this.isActive = true;
  }
}
