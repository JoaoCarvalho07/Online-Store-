# Online Store

A simple e-commerce application built with React Router v7 and Tailwind CSS.

## Features

- **Homepage** — Product listing with sorting, category filtering, and pagination
- **Product Detail** — Detailed product page with image, description, and add to cart functionality
- **Shopping Cart** — Cart page with quantity controls, item removal, and order summary
- **Responsive Design** — Optimized for both mobile and desktop devices

## Tech Stack

- [React Router v7](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React](https://lucide.dev) — Icons
- [DummyJSON API](https://dummyjson.com) — Product data

## Getting Started

### Prerequisites

- Node.js v20 or higher

### Installation

1. Clone the repository
```bash
   git clone https://github.com/JoaoCarvalho07/Online-Store-.git
   cd Online-Store-
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server
```bash
   npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Known Issues

- Cart resets on page refresh as it is stored in React Context (in-memory)
- When filtering by multiple categories with sorting, products are sorted within each category independently due to DummyJSON API limitations
