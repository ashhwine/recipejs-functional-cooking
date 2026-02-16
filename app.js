// RecipeJS - Part 1: Rendering Foundation
// Renders 8 recipe cards dynamically using ES6 features

// Recipe data array (8 recipes)
const recipes = [
  { id: 1, title: 'Garlic Lemon Pasta', time: 20, difficulty: 'easy', description: 'Quick pasta with garlic, lemon, and parmesan.', category: 'pasta' },
  { id: 2, title: 'Classic Tomato Soup', time: 45, difficulty: 'easy', description: 'Comforting tomato soup with basil and cream.', category: 'soup' },
  { id: 3, title: 'Chicken Tikka Masala', time: 75, difficulty: 'medium', description: 'Creamy spiced curry with tender chicken.', category: 'curry' },
  { id: 4, title: 'Veggie Stir Fry', time: 25, difficulty: 'easy', description: 'Colorful vegetables tossed in a tangy sauce.', category: 'stir-fry' },
  { id: 5, title: 'Beef Bourguignon', time: 150, difficulty: 'hard', description: 'Slow-cooked beef in red wine with mushrooms.', category: 'stew' },
  { id: 6, title: 'Sushi Rolls', time: 90, difficulty: 'hard', description: 'Hand-rolled sushi with seasoned rice and fillings.', category: 'seafood' },
  { id: 7, title: 'Mediterranean Salad', time: 15, difficulty: 'medium', description: 'Fresh salad with olives, feta, and lemon vinaigrette.', category: 'salad' },
  { id: 8, title: 'Slow-Roast Pork', time: 120, difficulty: 'hard', description: 'Tender pork roast with garlic and herbs.', category: 'roast' }
];

// Select the recipe container
const recipeContainer = document.querySelector('#recipe-container');

// Create a recipe card HTML string
const createRecipeCard = (recipe) => `
  <div class="recipe-card" data-id="${recipe.id}">
    <h3>${recipe.title}</h3>
    <div class="recipe-meta">
      <span>⏱️ ${recipe.time} min</span>
      <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
    </div>
    <p>${recipe.description}</p>
  </div>
`;

// Render recipes into the DOM
const renderRecipes = (list) => {
  // Map each recipe to HTML and join into one string
  const html = list.map(createRecipeCard).join('');
  recipeContainer.innerHTML = html;
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes(recipes);
});

// Export for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { recipes, createRecipeCard, renderRecipes };
}
