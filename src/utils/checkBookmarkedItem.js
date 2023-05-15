import useFetchBookmarkProducts from '../hooks/useFetchBookmarkProducts';
export default function checkBookmarkedItem(bookmarkProducts, searchProduct) {
  return bookmarkProducts
    .map((product) => product.id)
    .includes(searchProduct.id);
}
