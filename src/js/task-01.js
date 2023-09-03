const categoriesItemsRef = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesItemsRef.length);

categoriesItemsRef.forEach((category) => {
  console.log(
    `Category: ${category.firstElementChild.textContent}\n`,
    "Elements:",
    category.lastElementChild.children.length
  );
});

//* Дивіться прикол, 2 спосіб

// const categoriesListRef = document.querySelector("#categories");
// const categoriesItemsRef = categoriesListRef.children;

// console.log("Number of categories:", categoriesItemsRef.length);

// [...categoriesItemsRef].forEach((category) => {
//   console.log(
//     `Category: ${category.firstElementChild.textContent}\n`,
//     "Elements:",
//     category.lastElementChild.children.length
//   );
// });
