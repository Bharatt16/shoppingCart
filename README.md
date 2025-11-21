# 🎮 Game Haven - Shopping Cart

A modern, responsive game shopping cart application built with React and Vite. Browse, filter, and shop for your favorite games with an intuitive user interface.

**🌐 Live Demo:** https://shopping-cart-ruddy-two.vercel.app/

## ✨ Features

- **🎯 Game Browsing**: Explore a vast collection of games fetched from the RAWG API
- **🔍 Advanced Filtering**: Filter games by:
  - Genre (Action, Adventure, RPG, Shooter, Strategy, etc.)
  - Platform (PC, PlayStation, Xbox, Nintendo Switch, iOS, Android)
  - Top Games (All Time Top, Popular in 2025, Last 30 Days)
  - Custom Added Games
- **🛒 Shopping Cart**: Add games to cart with persistent state management
- **📱 Responsive Design**: Fully responsive layout optimized for desktop and mobile devices
- **🎨 Modern UI**: Beautiful interface with video backgrounds and smooth animations
- **🎬 Animations**: GSAP-powered animations for enhanced user experience
- **➕ Custom Games**: Add your own games to the collection
- **📄 Game Details**: View detailed information about each game

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **RAWG API** - Game data source

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shoppingCart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
shoppingCart/
├── public/
│   ├── images/          # Static images
│   ├── svgs/            # SVG icons
│   └── videos/          # Background videos
├── src/
│   ├── components/      # Reusable components
│   │   ├── LeftSideBar.jsx
│   │   ├── menu.jsx
│   │   ├── Navigation.jsx
│   │   └── ShopDetails.jsx
│   ├── context/         # React Context providers
│   │   ├── CartContext.jsx
│   │   └── UserGameContext.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── GameDetails.jsx
│   │   └── AddGame.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
└── vite.config.js
```

## 🎯 Key Features Explained

### Shopping Cart
- Add games to cart with a single click
- Visual feedback when items are added
- Persistent cart state using React Context

### Game Filtering
- Quick navigation from the home page
- Sidebar filters for desktop view
- Mobile hamburger menu for filters
- URL-based navigation with query parameters

### Responsive Design
- Desktop-optimized layout with sidebar
- Mobile-friendly hamburger menu
- Adaptive video backgrounds for different screen sizes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔗 API Integration

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to fetch game data. The API provides:
- Game listings
- Game details
- Platform information
- Genre filtering
- And more

## 🎨 Customization

You can customize the application by:
- Modifying Tailwind classes in components
- Adjusting GSAP animations in `src/animations.js`
- Adding new routes in `src/App.jsx`
- Extending the cart functionality in `src/context/CartContext.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React and modern web technologies.

---

**Note**: Make sure to add your RAWG API key if you plan to run this project locally. The API key is currently configured in the `Explore.jsx` component.
