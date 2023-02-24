// useSort takes in components current displayed products, current sort, and returns sorted Products
export const sortProducts = (products, curSort) => {
  switch (curSort) {
    case "featured": {
      console.log(`inhere`);
      const curProducts = [...products];
      const featuredProducts = curProducts.filter(
        (product) => product.featured
      );
      console.log(featuredProducts);
      const unfeaturedProducts = curProducts.filter(
        (product) => !product.featured
      );
      const sortedProducts = [...featuredProducts, ...unfeaturedProducts];
      return sortedProducts;
    }
    case "priceHighLow": {
      // sort products with prices high to low
      const curProducts = [...products];
      const sortedProducts = curProducts.sort((a, b) => {
        console.log(typeof b.price);
        return +b.price - +a.price;
      });

      return sortedProducts;
    }
    case "priceLowHigh": {
      // sort products with prices high to low
      const curProducts = [...products];
      const sortedProducts = curProducts.sort((a, b) => {
        return +a.price - +b.price;
      });

      return sortedProducts;
    }
  }

  return products;
};
