import { Injectable } from '@angular/core';
import { GameObjectService } from 'src/app/core/services/game-object.service';
import { LocationService } from 'src/app/core/services/location.service';
import { PlayerService } from 'src/app/core/services/player.service';

@Injectable({
  providedIn: 'root',
})
export class GamePageService {
  constructor(
    private objectService: GameObjectService,
    private locationService: LocationService,
    private playerService: PlayerService
  ) {}
  init() {
    this.objectService.init();
    this.locationService.init();
    const startLocation = this.locationService.getLocation('myhome');
    this.playerService.init(startLocation);
  }
}
