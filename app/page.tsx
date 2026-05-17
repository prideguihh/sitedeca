import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProductSection } from "@/components/sections/product"
import { DevelopmentSection } from "@/components/sections/development"
import { TeamSection } from "@/components/sections/team"
import { GallerySection } from "@/components/sections/gallery"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <DevelopmentSection />
        <TeamSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
