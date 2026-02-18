# Video Demo Script (3-5 minutes)

## Overview
This is a guide for creating a 3-5 minute video demo of the RecipeJS filtering and sorting functionality.

## Demo Outline

### 1. **Opening & Introduction (0:00 - 0:30)**
**Script:**
"Hi! This is a demo of RecipeJS Part 2, which adds filtering and sorting to our recipe application using functional programming principles. Let me show you how it works."

**Action:**
- Open the application in browser
- Show the full UI with all recipe cards visible

### 2. **Filter Demo (0:30 - 2:00)**
**Script:**
"First, let's explore the filters. We have 5 filter options: All Recipes, Easy, Medium, Hard, and Quick recipes under 30 minutes."

**Actions - Show each filter:**

#### Easy Recipes (0:40 - 1:00)
- Click "Easy" button
- Wait for animations
- Point to the 3 recipes shown: Garlic Lemon Pasta, Classic Tomato Soup, Veggie Stir Fry
- Say: "Easy recipes shown - notice the sort has reset to default"

#### Medium Recipes (1:00 - 1:15)
- Click "Medium" button
- Point to the 2 recipes shown: Chicken Tikka Masala, Mediterranean Salad
- Say: "Now showing only medium difficulty recipes"

#### Hard Recipes (1:15 - 1:30)
- Click "Hard" button
- Point to the 3 recipes: Beef Bourguignon, Sushi Rolls, Slow-Roast Pork
- Say: "Hard recipes are now visible"

#### Quick Recipes (1:30 - 1:50)
- Click "Quick (< 30 min)" button
- Point to the 3 recipes: Mediterranean Salad (15 min), Garlic Lemon Pasta (20 min), Veggie Stir Fry (25 min)
- Say: "Quick recipes under 30 minutes. Notice we can see the time for each recipe"

#### All Recipes (1:50 - 2:00)
- Click "All Recipes" button
- Show all 8 recipes again
- Say: "And back to all recipes"

### 3. **Sort Demo (2:00 - 3:30)**
**Script:**
"Now let's look at sorting. We can sort by name alphabetically or by cooking time."

**Actions - Show sorting:**

#### Sort by Name (2:10 - 2:40)
- Click "Name (A–Z)" button
- Point to the order:
  - Beef Bourguignon
  - Chicken Tikka Masala
  - Classic Tomato Soup
  - Garlic Lemon Pasta
  - Mediterranean Salad
  - Slow-Roast Pork
  - Sushi Rolls
  - Veggie Stir Fry
- Say: "Recipes are now sorted alphabetically by name"

#### Sort by Time (2:40 - 3:10)
- Click "Time (Fastest First)" button
- Show recipes sorted by time:
  - Mediterranean Salad (15 min)
  - Garlic Lemon Pasta (20 min)
  - Veggie Stir Fry (25 min)
  - Classic Tomato Soup (45 min)
  - Chicken Tikka Masala (75 min)
  - Sushi Rolls (90 min)
  - Slow-Roast Pork (120 min)
  - Beef Bourguignon (150 min)
- Say: "Now sorted from fastest to slowest recipes"

#### Reset to Default (3:10 - 3:30)
- Click "Default" sort button
- Show original order
- Say: "And back to the default order"

### 4. **Combined Filter + Sort (3:30 - 4:15)**
**Script:**
"The really cool part is that filters and sorts work together in real-time."

**Actions:**
- Click "Easy" filter
- Then click "Name (A–Z)" sort
- Say: "Watch - filtering to Easy recipes, then sorting alphabetically"
- Show: Classic Tomato Soup, Garlic Lemon Pasta, Veggie Stir Fry (alphabetical)

- Click "Time (Fastest First)" sort
- Say: "Same filter, but now sorted by time"
- Show: Garlic Lemon Pasta (20), Veggie Stir Fry (25), Classic Tomato Soup (45)

### 5. **Code Explanation (4:15 - 5:00)**
**Script:**
"Now let me explain the functional programming approach used in the code."

**Show in code editor / or on screen:**

**Pure Functions:**
```javascript
// These are pure - same input always gives same output
filterByDifficulty(difficulty) => (recipe) => recipe.difficulty === difficulty
sortByName(a, b) => a.title.localeCompare(b.title)
```

Say: "These pure functions have no side effects - they just return data based on input."

**Higher-Order Functions:**
```javascript
createFilterPredicate(filterType) // Returns a function
createSortComparator(sortType)    // Returns a function
```

Say: "These higher-order functions return other functions, making our code composable and reusable."

**Immutable Operations:**
```javascript
const applyFilter = (list, type) => list.filter(createFilterPredicate(type))
const applySort = (list, type) => [...list].sort(createSortComparator(type))
```

Say: "Notice we create new arrays with spread operator - we never mutate the original recipes."

**Central Update Flow:**
```javascript
const updateDisplay = () => {
  const filtered = getFilteredAndSortedRecipes(recipes, filter, sort)
  renderRecipes(filtered)
}
```

Say: "Everything flows through updateDisplay - this is our single source of truth that combines filter, sort, and render."

**Closing (4:55 - 5:00):**
"That's the beauty of functional programming - pure functions, composition, and immutability make the code predictable and easy to test."

---

## Recording Tips

### Tools Options
- **Mac**: QuickTime, ScreenFlow, OBS
- **Windows**: OBS, Camtasia, Game Bar
- **Linux**: OBS, SimpleScreenRecorder, ffmpeg
- **Web**: Loom, Screencastify (Chrome extension)

### Quality Settings
- Resolution: 1080p (1920x1080) or higher
- Frame rate: 30 fps
- Codec: H.264 or VP9
- Audio: Clear microphone

### Tips for Best Results
1. **Clean up screen**: Close unnecessary tabs/windows
2. **Zoom UI**: Make buttons and text clearly visible
3. **Slow down interactions**: Click slowly so viewers can follow
4. **Pause briefly**: Between transitions (0.5-1 second)
5. **Test audio**: Record short test first
6. **Use pointer/highlight**: Draw attention to important elements
7. **Speak clearly**: Not too fast, good pacing

### Recording Flow
1. Record opening (0:00-0:30)
2. Record each filter with natural pauses
3. Record each sort option
4. Record combined operations
5. Record code explanation (can use slides or screen)
6. Record closing remarks
7. Edit if needed (trim silence, fix mistakes)

### Optional Enhancements
- Add screen pointer/cursor highlighting
- Add text overlays (labels for buttons being clicked)
- Add background music at low volume
- Add captions/subtitles
- Speed up long transitions

---

## Checklist Before Recording

- [ ] Application is running and responsive
- [ ] All buttons working correctly
- [ ] Tested on different filter/sort combinations
- [ ] Microphone working and clear
- [ ] Screen quality good (brightness, contrast)
- [ ] Scripts printed or memorized
- [ ] Recording software tested
- [ ] Demo environment cleaned up
- [ ] All 8 recipes visible at start

---

## Upload Instructions

After creating video:

1. **Naming**: `RecipeJS-Part2-Demo-[YourName].mp4` (or platform video link)
2. **Duration**: Should be 3-5 minutes
3. **Format**: MP4, WebM, or link to YouTube/Vimeo
4. **Quality**: 720p minimum, 1080p preferred
5. **Audio**: Clear narration, audible
6. **Subtitles**: Optional but recommended

4. **Submit with PR**: Add video link in PR description or comment

---

## Script Summary

| Section | Content | Duration |
|---------|---------|----------|
| Intro | Welcome & overview | 0:30 |
| Filters | Demo: All, Easy, Medium, Hard, Quick | 1:30 |
| Sorts | Demo: Default, Name, Time | 1:30 |
| Combined | Show filter + sort working together | 0:45 |
| Code | Explain pure functions, HOF, immutability | 0:45 |
| **Total** | **Full demo** | **~5 min** |

---

## Talking Points

### On Pure Functions:
"These functions are 'pure' because they always return the same result for the same input, and they don't change anything outside of their scope."

### On Higher-Order Functions:
"A higher-order function is just a function that takes another function as input or returns a function. This makes our code super reusable and flexible."

### On Immutability:
"Notice we never change the original array. Instead, we create new arrays with the filtered/sorted data. This prevents bugs and makes debugging easier."

### On the Update Flow:
"All updates go through updateDisplay() - this central function is the orchestrator that says: apply these filters, apply this sort, then render the result."

### Why Functional Programming:
"Functional programming gives us code that's easier to understand, test, and maintain because each piece does one thing well and doesn't have hidden side effects."
