import { docs, meta } from '@/.source'
import i18n from '@/i18n'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'

export const source = loader({
  i18n,
  baseUrl: '/',
  source: createMDXSource(docs, meta),
})
