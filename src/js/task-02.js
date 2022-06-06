const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});

document.querySelector('#ingredients').append(...ingredientsEl);
