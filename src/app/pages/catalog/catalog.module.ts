import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CatalogComponent } from './catalog.component';
import { TableResultsComponent } from 'src/app/components/table-results/table-results.component';

@NgModule({
  declarations: [CatalogComponent, TableResultsComponent],
  imports: [
    // Angular Material
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,

    CommonModule,
    RouterModule.forChild([{ path: '', component: CatalogComponent }]),
  ],
})
export class CatalogModule {}
