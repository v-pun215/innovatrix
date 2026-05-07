import Image from "next/image"

export function Collection() {
  return (
    <section id="collection" className="py-24 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body font-medium tracking-widest uppercase mb-4">
            Featuring
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-purple-deep mb-6">
            The Collaboration
          </h2>
          <p className="text-purple-deep/70 font-body max-w-2xl mx-auto">
            A visual journey through the Rare Beauty x Justin Bieber collection, where music
            meets beauty and everyone is welcome.
          </p>
        </div>

        {/* Bento Grid - matching the design */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {/* Large Feature - Left side (spans 2 cols, 2 rows) */}
          <div className="col-span-4 md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden bg-peach min-h-[400px] p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/rare.png"
                alt="Main collection image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Beauty And the Beat card */}
          <div className="col-span-2 md:col-span-2 relative rounded-3xl overflow-hidden bg-peach p-6 flex items-center justify-between min-h-[180px]">
            <div>
              <p className="font-heading text-2xl font-bold text-gold italic leading-tight">
                {'"'}Beauty<br />And the<br />Beat{'"'}
              </p>
            </div>
            <div className="relative w-20 h-20">
              <Image
                src="/images/butterfly.png"
                alt="Butterfly"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Gold rectangle - perfume */}
          <div className="col-span-1 relative rounded-3xl overflow-hidden bg-gold min-h-[180px] p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/perfume.png"
                alt="Perfume"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Purple rectangle - clothes */}
          <div className="col-span-1 relative rounded-3xl overflow-hidden bg-purple-light/50 min-h-[180px] p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/clothes.png"
                alt="Clothing"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Inclusivity First card */}
          <div className="col-span-2 md:col-span-2 bg-purple-deep rounded-3xl p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="font-heading text-3xl font-bold text-gold text-center leading-tight">
              Inclusivity<br />First
            </p>
            <p className="text-white/80 font-body text-sm mt-3 text-center">
              Beauty without<br />Boundaries
            </p>
          </div>

          {/* Cream/Yellow rectangle - skincare */}
          <div className="col-span-1 relative rounded-3xl overflow-hidden bg-cream min-h-[180px] p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/skincare.png"
                alt="Skincare"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Light purple rectangle - makeup */}
          <div className="col-span-1 relative rounded-3xl overflow-hidden bg-purple-light/30 min-h-[180px] p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/makeup.png"
                alt="Makeup"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}