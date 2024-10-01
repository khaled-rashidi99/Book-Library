import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Box,
  Divider,
  SelectChangeEvent,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import { format, addDays } from "date-fns";
import { Book, BorrowingPeriod } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const borrowingPeriods = [
  { value: "7", label: "1 Week" },
  { value: "14", label: "2 Weeks" },
  { value: "30", label: "1 Month" },
  { value: "60", label: "2 Months" },
];

function CartPage() {
  const navigate = useNavigate();
  const today = new Date();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") ?? "[]") as Book[]
  );

  const [borrowingPeriod, setBorrowingPeriod] = useState<BorrowingPeriod>("7");

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [dueDate, setDueDate] = useState<Date>(
    addDays(today, parseInt(borrowingPeriod))
  );

  const handleBorrowingPeriodChange = (
    event: SelectChangeEvent<BorrowingPeriod>
  ) => {
    setBorrowingPeriod(event.target.value as BorrowingPeriod);
    setDueDate(addDays(today, parseInt(event.target.value)));
  };

  const handleAgreeToTermsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAgreeToTerms(event.target.checked);
  };

  const handleCheckout = () => {
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions before proceeding.");
      return;
    }
    navigate("/checkout", { state: { dueDate } });
    console.log("Proceeding to checkout");
  };

  function deleteItem(isbn13: number) {
    const filteredCart = cart.filter((book) => isbn13 !== book.isbn13);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  }
  return (
    <Container
      maxWidth="md"
      className="min-h-[calc(100dvh-20rem)]"
      sx={{ mt: 2 }}
    >
      <div className="flex justify-center items-center">
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
      </div>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {cart.length > 0
            ? "Selected Books"
            : "You don't have any books in your cart yet."}
        </Typography>
        {cart.length > 0 && (
          <List>
            {cart.map((book: Book, index: number) => (
              <React.Fragment key={book.isbn13}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteItem(book.isbn13)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={book.image} sx={{ width: 100, height: 100 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={book.title}
                    secondary={`| ${book.author} |`}
                  />
                </ListItem>

                {index < cart.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </Paper>

      {cart.length > 0 && (
        <>
          <div className="flex justify-end ">
            <Button
              sx={{
                m: 2,
              }}
              onClick={() => {
                localStorage.removeItem("cart");
                setCart([]);
              }}
            >
              Clear Cart
              <DeleteIcon />
            </Button>
          </div>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Borrowing Details
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="borrowing-period-label">
                Borrowing Period
              </InputLabel>
              <Select<BorrowingPeriod>
                labelId="borrowing-period-label"
                id="borrowing-period"
                value={borrowingPeriod}
                label="Borrowing Period"
                onChange={handleBorrowingPeriodChange}
                disabled={cart.length === 0}
              >
                {borrowingPeriods.map((period) => (
                  <MenuItem key={period.value} value={period.value}>
                    {period.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography variant="body1">
              Return Date: {format(dueDate, "MMMM dd, yyyy")}
            </Typography>
          </Paper>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">
              Total Books Borrowed: {cart.length}
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreeToTerms}
                onChange={handleAgreeToTermsChange}
                name="agreeToTerms"
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{" "}
                <Link href="/terms-and-conditions" target="_blank">
                  Terms and Conditions
                </Link>
              </Typography>
            }
          />
          <Box sx={{ m: 3 }}>
            <Button
              variant="contained"
              color="info"
              component="a"
              href="/bookslist"
              sx={{ m: 2 }}
            >
              Back To List
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCheckout}
              disabled={!agreeToTerms}
              sx={{ m: 2 }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default CartPage;
