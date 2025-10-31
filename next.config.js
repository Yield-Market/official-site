// /**
//  * Next.js config to support deploying to GitHub Pages under a repo subpath.
//  *
//  * Usage:
//  *   GITHUB_PAGES=true npm run build && GITHUB_PAGES=true npm run export
//  *
//  * This will set `basePath` and `assetPrefix` so assets referenced with leading
//  * "/" (eg. "/official-site/icon.png") resolve correctly when the site is served from
//  * https://<user>.github.io/official-site/
//  */

// /** @type {import('next').NextConfig} */
// const isGithubPages = process.env.GITHUB_PAGES === 'true'
// const basePath = isGithubPages ? '/official-site' : ''
// const assetPrefix = isGithubPages ? '/official-site' : ''

// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
//   // when deploying to GitHub Pages we need both basePath and assetPrefix
//   basePath,
//   assetPrefix,
// }

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
// 仓库名为 official-site，basePath 和 assetPrefix 固定为 /official-site（无需动态判断，更稳定）
const basePath = '/official-site'
const assetPrefix = '/official-site'

module.exports = {
  reactStrictMode: true,
  // 移除 experimental.appDir（Next.js 13.4+ 已稳定支持 App Router，无需声明）
  // 静态导出核心配置（必须添加，确保生成可部署到 GitHub Pages 的纯静态文件）
  output: 'export',
  // 禁用服务器端图像优化（GitHub Pages 不支持 Next.js 图像服务）
  images: {
    unoptimized: true,
  },
  // GitHub Pages 部署必需的路径配置
  basePath,
  assetPrefix,
}