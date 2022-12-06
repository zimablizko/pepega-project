import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { locations } from 'src/app/_common/data/locations';
import { Direction } from 'src/app/_common/models/direction.model';
import { GameLocation } from 'src/app/_common/models/game-location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  locations$ = new BehaviorSubject<Record<string, GameLocation>>({});

  init() {
    for (const location of locations) {
      this.addLocation(location);
    }
    console.log('Locations inited: ', this.locations$.value);
  }

  addLocation(loc: GameLocation) {
    const locations = this.locations$.value;
    const location = new GameLocation(loc.id, loc.name, loc.description, loc.directions, loc.objectIds);
    locations[loc.id] = location;
    this.locations$.next(locations);
  }

  getLocation(id: string): GameLocation {
    const locations = this.locations$.value;
    const location = locations[id];
    if (!location) {
      throw Error(`Location ${id} wasnt found`);
    }
    return location;
  }
}
