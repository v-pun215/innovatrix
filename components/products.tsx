import Image from "next/image"

const products = [
  {
    name: "Skincare",
    description: "Gentle, effective formulas for every skin type",
    image: "/images/skincare.png",
    color: "bg-cream",
  },
  {
    name: "Makeup",
    description: "Expressive color for authentic self-expression",
    image: "/images/makeup.png",
    color: "bg-purple-light/30",
  },
  {
    name: "Perfumes",
    description: "Gender-neutral scents that speak to everyone",
    image: "/images/perfume.png",
    color: "bg-gold/30",
  },
  {
    name: "Clothing",
    description: "New collection inspired by comfort and inclusivity",
    image: "/images/clothes.png",
    color: "bg-purple-light/30",
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body font-medium tracking-widest uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-purple-deep mb-6">
            Products For Everyone
          </h2>
          <p className="text-purple-deep/70 font-body max-w-2xl mx-auto">
            Existing Rare Beauty products reimagined with gender-neutral marketing, 
            plus a new clothing line inspired by Justin&apos;s signature style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group cursor-pointer"
            >
              <div className={`${product.color} rounded-3xl p-8 aspect-square flex items-center justify-center transition-transform group-hover:scale-105`}>
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl font-bold text-purple-deep">{product.name}</h3>
                <p className="text-purple-deep/60 font-body text-sm mt-1">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/shop"
            className="inline-block font-body bg-purple-deep text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-light transition-colors"
          >
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  )
}
