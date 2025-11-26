import type { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import {
  WorkflowHero,
  WorkflowTimeline,
  ScopeIntelligence,
  ProjectSizeEstimation,
  SpecGeneration,
  PayAsYouGo,
  ClientReviewConsole,
  FlowDiagram,
  TrustMarkers,
} from '@/components/workflow'

export const metadata: Metadata = {
  title: 'AI-Driven Software Development Workflow — Faster, Clearer, Controlled',
  description:
    'See how AI-assisted specs, client review dashboards, and modular billing make development faster, transparent, and lower risk.',
}

export default function WorkflowPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero: Workflow Built for Speed, Transparency, and Better Decisions */}
        <WorkflowHero />

        {/* Four-Step Animated Timeline */}
        <WorkflowTimeline />

        {/* Scope Intelligence Module - Business Goals → Recommended Strategy */}
        <ScopeIntelligence />

        {/* Project Size Estimation + Consultation */}
        <ProjectSizeEstimation />

        {/* AI-Driven Spec Generation & Review */}
        <SpecGeneration />

        {/* Interactive Flow Diagram */}
        <FlowDiagram />

        {/* Pay-As-You-Go Build System */}
        <PayAsYouGo />

        {/* Client AI Review Console Dashboard */}
        <ClientReviewConsole />

        {/* Trust Markers & Final CTA */}
        <TrustMarkers />
      </main>
      <Footer />
    </>
  )
}

