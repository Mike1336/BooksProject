import { Component, OnInit } from '@angular/core';

import { BooksService } from './../../services/books.service';
import { IBook } from './../../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  public ngOnInit(): void {
    // this.booksService.getBooks()
    //   .subscribe(
    //     (el) => {
    //       console.log(el);
    //     });
    // this.booksService.getBookById(1)
    //   .subscribe(
    //       (el) => {
    //         console.log(el);
    //       });
    // this.booksService.getBookByAuthor(3)
    //   .subscribe(
    //         (el) => {
    //           console.log(el);
    //         });
  }

}
