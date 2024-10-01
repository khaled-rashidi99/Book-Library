import { Book } from "../types";

export async function getBooks(): Promise<Book[]> {
  try {
    const response = await fetch("https://api.itbook.store/1.0/new");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data["books"] as Book[];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

export function addToCart(book: Book) {
  const cartItems = localStorage.getItem("cart");
  if (!cartItems) {
    localStorage.setItem("cart", JSON.stringify([book]));
  } else {
    localStorage.setItem(
      "cart",
      JSON.stringify([...JSON.parse(cartItems), book])
    );
  }
}
