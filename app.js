// RecipeJS - Part 3: Expandable Cards with Recursive Steps and IIFE Structure
// Uses pure functions, higher-order functions, recursion, and IIFE module pattern

// IIFE Module: Encapsulates all RecipeJS functionality
const RecipeApp = (() => {
  // ============================================================
  // PRIVATE: Recipe data array (8 recipes with steps and ingredients)
  // ============================================================
  const recipes = [
    {
      id: 1,
      title: 'Garlic Lemon Pasta',
      time: 20,
      difficulty: 'easy',
      description: 'Quick pasta with garlic, lemon, and parmesan.',
      category: 'pasta',
      ingredients: ['400g pasta', '4 cloves garlic', '2 lemons', '100g parmesan', 'Salt and pepper', 'Olive oil'],
      steps: [
        'Bring a large pot of salted water to a boil',
        'Add pasta and cook according to package directions',
        {
          text: 'While pasta cooks, prepare the sauce',
          substeps: [
            'Mince 4 cloves of garlic',
            'Zest the lemons and juice them',
            'Heat olive oil in a pan over medium heat'
          ]
        },
        'When pasta is al dente, drain and reserve ½ cup pasta water',
        'Toss pasta with garlic sauce, lemon juice, and pasta water',
        'Top with freshly grated parmesan and serve immediately'
      ]
    },
    {
      id: 2,
      title: 'Classic Tomato Soup',
      time: 45,
      difficulty: 'easy',
      description: 'Comforting tomato soup with basil and cream.',
      category: 'soup',
      ingredients: ['2 cans crushed tomatoes', '1 onion', '3 cloves garlic', '4 cups vegetable broth', '200ml cream', 'Fresh basil', 'Salt and pepper'],
      steps: [
        'Dice one onion finely',
        'Heat olive oil in a large pot',
        'Sauté onion and garlic until fragrant',
        'Add crushed tomatoes and vegetable broth',
        'Simmer for 25-30 minutes',
        'Stir in cream and fresh basil',
        'Season with salt and pepper to taste',
        'Serve hot with crusty bread'
      ]
    },
    {
      id: 3,
      title: 'Chicken Tikka Masala',
      time: 75,
      difficulty: 'medium',
      description: 'Creamy spiced curry with tender chicken.',
      category: 'curry',
      ingredients: ['800g chicken breast', 'Greek yogurt', 'Ginger', 'Garlic', 'Tomato paste', 'Coconut milk', 'Spices (cumin, coriander, garam masala)', 'Fresh cilantro'],
      steps: [
        {
          text: 'Prepare chicken marinade',
          substeps: [
            'Cube 800g chicken breast',
            'Mix yogurt with ginger, garlic, and spices',
            'Coat chicken and marinate for at least 30 minutes',
            {
              text: 'Cook marinated chicken',
              substeps: [
                'Heat oil in a cast-iron skillet',
                'Cook chicken pieces until golden on all sides',
                'Remove chicken and set aside'
              ]
            }
          ]
        },
        'Make the tikka masala sauce',
        'Add tomato paste and spices to the same pan',
        'Pour in coconut milk and bring to simmer',
        'Return chicken to pan and simmer 20-25 minutes',
        'Garnish with fresh cilantro and serve with rice'
      ]
    },
    {
      id: 4,
      title: 'Veggie Stir Fry',
      time: 25,
      difficulty: 'easy',
      description: 'Colorful vegetables tossed in a tangy sauce.',
      category: 'stir-fry',
      ingredients: ['2 cups mixed vegetables', 'Soy sauce', 'Ginger', 'Garlic', 'Rice vinegar', 'Sesame oil', 'Cornstarch', 'Rice'],
      steps: [
        'Chop vegetables into bite-sized pieces',
        'Prepare sauce: soy sauce, vinegar, ginger, garlic, cornstarch',
        'Heat wok or large pan over high heat',
        'Add vegetables to hot pan and stir-fry 5-7 minutes',
        'Pour sauce over vegetables and toss until coated',
        'Serve over steamed rice'
      ]
    },
    {
      id: 5,
      title: 'Beef Bourguignon',
      time: 150,
      difficulty: 'hard',
      description: 'Slow-cooked beef in red wine with mushrooms.',
      category: 'stew',
      ingredients: ['1.5kg beef chuck', 'Red wine', 'Beef broth', 'Carrots', 'Pearl onions', 'Mushrooms', 'Tomato paste', 'Bay leaf', 'Thyme'],
      steps: [
        'Cut beef into 3cm cubes and pat dry',
        'Brown beef in batches in a hot Dutch oven',
        'Remove beef and set aside',
        'Sauté pearl onions and add tomato paste',
        'Deglaze with red wine, add beef broth and herbs',
        'Return beef to pot and bring to simmer',
        'Cover and cook in 325°F oven for 2 hours',
        'Add carrots and mushrooms, cook 45 more minutes',
        'Serve in bowls with crusty bread'
      ]
    },
    {
      id: 6,
      title: 'Sushi Rolls',
      time: 90,
      difficulty: 'hard',
      description: 'Hand-rolled sushi with seasoned rice and fillings.',
      category: 'seafood',
      ingredients: ['Sushi rice', 'Rice vinegar', 'Nori sheets', 'Fresh fish', 'Cucumber', 'Avocado', 'Wasabi', 'Pickled ginger', 'Soy sauce'],
      steps: [
        {
          text: 'Prepare sushi rice',
          substeps: [
            'Cook rice according to package directions',
            'Mix cooked rice with rice vinegar, sugar, and salt',
            'Let cool to room temperature'
          ]
        },
        'Set up bamboo sushi mat',
        'Place nori sheet shiny-side down on mat',
        'Spread thin layer of rice on nori, leaving ½ inch at top',
        'Add your fillings (fish, vegetables) in a line',
        'Roll tightly using the mat, sealing edge with water',
        'Slice with a wet, sharp knife',
        'Serve with wasabi, pickled ginger, and soy sauce'
      ]
    },
    {
      id: 7,
      title: 'Mediterranean Salad',
      time: 15,
      difficulty: 'medium',
      description: 'Fresh salad with olives, feta, and lemon vinaigrette.',
      category: 'salad',
      ingredients: ['Romaine lettuce', 'Cherry tomatoes', 'Cucumber', 'Red onion', 'Kalamata olives', 'Feta cheese', 'Lemon', 'Olive oil', 'Oregano'],
      steps: [
        'Chop romaine lettuce into bite-sized pieces',
        'Halve cherry tomatoes and slice cucumber',
        'Thinly slice red onion',
        'Combine all vegetables in a large bowl',
        'Prepare vinaigrette: lemon juice, olive oil, oregano, salt, pepper',
        'Toss salad with vinaigrette',
        'Top with kalamata olives and crumbled feta',
        'Serve immediately'
      ]
    },
    {
      id: 8,
      title: 'Slow-Roast Pork',
      time: 120,
      difficulty: 'hard',
      description: 'Tender pork roast with garlic and herbs.',
      category: 'roast',
      ingredients: ['2kg pork shoulder', 'Garlic', 'Fresh rosemary', 'Fresh thyme', 'Olive oil', 'Salt and pepper', 'Carrots', 'Potatoes'],
      steps: [
        'Preheat oven to 300°F',
        'Score the skin of pork shoulder in a crosshatch pattern',
        'Create garlic and herb paste with minced garlic, rosemary, and thyme',
        'Rub paste all over pork and season with salt and pepper',
        'Place pork in roasting pan, skin-side up',
        'Roast for 5-6 hours until skin is crackling and meat is tender',
        'Let rest 15 minutes before carving',
        'Serve with roasted carrots and potatoes'
      ]
    }
  ];

  // ============================================================
  // PRIVATE: STATE MANAGEMENT
  // ============================================================
  const appState = {
    currentFilter: 'all',
    currentSort: 'none',
    expandedCards: new Set() // Track which cards are expanded
  };

  // ============================================================
  // PRIVATE: PURE FILTER FUNCTIONS
  // ============================================================
  const filterByDifficulty = (difficulty) => (recipe) =>
    recipe.difficulty === difficulty;

  const filterByQuick = (recipe) =>
    recipe.time < 30;

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
        return () => true;
    }
  };

  const applyFilter = (recipesList, filterType) =>
    recipesList.filter(createFilterPredicate(filterType));

  // ============================================================
  // PRIVATE: PURE SORT FUNCTIONS
  // ============================================================
  const sortByName = (a, b) =>
    a.title.localeCompare(b.title);

  const sortByTime = (a, b) =>
    a.time - b.time;

  const createSortComparator = (sortType) => {
    switch (sortType) {
      case 'name':
        return sortByName;
      case 'time':
        return sortByTime;
      case 'none':
      default:
        return () => 0;
    }
  };

  const applySort = (recipesList, sortType) =>
    [...recipesList].sort(createSortComparator(sortType));

  // ============================================================
  // PRIVATE: RECURSIVE STEP RENDERING
  // ============================================================
  // Recursively renders steps, supporting nested substeps
  const renderStepsRecursively = (stepsArray, level = 0) => {
    if (!stepsArray || !Array.isArray(stepsArray)) return '';

    return stepsArray.map((step, index) => {
      if (typeof step === 'string') {
        // Simple text step
        return `
          <li class="step-item level-${level}">
            <strong>Step ${index + 1}:</strong> ${step}
          </li>
        `;
      } else if (typeof step === 'object' && step.text) {
        // Step with nested substeps
        const hasSubsteps = step.substeps && Array.isArray(step.substeps);
        return `
          <li class="step-item level-${level}">
            <strong>Step ${index + 1}:</strong> ${step.text}
            ${hasSubsteps ? `
              <ul class="substeps-list">
                ${renderStepsRecursively(step.substeps, level + 1)}
              </ul>
            ` : ''}
          </li>
        `;
      }
      return '';
    }).join('');
  };

  // ============================================================
  // PRIVATE: RENDERING FUNCTIONS
  // ============================================================
  const recipeContainer = document.querySelector('#recipe-container');

  const createRecipeCard = (recipe) => {
    const isExpanded = appState.expandedCards.has(recipe.id);
    const expandedClass = isExpanded ? 'expanded' : '';

    return `
      <div class="recipe-card ${expandedClass}" data-id="${recipe.id}">
        <div class="recipe-card-header">
          <h3>${recipe.title}</h3>
          <div class="recipe-meta">
            <span>⏱️ ${recipe.time} min</span>
            <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
          </div>
          <p>${recipe.description}</p>
        </div>

        <div class="recipe-card-actions">
          <button class="action-btn show-steps-btn" data-recipe-id="${recipe.id}" data-action="steps">
            📋 Show Steps
          </button>
          <button class="action-btn show-ingredients-btn" data-recipe-id="${recipe.id}" data-action="ingredients">
            🥘 Show Ingredients
          </button>
        </div>

        ${isExpanded ? `
          <div class="recipe-card-expanded">
            <div class="expanded-section ingredients-section">
              <h4>Ingredients</h4>
              <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li class="ingredient-item">${ingredient}</li>`).join('')}
              </ul>
            </div>

            <div class="expanded-section steps-section">
              <h4>Cooking Steps</h4>
              <ol class="steps-list">
                ${renderStepsRecursively(recipe.steps)}
              </ol>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  };

  const getFilteredAndSortedRecipes = (recipesList, filterType, sortType) => {
    const filtered = applyFilter(recipesList, filterType);
    const sorted = applySort(filtered, sortType);
    return sorted;
  };

  const renderRecipes = (list) => {
    const html = list.map(createRecipeCard).join('');
    recipeContainer.innerHTML = html;
  };

  const updateDisplay = () => {
    const filtered = getFilteredAndSortedRecipes(
      recipes,
      appState.currentFilter,
      appState.currentSort
    );
    renderRecipes(filtered);
  };



  // ============================================================
  // PRIVATE: EVENT HANDLING & EVENT DELEGATION
  // ============================================================
  const setupFilterButtons = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        appState.currentFilter = button.dataset.filter;
        appState.currentSort = 'none';
        updateSortUI();
        updateDisplay();
      });
    });
  };

  const setupSortButtons = () => {
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach((button) => {
      button.addEventListener('click', () => {
        sortButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        appState.currentSort = button.dataset.sort;
        updateDisplay();
      });
    });
  };

  const updateSortUI = () => {
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach((btn) => btn.classList.remove('active'));
    document.querySelector('[data-sort="none"]').classList.add('active');
  };

  // Event delegation for card expand/collapse buttons
  const setupCardEventDelegation = () => {
    recipeContainer.addEventListener('click', (event) => {
      const btn = event.target.closest('.action-btn');
      if (!btn) return;

      const recipeId = parseInt(btn.dataset.recipeId, 10);
      const action = btn.dataset.action;

      // Toggle expanded state
      if (appState.expandedCards.has(recipeId)) {
        appState.expandedCards.delete(recipeId);
      } else {
        appState.expandedCards.add(recipeId);
      }

      // Re-render to reflect expanded/collapsed state
      updateDisplay();
    });
  };

  // ============================================================
  // PUBLIC API (Exposed methods)
  // ============================================================
  return {
    init() {
      setupFilterButtons();
      setupSortButtons();
      setupCardEventDelegation();
      updateDisplay();
    },
    // Export for testing (optional)
    getRecipes: () => recipes,
    getAppState: () => appState,
    filterByDifficulty,
    filterByQuick,
    createFilterPredicate,
    applyFilter,
    sortByName,
    sortByTime,
    createSortComparator,
    applySort,
    getFilteredAndSortedRecipes,
    renderStepsRecursively,
    createRecipeCard,
    renderRecipes,
    updateDisplay
  };
})();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  RecipeApp.init();
});

// Export for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RecipeApp;
}
