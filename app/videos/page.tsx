import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Play } from 'lucide-react'

export default function VideosPage() {
  const videos = [
    {
      title: 'How to Register Your Business Name with CAC',
      thumbnail: '/professional-business-registration-tutorial-thumbn.jpg',
      instagramUrl: 'https://instagram.com/p/example1'
    },
    {
      title: 'Understanding LLC Registration Process',
      thumbnail: '/company-incorporation-guide-thumbnail.jpg',
      instagramUrl: 'https://instagram.com/p/example2'
    },
    {
      title: 'NGO Registration Made Simple',
      thumbnail: '/nonprofit-organization-registration-tutorial.jpg',
      instagramUrl: 'https://instagram.com/p/example3'
    },
    {
      title: 'TIN Registration: Step by Step Guide',
      thumbnail: '/tax-identification-number-guide-thumbnail.jpg',
      instagramUrl: 'https://instagram.com/p/example4'
    },
    {
      title: 'SCUML Compliance Explained',
      thumbnail: '/money-laundering-compliance-guide-thumbnail.jpg',
      instagramUrl: 'https://instagram.com/p/example5'
    },
    {
      title: 'Trademark Protection for Your Brand',
      thumbnail: '/trademark-registration-tutorial-thumbnail.jpg',
      instagramUrl: 'https://instagram.com/p/example6'
    }
  ]

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold">Video Guides</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Watch our helpful video tutorials to learn more about CAC registration services. Follow us on Instagram for more updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="rounded-3xl border-2 hover:shadow-xl hover:border-accent/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-colors shadow-lg">
                        <Play className="h-8 w-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold leading-snug text-balance">
                      {video.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="rounded-3xl border-2 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 max-w-3xl mx-auto">
            <CardContent className="p-12 space-y-4">
              <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get the latest updates, tips, and video tutorials on our Instagram page.
              </p>
              <a
                href="https://instagram.com/cleohn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors shadow-lg shadow-accent/20">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow @cleohn
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
