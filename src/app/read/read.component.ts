import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Book } from '../models/Book'
import { BookState } from '../state/book.state'
import { Observable } from 'rxjs'
import { RemoveBook } from '../actions/book.actions'
import { UpdateBook } from '../actions/book.actions'


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  
  // Bind books to observable

  @Select(BookState.getBooks) books$: Observable<Book[]>

  // Select book from the state  
  constructor(private store: Store) {}

  // Method to dispatch RemoveBook action 

  delBook(title){
    this.store.dispatch(new RemoveBook(title))
  }

  updateBook(payload: Book, title){
    this.store.dispatch(new UpdateBook(payload, title))
  }
  
  ngOnInit(): void {}

}
