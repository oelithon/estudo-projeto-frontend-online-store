export async function getCategories() {
  const endpointUrl = 'https://api.mercadolibre.com/sites/MLB/categories';

  const response = await fetch(endpointUrl);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpointQueryAndCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  const response = await fetch(endpointQueryAndCategory);
  const data = await response.json();
  return data;
}
