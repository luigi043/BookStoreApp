import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent {

  books: any[] = [];
  book: any;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  orderBookNow(book: any) {
    // navigate to the 'order' page and pass the book's properties as query parameters
    
  }

}
