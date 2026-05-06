export function ProblemStatement() {
  return (
    <section id="problem" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">
              The Challenge
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-purple-deep mb-6">
              Problem Statement
            </h2>
            <div className="w-24 h-1 bg-purple-light mx-auto" />
          </div>

          {/* Problem Content */}
          <div className="bg-peach rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cream/50 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-purple-deep leading-relaxed mb-8">
                Rare Beauty promotes inclusivity and self-love across all identities, but its 
                branding and advertising still largely center women, making the products feel 
                unintentionally gender-specific.
              </p>
              <p className="text-lg md:text-xl text-purple-deep leading-relaxed mb-8">
                This creates a disconnect where the message says {'"'}everyone belongs,{'"'} but the 
                visuals don&apos;t fully reflect that — especially for a generation that sees 
                beauty as gender-neutral and expressive.
              </p>
              <p className="text-lg md:text-xl text-purple-deep leading-relaxed">
                It ends up feeling less like an open space for all, and more like one that 
                still subtly caters to a single group.
              </p>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-purple-light/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-deep rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">1</span>
              </div>
              <h3 className="font-serif text-xl text-purple-deep mb-2">Lost Mission</h3>
              <p className="text-purple-deep/70 text-sm">
                The founding vision of inclusivity across gender, race, and ability is fading
              </p>
            </div>
            <div className="bg-gold/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">2</span>
              </div>
              <h3 className="font-serif text-xl text-purple-deep mb-2">Visual Gap</h3>
              <p className="text-purple-deep/70 text-sm">
                Marketing predominantly features female-focused imagery and messaging
              </p>
            </div>
            <div className="bg-blush rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">3</span>
              </div>
              <h3 className="font-serif text-xl text-purple-deep mb-2">Untapped Market</h3>
              <p className="text-purple-deep/70 text-sm">
                Gender-neutral beauty is growing but not being actively targeted
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
