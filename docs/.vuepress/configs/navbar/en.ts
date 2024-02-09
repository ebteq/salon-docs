import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    children: ['/guide/introduction.md', '/guide/getting-started.md'],
  },
  {
    text: 'Feature',
    children: [
      '/feature/business/main.md',
      '/feature/customer-app/main.md',
      '/feature/admin/main.md',
    ],
  },
  {
    text: 'Documentation',
    children: [
      {
        text: 'General',
        children: [
          '/documentation/general/workflow/main.md',
          '/documentation/general/security/main.md',
        ],
      },
      {
        text: 'Backend',
        children: [
          '/documentation/backend/basics/main.md',
          '/documentation/backend/digging-depper/main.md',
          '/documentation/backend/architecture/main.md',
          '/documentation/backend/testing/main.md',
          '/documentation/backend/tooling/main.md',
        ],
      },
      {
        text: 'Frontend',
        children: [
          '/documentation/frontend/basics/main.md',
          '/documentation/frontend/digging-depper/main.md',
          '/documentation/frontend/architecture/main.md',
          '/documentation/frontend/testing/main.md',
          '/documentation/frontend/tooling/main.md',
        ],
      },
    ],
  },
  {
    text: 'Advanced',
    children: ['/advanced/optimisation.md'],
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'Laravel',
        link: 'https://laravel.com',
      },
      {
        text: 'Vue',
        link: 'https://vuejs.org',
      },
      {
        text: 'Pest',
        link: 'http://pestphp.com',
      },
      {
        text: 'Inertia',
        link: 'http://inertiajs.com',
      },
    ],
  },
]
