# 🌐 Iva Internet Packages Web Application

The Iva Project is a modern, fully responsive web application developed to provide internet package services with a strong focus on delivering an "App-like UX" similar to native mobile applications.

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Core Technologies** | Built with Next.js (App Router), React (v19+), JavaScript (ES6+), and Tailwind CSS (v3.4+) |
| **Responsive Design** | Full responsiveness achieved via Tailwind CSS utilities for optimal viewing across all devices (Mobile, Tablet, Desktop) |
| **Styling Standard** | Utilizes the BEM (Block, Element, Modifier) methodology for predictable, scalable, and maintainable CSS structures alongside utility classes. |
| **App-like Layout** | Features a **Fixed Header** (TopLayout) and a **Fixed Footer/Tabbar**, ensuring the main content area is the only scrollable section for a fluid user experience. |
| **Branding** | Adheres to Iva brand guidelines: **Brand Blue** (`#005B9E`) as the primary color, accented with yellow for interactive elements. |
| **Absolute Imports** | Uses the `@/` alias for clean, absolute imports, improving code organization and readability. |

## 🚀 Getting Started

To set up and run the project locally, execute the following commands in your terminal:

### 1. Prerequisites

Ensure you have Node.js (version 18 or higher) and npm installed.

### 2. Install Dependencies
```bash
npm install

 Technical Standards
1. Tailwind CSS
All styling is performed using a Utility-First approach with Tailwind CSS. Layouts are designed Mobile-First and are fully responsive.

2. BEM Methodology
For complex and reusable components, BEM is used to provide structure alongside Tailwind utilities:

Block Example: daily-tab
Element Example: daily-tab__item
Modifier Example: (When needed) daily-tab__item--active
3. Fixed Layout Implementation
The App-like UX is achieved by applying structural CSS within app/layout.jsx:

The TopLayout (Header) and Footer components are set to position: fixed.
