# recipejs-functional-cooking
A functional programming approach to a recipe companion app

## Overview
RecipeJS is a comprehensive recipe management application built with vanilla JavaScript following functional programming principles. It features a clean, modular IIFE (Immediately Invoked Function Expression) structure with pure functions, higher-order functions, and recursion for handling complex operations.

## Part 4 Features - Real-Time Search & Advanced State Management

### 🔍 Real-Time Search
- **Search by name or ingredients**: Type in the search bar to instantly filter recipes by title or ingredient matches
- **Debounced search**: Implemented with a 300ms debounce to optimize performance and prevent unnecessary re-renders
- **Live updates**: Results update as you type without page reload

### ❤️ Favorites System
- **Mark/Unmark favorites**: Click the heart icon on any recipe card to add or remove from favorites
- **Persistent storage**: Favorites are automatically saved to browser's localStorage and persist across page refreshes
- **Visual feedback**: Heart icon displays filled (❤️) when favorited, empty (🤍) when not, with smooth pulse animation

### 📋 Favorites-Only Filter
- **Dedicated filter button**: New "Favorites" filter button in the controls section
- **Quick access**: View only your favorite recipes with one click
- **Smart filtering**: Works in combination with search and sort features

### 📊 Recipe Counter
- **Dynamic count display**: Shows "Showing X of Y recipes" updating in real-time
- **Accurate tracking**: Updates correctly when applying filters, sorting, or searching
- **Location**: Displayed in the search section for easy visibility

## Architecture & Code Quality

### Pure Functional Design
- **Filter functions**: Pure, composable filter predicates for difficulty, time, favorites, and search
- **Sort functions**: Immutable sorting operations using spread operators
- **Higher-order functions**: Curried functions for flexible filter creation
- **Recursion**: Recursive rendering for nested recipe steps and substeps

### State Management
- **Centralized app state**: Single source of truth in `appState` object
- **localStorage integration**: Functions for saving/loading favorites persistently
- **Toggle operations**: Simple, predictable favorite toggle with side effects managed carefully

### Code Organization
```
RecipeApp (IIFE)
├── Private Data
│   ├── recipes (array of recipe objects)
│   └── appState (centralized state object)
├── Private Utilities
│   ├── localStorage functions
│   ├── debounce utility
│   ├── search & matching functions
│   └── favorite toggle logic
├── Pure Functions
│   ├── Filter predicates
│   ├── Sort comparators
│   └── Recursive step rendering
├── Rendering Functions
│   ├── createRecipeCard
│   ├── renderRecipes
│   ├── updateDisplay
│   └── updateRecipeCounter
├── Event Handlers
│   ├── setupFilterButtons
│   ├── setupSortButtons
│   ├── setupCardEventDelegation (with favorite button support)
│   └── setupSearchInput
└── Public API
    └── init() and exported functions for testing
```

## Features Overview

### Previous Parts (Maintained & Enhanced)
- ✅ **Recipe Cards**: Display recipes with title, time, difficulty level, description, and images
- ✅ **Filter System**: By difficulty (Easy, Medium, Hard) or duration (Quick < 30 min)
- ✅ **Sort Options**: By name (A-Z) or cooking time (fastest first)
- ✅ **Expandable Sections**: Click to show/hide ingredients and cooking steps
- ✅ **Recursive Steps**: Support for nested recipe steps and substeps

### Part 4 Additions
- ✨ **Real-time Search**: Debounced search filtering by recipe title and ingredients
- ✨ **Favorites System**: Mark favorite recipes with persistent localStorage storage
- ✨ **Favorites Filter**: Quick filter to view only favorited recipes
- ✨ **Recipe Counter**: Dynamic counter showing "Showing X of Y recipes"
- ✨ **Code Polish**: Improved variable naming, consistent ES6 syntax, organized structure

## Data Structure

Each recipe contains:
```javascript
{
  id: number,
  title: string,
  time: number (minutes),
  difficulty: 'easy' | 'medium' | 'hard',
  description: string,
  category: string,
  ingredients: string[],
  steps: (string | {text: string, substeps: [...]})[]
}
```

## Technologies Used
- **Vanilla JavaScript (ES6+)**: No frameworks or libraries required
- **CSS3**: Flexbox layout, animations, gradients, responsive design
- **HTML5**: Semantic markup with ARIA labels
- **localStorage API**: Browser-based data persistence
- **Functional Programming Patterns**: Pure functions, higher-order functions, recursion

## How to Use

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Open `index.html` in a web browser

### Search Recipes
1. Type in the search bar to filter by recipe name or ingredients
2. Results update automatically as you type (debounced for performance)

### Manage Favorites
1. Click the heart icon (❤️/🤍) on any recipe card
2. Favorited recipes show a filled heart and persist after page refresh
3. Click the "Favorites" filter button to view only favorite recipes

### Filter & Sort
- Use filter buttons to narrow by difficulty or duration
- Use sort buttons to organize by name or cooking time
- Combine with search for more specific results

## Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Any modern browser with ES6+ and localStorage support

## Performance Notes
- **Debouncing**: Search input debounced to 300ms for optimal performance
- **Immutable Updates**: Sorting uses spread operators to preserve original data
- **Event Delegation**: Single event listener for multiple recipe cards
- **Efficient Rendering**: Only re-renders affected elements

## Future Enhancements
- Export/import favorites as JSON
- Recipe ratings and reviews
- Dietary filters (vegan, gluten-free, etc.)
- Shopping list generation
- Cooking timer functionality
- Nutritional information display

---

Built with ❤️ using functional programming principles
