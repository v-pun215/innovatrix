import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-peach">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cream/50 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-light/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-gold font-body font-medium tracking-widest uppercase mb-4">
              A New Era of Beauty
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-purple-deep leading-tight mb-6">
              <span className="text-balance">Beauty Has No Gender</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-purple-deep/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Rare Beauty and Justin Bieber unite to redefine inclusivity in beauty. 
              A collaboration that celebrates self-expression for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#products"
                className="font-body bg-purple-deep text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-light transition-colors"
              >
                Explore Collections
              </Link>
              <Link
                href="#about"
                className="font-body border-2 border-purple-deep text-purple-deep px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-deep hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/image 6.png"
                    alt="Justin Bieber"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-purple-light/30 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="font-heading text-2xl font-bold text-purple-deep">{'"'}Everyone belongs{'"'}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gold/30 flex items-center justify-center">
                  <Image
                    src="/images/skincareormakeup.png"
                    alt="Rare Beauty Product"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream flex items-center justify-center">

                  <div className="text-center p-4">
                    <p className="font-heading text-4xl font-bold text-purple-deep">x</p>
                    <p className="text-sm font-body text-purple-deep/70 mt-2">Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-deep/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-purple-deep/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
