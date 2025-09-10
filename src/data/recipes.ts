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
    image: 'https://www.allrecipes.com/thmb/xvlRRhK5ldXuGcXad8XDM5tTAfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg',
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
    image: 'https://souvy.nl/cdn/shop/articles/Bananen-smoothie.jpg?v=1713966190&width=2048',
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
    image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg',
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
    image: 'https://www.cherryonmysundae.com/wp-content/uploads/2025/02/chicken-caesar-wrap-feature.jpg',
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
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=300&fit=crop',
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '8 slices thick bread',
      '4 large eggs',
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
      'Cook in skillet until golden brown, about 3-4 minutes per side.',
      'Serve immediately with maple syrup and fresh berries.'
    ],
    tags: ['vegetarian', 'family-friendly', 'classic', 'sweet']
  },
  {
    id: '14',
    title: 'Spaghetti Carbonara',
    description: 'Creamy Italian pasta with eggs, cheese, and pancetta.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg',
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb spaghetti',
      '6 oz pancetta, diced',
      '4 large eggs',
      '1 cup grated parmesan cheese',
      '4 cloves garlic, minced',
      'Black pepper to taste',
      '2 tablespoons olive oil'
    ],
    instructions: [
      'Cook spaghetti according to package directions.',
      'Cook pancetta in olive oil until crispy.',
      'Whisk eggs with parmesan and black pepper.',
      'Drain pasta, reserving 1 cup pasta water.',
      'Toss hot pasta with pancetta and egg mixture.',
      'Add pasta water gradually until creamy.'
    ],
    tags: ['high-protein', 'italian', 'comfort-food', 'creamy']
  },
  {
    id: '15',
    title: 'Chocolate Mousse',
    description: 'Rich and airy chocolate mousse dessert that melts in your mouth.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop',
    cookTime: 45,
    servings: 6,
    difficulty: 'Hard',
    category: 'Dessert',
    ingredients: [
      '8 oz dark chocolate',
      '4 large eggs, separated',
      '1/4 cup sugar',
      '1 cup heavy cream',
      '1 teaspoon vanilla extract',
      'Pinch of salt'
    ],
    instructions: [
      'Melt chocolate in a double boiler, let cool slightly.',
      'Beat egg yolks with half the sugar until pale.',
      'Whip cream to soft peaks.',
      'Beat egg whites with remaining sugar to stiff peaks.',
      'Fold chocolate into egg yolks, then fold in cream.',
      'Gently fold in egg whites and chill for 2 hours.'
    ],
    tags: ['vegetarian', 'gluten-free', 'rich', 'elegant']
  },
  {
    id: '16',
    title: 'Hummus',
    description: 'Creamy homemade hummus perfect for dipping or spreading.',
    image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2024-08-hummus%2Fhummus-165',
    cookTime: 15,
    servings: 8,
    difficulty: 'Easy',
    category: 'Snack',
    ingredients: [
      '1 can chickpeas, drained',
      '1/4 cup tahini',
      '3 tablespoons lemon juice',
      '2 cloves garlic',
      '2 tablespoons olive oil',
      '1/2 teaspoon cumin',
      'Salt to taste'
    ],
    instructions: [
      'Combine all ingredients in a food processor.',
      'Process until smooth and creamy.',
      'Add water gradually if too thick.',
      'Taste and adjust seasoning.',
      'Serve with pita bread or vegetables.',
      'Drizzle with olive oil and paprika.'
    ],
    tags: ['vegetarian', 'vegan', 'gluten-free', 'healthy', 'mediterranean']
  },
  {
    id: '17',
    title: 'Caesar Salad',
    description: 'Classic Caesar salad with homemade croutons and dressing.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=300&fit=crop',
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '2 heads romaine lettuce',
      '1/2 cup parmesan cheese',
      '1/2 cup croutons',
      '2 anchovy fillets',
      '2 cloves garlic',
      '1/4 cup olive oil',
      '2 tablespoons lemon juice',
      '1 egg yolk'
    ],
    instructions: [
      'Wash and chop romaine lettuce.',
      'Make dressing with anchovies, garlic, and egg yolk.',
      'Whisk in olive oil and lemon juice.',
      'Toss lettuce with dressing.',
      'Top with parmesan cheese and croutons.',
      'Serve immediately.'
    ],
    tags: ['vegetarian', 'classic', 'fresh', 'crunchy']
  },
  {
    id: '18',
    title: 'Beef Stew',
    description: 'Hearty beef stew with vegetables, perfect for cold weather.',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=500&h=300&fit=crop',
    cookTime: 120,
    servings: 6,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '2 lbs beef chuck, cubed',
      '4 carrots, sliced',
      '3 potatoes, cubed',
      '1 onion, diced',
      '4 cups beef broth',
      '2 tablespoons flour',
      '2 tablespoons tomato paste',
      '1 bay leaf'
    ],
    instructions: [
      'Brown beef cubes in a large pot.',
      'Add onions and cook until soft.',
      'Stir in flour and tomato paste.',
      'Add broth, carrots, potatoes, and bay leaf.',
      'Simmer for 1.5 hours until meat is tender.',
      'Season with salt and pepper.'
    ],
    tags: ['high-protein', 'comfort-food', 'hearty', 'winter']
  },
  {
    id: '19',
    title: 'Oatmeal',
    description: 'Warm and comforting oatmeal with your favorite toppings.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop',
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '1 cup rolled oats',
      '2 cups milk or water',
      '2 tablespoons honey',
      '1/2 teaspoon cinnamon',
      '1/4 cup chopped nuts',
      '1/4 cup fresh berries',
      '1 tablespoon chia seeds'
    ],
    instructions: [
      'Bring milk to a boil in a saucepan.',
      'Add oats and reduce heat to simmer.',
      'Cook for 5 minutes, stirring occasionally.',
      'Stir in honey and cinnamon.',
      'Top with nuts, berries, and chia seeds.',
      'Serve warm.'
    ],
    tags: ['vegetarian', 'vegan', 'healthy', 'fiber-rich', 'quick']
  },
  {
    id: '20',
    title: 'Fish Tacos',
    description: 'Fresh fish tacos with cabbage slaw and creamy sauce.',
    image: 'https://www.ourhappymess.com/wp-content/uploads/2024/06/Fish-Tacos-with-Mango-Salsa-square-featured.jpg',
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    ingredients: [
      '1 lb white fish fillets',
      '8 corn tortillas',
      '2 cups cabbage, shredded',
      '1/2 cup sour cream',
      '2 limes, juiced',
      '1 teaspoon cumin',
      '1/2 cup cilantro',
      '1 avocado, sliced'
    ],
    instructions: [
      'Season fish with cumin, salt, and pepper.',
      'Cook fish in a pan until flaky.',
      'Make slaw with cabbage, lime juice, and cilantro.',
      'Mix sour cream with lime juice for sauce.',
      'Warm tortillas and fill with fish.',
      'Top with slaw, sauce, and avocado.'
    ],
    tags: ['high-protein', 'gluten-free', 'fresh', 'mexican', 'healthy']
  },
  {
    id: '21',
    title: 'Apple Pie',
    description: 'Classic American apple pie with flaky crust and cinnamon apples.',
    image: 'https://www.southernliving.com/thmb/bbDY1d_ySIrCFcq8WNBkR-3x6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg',
    cookTime: 90,
    servings: 8,
    difficulty: 'Hard',
    category: 'Dessert',
    ingredients: [
      '6 apples, peeled and sliced',
      '2 pie crusts',
      '3/4 cup sugar',
      '2 tablespoons flour',
      '1 teaspoon cinnamon',
      '1/4 teaspoon nutmeg',
      '2 tablespoons butter'
    ],
    instructions: [
      'Preheat oven to 425°F.',
      'Mix apples with sugar, flour, and spices.',
      'Line pie pan with one crust.',
      'Fill with apple mixture and dot with butter.',
      'Cover with second crust and seal edges.',
      'Bake for 45-50 minutes until golden.'
    ],
    tags: ['vegetarian', 'classic', 'american', 'sweet', 'comfort-food']
  },
  {
    id: '22',
    title: 'Caprese Salad',
    description: 'Simple Italian salad with tomatoes, mozzarella, and basil.',
    image: 'https://www.splashoftaste.com/wp-content/uploads/2023/06/Caprese-Salad-featured.jpg',
    cookTime: 10,
    servings: 4,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '4 large tomatoes',
      '8 oz fresh mozzarella',
      '1/4 cup fresh basil',
      '3 tablespoons olive oil',
      '2 tablespoons balsamic vinegar',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Slice tomatoes and mozzarella into rounds.',
      'Arrange on a platter alternating tomato and mozzarella.',
      'Tear basil leaves and scatter over salad.',
      'Drizzle with olive oil and balsamic vinegar.',
      'Season with salt and pepper.',
      'Serve immediately.'
    ],
    tags: ['vegetarian', 'gluten-free', 'italian', 'fresh', 'simple']
  },
  {
    id: '23',
    title: 'Chicken Noodle Soup',
    description: 'Comforting chicken noodle soup perfect for when you\'re feeling under the weather.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop',
    cookTime: 60,
    servings: 6,
    difficulty: 'Easy',
    category: 'Lunch',
    ingredients: [
      '1 whole chicken',
      '8 cups chicken broth',
      '2 cups egg noodles',
      '3 carrots, sliced',
      '3 celery stalks, sliced',
      '1 onion, diced',
      '2 cloves garlic',
      '1 bay leaf'
    ],
    instructions: [
      'Simmer chicken in broth until cooked through.',
      'Remove chicken and shred the meat.',
      'Add vegetables and noodles to broth.',
      'Cook until noodles are tender.',
      'Return shredded chicken to pot.',
      'Season with salt and pepper.'
    ],
    tags: ['high-protein', 'comfort-food', 'healing', 'warm', 'classic']
  },
  {
    id: '24',
    title: 'Pancakes',
    description: 'Fluffy buttermilk pancakes with maple syrup and butter.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=300&fit=crop',
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: [
      '2 cups flour',
      '2 tablespoons sugar',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '2 cups buttermilk',
      '2 eggs',
      '1/4 cup melted butter'
    ],
    instructions: [
      'Mix dry ingredients in a large bowl.',
      'Whisk wet ingredients in another bowl.',
      'Combine wet and dry ingredients.',
      'Heat griddle and pour batter.',
      'Cook until bubbles form, then flip.',
      'Serve with maple syrup and butter.'
    ],
    tags: ['vegetarian', 'family-friendly', 'classic', 'sweet', 'fluffy']
  },
  {
    id: '25',
    title: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/tiramisu_82373_16x9.jpg',
    cookTime: 60,
    servings: 8,
    difficulty: 'Hard',
    category: 'Dessert',
    ingredients: [
      '24 ladyfingers',
      '1 cup strong coffee',
      '16 oz mascarpone cheese',
      '4 eggs, separated',
      '1/2 cup sugar',
      '2 tablespoons cocoa powder',
      '2 tablespoons rum'
    ],
    instructions: [
      'Beat egg yolks with half the sugar.',
      'Mix in mascarpone and rum.',
      'Beat egg whites with remaining sugar.',
      'Fold egg whites into mascarpone mixture.',
      'Dip ladyfingers in coffee.',
      'Layer ladyfingers and cream, dust with cocoa.'
    ],
    tags: ['vegetarian', 'italian', 'elegant', 'coffee', 'rich']
  },
  {
    id: '26',
    title: 'Trail Mix',
    description: 'Homemade trail mix with nuts, dried fruits, and chocolate chips.',
    image: 'https://beingnutritious.com/wp-content/uploads/2022/04/DIY-Trail-Mix.jpg',
    cookTime: 10,
    servings: 8,
    difficulty: 'Easy',
    category: 'Snack',
    ingredients: [
      '1 cup almonds',
      '1 cup cashews',
      '1 cup dried cranberries',
      '1 cup raisins',
      '1/2 cup chocolate chips',
      '1/2 cup sunflower seeds',
      '1/4 cup coconut flakes'
    ],
    instructions: [
      'Mix all ingredients in a large bowl.',
      'Store in an airtight container.',
      'Can be kept for up to 2 weeks.',
      'Perfect for hiking or snacking.',
      'Customize with your favorite ingredients.',
      'Great source of energy and protein.'
    ],
    tags: ['vegetarian', 'vegan', 'gluten-free', 'healthy', 'portable', 'energy']
  },
  {
    id: '27',
    title: 'Risotto',
    description: 'Creamy Italian risotto with mushrooms and parmesan cheese.',
    image: 'https://europeanmushrooms.eu/wp-content/uploads/2023/12/nl_22_lemon-risotto-with-mushroom.png',
    cookTime: 45,
    servings: 4,
    difficulty: 'Hard',
    category: 'Dinner',
    ingredients: [
      '1 1/2 cups arborio rice',
      '4 cups chicken broth',
      '1 cup mushrooms, sliced',
      '1/2 cup white wine',
      '1/2 cup parmesan cheese',
      '1 onion, diced',
      '3 tablespoons butter',
      '2 cloves garlic'
    ],
    instructions: [
      'Sauté onion and garlic in butter.',
      'Add rice and stir until translucent.',
      'Add wine and stir until absorbed.',
      'Add broth gradually, stirring constantly.',
      'Add mushrooms halfway through cooking.',
      'Stir in parmesan cheese and serve.'
    ],
    tags: ['vegetarian', 'italian', 'creamy', 'comfort-food', 'elegant']
  },
  {
    id: '28',
    title: 'Smoothie Bowl',
    description: 'Colorful smoothie bowl topped with fresh fruits and granola.',
    image: 'https://www.modernhoney.com/wp-content/uploads/2023/06/Smoothie-Bowls-11-1-scaled.jpg',
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
      '1/4 cup granola',
      'Fresh berries for topping',
      '1 tablespoon chia seeds'
    ],
    instructions: [
      'Blend frozen fruits with yogurt and milk.',
      'Add honey and blend until smooth.',
      'Pour into bowls.',
      'Top with granola and fresh berries.',
      'Sprinkle with chia seeds.',
      'Serve immediately.'
    ],
    tags: ['vegetarian', 'gluten-free', 'healthy', 'colorful', 'instagram-worthy']
  }
];

export const categories: Recipe['category'][] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];
export const difficulties: Recipe['difficulty'][] = ['Easy', 'Medium', 'Hard'];
export const commonTags: string[] = ['vegetarian', 'vegan', 'gluten-free', 'healthy', 'quick', 'high-protein', 'family-friendly', 'classic', 'mexican', 'mediterranean', 'comfort-food', 'portable', 'sweet', 'creamy', 'italian', 'rich', 'elegant', 'fresh', 'simple', 'healing', 'warm', 'fluffy', 'coffee', 'energy', 'colorful', 'instagram-worthy'];
