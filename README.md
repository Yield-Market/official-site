This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

If you deploy this site to GitHub Pages under a repository subpath (for example
https://<user>.github.io/official-site/), static assets referenced with an
absolute path like `/icon.png` will break unless Next.js is configured with a
`basePath` and `assetPrefix` matching the repo path. This repository provides a
`next.config.js` that reads the environment variable `GITHUB_PAGES=true` to set
those values automatically.

To build/export for GitHub Pages:

```bash
# set GITHUB_PAGES so next.config.js enables the subpath
GITHUB_PAGES=true npm run build
GITHUB_PAGES=true npm run export
# the exported static site will be in the `out/` folder — deploy that to gh-pages
```

Alternative quick fixes:
- Change references from `/icon.png` to `./icon.png` or `icon.png` (relative
	paths) in your components so they work both on root domains and repo subpaths.
- Or explicitly set `basePath`/`assetPrefix` to your repo name in
	`next.config.js`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
