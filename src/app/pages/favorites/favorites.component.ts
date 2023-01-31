import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favorieteMoviesList: any;

  ngOnInit(): void {
    this.GetInLocalStorage();
  }

  GetInLocalStorage() {
    this.favorieteMoviesList = JSON.parse(
      localStorage.getItem('Favorites List') || '{}'
    );
  }

  clearFavoritesList() {
    localStorage.clear();
    this.GetInLocalStorage();
  }

  removeMovieById(id: string) {
    const items: Array<{ id: string }> = JSON.parse(
      localStorage.getItem('Favorites List') || '{}'
    );

    localStorage.setItem(
      'Favorites List',
      JSON.stringify(items.filter((el) => el.id !== id))
    );
    this.GetInLocalStorage();
  }
}
