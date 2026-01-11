# Lyle Zhang's Personal Website

A modern, responsive personal website built with Next.js 15, React, TypeScript, and Tailwind CSS.

## Quick Start

1. Install dependencies: `npm install`
2. Create `.env.local` file (see `.env.example`)
3. Run dev server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Features

- Modern Tech Stack (Next.js 15, React 19, TypeScript, Tailwind CSS v4)
- Responsive Design
- SEO Optimized
- GitHub Integration
- Contact Form with Resend
- Achievements System

## Setup

Copy `.env.example` to `.env.local` and add your API keys:
- RESEND_API_KEY: Get from [resend.com](https://resend.com)
- GITHUB_TOKEN: Create at [github.com/settings/tokens](https://github.com/settings/tokens)

## Customization

Edit `lib/data/achievements.json` to add your achievements, publications, and projects.

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

See full documentation in the codebase.
