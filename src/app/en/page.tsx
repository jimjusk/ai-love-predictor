import { Metadata } from 'next'
import Header from '@/home/components/Header'
import Hero from '@/home/components/Hero'
import Features from '@/home/components/Features'
import Cases from '@/home/components/Cases'

export const metadata: Metadata = {
  title: 'AI Love Predictor - Find Your Perfect Match',
  description: 'Use AI to predict your ideal partner',
}

export default function EnglishHomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="h-screen flex flex-col bg-gradient-to-br from-rose-100 via-slate-100 to-purple-200">
          {/* Hero Section */}
          <section className="flex-1 flex items-center justify-center px-4">
            <div className="container mx-auto">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Discover Your
                  <span className="text-primary"> Love Code</span>
                </h2>
                <p className="text-muted text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Using advanced AI technology to analyze your compatibility and predict your love future.
                </p>
                <a 
                  href="/en/assessment"
                  className="inline-block bg-primary text-white px-10 py-3 rounded-lg text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Prediction
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <Features />

        {/* Cases Section */}
        <Cases />
      </main>
    </div>
  )
} 