import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CLEOHN
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner for CAC registration services in Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
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
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
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
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <WhatsAppButton 
                phoneNumber="+234 809 269 7385"
                variant="ghost"
                className="text-muted-foreground hover:text-accent transition-colors p-0 h-auto justify-start"
              >
                WhatsApp
              </WhatsAppButton>
              <a
                href="mailto:info@cleohn.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CLEOHN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
