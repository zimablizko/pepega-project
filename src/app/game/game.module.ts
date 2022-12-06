import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GamePageComponent } from './game-page/game-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [GamePageComponent],
  imports: [CommonModule, GameRoutingModule, CoreModule],
})
export class GameModule {}
