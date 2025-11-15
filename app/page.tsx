import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Building2, FileText, Users, Receipt, Shield, Award, CheckCircle2, Clock, HeadphonesIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
            Register Your Business with{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            CLEOHN makes CAC registration simple, fast, and reliable. Get your business officially registered with Nigeria's most trusted agency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/services">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Why Choose CLEOHN?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine expertise, efficiency, and excellent service to make your registration seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-card to-muted/20">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Trusted Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Years of experience helping businesses navigate CAC registration with complete accuracy.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-card to-muted/20">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Fast Processing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We handle your registration quickly and efficiently, so you can start your business sooner.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-card to-muted/20">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <HeadphonesIcon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated team is always available to answer your questions and provide guidance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Complete CAC registration services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card className="rounded-3xl border-2 hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <FileText className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">CAC Business Name</h3>
              <p className="text-muted-foreground leading-relaxed">
                Register your business name quickly and get official recognition for your enterprise.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Building2 className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Company (LLC)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Incorporate your limited liability company with complete legal compliance.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">NGO/Trustees</h3>
              <p className="text-muted-foreground leading-relaxed">
                Register your non-profit organization or board of trustees seamlessly.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Receipt className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">TIN Registration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Obtain your Tax Identification Number for tax compliance and operations.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Shield className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">SCUML Registration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Register with the Special Control Unit Against Money Laundering.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-2 hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Trademark</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protect your brand identity with official trademark registration.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="rounded-3xl border-2 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
          <CardContent className="p-12 lg:p-16 text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Ready to Register Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join thousands of satisfied businesses who trust CLEOHN for their CAC registration needs.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20">
                View Our Pricing
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
