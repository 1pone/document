import { baseOptions } from '@/app/layout.config'
import { source } from '@/app/source'
import { I18nProvider } from 'fumadocs-ui/i18n'
import { DocsLayout } from 'fumadocs-ui/layout'
import { RootProvider } from 'fumadocs-ui/provider'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './global.css'

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({ params, children }: { params: { lang: string }; children: ReactNode }) {
  return (
    <html lang={params.lang} className={inter.className} suppressHydrationWarning>
      <body>
        <I18nProvider
          locale={params.lang}
          locales={[
            {
              name: 'English',
              locale: 'en',
            },
            {
              name: '中文',
              locale: 'cn',
            },
          ]}
          translations={
            {
              cn: {
                toc: '目录',
                search: '搜索文档',
                lastUpdate: '最后更新于',
                searchNoResult: '无搜索结果',
                previousPage: '上一页',
                nextPage: '下一页',
                chooseLanguage: '选择语言',
              },
            }[params.lang]
          }
        >
          <RootProvider>
            <DocsLayout tree={source.pageTree[params.lang]} {...baseOptions}>
              {children}
            </DocsLayout>
          </RootProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
