import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameLocation } from 'src/app/_common/models/game-location.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  currentLocation$ = new BehaviorSubject<GameLocation>(
    new GameLocation('', '', '', [], [])
  );

  init(location: GameLocation) {
    this.changeLocation(location);
    console.log('Player init is finished');
  }

  changeLocation(location: GameLocation) {
    this.currentLocation$.next(location);
  }
}
