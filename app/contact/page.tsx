import type { Metadata } from 'next'
import { Header, Footer, SectionShell } from '@/components/layout'
import { ContactForm } from '@/components/contact'
import { FadeIn } from '@/components/effects/FadeIn'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — Start Your AI-Powered Web Project',
  description:
    'Ready to build? Get in touch to discuss your web development project. Quick discovery, clear proposals, fast execution.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <SectionShell padding="lg">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
                Work With Me
              </h1>
              <p className="mt-6 text-lg text-text-muted">
                Let&apos;s build something remarkable. Fill out the form below and I&apos;ll 
                get back to you within 24-48 hours to discuss your project.
              </p>
            </div>
          </FadeIn>
        </SectionShell>

        {/* Contact Form */}
        <SectionShell background="secondary" padding="lg">
          <ContactForm />
        </SectionShell>

        {/* Next Steps */}
        <SectionShell padding="lg">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-text-primary text-center mb-12">
                What Happens Next
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StepCard
                  number={1}
                  title="Review"
                  description="I'll review your project details and do some initial research to understand your needs."
                  timeframe="Within 24-48 hours"
                />
                <StepCard
                  number={2}
                  title="Discovery Call"
                  description="We'll have a 30-minute call to dive deeper into your requirements and goals."
                  timeframe="This week"
                />
                <StepCard
                  number={3}
                  title="Proposal"
                  description="You'll receive a detailed proposal with scope, timeline, and pricing."
                  timeframe="Within 3 days of call"
                />
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        {/* Alternative Contact */}
        <SectionShell background="secondary" padding="md">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              Prefer to chat directly?
            </h3>
            <p className="mt-4 text-text-muted">
              For quick questions or if you&apos;d rather skip the form, you can reach me at{' '}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>{' '}
              or connect on{' '}
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  )
}

function StepCard({
  number,
  title,
  description,
  timeframe,
}: {
  number: number
  title: string
  description: string
  timeframe: string
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center font-heading font-bold text-accent-cyan">
        {number}
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-muted">{description}</p>
      <p className="mt-3 text-xs text-accent-cyan">{timeframe}</p>
    </div>
  )
}

