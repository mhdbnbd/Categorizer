import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter();

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses(){
    let classes = {
      book: true,
      'isCompleted': this.book.isCompleted
    }

    return classes;
  }

  onToggle(book){
    // Toggle in UI
    book.isCompleted = !book.isCompleted;
    // Toggle in server
    this.bookService.toggleCompleted(book).subscribe(book =>
      console.log(book));
  }

  onDelete(book){
    this.deleteBook.emit(book)
  }

}
