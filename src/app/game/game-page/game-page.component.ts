import { Component, OnInit } from '@angular/core';
import { GameObjectService } from 'src/app/core/services/game-object.service';
import { LocationService } from 'src/app/core/services/location.service';
import { PlayerService } from 'src/app/core/services/player.service';
import { GameLocation } from 'src/app/_common/models/game-location.model';
import { GamePageService } from './game-page.service';

@Component({
  selector: 'ckp-game-page',
  templateUrl: './game-page.component.html',
})
export class GamePageComponent implements OnInit {
  currentLocation$ = this.playerService.currentLocation$;
  locations$ = this.locationService.locations$;
  objects$ = this.objectService.objects$;

  constructor(
    private gameService: GamePageService,
    private objectService: GameObjectService,
    private locationService: LocationService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.gameService.init();
  }

  changeLocation(location: GameLocation) {
    this.playerService.changeLocation(location);
  }

  callActionScript(script: Function) {
    script();
  }
}
