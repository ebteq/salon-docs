import type { HeadConfig } from 'vuepress/core'
import main from '../main.js'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/images/icons/ebteq-icon.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/images/icons/ebteq-icon.png`,
    },
  ],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'application-name', content: main.project.name }],
  ['meta', { name: 'apple-mobile-web-app-title', content: main.project.name }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: `/images/icons/ebteq-icon.png` }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/images/icons/ebteq-icon.png',
      color: main.project.themeColor,
    },
  ],
  [
    'meta',
    { name: 'msapplication-TileColor', content: main.project.themeColor },
  ],
  ['meta', { name: 'theme-color', content: main.project.themeColor }],
]
