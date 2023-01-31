import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.GetAll();
  }
  GetAll() {
    this.service.getAllMovies().subscribe((result) => {
      this.movieData = result.Search;
      console.log(result);

      this.dataSource = new MatTableDataSource<any>(this.movieData);
      this.dataSource.paginator = this.paginator;
    });
  }

  // Old
  // GetAll() {
  //   this.service.getAllMovies().subscribe((result) => {
  //     this.movieData = result.Search;

  //     this.dataSource = new MatTableDataSource<any>(this.movieData);
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }

  // getForNameMovie(searchStr: string) {
  //   this.service.getForName(searchStr).subscribe((resultSearch) => {
  //     this.movieData = resultSearch.Search;

  //     this.dataSource = new MatTableDataSource<any>(this.movieData);
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }
}
