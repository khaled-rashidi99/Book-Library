export interface Book {
  title: string;
  isbn13: number;
  image: string;
  author: string;
}

export type BorrowingPeriod = "7" | "14" | "30" | "60";

export interface Borrowing {
  id: string;
  books: Book[];
  dueDate: Date;
  borrowDate: Date;
  returned: boolean;
}
