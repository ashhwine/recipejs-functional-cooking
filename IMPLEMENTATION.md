# RecipeJS Part 2: Filter & Sort Implementation

## Overview
This document explains the functional programming implementation for recipe filtering and sorting.

## Architecture

### 1. Pure Functions

#### Filter Functions
```javascript
// Pure function: Returns true/false based on recipe difficulty
filterByDifficulty(difficulty) => (recipe) => recipe.difficulty === difficulty

// Pure function: Returns true/false if recipe time < 30 min
filterByQuick(recipe) => recipe.time < 30
```

#### Sort Functions
```javascript
// Pure function: Compare two recipes alphabetically
sortByName(a, b) => a.title.localeCompare(b.title)

// Pure function: Compare two recipes by time
sortByTime(a, b) => a.time - b.time
```

### 2. Higher-Order Functions

These functions return other functions, enabling composition and reusability.

```javascript
// Returns a predicate function based on filter type
createFilterPredicate(filterType) => {
  // Returns appropriate filter function (pure)
}

// Returns a comparator function based on sort type
createSortComparator(sortType) => {
  // Returns appropriate comparator (pure)
}
```

### 3. Immutable Operations

**Key Principle**: Never mutate the original recipes array.

```javascript
// applyFilter: Returns NEW filtered array (original unchanged)
applyFilter(recipesList, filterType) => 
  recipesList.filter(createFilterPredicate(filterType))

// applySort: Returns NEW sorted array using spread operator
applySort(recipesList, sortType) => 
  [...recipesList].sort(createSortComparator(sortType))
```

### 4. State Management

```javascript
// State object (single source of truth)
const appState = {
  currentFilter: 'all',
  currentSort: 'none'
};

// Pure state update function (creates new object)
const updateAppState = (state, updates) => ({
  ...state,      // Spread original state
  ...updates     // Override with new values
});
```

### 5. Central Update Display Function

This is the orchestrator that combines filter, sort, and render:

```javascript
const updateDisplay = () => {
  // 1. Compose: Filter then sort
  const filtered = getFilteredAndSortedRecipes(
    recipes,
    appState.currentFilter,
    appState.currentSort
  );
  
  // 2. Render to DOM
  renderRecipes(filtered);
};
```

## Data Flow

```
User Click (Filter/Sort Button)
    ↓
Event Listener
    ↓
Update appState (immutable update)
    ↓
Call updateDisplay()
    ↓
getFilteredAndSortedRecipes()
    ├─ applyFilter() → new filtered array
    ├─ applySort() → new sorted array
    └─ return combined result
    ↓
renderRecipes() → Update DOM
```

## Functional Programming Principles Applied

### ✅ Pure Functions
- No side effects (except final DOM render)
- Same input → always same output
- Examples: `filterByDifficulty`, `sortByName`

### ✅ Higher-Order Functions
- Functions that return functions
- Enable composition and reusability
- Examples: `createFilterPredicate`, `createSortComparator`

### ✅ Immutability
- Original recipes array never modified
- Spread operator (`[...array]`) creates copies
- State updates use spread: `{ ...state, ...updates }`

### ✅ Function Composition
- Smaller functions combined into larger operations
- `getFilteredAndSortedRecipes()` combines filter + sort
- `updateDisplay()` orchestrates the entire flow

### ✅ First-Class Functions
- Functions passed as arguments (filter predicates)
- Functions assigned to variables (event handlers)
- Functions returned from other functions

## Filter Options

| Filter | Logic | Example |
|--------|-------|---------|
| All | `() => true` | Shows all 8 recipes |
| Easy | `recipe => recipe.difficulty === 'easy'` | Garlic Pasta, Tomato Soup, Stir Fry |
| Medium | `recipe => recipe.difficulty === 'medium'` | Tikka Masala, Mediterranean Salad |
| Hard | `recipe => recipe.difficulty === 'hard'` | Bourguignon, Sushi, Pork Roast |
| Quick | `recipe => recipe.time < 30` | Garlic Pasta (20), Stir Fry (25), Salad (15) |

## Sort Options

| Sort | Logic | Example |
|------|-------|---------|
| Default | `() => 0` | Original order (id 1-8) |
| Name (A-Z) | `a.title.localeCompare(b.title)` | Beef Bourguignon → Sushi Rolls |
| Time | `a.time - b.time` | 15 min → 150 min |

## Testing the Implementation

### Test Case 1: Filter by Easy + Sort by Name
```
Expected: Garlic Lemon Pasta, Tomato Soup, Veggie Stir Fry (alphabetical)
Result: ✅ Should work
```

### Test Case 2: Filter by Quick + Sort by Time
```
Expected: Mediterranean Salad (15), Garlic Pasta (20), Stir Fry (25)
Result: ✅ Should work
```

### Test Case 3: Filter Chain (Quick then click Hard)
```
Expected: Filter resets, Hard recipes shown (Bourguignon, Sushi, Pork)
Result: ✅ Sort resets to default
```

## Code Examples

### Example 1: How Filter Works
```javascript
// User clicks "Easy" button
// 1. Create predicate
const isEasy = createFilterPredicate('easy');
// Returns: recipe => recipe.difficulty === 'easy'

// 2. Apply to recipes
const easyRecipes = recipes.filter(isEasy);
// Returns: [Pasta, Soup, StirFry] (3 recipes)

// 3. Sort (if any) and render
updateDisplay();
```

### Example 2: How Sort Works
```javascript
// User clicks "Name (A-Z)" button
// 1. Create comparator
const compareByName = createSortComparator('name');
// Returns: (a, b) => a.title.localeCompare(b.title)

// 2. Apply to filtered recipes
const sorted = [...filtered].sort(compareByName);
// Returns: Recipes in alphabetical order (new array)

// 3. Render
updateDisplay();
```

## Why This Approach is Functional

### ❌ Imperative (Bad)
```javascript
// Mutates original array
recipes.sort(...);
for (let i = 0; i < recipes.length; i++) {
  if (recipes[i].difficulty === 'easy') {
    // ... process
  }
}
```

### ✅ Functional (Good)
```javascript
// Pure, composable, readable
recipes
  .filter(recipe => recipe.difficulty === 'easy')
  .forEach(createRecipeCard);
```

Our implementation combines multiple functions:
- `applyFilter(recipes, 'easy')` → new array
- `applySort(result, 'time')` → new array
- `renderRecipes(result)` → DOM update

**No mutations. No side effects (until final render). Pure composition.**

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Uses ES6 features:
  - Arrow functions
  - Template literals
  - Spread operator
  - Array methods (filter, map, sort)
  - Object destructuring

## Performance Considerations

- **Time Complexity**: O(n*log(n)) for sort, O(n) for filter
- **Space Complexity**: O(n) for creating new arrays
- **Real-time Updates**: Updates happen instantly on button click
- **No Rendering Issues**: Efficient DOM updates using innerHTML

## Exports (for Testing)

The module exports all pure functions for unit testing:
```javascript
module.exports = {
  filterByDifficulty,
  filterByQuick,
  createFilterPredicate,
  applyFilter,
  sortByName,
  sortByTime,
  createSortComparator,
  applySort,
  getFilteredAndSortedRecipes,
  // ... and more
};
```

## Further Improvements (Optional)

Could be enhanced with:
- Debouncing for rapid clicks
- Animation transitions between filters
- Additional filters (by category, ratings)
- Persistent state (localStorage)
- Unit tests using the exported functions
