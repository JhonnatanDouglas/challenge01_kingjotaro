
## Code Challenge: Categorization - Complete Solution 🌟

### Description 📝

#### This repository contains the solution for the supermarket product categorization challenge. The goal was to create an intelligent algorithm capable of identifying and grouping similar products, even with slight variations in their names or descriptions. The solution was developed using Node.js 🚀.

#### How does the code work? 🔧

- Step 1: **Title Normalization Function** 🏷️

  - The algorithm begins by normalizing product titles. This step converts the titles to lowercase and arranges the words in alphabetical order to ensure that variations in word order or capitalization do not affect categorization.

- Step 2: **Category Identification Function** 🔍

  - The findCategory function compares the normalized title of a product with the already categorized normalized titles. If the product belongs to an existing category, it will be added to the corresponding category.

- Step 3: **Product Classification Function** 📊
  - Products are analyzed and classified into categories. The productClassifier function iterates through the list of products and groups those that belong to the same category, considering title variations.

## How to run: ⚙️

Requirements: Node.js 🖥️

### Instructions:

1. Clone the repository to your local machine:

```
git clone <repository-link> 📥
```

2. Access the project folder:

```
cd <repository-name> 📂
```

3. Uncomment console.log(result); on line 52 in the classifiedProduct.js file.

4. Run the script to classify the products:

```
node classifiedProduct.js ▶️
```

5. **The result will be printed in the terminal, containing the categories and their respective products**.

#

### Original Challenge Readme... 📚

## Code Challenge: Categorization

### Context 📍

You are developing a system for a price comparison tool that needs to identify when different supermarkets sell the same product, even when the names have slight variations.

### Objective 🎯

Develop an intelligent algorithm that categorizes supermarket products.

1. **Equivalent products from different supermarkets, even with description variations** 🛒

   - Example: "Arroz Branco Tio João 5kg" and "Arroz Tio João Branco 5kg" are the same product.

2. **Similar but distinct products** ⚖️

   - Example: "Arroz Branco Tio João 5kg" and "Arroz Integral Tio João 5kg" are different products.

3. **Products with different sizes/quantities** 🔢
   - Example: "Leite Integral Italac 1L" and "Leite Integral Italac 2L" should be categorized separately.

## Technical Requirements 🛠️

### Mandatory:

- Node.js 💻

- Implement a function that reads the data01.json file and returns a JSON with categorized and counted data.
- The function must be able to identify equivalent products even with:
  - Different word orders.
  - Slight description variations.
  - Capitalization differences.
- The function must separate products with:
  - Different types (e.g., whole vs. skimmed).
  - Different brands (e.g., Italac vs. Piracanjuba).
  - Different sizes/quantities (e.g., 1L vs. 2L).

- The output must include:
  - Category name.
  - Product count.
  - List of products in the category.

## Example 🖼️

### Input

```json
[
  { "id": 1, "title": "Leite Integral Piracanjuba 1L", "supermarket": "Supermercado A" },
  { "id": 2, "title": "Leite Piracanjuba Integral 1L", "supermarket": "Supermercado B" },
  { "id": 3, "title": "Leite Integral Italac 1L", "supermarket": "Supermercado A" },
  { "id": 4, "title": "Leite Italac Integral 1L", "supermarket": "Supermercado C" },
  { "id": 5, "title": "Leite Parmalat Integral 1L", "supermarket": "Supermercado D" },
  { "id": 6, "title": "Leite Desnatado Piracanjuba 1L", "supermarket": "Supermercado A" },
  { "id": 7, "title": "Piracanjuba Leite Desnatado 1L", "supermarket": "Supermercado B" },
  { "id": 8, "title": "Leite Semi-Desnatado Piracanjuba 1L", "supermarket": "Supermercado A" },
  { "id": 9, "title": "Leite Piracanjuba Semi Desnatado 1 Litro", "supermarket": "Supermercado C" },
  { "id": 10, "title": "Arroz Branco Tio João 5kg", "supermarket": "Supermercado A" },
  { "id": 11, "title": "Arroz Tio João Branco 5kg", "supermarket": "Supermercado B" },
  { "id": 12, "title": "Arroz Tio João Integral 5kg", "supermarket": "Supermercado A" }
]
```

## Expected Output 📊

```json
[
  {
    "category": "Leite Integral Piracanjuba 1L",
    "count": 2,
    "products": [
      { "title": "Leite Integral Piracanjuba 1L", "supermarket": "Supermercado A" },
      { "title": "Leite Piracanjuba Integral 1L", "supermarket": "Supermercado B" }
    ]
  },
  {
    "category": "Leite Integral Italac 1L",
    "count": 2,
    "products": [
      { "title": "Leite Integral Italac 1L", "supermarket": "Supermercado A" },
      { "title": "Leite Italac Integral 1L", "supermarket": "Supermercado C" }
    ]
  }
]
```

After completion, submit the repository link and information to the Google Forms (link removed).

## Evaluation Criteria 🎓:

- Highest score 🏆
- Best code understanding 🧑‍💻
- Fastest delivery ⏳
