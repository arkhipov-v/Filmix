import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Start Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// Components
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ListResultsComponent } from './components/list-results/list-results.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableResultsComponent } from './components/table-results/table-results.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UiComponent } from './pages/ui/ui.component';
import { LogoComponent } from './components/logo/logo.component';
// --- NEW
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ListResultsComponent,
    PaginationComponent,
    HeaderComponent,
    SelectComponent,
    SearchComponent,
    FooterComponent,
    TableResultsComponent,
    CardMovieComponent,
    FavoritesComponent,
    MovieDetailComponent,
    PageNotFoundComponent,
    UiComponent,
    LogoComponent,
  ],
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

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
