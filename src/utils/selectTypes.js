export default function selectTypes(products) {
  const sortedTypes = products.map((products) => products.type).sort();
  return ['Total', ...new Set(sortedTypes)];
}
