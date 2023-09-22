import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Roboto, Poppins } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
// const roboto = Roboto({ subsets: ['latin'], display: 'swap' , weight: ['400', '700'], variable: '--font-roboto'})
// const poppins = Poppins({ subsets: ['latin'], display: 'swap' , weight: ['400', '700'], variable: '--font-poppins'})


export const metadata: Metadata = {
  metadataBase: new URL('https://scorecampus.com'),
  title: 'Score Campus - Education Reinvented.',
  description:
    'Level up and power up the Everyday Superhero* in your child! SCORE CAMPUS LIVE offers PERFORMANCE COACHING and EDUCATIONAL CAMPS equip your child with a perfect mix of academics, grit, character and skills to stand out and reach his/ her highest potential.',
  openGraph: {
    title: 'Score Campus - Education Reinvented.',
    description:
      'Level up and power up the Everyday Superhero* in your child! SCORE CAMPUS LIVE offers PERFORMANCE COACHING and EDUCATIONAL CAMPS equip your child with a perfect mix of academics, grit, character and skills to stand out and reach his/ her highest potential.',
    url: 'scorecampus.com',
    siteName: 'Score Campus - Education Reinvented.',
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'scorecampus',
    'score campus - Education Reinvented.',
    'coaching',
    'children education',
    'education',
    'edtech',
    'education technology',
    'children future',
    'camp',
    'educational camp',
    'hero'
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
      
    </html>
  )
}
