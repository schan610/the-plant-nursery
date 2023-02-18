// /api/get-products
// Gets all featured products

async function handler(req, res) {
  const response = await fetch("http://localhost:3000/api/products");
  const allProducts = await response.json();
  const featuredProducts = allProducts.filter(
    (product) => product.featured === true
  );

  res.send(featuredProducts);
}

export default handler;
