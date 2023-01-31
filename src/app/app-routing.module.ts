import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'filmix', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
