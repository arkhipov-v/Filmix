import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.scss'],
})
export class TableResultsComponent implements OnInit {
  displayedColumns: string[] = ['poster', 'name', 'year', 'type'];
  dataSource: any;
  movieData: any;

  currentPage: number = 1;
  currentName?: string;

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.searchMovies('game');
  }

  searchMovies(searchStr: string) {
    this.currentPage = 1;
    const buttonPrev = document.querySelector('.button-prev-page');
    buttonPrev?.setAttribute('disabled', '');

    this.service.getMovies(searchStr).subscribe((result) => {
      this.movieData = result.Search;
      this.currentName = searchStr;

      this.dataSource = new MatTableDataSource<any>(this.movieData);
    });
  }

  GetNextPage() {
    const buttonPrev = document.querySelector('.button-prev-page');

    this.currentPage++;

    if (this.currentPage >= 1) {
      buttonPrev?.removeAttribute('disabled');
    }

    this.service
      .getMovies(this.currentName, this.currentPage)
      .subscribe((result) => {
        this.movieData = result.Search;
        this.dataSource = new MatTableDataSource<any>(this.movieData);
      });
  }

  GetPrevPage() {
    const buttonPrev = document.querySelector('.button-prev-page');

    this.currentPage--;

    this.service
      .getMovies(this.currentName, this.currentPage)
      .subscribe((result) => {
        this.movieData = result.Search;
        this.dataSource = new MatTableDataSource<any>(this.movieData);
      });

    if (this.currentPage === 1) {
      buttonPrev?.setAttribute('disabled', '');
    }
  }
}
