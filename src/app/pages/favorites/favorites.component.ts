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

    // const result = window.localStorage.getItem('Favorites List');
    // this.favorieteMoviesList = JSON.parse(result);
    console.log(this.favorieteMoviesList);
  }
}
