import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { locations } from 'src/app/_common/data/locations';
import { objects } from 'src/app/_common/data/objects';
import { Direction } from 'src/app/_common/models/direction.model';
import { GameLocation } from 'src/app/_common/models/game-location.model';
import { GameObject } from 'src/app/_common/models/game-object.model';

@Injectable({
  providedIn: 'root',
})
export class GameObjectService {
  objects$ = new BehaviorSubject<Record<string, GameObject>>({});

  init() {
    for (const object of objects) {
      this.addObject(object);
    }
    console.log('Objects inited: ', this.objects$.value);
  }

  addObject(obj: GameObject) {
    const objects = this.objects$.value;
    const object = new GameObject(
      obj.id,
      obj.name,
      obj.description,
      obj.actions
    );
    objects[obj.id] = object;
    this.objects$.next(objects);
  }

  getObject(id: string): GameObject {
    const objects = this.objects$.value;
    const object = objects[id];
    if (!object) {
      throw Error(`Object ${id} wasnt found`);
    }
    return object;
  }
}
