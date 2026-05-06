import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProblemStatement } from "@/components/problem-statement"
import { WhyJustin } from "@/components/why-justin"
import { Products } from "@/components/products"
import { Solution } from "@/components/solution"
import { Collection } from "@/components/collection"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyJustin />
      <ProblemStatement />
      <Solution />
      <Products />
      <Collection />
      <Footer />
    </main>
  )
}
