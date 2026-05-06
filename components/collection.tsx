import Image from "next/image"

export function Collection() {
  return (
    <section id="collection" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Featured
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-purple-deep mb-6">
            The Collaboration
          </h2>
          <p className="text-purple-deep/70 max-w-2xl mx-auto">
            A visual journey through the Rare Beauty x Justin Bieber collection, 
            where music meets beauty and everyone is welcome.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Large Feature */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
            <Image
              src="/Slide 16_9 - 1.png"
              alt="Rare Beauty x Justin Bieber Collection"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif text-2xl">The Vision</p>
              <p className="text-white/80 text-sm mt-1">Beauty for everyone</p>
            </div>
          </div>

          {/* Product Showcase 1 */}
          <div className="relative rounded-3xl overflow-hidden bg-gold/30 p-4">
            <Image
              src="/Group 12.png"
              alt="Skincare Product"
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Product Showcase 2 */}
          <div className="relative rounded-3xl overflow-hidden bg-purple-light/30 p-4">
            <Image
              src="/Group 13.png"
              alt="Makeup Product"
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Quote Card */}
          <div className="bg-purple-deep rounded-3xl p-6 flex items-center justify-center">
            <p className="font-serif text-white text-center text-lg italic">
              {'"'}Everyone belongs{'"'}
            </p>
          </div>

          {/* Product Showcase 3 */}
          <div className="relative rounded-3xl overflow-hidden bg-blush p-4">
            <Image
              src="/Group 11.png"
              alt="Clothing Product"
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Mood Board */}
          <div className="col-span-2 relative rounded-3xl overflow-hidden group">
            <Image
              src="/Frame 9.png"
              alt="Color Palette"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>

          {/* Stats Card */}
          <div className="col-span-2 bg-gold rounded-3xl p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-serif text-purple-deep">Inclusivity First</p>
              <p className="text-purple-deep/70 mt-2">Beauty without boundaries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
