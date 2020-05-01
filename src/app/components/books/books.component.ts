import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'
import { Book } from '../../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      
    });
  }

  deleteBook(book:Book) {
    // Delete from UI
    this.books = this.books.filter(b => b.id !== book.id);
    // Delete from server
    this.bookService.deleteBook(book).subscribe();
  }

  addBook(book:Book) {
    this.bookService.addBook(book).subscribe(book => {
      this.books.push(book);

    });
  }

}
