import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { format } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";
import { Borrowing } from "../../types";

function HistoryPage() {
  const [borrowings, setBorrowings] = useState<Borrowing[]>(() => {
    const storedBorrowings = localStorage.getItem("borrowings");
    return storedBorrowings ? JSON.parse(storedBorrowings) : [];
  });

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleOpenDialog = (id: string) => {
    setOpenDialogId(id);
  };

  const handleCloseDialog = () => {
    setOpenDialogId(null);
  };

  const handleMarkReturned = (id: string) => {
    setBorrowings((prevBorrowings) =>
      prevBorrowings.map((borrowing) =>
        borrowing.id === id ? { ...borrowing, returned: true } : borrowing
      )
    );
  };

  function areDatesEqual(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  const filteredBorrowings = selectedDate
    ? borrowings.filter((borrowing) =>
        areDatesEqual(new Date(borrowing.borrowDate), selectedDate.toDate())
      )
    : borrowings;

  React.useEffect(() => {
    localStorage.setItem("borrowings", JSON.stringify(borrowings));
  }, [borrowings]);

  return (
    <Container className="min-h-[calc(100dvh-20rem)]">
      <div className="flex justify-center items-center my-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Filter by Date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <TableContainer component={Paper} className="my-5">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Total Books</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBorrowings.map((borrowing) => (
              <TableRow key={borrowing.id}>
                <TableCell align="center">
                  {format(borrowing.borrowDate, "yyyy-MM-dd")}
                </TableCell>
                <TableCell align="center">{borrowing.books.length}</TableCell>
                <TableCell align="center">
                  {borrowing.returned ? "Returned" : "Not Returned"}
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleOpenDialog(borrowing.id)}>
                    View
                  </Button>
                  {!borrowing.returned &&
                    new Date(borrowing.dueDate).getTime() <=
                      new Date().getTime() && (
                      <Button onClick={() => handleMarkReturned(borrowing.id)}>
                        Mark as Returned
                      </Button>
                    )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={!!openDialogId} onClose={handleCloseDialog}>
        <DialogTitle>Borrowed Books</DialogTitle>
        <DialogContent>
          {openDialogId && (
            <List dense={false}>
              {borrowings
                .find((borrowing) => borrowing.id === openDialogId)
                ?.books.map((book) => (
                  <ListItem key={book.isbn13}>
                    <ListItemAvatar>
                      <Avatar src={book.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={book.title}
                      secondary={book.author}
                    />
                  </ListItem>
                ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default HistoryPage;
