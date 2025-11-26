import type { Metadata } from 'next'
import { Header, Footer, SectionShell } from '@/components/layout'
import { PrinciplesGrid, ToolstackGrid } from '@/components/about'
import { CTABand } from '@/components/home/CTABand'
import { FadeIn } from '@/components/effects/FadeIn'
import { GradientText } from '@/components/ui/GradientText'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — Charanpreet Singh Chawla, AI-Augmented Developer',
  description:
    'Senior developer leveraging AI to ship faster. Learn about my process, principles, and the AI toolstack powering modern web development.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <SectionShell padding="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo placeholder */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent-cyan/20 via-accent-magenta/10 to-bg-secondary border border-text-muted/10">
                  {/* Placeholder - replace with actual photo */}
                  <div className="w-full h-full flex items-center justify-center text-text-muted">
                    <svg className="w-24 h-24 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-accent-magenta/10 border border-accent-magenta/30 -z-10" />
              </div>
            </FadeIn>

            {/* Bio content */}
            <FadeIn>
              <div>
                <span className="text-accent-cyan text-sm font-medium uppercase tracking-wider">
                  About Me
                </span>
                
                <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-text-primary">
                  {/* ===== CUSTOMIZATION: Your Name ===== */}
                  Charanpreet Singh <GradientText>Chawla</GradientText>
                </h1>

                {/* ===== CUSTOMIZATION: Your Bio ===== */}
                <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed">
                  <p>
                    I&apos;m a senior web developer who believes AI isn&apos;t replacing developers — it&apos;s 
                    making us exponentially more effective. For the past 8+ years, I&apos;ve been 
                    building products for startups and enterprises alike. Now, I&apos;m focused on 
                    showing what&apos;s possible when you combine deep engineering expertise with 
                    cutting-edge AI tooling.
                  </p>
                  <p>
                    My approach is simple: ship fast, learn fast, iterate relentlessly. AI lets 
                    me compress weeks of work into days without cutting corners. I can explore 
                    more ideas, test more approaches, and deliver better outcomes than ever before.
                  </p>
                  <p>
                    Based remotely, working globally. I partner with founders and product teams 
                    who need velocity without sacrificing quality — people building the future 
                    who don&apos;t want to wait six months to get there.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="mt-8 flex flex-wrap gap-8">
                  <div>
                    <div className="font-heading text-3xl font-bold text-accent-cyan">8+</div>
                    <div className="text-sm text-text-muted">Years Experience</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-accent-magenta">50+</div>
                    <div className="text-sm text-text-muted">Projects Shipped</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-accent-lime">3x</div>
                    <div className="text-sm text-text-muted">Faster with AI</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </SectionShell>

        {/* Philosophy Quote */}
        <SectionShell background="secondary" padding="md">
          <FadeIn>
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="font-heading text-2xl md:text-3xl text-text-primary leading-relaxed">
                &ldquo;AI doesn&apos;t replace the craft of building great software. It amplifies it.
                The goal isn&apos;t to code faster — it&apos;s to build <span className="text-accent-cyan">better products</span>, faster.&rdquo;
              </p>
            </blockquote>
          </FadeIn>
        </SectionShell>

        {/* Principles */}
        <PrinciplesGrid />

        {/* AI Toolstack */}
        <ToolstackGrid />

        {/* CTA */}
        <CTABand />
      </main>
      <Footer />
    </>
  )
}

