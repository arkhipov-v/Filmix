import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
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

  currentPage = 1;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.service.getAllMovies(this.currentPage).subscribe((result) => {
      this.movieData = result.Search;
      console.log(result);

      this.dataSource = new MatTableDataSource<any>(this.movieData);
    });
  }

  GetAllNextPage() {
    const buttonPrev = document.querySelector('.button-prev-page');

    this.currentPage++;

    if (this.currentPage >= 1) {
      buttonPrev?.removeAttribute('disabled');
    }

    this.service.getAllMovies(this.currentPage).subscribe((result) => {
      this.movieData = result.Search;
      console.log(result);

      this.dataSource = new MatTableDataSource<any>(this.movieData);
    });
  }

  GetAllPrevPage() {
    const buttonPrev = document.querySelector('.button-prev-page');

    this.currentPage--;
    console.log(this.currentPage);

    this.service.getAllMovies(this.currentPage).subscribe((result) => {
      this.movieData = result.Search;
      console.log(result);

      this.dataSource = new MatTableDataSource<any>(this.movieData);
    });
    if (this.currentPage === 1) {
      console.log('currentPage = 1');
      buttonPrev?.setAttribute('disabled', '');
    }
  }

  getForNameMovie(searchStr: string) {
    this.service.getForName(searchStr).subscribe((resultSearch) => {
      this.movieData = resultSearch.Search;

      this.dataSource = new MatTableDataSource<any>(this.movieData);
    });
  }
}
