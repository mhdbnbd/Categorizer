import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();

  title;string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const book = {
      title: this.title,
      completed: false
    }

    this.addBook.emit(book);


  }

}
