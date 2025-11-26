import Link from 'next/link'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-text-muted/10 bg-bg-secondary/50">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-heading font-bold text-2xl text-text-primary hover:text-accent-cyan transition-colors"
            >
              {/* ===== CUSTOMIZATION: Logo/Name ===== */}
              Charanpreet<span className="text-accent-cyan">.</span>
            </Link>
            <p className="mt-4 text-text-muted max-w-sm">
              AI-driven web developer and product builder. Building high-impact
              products faster, smarter, and more experimentally.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <SocialLink
                href={SITE_CONFIG.social.twitter}
                label="Twitter"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                }
              />
              <SocialLink
                href={SITE_CONFIG.social.github}
                label="GitHub"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <SocialLink
                href={SITE_CONFIG.social.linkedin}
                label="LinkedIn"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-text-muted hover:text-accent-cyan transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                >
                  Start a Project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-text-muted/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Built with AI-augmented workflows
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-lg bg-surface text-text-muted hover:text-accent-cyan hover:bg-surface-hover transition-all"
    >
      {icon}
    </a>
  )
}

