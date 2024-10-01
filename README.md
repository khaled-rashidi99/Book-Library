# iBook Library React App

This Book Library app is a modern web application developed using React and Material-UI (MUI) to provide a seamless and interactive user experience for book lovers. It allows users to browse a collection of books, select them for borrowing, and manage their borrowing history.

## Features

- **React**: Utilizes the latest React features for efficient updating and rendering of components.

- **Material-UI (MUI)**: Implements Material-UI for a polished, responsive design.

- **API Integration**: Fetches books from a remote API to ensure a dynamic and up-to-date collection.

- **React Router**: Leverages React Router for seamless navigation between different pages and views within the app.

- **Local Storage**: Uses local storage to persistently store data for cart functionality and pass other global data between pages.

- **Responsive Design**: Adapts gracefully to different screen sizes and devices.

## App Sections

### Home Page

- **Book Cards**: Displays book cards featuring the image, title, author, and a brief description.
- **Borrow Book Option**: Each book card has an option to Borrow Book "Add To Cart", allowing users to pick multiple books.
- **Navigation to Cart**: After selecting books, users can navigate to the cart to review their choices.

### Cart Page

- **Selected Books**: Lists all the selected books with detailed information.
- **Borrowing Period**: Users can set a borrowing period (e.g., 1 week, 2 weeks, 1 month) for all chosen books.
- **Return Date**: Calculates and displays the return date based on the selected borrowing period from the current date.
- **Total Quantity**: Shows the total number of borrowed books.
- **Terms and Conditions**: Includes a checkbox for users to agree on terms and conditions before proceeding to checkout.

### Checkout Page

- **Multi-Step Form with Validation**: Guides users through the checkout process, ensuring all required information is provided.

  - **Step 1**: Collects personal information.
  - **Step 2**: Asks for library card information (full name, library card number).
  - **Step 3**: Provides a summary of entered data, lists borrowed books with due dates, displays the total number of borrowed books, and includes a confirmation button using the "confirm" window method.

### Borrowing History Page

- **Previous Borrowings**: Lists all previous borrowing records in a table format with the date, total books, and a button to view borrowed books.
- **Filter by Date**: Allows users to filter borrowing records by date.
- **Status**: Reflects whether books have been returned or not.
- **Action to Return Books**: Adds an action button to change the status to "returned", which becomes available after the selected return date.

© Copyright 2024. Made with ❤️
