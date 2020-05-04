import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Book } from '../models/Book';
import { BookState } from '../state/book.state';
import { Observable } from 'rxjs';
import { RemoveBook } from '../actions/book.actions';
import { Genre } from '../models/Genre';
import { GenreState } from '../state/genre.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  
  // Bind books to observable
  @Select(BookState.getBooks) books$: Observable<Book[]>

  // Bind genres to observable
  @Select(GenreState.getGenres) genres$: Observable<Genre[]>

  // Select book from the state  
  constructor(private store: Store) {}

  // Method to dispatch RemoveBook action 
  delBook(title){
    this.store.dispatch(new RemoveBook(title))
  }

  ngOnInit(): void {}
}
