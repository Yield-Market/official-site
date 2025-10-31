/**
 * Next.js config to support deploying to GitHub Pages under a repo subpath.
 *
 * Usage:
 *   GITHUB_PAGES=true npm run build && GITHUB_PAGES=true npm run export
 *
 * This will set `basePath` and `assetPrefix` so assets referenced with leading
 * "/" (eg. "/icon.png") resolve correctly when the site is served from
 * https://<user>.github.io/official-site/
 */

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? '/official-site' : ''
const assetPrefix = isGithubPages ? '/official-site' : ''

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // when deploying to GitHub Pages we need both basePath and assetPrefix
  basePath,
  assetPrefix,
}
