import type { Metadata } from 'next'
import { Header, Footer, SectionShell, SectionHeader } from '@/components/layout'
import { ServiceCard, ProcessDiagram, FAQ } from '@/components/services'
import { CTABand } from '@/components/home/CTABand'
import { SERVICE_PACKAGES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services — AI-Accelerated Web Development Packages',
  description:
    'Productized web development packages: MVP in 4 weeks, AI-powered redesigns, and custom dev tooling. Clear outcomes, fixed scope.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <SectionShell padding="lg">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="Services"
              subtitle="Productized packages for predictable outcomes. Know what you're getting, when you're getting it, and how much it costs."
              align="center"
            />
          </div>
        </SectionShell>

        {/* Service Packages */}
        <SectionShell background="secondary" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICE_PACKAGES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </SectionShell>

        {/* Process Diagram */}
        <ProcessDiagram />

        {/* Custom Projects Note */}
        <SectionShell padding="md">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-surface/30 border border-text-muted/10">
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              Need Something Custom?
            </h3>
            <p className="mt-3 text-text-muted">
              These packages are starting points. Every project is unique, and I&apos;m
              happy to create a custom scope that fits your specific needs and budget.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              Let&apos;s discuss your project →
            </a>
          </div>
        </SectionShell>

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <CTABand />
      </main>
      <Footer />
    </>
  )
}

