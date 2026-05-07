export function Solution() {
  return (
    <section id="approach" className="py-24 bg-purple-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body font-medium tracking-widest uppercase mb-4">
            The Solution
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our Approach
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        {/* Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Strategy 1 */}
          <div className="bg-white/10 rounded-3xl p-8">
            <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-bold">1</span>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">Gender-Inclusive Marketing</h3>
            <p className="text-white/80 font-body leading-relaxed">
              Leverage Justin Bieber&apos;s influence to reposition existing skincare, makeup, 
              and perfume products with visuals and messaging that speak to all genders. 
              His presence naturally bridges the gap between traditional beauty marketing 
              and a more inclusive future.
            </p>
          </div>

          {/* Strategy 2 */}
          <div className="bg-white/10 rounded-3xl p-8">
            <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-bold">2</span>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">Music-Inspired Branding</h3>
            <p className="text-white/80 font-body leading-relaxed">
              Use Justin&apos;s song themes, lyrics, and album aesthetics in product naming, 
              packaging design, and advertising campaigns. This creates an authentic 
              connection between his artistry and the brand&apos;s values of self-expression.
            </p>
          </div>

          {/* Strategy 3 */}
          <div className="bg-white/10 rounded-3xl p-8">
            <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-bold">3</span>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">New Clothing Line</h3>
            <p className="text-white/80 font-body leading-relaxed">
              Expand into gender-neutral apparel inspired by Justin&apos;s signature oversized, 
              comfortable aesthetic. This extends Rare Beauty&apos;s mission of self-expression 
              beyond cosmetics into everyday fashion that anyone can wear.
            </p>
          </div>

          {/* Strategy 4 */}
          <div className="bg-white/10 rounded-3xl p-8">
            <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-bold">4</span>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">Mental Health Focus</h3>
            <p className="text-white/80 font-body leading-relaxed">
              Both Justin and Selena are vocal advocates for mental health awareness. 
              This collaboration deepens the brand&apos;s commitment to well-being, creating 
              campaigns that normalize self-care for everyone, regardless of gender.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-heading text-2xl md:text-3xl italic max-w-3xl mx-auto">
            {'"'}Rare Beauty signifies comfort and inclusivity — we wanted to expand that 
            vision into every aspect of self-expression.{'"'}
          </blockquote>
          <p className="text-gold font-body mt-4">— The Collaboration Vision</p>
        </div>
      </div>
    </section>
  )
}
