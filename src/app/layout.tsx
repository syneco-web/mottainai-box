import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'もったいないBOX',
  description: 'しんえこの「もったいないBOX」情報サイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className=''>{children}</body>
    </html>
  )
}
