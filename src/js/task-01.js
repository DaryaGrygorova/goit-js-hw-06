const categoriesItems = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(element => {
  const categoryTitle = element.querySelector('h2');
  const categoryItems = element.querySelectorAll('li');
  console.log('Category:', categoryTitle.textContent, '\nElements:', categoryItems.length);
});
