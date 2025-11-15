import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { MessageCircle, Mail, Clock, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold">Get in Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Have questions about our services? We're here to help. Reach out to us through WhatsApp or email.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <MessageCircle className="h-10 w-10 text-accent" />
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">WhatsApp</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chat with us directly for quick responses and personalized assistance.
                </p>
              </div>
              <WhatsAppButton 
                phoneNumber="+234 809 269 7385"
                size="lg" 
                className="rounded-full px-8 py-6 text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20"
              >
                +234 809 269 7385
              </WhatsAppButton>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <Mail className="h-10 w-10 text-accent" />
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Email</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
              </div>
              <a href="mailto:info@cleohn.com">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20">
                  Send Email
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="rounded-3xl border-2">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Lagos, Nigeria<br />
                        Serving clients nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="rounded-3xl border-2 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 max-w-3xl mx-auto">
            <CardContent className="p-12 space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
