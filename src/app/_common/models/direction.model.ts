import { GameLocation } from './game-location.model';

export interface Direction {
  locationId: string;
  isAvailable: Boolean;
}

export class Direction implements Direction {
  constructor(locationId: string, isAvailable: boolean = true) {
    this.locationId = locationId;
    this.isAvailable = isAvailable;
  }
}
