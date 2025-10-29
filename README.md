# IvaApp

A simple and modern web application for browsing and purchasing daily, weekly, and monthly internet packages.

## Technologies

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 3.4+
- TypeScript
- Absolute Imports (`@/`)
- BEM Naming Convention

## Project Structure

ivaapp/

├─ app/

│ ├─ layout.jsx

│ ├─ page.jsx

│ ├─ performance/

│ ├─ weekly/

│ └─ monthly/

├─ components/

│ ├─ Header.jsx

│ ├─ Footer.jsx

│ ├─ DailyPackages.jsx

│ ├─ DailyTab.jsx

│ ├─ WeeklyPackages.jsx

│ └─ Performance.jsx

├─ public/

│ └─ assets/header/logo.svg

├─ styles/

│ └─ globals.css

└─ tailwind.config.js


## Getting Started
```bash
# Clone the repository
git clone https://github.com/yourusername/ivaapp.git

# Navigate to the project folder
cd ivaapp

# Install dependencies
npm install

# Run the development server
npm run dev

Coding Standards
No Persian comments
Use absolute imports (@/)
Remove all unused imports
Follow BEM for naming CSS classes
Ensure full responsiveness across all devices
Project Style Guide
Brand blue: #005B9E
Accent color: yellow
Fonts: IRANSans, Dana, or Shabnam

