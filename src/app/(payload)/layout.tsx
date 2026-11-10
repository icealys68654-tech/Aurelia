import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'AURELIA content management' }
export default function PayloadRootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
