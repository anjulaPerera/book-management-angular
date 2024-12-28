import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
})
export class BookListComponent {
  books = [
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
  ];
  displayedColumns: string[] = ['id', 'title', 'author', 'actions'];

  onAddBook() {
    console.log('Add Book');
  }

  onEditBook(book: any) {
    console.log('Edit Book', book);
  }

  onDeleteBook(bookId: number) {
    console.log('Delete Book', bookId);
  }
}
