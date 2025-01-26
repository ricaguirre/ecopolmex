import { About } from "@/components/ui/about"
import { Contact } from "@/components/ui/contact"
import { FeatureGrid } from "@/components/ui/feature-grid"
import { Header } from "@/components/ui/header"
import { Hero } from "@/components/ui/hero"
import { Partners } from "@/components/ui/partners"
import { Portfolio } from "@/components/ui/portfolio"
import { Products } from "@/components/ui/products"
import { VideoSection } from "@/components/ui/video"


export const metadata = {
  title: "Inicio - Ecopolmex",
  description: "Fabricación de suelas para calzado",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <FeatureGrid />
      <Products />
      <Portfolio />
      <Partners />
      <VideoSection />
      <Contact />
    </main>

  )
}

