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
    tags: ['vegetarian', 'quick', 'family-friendly']
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
    tags: ['vegetarian', 'family-friendly', 'classic']
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
    tags: ['vegetarian', 'gluten-free', 'healthy', 'quick']
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
  },
  {
    id: '13',
    title: 'French Toast',
    description: 'Classic French toast with cinnamon and vanilla, perfect for a special breakfast.',
    image: 'https://www.theroastedroot.net/wp-content/uploads/2025/04/french-toast-4.jpg',
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '8 slices bread',
      '4 eggs',
      '1 cup milk',
      '2 tablespoons sugar',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon cinnamon',
      '2 tablespoons butter'
    ],
    instructions: [
      'Whisk together eggs, milk, sugar, vanilla, and cinnamon.',
      'Heat butter in a large skillet over medium heat.',
      'Dip bread slices in egg mixture, coating both sides.',
      'Cook in skillet until golden brown on both sides.',
      'Serve with maple syrup and fresh berries.'
    ],
    tags: ['vegetarian', 'family-friendly', 'classic', 'sweet']
  },
  {
    id: '14',
    title: 'Spaghetti Carbonara',
    description: 'Creamy Italian pasta with eggs, cheese, and pancetta - a restaurant favorite.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg',
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb spaghetti',
      '6 oz pancetta, diced',
      '4 large eggs',
      '1 cup parmesan cheese, grated',
      '4 cloves garlic, minced',
      'Black pepper to taste',
      '2 tablespoons olive oil'
    ],
    instructions: [
      'Cook spaghetti according to package directions.',
      'Cook pancetta in olive oil until crispy.',
      'Whisk eggs with parmesan and black pepper.',
      'Drain pasta, reserving 1 cup pasta water.',
      'Combine hot pasta with pancetta and egg mixture.',
      'Toss quickly, adding pasta water as needed.'
    ],
    tags: ['high-protein', 'italian', 'creamy', 'comfort-food']
  },
  {
    id: '15',
    title: 'Chocolate Brownies',
    description: 'Rich and fudgy chocolate brownies with a perfect crackly top.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop',
    cookTime: 35,
    servings: 16,
    difficulty: 'Easy',
    category: 'Dessert',
    ingredients: [
      '1/2 cup butter',
      '1 cup sugar',
      '2 eggs',
      '1 teaspoon vanilla',
      '1/3 cup cocoa powder',
      '1/2 cup flour',
      '1/4 teaspoon salt',
      '1/4 teaspoon baking powder'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'Melt butter and mix with sugar.',
      'Beat in eggs and vanilla.',
      'Mix in cocoa, flour, salt, and baking powder.',
      'Spread in greased 8x8 pan.',
      'Bake for 25-30 minutes until set.'
    ],
    tags: ['vegetarian', 'chocolate', 'family-friendly', 'classic']
  },
  {
    id: '16',
    title: 'Caesar Salad',
    description: 'Classic Caesar salad with homemade croutons and creamy dressing.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=300&fit=crop',
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '2 heads romaine lettuce',
      '1/2 cup parmesan cheese',
      '1/2 cup croutons',
      '1/4 cup Caesar dressing',
      '2 anchovy fillets (optional)',
      '1 clove garlic',
      '1 lemon, juiced'
    ],
    instructions: [
      'Wash and chop romaine lettuce.',
      'Make croutons by toasting bread cubes.',
      'Whisk together dressing ingredients.',
      'Toss lettuce with dressing and parmesan.',
      'Top with croutons and serve immediately.'
    ],
    tags: ['vegetarian', 'classic', 'fresh', 'quick']
  },
  {
    id: '17',
    title: 'Beef Burger',
    description: 'Juicy homemade beef burger with all the classic toppings.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    category: 'Dinner',
    ingredients: [
      '1 lb ground beef',
      '4 burger buns',
      '4 slices cheese',
      '1 tomato, sliced',
      '1 onion, sliced',
      'Lettuce leaves',
      'Ketchup and mustard',
      'Salt and pepper'
    ],
    instructions: [
      'Season ground beef with salt and pepper.',
      'Form into 4 patties.',
      'Grill or pan-fry burgers to desired doneness.',
      'Toast burger buns lightly.',
      'Assemble burgers with cheese and toppings.',
      'Serve with fries or salad.'
    ],
    tags: ['high-protein', 'family-friendly', 'classic', 'grilled']
  },
  {
    id: '18',
    title: 'Fruit Smoothie Bowl',
    description: 'Colorful smoothie bowl topped with fresh fruits and granola.',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=300&fit=crop',
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '2 frozen bananas',
      '1 cup frozen berries',
      '1/2 cup yogurt',
      '1/4 cup milk',
      '1 tablespoon honey',
      'Fresh fruits for topping',
      'Granola for topping'
    ],
    instructions: [
      'Blend frozen fruits with yogurt and milk.',
      'Add honey and blend until smooth.',
      'Pour into bowls.',
      'Top with fresh fruits and granola.',
      'Serve immediately.'
    ],
    tags: ['vegetarian', 'healthy', 'quick', 'colorful']
  },
  {
    id: '19',
    title: 'Chicken Noodle Soup',
    description: 'Comforting homemade chicken noodle soup perfect for any day.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop',
    cookTime: 45,
    servings: 6,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '1 lb chicken breast',
      '8 cups chicken broth',
      '2 cups egg noodles',
      '2 carrots, sliced',
      '2 celery stalks, sliced',
      '1 onion, diced',
      '2 cloves garlic',
      'Salt and pepper'
    ],
    instructions: [
      'Cook chicken in broth until tender.',
      'Remove chicken and shred.',
      'Add vegetables to broth and simmer.',
      'Add noodles and cook until tender.',
      'Return chicken to pot.',
      'Season with salt and pepper.'
    ],
    tags: ['high-protein', 'comfort-food', 'healing', 'classic']
  },
  {
    id: '20',
    title: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=300&fit=crop',
    cookTime: 60,
    servings: 8,
    difficulty: 'Hard',
    category: 'Dessert',
    ingredients: [
      '24 ladyfinger cookies',
      '1 cup strong coffee',
      '16 oz mascarpone cheese',
      '4 eggs, separated',
      '1/2 cup sugar',
      '2 tablespoons cocoa powder',
      '2 tablespoons rum (optional)'
    ],
    instructions: [
      'Beat egg yolks with half the sugar.',
      'Mix in mascarpone cheese.',
      'Beat egg whites with remaining sugar.',
      'Fold egg whites into mascarpone mixture.',
      'Dip ladyfingers in coffee.',
      'Layer ladyfingers and cream mixture.',
      'Refrigerate for 4 hours before serving.'
    ],
    tags: ['vegetarian', 'italian', 'elegant', 'coffee']
  },
  {
    id: '21',
    title: 'Fish Tacos',
    description: 'Fresh fish tacos with cabbage slaw and creamy sauce.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop',
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb white fish fillets',
      '8 corn tortillas',
      '2 cups cabbage, shredded',
      '1/2 cup sour cream',
      '1 lime, juiced',
      '1 teaspoon cumin',
      'Salt and pepper',
      'Fresh cilantro'
    ],
    instructions: [
      'Season fish with cumin, salt, and pepper.',
      'Cook fish until flaky.',
      'Mix cabbage with lime juice and salt.',
      'Warm tortillas.',
      'Flake fish and assemble tacos.',
      'Top with slaw, sour cream, and cilantro.'
    ],
    tags: ['high-protein', 'mexican', 'fresh', 'healthy']
  },
  {
    id: '22',
    title: 'Oatmeal',
    description: 'Creamy oatmeal with your choice of toppings for a healthy breakfast.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop',
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '1 cup rolled oats',
      '2 cups milk or water',
      '1 tablespoon honey',
      '1/2 teaspoon cinnamon',
      'Fresh berries',
      'Nuts and seeds',
      'Banana slices'
    ],
    instructions: [
      'Bring milk to a boil.',
      'Add oats and reduce heat.',
      'Simmer for 5 minutes, stirring.',
      'Sweeten with honey and cinnamon.',
      'Top with fresh fruits and nuts.',
      'Serve warm.'
    ],
    tags: ['vegetarian', 'healthy', 'quick', 'fiber-rich']
  },
  {
    id: '23',
    title: 'Lasagna',
    description: 'Classic Italian lasagna with meat sauce and three types of cheese.',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=300&fit=crop',
    cookTime: 90,
    servings: 8,
    difficulty: 'Hard',
    category: 'Dinner',
    ingredients: [
      '1 lb ground beef',
      '1 lb lasagna noodles',
      '24 oz marinara sauce',
      '15 oz ricotta cheese',
      '2 cups mozzarella cheese',
      '1 cup parmesan cheese',
      '2 eggs',
      '1 onion, diced'
    ],
    instructions: [
      'Cook ground beef with onion until browned.',
      'Add marinara sauce and simmer.',
      'Mix ricotta with eggs and parmesan.',
      'Layer noodles, meat sauce, and cheese.',
      'Repeat layers, ending with cheese.',
      'Bake covered for 45 minutes, uncovered for 15.'
    ],
    tags: ['high-protein', 'italian', 'comfort-food', 'family-friendly']
  },
  {
    id: '24',
    title: 'Energy Balls',
    description: 'No-bake energy balls packed with nuts, dates, and superfoods.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop',
    cookTime: 20,
    servings: 20,
    difficulty: 'Easy',
    category: 'Snack',
    ingredients: [
      '1 cup dates, pitted',
      '1 cup almonds',
      '2 tablespoons cocoa powder',
      '2 tablespoons chia seeds',
      '1 tablespoon coconut oil',
      '1 teaspoon vanilla',
      'Shredded coconut for rolling'
    ],
    instructions: [
      'Soak dates in warm water for 10 minutes.',
      'Process almonds in food processor.',
      'Add dates and process until combined.',
      'Add remaining ingredients and process.',
      'Roll into balls.',
      'Roll in coconut and refrigerate.'
    ],
    tags: ['vegetarian', 'vegan', 'healthy', 'no-bake']
  },
  {
    id: '25',
    title: 'Shrimp Scampi',
    description: 'Garlicky shrimp scampi with white wine and lemon over pasta.',
    image: 'https://static01.nyt.com/images/2022/06/02/dining/ShrimpScampi_thumb/ShrimpScampi_thumb-mediumSquareAt3X.jpg',
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb shrimp, peeled',
      '1 lb linguine',
      '4 cloves garlic, minced',
      '1/2 cup white wine',
      '1/4 cup lemon juice',
      '4 tablespoons butter',
      '2 tablespoons olive oil',
      'Fresh parsley'
    ],
    instructions: [
      'Cook pasta according to package directions.',
      'Heat oil and butter in large pan.',
      'Add garlic and cook until fragrant.',
      'Add shrimp and cook until pink.',
      'Add wine and lemon juice.',
      'Toss with pasta and parsley.'
    ],
    tags: ['high-protein', 'seafood', 'italian', 'elegant']
  },
  {
    id: '26',
    title: 'Apple Crumble',
    description: 'Warm apple crumble with cinnamon and a buttery oat topping.',
    image: 'https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2025/apple%20crumble.png.jpeg?itok=jbzaT_qC',
    cookTime: 45,
    servings: 6,
    difficulty: 'Easy',
    category: 'Dessert',
    ingredients: [
      '6 apples, sliced',
      '1/2 cup sugar',
      '1 teaspoon cinnamon',
      '1 cup flour',
      '1/2 cup brown sugar',
      '1/2 cup butter, cold',
      '1/2 cup oats',
      'Pinch of salt'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix apples with sugar and cinnamon.',
      'Make crumble with flour, brown sugar, butter, and oats.',
      'Place apples in baking dish.',
      'Top with crumble mixture.',
      'Bake for 35-40 minutes until golden.'
    ],
    tags: ['vegetarian', 'comfort-food', 'seasonal', 'warm']
  },
  {
    id: '27',
    title: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=300&fit=crop',
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '8 oz fresh mozzarella',
      '4 large tomatoes',
      'Fresh basil leaves',
      '3 tablespoons olive oil',
      '2 tablespoons balsamic vinegar',
      'Salt and pepper',
      'Balsamic glaze'
    ],
    instructions: [
      'Slice mozzarella and tomatoes.',
      'Arrange alternating slices on plate.',
      'Tuck basil leaves between slices.',
      'Drizzle with olive oil and vinegar.',
      'Season with salt and pepper.',
      'Finish with balsamic glaze.'
    ],
    tags: ['vegetarian', 'italian', 'fresh', 'simple']
  },
  {
    id: '28',
    title: 'Chicken Curry',
    description: 'Aromatic chicken curry with coconut milk and warm spices.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop',
    cookTime: 40,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb chicken thighs',
      '1 can coconut milk',
      '2 tablespoons curry paste',
      '1 onion, diced',
      '2 cloves garlic',
      '1 inch ginger',
      '1 bell pepper',
      'Fresh cilantro'
    ],
    instructions: [
      'Cook chicken until golden, remove.',
      'Sauté onion, garlic, and ginger.',
      'Add curry paste and cook 1 minute.',
      'Add coconut milk and bring to simmer.',
      'Return chicken and add bell pepper.',
      'Simmer 20 minutes, garnish with cilantro.'
    ],
    tags: ['high-protein', 'spicy', 'international', 'aromatic']
  },
];

export const categories: Recipe['category'][] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];
export const difficulties: Recipe['difficulty'][] = ['Easy', 'Medium', 'Hard'];
export const commonTags: string[] = ['vegetarian', 'vegan', 'gluten-free', 'healthy', 'quick', 'high-protein', 'family-friendly', 'classic', 'mexican', 'mediterranean', 'comfort-food', 'portable', 'italian', 'chocolate', 'seafood', 'spicy', 'international', 'elegant', 'rich', 'sweet', 'fresh', 'simple', 'aromatic', 'healing', 'colorful', 'fiber-rich', 'no-bake', 'seasonal', 'warm'];
