# 🗺️ Hyrule Compendium Explorer

A beautifully designed web application that lets you explore the vast world of Hyrule from **The Legend of Zelda: Breath of the Wild**. Built with modern Web Components, this app provides an interactive catalog of creatures, monsters, materials, equipment, and treasures from the game.

![Hyrule Compendium Screenshot](https://img.shields.io/badge/Live-Demo-brightgreen) ![Web Components](https://img.shields.io/badge/Web-Components-blue) ![Vanilla JS](https://img.shields.io/badge/100%25-Vanilla_JS-yellow)

## ✨ Live Demo
**[🌐 Open the Live Application](https://assignment4byjean.netlify.app/)**

## 🎮 Features

### 🏗️ Modern Architecture
- **Native Web Components** - No frameworks, just pure browser technology
- **Shadow DOM** - Encapsulated styles and markup
- **Slots & Properties** - Reusable, configurable components
- **ES6 Modules** - Clean, modular JavaScript

### 📱 User Experience
- **Responsive Design** - Beautiful on desktop, tablet, and mobile
- **Interactive Cards** - Expandable entries with detailed information
- **Fast Navigation** - Instant category switching
- **Live API Data** - Real-time information from the Hyrule Compendium

### 🔧 Technical Excellence
- **No Build Step** - Runs directly in the browser
- **Clean Code** - Well-structured, commented, and maintainable
- **API Integration** - Async/await with error handling
- **CSS Custom Properties** - Themeable design system

## 📸 Preview

```
┌─────────────────────────────────────┐
│  🏠 HYRULE COMPENDIUM               │
│                                     │
│  Welcome to the Hyrule Compendium!  │
│  Select a category to explore:      │
│                                     │
│  [🐾 Creatures] [👹 Monsters]       │
│  [🌿 Materials] [⚔️ Equipment]      │
│  [💎 Treasure]                      │
│                                     │
│  → Click any category to begin!     │
└─────────────────────────────────────┘
```

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup & Web Components |
| **CSS3** | Responsive design with Flexbox/Grid |
| **Vanilla JavaScript** | ES6+ modules, async/await |
| **Web Components** | Custom Elements, Shadow DOM, Templates |
| **Hyrule Compendium API** | Live game data |
| **Netlify** | Deployment & hosting |

## 🚀 Quick Start

### Run Locally (No Installation Needed!)
```bash
# 1. Clone the repository
git clone https://github.com/JeanAmenyaglo/hyrule-compendium.git

# 2. Navigate to the project
cd hyrule-compendium

# 3. Open in your browser
# On Mac:
open public/index.html

# On Windows:
start public/index.html

# On Linux:
xdg-open public/index.html
```

### Deploy Your Own Copy
1. **Fork** this repository on GitHub
2. **Sign up** for a free [Netlify](https://netlify.com) account
3. **Click** "New site from Git"
4. **Select** your forked repository
5. **Set** publish directory to `public/`
6. **Click** "Deploy site" - done in 60 seconds!

## 📁 Project Structure
```
hyrule-compendium/
├── public/                    # Application files
│   ├── index.html            # Home page with category selection
│   ├── category.html         # Category detail page
│   ├── css/
│   │   └── styles.css       # Global styles & responsive design
│   └── js/
│       ├── main.js          # Home page initialization
│       ├── category.js      # API integration & rendering
│       └── components/      # Custom Web Components
│           ├── app-header.js    # Navigation header
│           ├── app-button.js    # Reusable button/link
│           └── entry-card.js    # Interactive entry display
├── .gitignore               # Git configuration
└── README.md               # This file
```

## ⚡ Web Components Deep Dive

### `<app-header>`
A navigation header with customizable branding.
```html
<app-header>
  <span slot="home-text">Hyrule Compendium</span>
</app-header>
```

### `<app-button>`
Smart button that becomes a link when `href` is provided.
```html
<app-button href="category.html?category=monsters">
  <span slot="label">👹 Monsters</span>
</app-button>
```

### `<entry-card>`
Interactive card showing Hyrule Compendium entries with expandable details.
```javascript
const card = document.createElement('entry-card');
card.data = {
  name: "Bokoblin",
  category: "monsters",
  description: "A common enemy found across Hyrule...",
  image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/bokoblin/image",
  common_locations: ["Hyrule Field", "West Necluda"],
  drops: ["Bokoblin Horn", "Bokoblin Fang"]
};
```

## 🔗 API Integration
This application uses the official [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/#/):
- **Endpoint:** `https://botw-compendium.herokuapp.com/api/v3/compendium/category/{category}`
- **Categories:** `creatures`, `monsters`, `materials`, `equipment`, `treasure`
- **Data Format:** JSON with images, descriptions, locations, and drops

## 🎯 Learning Outcomes
This project demonstrates mastery of:

### Frontend Development
- **Component Architecture** - Building reusable UI elements
- **State Management** - Internal component state with getters/setters
- **API Communication** - Fetching and rendering dynamic data
- **Event Handling** - User interactions and DOM updates

### Modern Web Standards
- **Web Components** - The future of web development
- **ES6+ Features** - Classes, modules, private fields
- **CSS Custom Properties** - Design system foundations
- **Shadow DOM** - Style encapsulation and isolation

### Professional Practices
- **Code Organization** - Clean separation of concerns
- **Error Handling** - Graceful API failure management
- **Responsive Design** - Mobile-first approach
- **Deployment** - CI/CD pipeline setup

## 📖 How to Use
1. **Visit** the [live demo](https://assignment4byjean.netlify.app/)
2. **Choose** a category (Creatures, Monsters, Materials, Equipment, or Treasure)
3. **Browse** through the entries
4. **Click** "Show Details" on any card to see more information
5. **Explore** different categories to discover all Hyrule has to offer!

## 🤝 Contributing
This is a learning project, but suggestions are welcome! If you have ideas for improvement:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License
This project is open source and available under the **MIT License**. Feel free to use it as a learning resource, portfolio piece, or foundation for your own projects.

## 👨‍💻 About the Developer
**Jean Amenyaglo**  
Frontend Developer specializing in modern web technologies.  
Passionate about clean code, user experience, and interactive applications.

- **GitHub:** [@JeanAmenyaglo](https://github.com/JeanAmenyaglo)
- **Portfolio:** *[Your Portfolio Link Here]*
- **LinkedIn:** *[Your LinkedIn Here]*

---
*This project was created as a demonstration of modern frontend development skills using native browser technologies. All game data is provided by the Hyrule Compendium API and is property of Nintendo.*