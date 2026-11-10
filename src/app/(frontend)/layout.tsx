import type { Metadata } from 'next'
import './styles.css'
import { SiteHeader } from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: { default: 'AURELIA — Your workspace', template: '%s — AURELIA' },
  description: 'A thoughtful workspace for projects, ideas, and research.',
}

export default function FrontendLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader />{children}<footer className="site-footer wrap"><span>AURELIA · A SPACE FOR YOUR WORK</span><a href="/admin">Content management ↗</a></footer></>
}
