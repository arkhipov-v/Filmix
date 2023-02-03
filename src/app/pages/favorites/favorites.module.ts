import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    // Angular Material
    MatButtonModule,
    MatIconModule,

    CommonModule,
    RouterModule.forChild([{ path: '', component: FavoritesComponent }]),
  ],
})
export class FavoritesModule {}
