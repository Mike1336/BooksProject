import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';
<<<<<<< HEAD

const routes: Routes = [
  {
    path: ':number',
    component: BooksComponent,
  },
  {
    path: '**',
    redirectTo: '1',
  },
=======
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:id', component: DetailsComponent },
>>>>>>> book-page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {

}
