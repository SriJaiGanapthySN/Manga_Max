# MangaMax - Anime Website

A modern, responsive anime website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradients, animations, and hover effects
- **Component-Based Architecture**: Modular, reusable components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📁 Component Structure

### Core Components

#### `Header.tsx`

- Navigation bar with logo, menu links, search bar, and sign-in button
- Responsive design with mobile hamburger menu
- Purple/dark theme consistent with the site

#### `Hero.tsx`

- Landing section with gradient background
- Animated floating elements
- Call-to-action buttons
- Responsive typography

#### `AnimeCard.tsx`

- Reusable card component for displaying anime information
- Props: title, image, rating, year, genre, episodes
- Hover effects with play button overlay
- Rating display and favorite button

#### `FeaturedSection.tsx`

- Showcases featured anime in a grid layout
- Uses AnimeCard components
- Mock data included (replace with real API data)
- Responsive grid (1-4 columns based on screen size)

#### `CategoriesSection.tsx`

- Genre browsing section
- Colorful category cards with gradients
- Hover animations and stats display
- 6 main categories: Action, Romance, Fantasy, Sci-Fi, Comedy, Horror

#### `StatsSection.tsx`

- Statistics display with gradient background
- Shows: Anime Series count, Active Users, Episodes Watched, Genres Available
- Glass morphism effect cards

#### `Newsletter.tsx`

- Email subscription section
- Input validation ready
- Responsive form layout

#### `Footer.tsx`

- Comprehensive footer with links and social media
- Four-column layout on desktop
- Company info, quick links, and support sections

## 🎨 Design Features

- **Color Scheme**: Purple, indigo, and gray theme
- **Animations**: Hover effects, transitions, and floating elements
- **Typography**: Bold headings with gradient text effects
- **Cards**: Consistent card design with hover states
- **Buttons**: Primary and secondary button styles
- **Responsive**: Mobile-first design approach

## 🛠️ Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🔧 Customization

### Adding New Anime Data

Replace the mock data in `FeaturedSection.tsx` with your API data:

```typescript
const featuredAnime = [
  {
    id: 1,
    title: "Your Anime Title",
    image: "image-url",
    rating: 9.0,
    year: 2023,
    genre: "Action",
    episodes: 24,
  },
  // ... more anime
];
```

### Modifying Colors

The color scheme uses Tailwind's purple, indigo, and gray palettes. To change:

- Primary: `purple-600` → your color
- Secondary: `indigo-600` → your color
- Background: `gray-900` → your color

### Adding New Components

1. Create component in `/src/components/`
2. Export from `/src/components/index.ts`
3. Import and use in pages

## 🌟 Future Enhancements

- [ ] Add routing with React Router
- [ ] Implement search functionality
- [ ] Add user authentication
- [ ] Connect to anime API (e.g., Jikan API)
- [ ] Add anime detail pages
- [ ] Implement favorites system
- [ ] Add user profiles
- [ ] Dark/light theme toggle

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **ESLint** - Code linting

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
