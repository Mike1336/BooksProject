import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {
    path: ':number',
    component: BooksComponent,
  },
  {
    path: '**',
    redirectTo: '1',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {

}
