import { Grid, CircularProgress } from "@mui/material";
import BookCard from "../BookCard";
import { useEffect, useState } from "react";
import { Book } from "../../types";
import { getBooks } from "../../services/books";

export function BooksListPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBooks();
      setBooks(books as Book[]);
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Grid
        spacing={4}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          books.slice(1, 13).map((book, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                p: 4,
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BookCard
                {...book}
                author={`Author ${i + 1}`}
                key={book.isbn13}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
