# Recipe Collection Website

A modern, responsive recipe collection website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🍳 **Recipe Collection**: Browse through 12+ carefully curated recipes
- 🔍 **Advanced Search**: Search by recipe title, description, ingredients, or tags
- 🏷️ **Smart Filtering**: Filter by category, difficulty, and dietary restrictions
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🎨 **Modern UI**: Clean, beautiful interface with smooth animations
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🔒 **Type Safe**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image component with Unsplash integration
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd recipe-collection
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── recipe/[id]/       # Individual recipe pages
├── components/             # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── SearchBar.tsx      # Search functionality
│   ├── FilterButtons.tsx  # Category & difficulty filters
│   ├── TagFilter.tsx      # Dietary & tag filters
│   ├── RecipeCard.tsx     # Individual recipe card
│   └── RecipeGrid.tsx     # Recipe grid layout
├── data/                   # Mock data
│   └── recipes.ts         # Recipe database
└── types/                  # TypeScript types
    └── recipe.ts          # Recipe interface
```

## Recipe Data Structure

Each recipe includes:
- Basic info (title, description, image)
- Cooking details (time, servings, difficulty)
- Category and tags
- Ingredients list
- Step-by-step instructions

## Features in Detail

### Search & Filtering
- **Text Search**: Search across recipe titles, descriptions, ingredients, and tags
- **Category Filter**: Filter by meal type (Breakfast, Lunch, Dinner, Dessert, Snack)
- **Difficulty Filter**: Filter by cooking difficulty (Easy, Medium, Hard)
- **Tag Filter**: Filter by dietary restrictions and other tags
- **Combined Filters**: All filters work together for precise results

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

### Performance Features
- Next.js Image optimization
- Client-side filtering
- Efficient state management
- Smooth animations and transitions

## Customization

### Adding New Recipes
Edit `src/data/recipes.ts` to add new recipes following the existing structure.

### Styling
Modify `tailwind.config.js` and `src/app/globals.css` to customize colors, fonts, and other design elements.

### Components
All components are modular and can be easily modified or extended.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Recipe images from [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com)
- Fonts from [Google Fonts](https://fonts.google.com)
