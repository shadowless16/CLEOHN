import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { MessageCircle, Mail, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10 space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Have questions about our services? We're here to help. Reach out to us through WhatsApp or email.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="rounded-2xl border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">WhatsApp</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Chat with us directly for quick responses and personalized assistance.
                </p>
              </div>
              <a 
                href="https://wa.me/2348092697385?text=Hello%20CLEOHN%2C%20I'd%20like%20to%20make%20a%20general%20inquiry." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="rounded-full px-6 py-4 text-base bg-accent hover:bg-accent/90 shadow-md shadow-accent/10"
                >
                  +234 809 269 7385
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Email</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
              </div>
              <a href="mailto:Cleohngroupltd@gmail.com">
                <Button size="lg" className="rounded-full px-6 py-4 text-base bg-accent hover:bg-accent/90 shadow-md shadow-accent/10">
                  Send Email
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="rounded-2xl border-2">
            <CardContent className="p-8 font-sans">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          <span>1 Anishere Bus-stop, Governor's Road, Ikotun, Lagos</span>
                        </li>
                        <li className="text-sm text-muted-foreground leading-relaxed">
                          Serving clients nationwide
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="rounded-3xl border-2 bg-linear-to-br from-primary/5 via-accent/5 to-primary/5 p-6 sm:p-8 max-w-2xl mx-auto">
            <CardContent className="p-10 space-y-3">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Looking for quick answers? Check out our FAQ section or contact us directly for personalized support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
