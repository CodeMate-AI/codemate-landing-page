import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../../styles/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/lib/providers/theme-provider'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeMate | Your mate while coding',
  description: 'Code 10x faster as CodeMate autocorrects your errors, all without leaving your environment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(roboto.className)}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[90rem] mx-auto px-2 font-sans antialiased">
            <Navbar />
            {children}

          </main>
          <Image
            width={1512}
            height={550}
            className="absolute left-1/4 top-0 -z-10 -translate-x-1/2"
            src="/images/gradient-background-top.png"
            alt="Gradient background"
            priority
          />
          <Image
            width={1512}
            height={447}
            className="absolute bottom-0 left-[60%] -z-10 -translate-x-1/2"
            src="/images/gradient-background-bottom.png"
            alt="Gradient background"
            priority
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
