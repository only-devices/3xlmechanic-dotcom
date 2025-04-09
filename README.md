# 3XL Mechanic Website

This is the official website for 3XL Mechanic, built with Next.js v15 and Tailwind CSS v4.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/3xlmechanic.git
   cd 3xlmechanic
   ```

2. Install dependencies
   ```
   npm install
   npm install tailwindcss @tailwindcss/postcss postcss next-sitemap
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
3xlmechanic/
├── app/
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Footer.tsx        # Footer component
│   └── Header.tsx        # Header component
├── public/
│   └── images/           # Store your images here
├── postcss.config.js     # PostCSS configuration for Tailwind CSS v4
├── tailwind.config.js    # Tailwind CSS configuration
├── next-sitemap.config.js # Sitemap configuration
└── vercel.json           # Vercel deployment configuration
```

## Configuration Files

### postcss.config.js
```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

### app/globals.css
```css
@import "tailwindcss";

:root {
  --foreground-rgb: 0, 0, 0;
  --background-rgb: 255, 255, 255;
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(var(--background-rgb));
}

@layer components {
  .prose h2 {
    @apply font-bold mt-8 mb-4;
    font-size: 1.5rem;
  }

  .prose p {
    @apply mb-4;
  }
}
```

## Creating Content

### Adding Images

Place your images in the `public/images/` directory. You'll need the following images:

- `logo.png` - Your brand logo
- `mechanic-hero.jpg` - Hero image for the homepage
- `about-hero.jpg` - Hero image for the about page
- `tutorial-1.jpg`, `tutorial-2.jpg`, `tutorial-3.jpg` - Thumbnail images for featured tutorials

### Customizing Content

Edit the text content in `app/page.tsx` and `app/about/page.tsx` to match your brand voice and information.

## SEO Optimization

The project is set up with:

- Page-specific metadata
- Sitemap generation
- Robots.txt configuration
- Proper HTML semantics
- Performance optimization

After building the project with `npm run build`, the sitemap will be automatically generated via the `next-sitemap` package.

## Deployment to Vercel

1. Push your code to a GitHub repository

2. Connect to Vercel:
   - Sign up/log in to [Vercel](https://vercel.com)
   - Create a new project and import your GitHub repository
   - Select the Next.js framework preset
   - Configure your project settings if needed
   - Deploy

3. Set up your custom domain:
   - In the Vercel dashboard, go to your project settings
   - Navigate to the "Domains" section
   - Add your domain: 3xlmechanic.com
   - Follow the instructions to configure your DNS settings

## Troubleshooting

If you encounter issues with Tailwind CSS:

1. Ensure you have the correct packages installed:
   ```
   npm install tailwindcss @tailwindcss/postcss postcss
   ```

2. Make sure your PostCSS configuration uses the v4 syntax:
   ```javascript
   module.exports = {
     plugins: {
       "@tailwindcss/postcss": {},
     },
   };
   ```

3. Check that your CSS file uses the new import syntax:
   ```css
   @import "tailwindcss";
   ```

## Future Enhancements

- Add a blog/tutorials section
- Implement a contact form
- Create a gallery of projects
- Add a newsletter subscription feature

## License

This project is private and proprietary.