export default function removeBookmarkProducts(removeProduct) {
  console.log(removeProduct);
  // localStorage가 아무것도 없다면?
  const existingItems = JSON.parse(localStorage.getItem('bookmarkProducts'));

  // 제거할 아이템을 제외한 새로운 배열 생성
  const updatedItems = existingItems.filter(
    (item) => item.id !== removeProduct.id
  );
  // 배열을 문자열로 변환하여 로컬 스토리지에 저장
  localStorage.setItem('bookmarkProducts', JSON.stringify(updatedItems));
}
