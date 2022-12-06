import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameModule } from './game/game.module';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: () => GameModule,
    // canActivate: [LoginGuard],
  },
  {
    path: '**',
    redirectTo: '/game',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
