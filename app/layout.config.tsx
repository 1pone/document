import { type HomeLayoutProps } from 'fumadocs-ui/home-layout'

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: '1pone',
  },
  i18n: true,
  githubUrl: 'https://github.com/1pone/document',
  links: [],
}
