# Bookkeeping Site

Modern bookkeeping website built with Next.js 16, React 19, Tailwind CSS, and Sanity.

## Overview

This project is a marketing website for a bookkeeping business. It includes the core pages needed for a service-based site:

- Home
- Services
- About
- FAQ
- Contact
- Blog
- Individual blog post pages

The project also includes a Sanity setup for managing services, testimonials, FAQs, and blog content.

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Sanity CMS
- TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run lint` runs ESLint

## Project Structure

- `app/` application routes and pages
- `components/` reusable UI components
- `lib/` queries, sample data, Sanity client, and shared types
- `sanity/` Sanity config and content schemas
- `app/api/contact/route.ts` contact form API endpoint

## Environment Variables

Copy the example file:

```bash
cp .env.local.example .env.local
```

Then set the following values:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Notes

- The contact form posts to the local API route at `app/api/contact/route.ts`
- Sample content is available in `lib/sampleData.ts` when CMS data is not configured
- The Sanity Studio configuration is stored in `sanity/sanity.config.ts`
