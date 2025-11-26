import Link from 'next/link'
import { Header, Footer, SectionShell } from '@/components/layout'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <SectionShell padding="xl">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Display */}
            <div className="font-heading text-[150px] md:text-[200px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-magenta">
              404
            </div>

            <h1 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-text-primary">
              Page Not Found
            </h1>

            <p className="mt-4 text-lg text-text-muted">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/">
                Go Home
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  )
}

