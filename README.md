# Vikasa Landing Page

Venture advisory and hands-on support for early-stage Canadian founders.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
vikasa-landing/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions
│   └── utils.ts        # cn() helper
├── public/             # Static assets
└── ...config files
```

## Features

- **Hero Section** - Eye-catching introduction with CTAs
- **About Section** - Company overview and value proposition
- **Services Section** - Key offerings for founders
- **Contact Section** - Contact form for inquiries
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean, professional design using shadcn/ui

## Building for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## License

MIT
