import { GameObject } from './game-object.model';

export interface Action {
  gameObject: GameObject;
  text: string;
  script: Function;
}

export class Action implements Action {
  constructor(gameObject: GameObject, text: string, script: Function) {
    this.gameObject = gameObject;
    this.text = text;
    this.script = script;
  }

  disableObjectAction = () => (this.gameObject.isActive = false);
}

export const showTextAction = (text: string) => console.log(text);
// export const disableObjectAction = () => (this.gameObject.isActive = false);
