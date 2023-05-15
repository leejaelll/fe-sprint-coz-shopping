export default function useFetchBookmarkProducts() {
  const bookmarkProducts =
    JSON.parse(localStorage.getItem('bookmarkProducts')) || [];

  return bookmarkProducts;
}
