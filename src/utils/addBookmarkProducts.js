export default function addBookmarkProducts(addProduct) {
  // localStorage가 아무것도 없다면?
  const existingItems =
    JSON.parse(localStorage.getItem('bookmarkProducts')) || [];

  // 새로운 요소 추가
  const updatedItems = [...existingItems, addProduct];
  localStorage.setItem('bookmarkProducts', JSON.stringify(updatedItems));
}
