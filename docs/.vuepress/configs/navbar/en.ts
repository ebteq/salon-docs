import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    children: [
      '/guide/introduction.md',
      '/guide/getting-started.md',
    ],
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
          '/documentation/general/workflow.md',
          '/documentation/general/security.md',
        ],
      },
      {
        text: 'Backend',
        children: [
          '/documentation/backend/basics.md',
          '/documentation/backend/digging-depper.md',
          '/documentation/backend/architecture.md',
          '/documentation/backend/testing.md',
          '/documentation/backend/tooling.md',
        ],
      },
      {
        text: 'Frontend',
        children: [
          '/documentation/frontend/basics.md',
          '/documentation/frontend/digging-depper.md',
          '/documentation/frontend/architecture.md',
          '/documentation/frontend/testing.md',
          '/documentation/frontend/tooling.md',
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
