import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favorieteMoviesList: any = [
    {
      name: 'Batman Begins',
      id: 'tt0372784',
    },
    {
      name: 'Spider-Man',
      id: 'tt0145487',
    },
  ];
}
