import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'movies/:id', component: CardMovieComponent },
  { path: '**', component: CatalogComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
