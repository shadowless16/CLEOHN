import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileText, Building2, Users, Receipt, Shield, Award, CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: 'CAC Business Name Registration',
      description: 'Register your business name with the Corporate Affairs Commission quickly and efficiently.',
      features: [
        'Name availability search',
        'Complete documentation',
        'Fast processing (3-5 business days)',
        'Official CAC certificate',
        'Post-registration support'
      ]
    },
    {
      icon: Building2,
      title: 'Company (LLC) Registration',
      description: 'Incorporate your limited liability company with full legal compliance and protection.',
      features: [
        'Company name reservation',
        'Memorandum and Articles of Association',
        'Certificate of Incorporation',
        'Company seal and documents',
        'Compliance advisory'
      ]
    },
    {
      icon: Users,
      title: 'NGO/Trustees Registration',
      description: 'Register your non-profit organization or board of trustees with complete documentation.',
      features: [
        'Constitution drafting',
        'Board of trustees setup',
        'CAC registration',
        'Tax exemption guidance',
        'Ongoing compliance support'
      ]
    },
    {
      icon: Receipt,
      title: 'TIN Registration',
      description: 'Obtain your Tax Identification Number for seamless tax compliance and business operations.',
      features: [
        'Federal Inland Revenue Service registration',
        'TIN certificate',
        'Fast processing',
        'Tax compliance guidance',
        'Follow-up support'
      ]
    },
    {
      icon: Shield,
      title: 'SCUML Registration',
      description: 'Register with the Special Control Unit Against Money Laundering for financial compliance.',
      features: [
        'SCUML certificate',
        'Anti-money laundering compliance',
        'Required for financial businesses',
        'Annual renewal support',
        'Regulatory guidance'
      ]
    },
    {
      icon: Award,
      title: 'Trademark Registration',
      description: 'Protect your brand identity and intellectual property with official trademark registration.',
      features: [
        'Trademark search',
        'Application filing',
        'Legal documentation',
        'Certificate of registration',
        'Brand protection advice'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Comprehensive CAC registration services designed to meet all your business needs. We handle the complexity, so you can focus on growing your business.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="rounded-3xl border-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid md:grid-cols-[auto_1fr] gap-8">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold">What's Included:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Link href="/pricing">
                          <Button className="rounded-full px-8 bg-accent hover:bg-accent/90">
                            View Pricing
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <Card className="rounded-3xl border-2 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 max-w-3xl mx-auto">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-3xl font-bold">Need Help Choosing?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Not sure which service is right for you? Our team is here to guide you through the process.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90">
                  Contact Our Team
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
