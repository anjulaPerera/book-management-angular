import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  @Input() book?: Book;
  bookForm: FormGroup;
  isEdit = false;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      publicationDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.book) {
      this.isEdit = true;
      this.bookForm.patchValue(this.book);
    }
  }

  onSubmit(): void {
    const book: Book = this.bookForm.value;
    if (this.isEdit) {
      this.bookService.updateBook({ ...this.book, ...book }).subscribe();
    } else {
      this.bookService.addBook(book).subscribe();
    }
  }
}
