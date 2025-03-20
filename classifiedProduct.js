const data = require("./data01.json");

const normalizeTitle = (title) => {
  return title.toLowerCase().split(" ").sort().join(" ");
};

const findCategory = (product, categories) => {
  const splitCategory = normalizeTitle(product.title);

  const foundCategory = categories.find(
    (title) => normalizeTitle(title.category) == splitCategory
  );

  return foundCategory;
};

const productClassifier = (productsList) => {
  const categories = [];

  if (productsList.length == 0) return categories;

  productsList.forEach((product) => {
    const categoryExists = findCategory(product, categories);

    if (categoryExists) {
      categoryExists.products.push({
        title: product.title,
        supermarket: product.supermarket,
      });

      categoryExists.count += 1;
    } else {
      categories.push({
        category: product.title,
        count: 1,
        products: [
          {
            title: product.title,
            supermarket: product.supermarket,
          },
        ],
      });
    }
  });

  return categories;
};

// If you want to see the result, just uncomment the console.log() below:
// And run in the terminal: node classifiedProduct.js
const result = productClassifier(data);
// console.log(result);
