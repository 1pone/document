import { type HomeLayoutProps } from 'fumadocs-ui/home-layout'
import { GlobeIcon } from 'lucide-react'

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div className="group">
        <span>Softprobe Document</span>
      </div>
    ),
  },
  i18n: true,
  // githubUrl: 'https://github.com/1pone/document',
  links: [
    {
      text: 'Website',
      url: 'https://www.softprobe.ai/',
      active: 'nested-url',
      icon: <GlobeIcon />,
    },
  ],
}
