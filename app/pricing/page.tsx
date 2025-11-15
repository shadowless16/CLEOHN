import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function PricingPage() {
  const pricing = [
    {
      title: 'CAC Business Name',
      price: '₦25,000',
      features: [
        'Name availability search',
        'Complete registration',
        'Official CAC certificate',
        '3-5 business days processing',
        'Email support'
      ]
    },
    {
      title: 'Company (LLC)',
      price: '₦75,000',
      features: [
        'Company name reservation',
        'Incorporation documents',
        'Certificate of Incorporation',
        'Company seal',
        'Full compliance support'
      ],
      popular: true
    },
    {
      title: 'NGO/Trustees',
      price: '₦100,000',
      features: [
        'Constitution drafting',
        'Trustees registration',
        'CAC certificate',
        'Tax exemption support',
        'Ongoing guidance'
      ]
    },
    {
      title: 'TIN Registration',
      price: '₦15,000',
      features: [
        'FIRS registration',
        'TIN certificate',
        'Fast processing',
        'Tax compliance guide',
        'Email support'
      ]
    },
    {
      title: 'SCUML Registration',
      price: '₦50,000',
      features: [
        'SCUML certificate',
        'Compliance documentation',
        'Application filing',
        'Annual renewal support',
        'Regulatory guidance'
      ]
    },
    {
      title: 'Trademark',
      price: '₦80,000',
      features: [
        'Trademark search',
        'Application preparation',
        'Filing with registry',
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
          <h1 className="text-5xl lg:text-6xl font-bold">Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Straightforward pricing with no hidden fees. Choose the service that fits your needs and get started today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricing.map((plan, index) => (
            <Card 
              key={index} 
              className={`rounded-3xl border-2 hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'border-accent shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-accent">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/payment" className="block">
                  <Button 
                    className={`w-full rounded-full py-6 text-base ${
                      plan.popular 
                        ? 'bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Pay Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center space-y-8">
          <Card className="rounded-3xl border-2 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 max-w-3xl mx-auto">
            <CardContent className="p-12 space-y-4">
              <h2 className="text-3xl font-bold">Need a Custom Package?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer tailored solutions for businesses with unique requirements. Contact us to discuss your specific needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90">
                  Contact Us
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
