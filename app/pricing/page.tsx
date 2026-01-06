'use client'

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import Link from 'next/link'
import { CheckCircle2, Star, Zap, ShieldCheck } from 'lucide-react'

export default function PricingPage() {
  const WHATSAPP_NUMBER = '2348092697385'

  const getWhatsAppLink = (planName: string, price: string) => {
    const message = `Hello CLEOHN, I am interested in the "${planName}" package priced at ${price}. How do I get started?`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  const mainPricing = [
    // ... data remains same
    {
      title: 'Business Name',
      subtitle: 'Standard Registration',
      price: '₦45,000',
      description: 'Ideal for sole proprietors starting out.',
      features: [
        'Certificate of Registration',
        'Status Report',
        'FIRS TIN',
        'JTB TIN',
        'TIN Validation',
        'Delivery in 1-5 working days'
      ]
    },
    {
      title: 'Business Name',
      subtitle: 'VIP Package',
      price: '₦60,000',
      popular: true,
      description: 'Complete branding and legal startup kit.',
      features: [
        'Everything in Standard',
        'Framed CAC Certificate',
        'LETTERHEAD (5pcs)',
        'ID CARD',
        'Offer Letter & Staff Bio Form',
        'Non-Compete & NDA Agreements',
        'Free Nationwide Delivery'
      ]
    },
    {
      title: 'Company (LLC)',
      subtitle: 'Standard Package',
      price: '₦100,000',
      description: '1 Million Shares incorporation.',
      features: [
        'Certificate of Incorporation',
        'Status Report & MEMART',
        'FIRS & JTB TIN',
        'TIN Validation',
        'Framed CAC Certificate',
        'LETTER HEAD (5pcs)',
        'Delivery in 10-21 working days'
      ]
    },
    {
      title: 'Company (LLC)',
      subtitle: 'VIP Package',
      price: '₦190,000',
      description: 'The executive incorporation suite.',
      features: [
        'Everything in Standard',
        'SCUML or TRADEMARK',
        'Official Iron Seal',
        'Complimentary Cards (50pcs)',
        'ID Card',
        'Hardcopy delivery',
        'Free Nationwide Delivery'
      ]
    },
    {
      title: 'Incorporated Trustee',
      subtitle: 'Standard (NGO/Church)',
      price: '₦150,000',
      description: 'Registration for non-profit entities.',
      features: [
        'Certificate of Incorporation',
        'Status Report & Constitution',
        'FIRS & JTB TIN',
        'TIN Validation',
        'Framed CAC Certificate',
        'Limited to 4 Trustees',
        'Delivery in 6-9 weeks'
      ]
    },
    {
      title: 'Incorporated Trustee',
      subtitle: 'VIP (NGO/Church)',
      price: '₦200,000',
      description: 'Full compliance for large organizations.',
      features: [
        'Everything in Standard',
        'SCUML Certificate',
        'LETTER HEAD (5pcs)',
        'Hardcopy documents',
        'Free Nationwide Delivery'
      ]
    }
  ]

  const otherServices = [
    { title: 'Copyright Registration', price: '₦55,000', delivery: '12 weeks' },
    { title: 'Export License (NEPC)', price: '₦45,000', delivery: '7 working days' },
    { title: 'Trademark (Phase 2)', price: '₦60,000', delivery: '2-4 weeks' },
    { title: 'Trademark Search', price: '₦10,000', delivery: '2-5 days' },
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="text-center mb-8 space-y-2 max-w-2xl mx-auto">
          <h1 className="text-2xl lg:text-4xl font-bold italic">Pricing & Packages</h1>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
            Investment options to build and protect your business legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mainPricing.map((plan, index) => (
            <Card 
              key={index} 
              className={`rounded-2xl border-2 hover:shadow-xl transition-all duration-500 relative flex flex-col ${
                plan.popular ? 'border-accent shadow-lg scale-102 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-[10px] font-bold shadow-lg gap-1 border-none">
                    <Star className="h-3 w-3 fill-current" />
                    BEST VALUE
                  </Badge>
                </div>
              )}
              <CardHeader className="p-4 sm:p-6 pb-2">
                <div className="space-y-0.5">
                  <p className="text-accent font-bold uppercase tracking-wider text-[10px]">{plan.title}</p>
                  <CardTitle className="text-xl font-bold text-balance">{plan.subtitle}</CardTitle>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">{plan.price}</span>
                </div>
                <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground italic leading-tight">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-2 space-y-5 grow font-sans">
                <div className="space-y-3">
                  <p className="font-semibold text-[10px] uppercase text-muted-foreground tracking-widest">What's Included</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={getWhatsAppLink(`${plan.title} - ${plan.subtitle}`, plan.price)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-auto"
                >
                  <Button 
                    className={`w-full rounded-full py-5 text-base font-bold group ${
                      plan.popular 
                        ? 'bg-accent hover:bg-accent/90 shadow-md shadow-accent/10' 
                        : 'bg-primary/5 text-primary hover:bg-primary/10 transition-all'
                    }`}
                    variant={plan.popular ? 'default' : 'ghost'}
                  >
                    Select Plan
                    <Zap className="ml-2 h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Specialized Compliance Services</h2>
            <p className="text-sm text-muted-foreground mt-1">Essential filings for specific business sectors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {otherServices.map((service, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-muted/20 rounded-xl border hover:border-accent/20 transition-all group gap-2 sm:gap-4">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-base group-hover:text-accent transition-colors leading-tight">{service.title}</h3>
                  <p className="text-[10px] text-muted-foreground italic">Delivery: {service.delivery}</p>
                </div>
                <div className="text-left sm:text-right flex items-center sm:flex-col justify-between sm:justify-end gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-border/50">
                  <div className="text-lg font-bold text-primary shrink-0">{service.price}</div>
                  <a 
                    href={getWhatsAppLink(service.title, service.price)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="text-[10px] font-bold text-accent uppercase tracking-widest hover:underline">Pay Now</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center space-y-6">
          <Card className="rounded-3xl border-2 bg-linear-to-br from-primary/5 via-accent/5 to-primary/5 max-w-3xl mx-auto overflow-hidden">
            <CardContent className="p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center shrink-0 animate-pulse">
                <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <div className="space-y-3 grow">
                <h2 className="text-xl sm:text-2xl font-bold">Need a Custom Compliance Retainer?</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We offer tailored annual compliance management for established businesses, including tax management and CAC filing updates.
                </p>
                <a 
                  href={getWhatsAppLink('Custom Compliance Retainer', 'Custom Price')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-1"
                >
                  <Button size="lg" className="rounded-full px-8 py-5 text-xs sm:text-sm bg-primary hover:scale-105 transition-transform">
                    Consult with an Expert
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
