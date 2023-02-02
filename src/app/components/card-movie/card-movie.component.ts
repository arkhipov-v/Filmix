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
    this.loadMovie();
  }

  loadMovie() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieForId(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  // LocalStorage
  favoritesList: any = [];

  addToList() {
    this.favoritesList = JSON.parse(
      localStorage.getItem('Favorites List') || '[]'
    );

    let movieInfo: any = {
      name: this.movie.Title,
      id: this.movie.imdbID,
    };

    this.favoritesList.push(movieInfo);

    localStorage.setItem('Favorites List', JSON.stringify(this.favoritesList));
  }
}
