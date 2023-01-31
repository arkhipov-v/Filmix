import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnInit {
  movie: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Old
    // this.loadMovie();
    // setTimeout(() => console.log(this.movie), 600);
    // console.log(this.movie);
    // this.getTitle();
  }

  // loadMovie() {
  //   this.movieService
  //     .getMovie(this.route.snapshot.paramMap.get('id'))
  //     .subscribe((movie) => {
  //       this.movie = movie;
  //       // console.log(this.movie);
  //     });
  // }

  // getTitle() {
  //   console.log(this.movie);
  // }
}

// Черновики + Наработки
// getId() {
//   this.movieId = this.route.snapshot.paramMap.get('id');
// }

// loadMovie() {
//   this.movieService.getMovie(this.movieId).subscribe((movie) => {
//     this.movie = movie;
//   });
// }

// LocalStorage
// favoritesList: [] = [];

// favoritesList: favoritesItem[] = [
// favoritesList: Array<favoritesItem> = [
//   {
//     name: 'name',
//     id: 'id',
//   },
// ];

// addToList() {
//   console.log('AddToList');
//   console.log(this.favoritesList);

//   console.log(this.movie);

//   let movieInfo: any = {
//     name: this.movie.Title,
//     id: this.movieId,
//   };

//   this.favoritesList.push(movieInfo);

//   console.log(this.favoritesList);
//   console.log(this.movie);
// }

// AddToLocalStorage() {
//   localStorage.setItem('Favorites List', JSON.stringify(this.favoritesList));
// }

// GetInLocalStorage() {
//   localStorage.getItem('Favorites List');
// }
