import Image from "next/image"

export function WhyJustin() {
  return (
    <section id="about" className="py-24 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/image 6.png"
                alt="Justin Bieber"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="font-serif text-lg text-purple-deep italic">
                {'"'}Beauty should make everyone feel confident{'"'}
              </p>
              <p className="text-gold text-sm mt-2">— The Vision</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-gold font-medium tracking-widest uppercase mb-4">
              The Collaboration
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-purple-deep mb-6">
              Why Justin Bieber?
            </h2>
            <div className="w-24 h-1 bg-purple-light mb-8" />

            <div className="space-y-6 text-purple-deep/80">
              <p className="text-lg leading-relaxed">
                Justin Bieber represents a new generation of masculinity — one that embraces 
                vulnerability, self-care, and authentic self-expression without boundaries.
              </p>
              <p className="text-lg leading-relaxed">
                His advocacy for mental health awareness aligns perfectly with Rare Beauty&apos;s 
                mission to support well-being, while his massive global influence can help 
                shift perceptions about beauty being for everyone.
              </p>
              <p className="text-lg leading-relaxed">
                Through his music themes of self-acceptance and growth, Justin brings an 
                authentic voice to the conversation about gender-neutral beauty.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <p className="font-serif text-3xl text-purple-deep">300M+</p>
                <p className="text-sm text-purple-deep/60 mt-1">Global Followers</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-purple-deep">Gen Z</p>
                <p className="text-sm text-purple-deep/60 mt-1">Core Audience</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-purple-deep">100%</p>
                <p className="text-sm text-purple-deep/60 mt-1">Authentic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
