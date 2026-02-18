// RecipeJS - Part 2: Filtering and Sorting with Functional Programming
// Uses pure functions, higher-order functions, and immutable operations

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

// ============================================================
// PURE FILTER FUNCTIONS
// ============================================================

// Pure function: Filter by difficulty
const filterByDifficulty = (difficulty) => (recipe) => 
  recipe.difficulty === difficulty;

// Pure function: Filter by quick (under 30 minutes)
const filterByQuick = (recipe) => 
  recipe.time < 30;

// Pure function: Compose filter based on filter type
// Higher-order function that returns a filter function
const createFilterPredicate = (filterType) => {
  switch (filterType) {
    case 'easy':
      return filterByDifficulty('easy');
    case 'medium':
      return filterByDifficulty('medium');
    case 'hard':
      return filterByDifficulty('hard');
    case 'quick':
      return filterByQuick;
    case 'all':
    default:
      return () => true; // Return all recipes
  }
};

// Pure function: Apply filter to recipes
// Uses higher-order function (filter method is a higher-order function)
const applyFilter = (recipesList, filterType) =>
  recipesList.filter(createFilterPredicate(filterType));

// ============================================================
// PURE SORT FUNCTIONS
// ============================================================

// Pure function: Sort by name (A-Z)
const sortByName = (a, b) =>
  a.title.localeCompare(b.title);

// Pure function: Sort by time (fastest first)
const sortByTime = (a, b) =>
  a.time - b.time;

// Pure function: Compose sort comparator based on sort type
// Higher-order function that returns a comparator
const createSortComparator = (sortType) => {
  switch (sortType) {
    case 'name':
      return sortByName;
    case 'time':
      return sortByTime;
    case 'none':
    default:
      return () => 0; // Maintain original order
  }
};

// Pure function: Apply sort to recipes
// Creates a new sorted array without mutating the original
const applySort = (recipesList, sortType) =>
  [...recipesList].sort(createSortComparator(sortType));

// ============================================================
// STATE MANAGEMENT
// ============================================================

// State object to track current filter and sort
const appState = {
  currentFilter: 'all',
  currentSort: 'none'
};

// Pure function: Update application state
// Returns new state object without mutating the original
const updateAppState = (state, updates) => ({
  ...state,
  ...updates
});

// ============================================================
// CENTRAL UPDATE DISPLAY FUNCTION
// ============================================================

// Pure function: Get filtered and sorted recipes
const getFilteredAndSortedRecipes = (recipesList, filterType, sortType) => {
  const filtered = applyFilter(recipesList, filterType);
  const sorted = applySort(filtered, sortType);
  return sorted;
};

// Render function
const recipeContainer = document.querySelector('#recipe-container');

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

// Higher-order function: Render recipes to DOM
const renderRecipes = (list) => {
  const html = list.map(createRecipeCard).join('');
  recipeContainer.innerHTML = html;
};

// CENTRAL UPDATE DISPLAY: Combines filter, sort, and render
const updateDisplay = () => {
  const filtered = getFilteredAndSortedRecipes(
    recipes,
    appState.currentFilter,
    appState.currentSort
  );
  renderRecipes(filtered);
};

// ============================================================
// EVENT LISTENERS & UI INTERACTIONS
// ============================================================

// Handle filter button clicks
const setupFilterButtons = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Update state with new filter
      appState.currentFilter = button.dataset.filter;
      // Reset sort when filter changes
      appState.currentSort = 'none';
      updateSortUI();
      updateDisplay();
    });
  });
};

// Handle sort button clicks
const setupSortButtons = () => {
  const sortButtons = document.querySelectorAll('.sort-btn');
  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      sortButtons.forEach((btn) => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Update state with new sort
      appState.currentSort = button.dataset.sort;
      updateDisplay();
    });
  });
};

// Update sort UI to reflect current state
const updateSortUI = () => {
  const sortButtons = document.querySelectorAll('.sort-btn');
  sortButtons.forEach((btn) => btn.classList.remove('active'));
  // Highlight the default sort button
  document.querySelector('[data-sort="none"]').classList.add('active');
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  setupFilterButtons();
  setupSortButtons();
  updateDisplay();
});

// Export for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    recipes,
    filterByDifficulty,
    filterByQuick,
    createFilterPredicate,
    applyFilter,
    sortByName,
    sortByTime,
    createSortComparator,
    applySort,
    getFilteredAndSortedRecipes,
    createRecipeCard,
    renderRecipes,
    updateDisplay
  };
}
