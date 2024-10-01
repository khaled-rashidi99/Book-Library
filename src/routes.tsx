import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/HomePage";
import NotFound from "./components/Pages/NotFoundPage";
import CartPage from "./components/Pages/CartPage";
import HistoryPage from "./components/Pages/HistoryPage";
import CheckoutPage from "./components/Pages/CheckoutPage";
import { BooksListPage } from "./components/Pages/BooksListPage";
import TermsConditionsPage from "./components/Pages/TermsConditionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/bookslist",
    element: <BooksListPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsConditionsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
