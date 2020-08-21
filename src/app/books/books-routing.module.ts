import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books/books.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: BooksComponent },
    { path: 'books', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {

}
