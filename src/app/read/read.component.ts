import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Book } from '../models/Book'
import { Genre } from '../models/Genre'
import { BookState } from '../state/book.state'
import { GenreState } from '../state/genre.state'
import { Observable } from 'rxjs'
import { RemoveBook } from '../actions/book.actions'
import { RemoveGenre } from '../actions/genre.actions'

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

  // Method to dispatch RemoveGenre action 
  delGenre(name){
    this.store.dispatch(new RemoveGenre(name))
  }

/*
  updateBook(payload: Book, title){
    this.store.dispatch(new UpdateBook(payload, title))
  }
  */
  
  ngOnInit(): void {}

}
