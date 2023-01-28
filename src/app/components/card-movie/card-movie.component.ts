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
    this.movieService
      .getMovie(this.route.snapshot.paramMap.get('id'))
      .subscribe((movie) => {
        this.movie = movie;
        console.log(movie);
      });
  }
}
