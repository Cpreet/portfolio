'use client'

import { useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/cn'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

interface NeuralBackgroundProps {
  className?: string
  particleCount?: number
  connectionDistance?: number
  particleColor?: string
  lineColor?: string
  mouseInfluence?: number
}

// ===== CUSTOMIZATION: Neural Background Settings =====
export function NeuralBackground({
  className,
  particleCount = 80,
  connectionDistance = 150,
  particleColor = '0, 240, 255', // RGB for accent-cyan
  lineColor = '0, 240, 255',
  mouseInfluence = 100,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationFrameRef = useRef<number>()

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
      return particles
    },
    [particleCount]
  )

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse influence - particles are attracted to cursor
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseInfluence) {
          const force = (mouseInfluence - dist) / mouseInfluence
          particle.vx += (dx / dist) * force * 0.02
          particle.vy += (dy / dist) * force * 0.02
        }

        // Apply velocity with damping
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const connDx = particle.x - other.x
          const connDy = particle.y - other.y
          const connDist = Math.sqrt(connDx * connDx + connDy * connDy)

          if (connDist < connectionDistance) {
            const opacity = (1 - connDist / connectionDistance) * 0.3
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Connect to mouse if close
        if (dist < connectionDistance * 1.5) {
          const opacity = (1 - dist / (connectionDistance * 1.5)) * 0.5
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(255, 0, 170, ${opacity})` // Magenta for mouse connections
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    },
    [connectionDistance, mouseInfluence, particleColor, lineColor]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      particlesRef.current = initParticles(rect.width, rect.height)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      drawParticles(ctx, rect.width, rect.height)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!prefersReducedMotion) {
      animate()
    } else {
      // Draw static frame for reduced motion
      const rect = canvas.getBoundingClientRect()
      drawParticles(ctx, rect.width, rect.height)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [initParticles, drawParticles])

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full', className)}
      aria-hidden="true"
    />
  )
}

