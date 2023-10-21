import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'assets/data/books.json'; // Adjust the path to your JSON file

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  getBookById(id: number): Observable<Book | undefined> {
    return this.getBooks().pipe(
      map((books: Book[]) => books.find(book => book.id === id))
    );
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(this.baseUrl, book);
  }
}
