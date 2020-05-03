import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { AddBook } from './../actions/book.actions'
import { AddGenre } from './../actions/genre.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  // import AddBook and AddGenre from actions and dispatch them with their properties

  addBook(title, genre) {
    this.store.dispatch(new AddBook({title: title, genre: genre}))
  }

  addGenre(name) {
    this.store.dispatch(new AddGenre({name: name}))
  }

  ngOnInit(): void {
  }

}
