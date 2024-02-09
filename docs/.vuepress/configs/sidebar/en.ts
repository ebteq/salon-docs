import type { SidebarConfig } from '@vuepress/theme-default'
import documentationSidebar from './en-documentation'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: ['/guide/introduction.md', '/guide/getting-started.md'],
    },
  ],
  '/feature/business/': [
    {
      text: 'Business',
      children: ['/feature/business/main.md'],
    },
    {
      text: 'Operation',
      collapsible: true,
      children: [
        '/feature/business/checkout.md',
        '/feature/business/member.md',
        '/feature/business/appointment.md',
        '/feature/business/activity-log.md',
        '/feature/business/ranking.md',
        '/feature/business/analytic.md',
        '/feature/business/sales-report.md',
        '/feature/business/profit-and-loss.md',
        '/feature/business/staff.md',
        '/feature/business/stock-control.md',
        '/feature/business/expense.md',
        '/feature/business/shortcuts.md',
      ],
    },
    {
      text: 'Resources',
      collapsible: true,
      children: [
        '/feature/business/group.md',
        '/feature/business/category.md',
        '/feature/business/product.md',
        '/feature/business/service.md',
        '/feature/business/package.md',
        '/feature/business/plan.md',
        '/feature/business/voucher.md',
      ],
    },
    {
      text: 'Manage',
      collapsible: true,
      children: ['/feature/business/branch.md', '/feature/business/setting.md'],
    },
    {
      text: 'Misc',
      collapsible: true,
      children: [
        '/feature/business/reminder.md',
        '/feature/business/sending-message.md',
        '/feature/business/e-invoice.md',
        '/feature/business/referral.md',
        '/feature/business/help.md',
        '/feature/business/feature-notification.md',
      ],
    },
  ],
  '/feature/customer-app/': [
    {
      text: 'Customer App',
      children: ['/feature/customer-app/main.md'],
    },
  ],
  '/feature/admin/': [
    {
      text: 'Admin',
      children: ['/feature/admin/main.md'],
    },
  ],
  ...documentationSidebar,
  '/advanced/': [
    {
      text: 'Advanced',
      children: ['/advanced/optimisation.md'],
    },
  ],
}
