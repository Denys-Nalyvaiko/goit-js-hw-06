const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

function markupIngredientList(arrOfIngredients) {
  return arrOfIngredients.map((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add("item");

    return ingredientItem;
  });
}

ingredientsListRef.append(...markupIngredientList(ingredients));
