import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { AddBook } from './../actions/book.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  // import Addbook from actions and dispatch it with properties

  addBook(title, genre) {
    this.store.dispatch(new AddBook({title: title, genre: genre}))
  }

  ngOnInit(): void {
  }

}
