"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import shopData from "@/src/data/shop-data.json"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const filteredProducts = selectedCategory === "all" 
    ? shopData.products 
    : shopData.products.filter(p => p.category === selectedCategory)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <main className="min-h-screen bg-blush">
      {/* Navbar */}
      <nav className="bg-blush/80 backdrop-blur-md sticky top-0 z-50 border-b border-purple-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-heading text-2xl font-bold text-purple-deep tracking-wide">
              Rare Beauty <span className="text-gold">x</span> JB
            </Link>
            <Link 
              href="/"
              className="font-body text-purple-deep hover:text-gold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero/Announcement Section */}
      <section className="py-20 bg-gradient-to-b from-blush to-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gold/20 text-gold font-body font-medium px-4 py-2 rounded-full text-sm mb-6">
            Dropping Soon
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-purple-deep mb-6">
            {shopData.announcement.title}
          </h1>
          <p className="font-heading text-xl md:text-2xl text-gold mb-4">
            {shopData.announcement.subtitle}
          </p>
          <p className="font-body text-purple-deep/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {shopData.announcement.description}
          </p>

          {/* Email Signup */}
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-purple-deep/20 bg-white font-body text-purple-deep placeholder:text-purple-deep/40 focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="font-body bg-purple-deep text-white px-8 py-4 rounded-full font-medium hover:bg-purple-light transition-colors"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="bg-gold/20 text-purple-deep font-body px-6 py-4 rounded-2xl max-w-md mx-auto">
              Thanks! We&apos;ll notify you when we launch.
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream sticky top-20 z-40 border-b border-purple-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`font-body px-6 py-2 rounded-full transition-colors ${
                selectedCategory === "all"
                  ? "bg-purple-deep text-white"
                  : "bg-white text-purple-deep hover:bg-purple-deep/10"
              }`}
            >
              All
            </button>
            {shopData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`font-body px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-purple-deep text-white"
                    : "bg-white text-purple-deep hover:bg-purple-deep/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Description */}
          {selectedCategory !== "all" && (
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-purple-deep mb-2">
                {shopData.categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="font-body text-purple-deep/70">
                {shopData.categories.find(c => c.id === selectedCategory)?.description}
              </p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-blush/50 p-8">
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-medium ${
                        product.badge === "Coming Soon"
                          ? "bg-purple-deep text-white"
                          : product.badge === "Bestseller"
                          ? "bg-gold text-white"
                          : "bg-purple-light text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="relative w-full h-full scale-90">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-purple-deep mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-purple-deep/60 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl font-bold text-gold">
                      ${product.price}
                    </span>
                    {product.badge === "Coming Soon" ? (
                      <span className="font-body text-sm text-purple-deep/50">
                        Notify Me
                      </span>
                    ) : (
                      <button className="font-body text-sm text-purple-deep hover:text-gold transition-colors">
                        Add to Bag
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-purple-deep text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Beauty Has No Gender
          </h2>
          <p className="font-body text-white/70 mb-8 max-w-xl mx-auto">
            Join our community celebrating self-expression, inclusivity, and authentic beauty for everyone.
          </p>
          <Link
            href="/"
            className="inline-block font-body bg-gold text-purple-deep px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Learn More About The Collaboration
          </Link>
        </div>
      </section>
    </main>
  )
}
