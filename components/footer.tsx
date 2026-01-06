import Link from 'next/link'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <div className="text-xl sm:text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                CLEOHN
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your Compliance Buddy. We help build the legal structure your business needs while keeping you compliant through the years.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-base">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/videos" className="text-muted-foreground hover:text-accent transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-base">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>1 Anishere Bus-stop, Governor's Road, Ikotun, Lagos</span>
              </div>
              <a
                href="https://wa.me/2348092697385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4 text-accent shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:Cleohngroupltd@gmail.com"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>Email Us</span>
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>08092697385</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CLEOHN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
