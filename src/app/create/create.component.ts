import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddBook } from './../actions/book.actions';
import { AddGenre } from './../actions/genre.actions';
import { Observable } from 'rxjs';
import { Genre } from '../models/Genre';
import { GenreState } from '../state/genre.state';
import { RemoveGenre } from '../actions/genre.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    // Bind genres to observable
    @Select(GenreState.getGenres) genres$: Observable<Genre[]>

  constructor(private store: Store) { }

  // import AddBook and AddGenre from actions and dispatch them with their properties

  addBook(title, genre) {
    this.store.dispatch(new AddBook({title: title, genre: genre}))
  }

  addGenre(name) {
    this.store.dispatch(new AddGenre({name: name}))
  }

  // Method to dispatch RemoveGenre action 
  delGenre(name){
    this.store.dispatch(new RemoveGenre(name))
  }

  ngOnInit(): void {
  }

}
