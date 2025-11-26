import { Header, Footer } from '@/components/layout'
import {
  Hero,
  WhatIDo,
  CapabilitiesGrid,
  CaseStudyTeaser,
  AIWorkflowTimeline,
  CTABand,
} from '@/components/home'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <CapabilitiesGrid />
        <CaseStudyTeaser />
        <AIWorkflowTimeline />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}

