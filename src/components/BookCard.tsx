import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Book } from "../types";
import { addToCart } from "../services/books";
import { useState } from "react";

function BookCard(book: Book) {
  const cart: Book[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const [disabled, setDisabled] = useState(
    !!cart.find((b) => b.isbn13 === book.isbn13)
  );
  const [buttonText, setButtonText] = useState(
    !!cart.find((b) => b.isbn13 === book.isbn13)
      ? "Added To Cart ✔"
      : "Add To Cart "
  );

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          maxWidth: { xs: "100%", sm: 600 },
          width: "fill",
          height: 400,
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "30%", sm: 500 },
            height: { xs: 200, sm: 300 },
            alignSelf: { xs: "center" },
          }}
          image={book.image}
        />
        <CardContent className="flex flex-col items-center justify-center mb-2">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={700}
          >
            {book.title}
          </Typography>
          <Typography gutterBottom variant="h6" color="darkred" component="div">
            | {book.author} |
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptatibus aliquam quos ab sed dolores dolorum iure?
          </Typography>
          <CardActions
            className="mt-5"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              disabled={disabled}
              size="small"
              onClick={() => {
                addToCart(book);
                setDisabled(true);
                setButtonText("Added To Cart ✔");
              }}
            >
              {buttonText}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookCard;
