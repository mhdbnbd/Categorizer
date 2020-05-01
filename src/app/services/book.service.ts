import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from
'@angular/common/http';

import { Book } from '../models/Book'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl:string = 'https://jsonplaceholder.typicode.com/albums';
  booksLimit = '?_limit=5';

  constructor(private http:HttpClient) { }
  // Get Books
  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(`${this.booksUrl}${this.booksLimit}`);
  }

  // Delete Book
  deleteBook(book: Book):Observable<Book> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.delete<Book>(url, httpOptions);
  }

  //Add Book
  addBook(book:Book):Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }


  // Toggle Completed
  toggleCompleted(book: Book):Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, httpOptions)
  }
}
