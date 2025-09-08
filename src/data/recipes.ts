import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Pancakes',
    description: 'Fluffy and delicious homemade pancakes perfect for a weekend breakfast.',
    image: 'https://images.pexels.com/photos/2516025/pexels-photo-2516025.jpeg?w=500&h=300&fit=crop',
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '3 1/2 teaspoons baking powder',
      '1 teaspoon salt',
      '1 tablespoon sugar',
      '1 1/4 cups milk',
      '1 egg',
      '3 tablespoons butter, melted'
    ],
    instructions: [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium-high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.',
      'Cook until bubbles form on the surface, then flip and cook until browned on the other side.'
    ],
    tags: ['vegetarian', 'quick', 'family-friendly'],
    isPopular: true,
    isChefChoice: true
  },
  {
    id: '2',
    title: 'Chicken Stir Fry',
    description: 'A quick and healthy stir fry loaded with vegetables and tender chicken.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop',
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb chicken breast, sliced',
      '2 tablespoons soy sauce',
      '1 tablespoon cornstarch',
      '2 tablespoons vegetable oil',
      '3 cloves garlic, minced',
      '1 inch ginger, minced',
      '2 cups mixed vegetables',
      '2 tablespoons oyster sauce'
    ],
    instructions: [
      'Slice chicken and marinate with soy sauce and cornstarch for 10 minutes.',
      'Heat oil in a wok over high heat.',
      'Stir fry chicken until golden, remove from wok.',
      'Add garlic and ginger, stir fry for 30 seconds.',
      'Add vegetables and stir fry for 2-3 minutes.',
      'Return chicken to wok, add oyster sauce and stir fry for 1 minute.'
    ],
    tags: ['high-protein', 'gluten-free', 'quick']
  },
  {
    id: '3',
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade chocolate chip cookies with crispy edges and chewy centers.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=300&fit=crop',
    cookTime: 30,
    servings: 24,
    difficulty: 'Easy',
    category: 'Dessert',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 teaspoon salt',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix flour, baking soda, and salt in a small bowl.',
      'Beat butter, granulated sugar, and brown sugar until creamy.',
      'Add eggs one at a time, beating well after each addition.',
      'Gradually beat in flour mixture, then stir in chocolate chips.',
      'Drop by rounded tablespoons onto ungreased baking sheets.',
      'Bake for 9 to 11 minutes or until golden brown.'
    ],
    tags: ['vegetarian', 'family-friendly', 'classic'],
    isPopular: true
  },
  {
    id: '4',
    title: 'Avocado Toast',
    description: 'Simple and nutritious avocado toast with a perfect balance of flavors.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&h=300&fit=crop',
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '1/2 lemon, juiced',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      '2 eggs (optional)'
    ],
    instructions: [
      'Toast the bread until golden and crispy.',
      'Mash the avocado in a bowl and mix with lemon juice.',
      'Season with salt and pepper to taste.',
      'Spread the avocado mixture evenly on the toast.',
      'Top with red pepper flakes if desired.',
      'For extra protein, add a poached or fried egg on top.'
    ],
    tags: ['vegetarian', 'vegan', 'quick', 'healthy']
  },
  {
    id: '5',
    title: 'Beef Tacos',
    description: 'Flavorful beef tacos with fresh toppings and homemade seasoning.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop',
    cookTime: 35,
    servings: 6,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb ground beef',
      '1 packet taco seasoning',
      '12 taco shells',
      '1 cup shredded lettuce',
      '1 cup diced tomatoes',
      '1 cup shredded cheese',
      '1/2 cup sour cream',
      '1/4 cup chopped cilantro'
    ],
    instructions: [
      'Brown the ground beef in a large skillet over medium heat.',
      'Add taco seasoning and water according to package directions.',
      'Simmer for 5 minutes until thickened.',
      'Warm taco shells according to package directions.',
      'Fill shells with beef mixture and top with desired toppings.',
      'Serve immediately with additional toppings on the side.'
    ],
    tags: ['high-protein', 'family-friendly', 'mexican']
  },
  {
    id: '6',
    title: 'Greek Salad',
    description: 'Fresh and tangy Greek salad with authentic Mediterranean flavors.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=300&fit=crop',
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '2 large tomatoes, diced',
      '1 cucumber, diced',
      '1 red onion, thinly sliced',
      '1 cup kalamata olives',
      '1 cup feta cheese, crumbled',
      '2 tablespoons olive oil',
      '1 tablespoon red wine vinegar',
      '1 teaspoon dried oregano'
    ],
    instructions: [
      'Combine tomatoes, cucumber, and red onion in a large bowl.',
      'Add olives and feta cheese.',
      'In a small bowl, whisk together olive oil, vinegar, and oregano.',
      'Pour dressing over salad and toss gently to combine.',
      'Season with salt and pepper to taste.',
      'Serve immediately or refrigerate for up to 2 hours.'
    ],
    tags: ['vegetarian', 'gluten-free', 'healthy', 'mediterranean']
  },
  {
    id: '7',
    title: 'Banana Smoothie',
    description: 'Creamy and nutritious banana smoothie perfect for a quick snack or breakfast.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=300&fit=crop',
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    category: 'Snack',
    ingredients: [
      '2 ripe bananas',
      '1 cup milk or almond milk',
      '1/2 cup yogurt',
      '2 tablespoons honey',
      '1/2 teaspoon vanilla extract',
      '1 cup ice cubes'
    ],
    instructions: [
      'Peel and slice the bananas, then freeze for 30 minutes.',
      'Add all ingredients to a blender.',
      'Blend until smooth and creamy.',
      'If too thick, add more milk; if too thin, add more ice.',
      'Pour into glasses and serve immediately.',
      'Garnish with a banana slice if desired.'
    ],
    tags: ['vegetarian', 'gluten-free', 'quick', 'healthy']
  },
  {
    id: '8',
    title: 'Quinoa Buddha Bowl',
    description: 'Nutritious and colorful quinoa bowl packed with vegetables and protein.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop',
    cookTime: 40,
    servings: 4,
    difficulty: 'Medium',
    category: 'Lunch',
    ingredients: [
      '1 cup quinoa',
      '2 cups vegetable broth',
      '1 sweet potato, cubed',
      '1 cup chickpeas, drained',
      '2 cups kale, chopped',
      '1 avocado, sliced',
      '2 tablespoons tahini',
      '1 lemon, juiced'
    ],
    instructions: [
      'Cook quinoa in vegetable broth according to package directions.',
      'Roast sweet potato cubes at 400°F for 25 minutes.',
      'Heat chickpeas in a pan until slightly crispy.',
      'Massage kale with olive oil and lemon juice.',
      'Assemble bowls with quinoa, vegetables, and avocado.',
      'Drizzle with tahini dressing and serve.'
    ],
    tags: ['vegetarian', 'vegan', 'gluten-free', 'healthy']
  },
  {
    id: '9',
    title: 'Grilled Salmon',
    description: 'Perfectly grilled salmon with herbs and lemon, a healthy dinner option.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop',
    cookTime: 20,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '4 salmon fillets',
      '2 tablespoons olive oil',
      '2 lemons, sliced',
      '4 sprigs fresh dill',
      'Salt and pepper to taste',
      '2 cloves garlic, minced'
    ],
    instructions: [
      'Preheat grill to medium-high heat.',
      'Brush salmon with olive oil and season with salt and pepper.',
      'Place lemon slices and dill on top of each fillet.',
      'Grill salmon skin-side down for 4-5 minutes.',
      'Flip and grill for another 3-4 minutes.',
      'Serve with additional lemon wedges.'
    ],
    tags: ['high-protein', 'gluten-free', 'healthy', 'omega-3']
  },
  {
    id: '10',
    title: 'Berry Parfait',
    description: 'Layered yogurt parfait with fresh berries and granola for a delightful dessert.',
    image: 'https://images.pexels.com/photos/8805102/pexels-photo-8805102.jpeg?w=500&h=300&fit=crop',
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Dessert',
    ingredients: [
      '2 cups Greek yogurt',
      '1 cup mixed berries',
      '1 cup granola',
      '2 tablespoons honey',
      '1/4 cup chopped nuts',
      'Fresh mint for garnish'
    ],
    instructions: [
      'Layer yogurt in the bottom of serving glasses.',
      'Add a layer of granola on top of yogurt.',
      'Layer fresh berries on top of granola.',
      'Repeat layers until glasses are filled.',
      'Drizzle with honey and top with chopped nuts.',
      'Garnish with fresh mint and serve immediately.'
    ],
    tags: ['vegetarian', 'gluten-free', 'healthy', 'quick'],
    isNew: true,
    isChefChoice: true
  },
  {
    id: '11',
    title: 'Vegetable Soup',
    description: 'Hearty vegetable soup perfect for cold days, packed with nutrients.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop',
    cookTime: 45,
    servings: 6,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '2 tablespoons olive oil',
      '1 onion, diced',
      '3 carrots, sliced',
      '3 celery stalks, sliced',
      '4 cups vegetable broth',
      '2 cups diced tomatoes',
      '1 cup green beans',
      '2 cups spinach'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat.',
      'Sauté onion, carrots, and celery for 5 minutes.',
      'Add vegetable broth and bring to a boil.',
      'Add tomatoes and green beans, simmer for 20 minutes.',
      'Stir in spinach and cook for 2 minutes.',
      'Season with salt and pepper to taste.'
    ],
    tags: ['vegetarian', 'vegan', 'gluten-free', 'healthy', 'comfort-food']
  },
  {
    id: '12',
    title: 'Chicken Caesar Wrap',
    description: 'Fresh and flavorful chicken Caesar wrap perfect for lunch on the go.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop',
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '4 large tortillas',
      '2 chicken breasts, grilled and sliced',
      '2 cups romaine lettuce, chopped',
      '1/2 cup Caesar dressing',
      '1/2 cup parmesan cheese',
      '1/4 cup croutons',
      'Black pepper to taste'
    ],
    instructions: [
      'Grill chicken breasts until cooked through, then slice.',
      'Warm tortillas slightly to make them pliable.',
      'Layer lettuce, chicken, and dressing on each tortilla.',
      'Sprinkle with parmesan cheese and croutons.',
      'Roll up tightly, tucking in the sides.',
      'Cut diagonally and serve immediately.'
    ],
    tags: ['high-protein', 'quick', 'lunch', 'portable']
  }
];

export const categories: Recipe['category'][] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];
export const difficulties: Recipe['difficulty'][] = ['Easy', 'Medium', 'Hard'];
export const commonTags: string[] = ['vegetarian', 'vegan', 'gluten-free', 'healthy', 'quick', 'high-protein', 'family-friendly', 'classic', 'mexican', 'mediterranean', 'comfort-food', 'portable'];
