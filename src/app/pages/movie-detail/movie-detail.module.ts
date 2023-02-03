import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { MovieDetailComponent } from 'src/app/pages/movie-detail/movie-detail.component';
import { CardMovieComponent } from 'src/app/components/card-movie/card-movie.component';

@NgModule({
  declarations: [MovieDetailComponent, CardMovieComponent],
  imports: [
    // Angular Material
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,

    CommonModule,
    RouterModule.forChild([{ path: '', component: MovieDetailComponent }]),
  ],
})
export class MovieDetailModule {}
