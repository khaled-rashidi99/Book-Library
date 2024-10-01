import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Book, Borrowing } from "../../types";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  fullName: string;
  libraryCardNumber: string;
}

const steps = [
  "Personal Information",
  "Library Card Information",
  "Summary and Confirmation",
];

function CheckoutPage() {
  const navigate = useNavigate();
  const dueDate: Date = useLocation().state?.dueDate;
  const cart = JSON.parse(localStorage.getItem("cart") ?? "[]") as Book[];
  console.log("here");

  useEffect(() => {
    if (!dueDate || cart.length === 0) {
      navigate("/");
    }
  }, []);

  function clearCart() {
    localStorage.removeItem("cart");
  }
  const [activeStep, setActiveStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      handleConfirmation(data);
    }
  };

  const handleConfirmation = (_: FormData) => {
    const confirmMessage = `Are you sure you want to borrow ${cart.length} book(s)?`;
    if (window.confirm(confirmMessage)) {
      alert("Borrowing successful! Thank you for using our library.");
      const borrow: Borrowing = {
        books: cart,
        borrowDate: new Date(),
        dueDate,
        returned: false,
        id: crypto.randomUUID(),
      };
      const borrowHistory = JSON.parse(
        localStorage.getItem("borrowings") ?? "[]"
      );
      localStorage.setItem(
        "borrowings",
        JSON.stringify([...borrowHistory, borrow])
      );
      clearCart();
      navigate("/history");
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              {...register("firstName", { required: "First name is required" })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              defaultValue=""
              autoComplete="off"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              defaultValue=""
              autoComplete="off"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              defaultValue=""
              autoComplete="off"
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="Full Name"
              {...register("fullName", { required: "Full name is required" })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              defaultValue=""
              autoComplete="off"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Library Card Number"
              {...register("libraryCardNumber", {
                required: "Library card number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Library card number must be 10 digits",
                },
              })}
              error={!!errors.libraryCardNumber}
              helperText={errors.libraryCardNumber?.message}
              defaultValue=""
            />
          </>
        );
      case 2:
        const formData = watch();
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Summary
            </Typography>
            <Typography>
              Name: {formData.firstName} {formData.lastName}
            </Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Library Card: {formData.libraryCardNumber}</Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Borrowed Books
            </Typography>
            <List>
              {cart.map((book) => (
                <ListItem key={book.isbn13}>
                  <ListItemText primary={book.title} sx={{ fontWeight: 700 }} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" gutterBottom>
              Total Books: {cart.length}
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderStepContent(activeStep)}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            {activeStep > 0 && (
              <Button
                onClick={() => setActiveStep((prevStep) => prevStep - 1)}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            )}
            <Button variant="contained" color="primary" type="submit">
              {activeStep === steps.length - 1 ? "Confirm Borrowing" : "Next"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default CheckoutPage;
