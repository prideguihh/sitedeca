import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, BookOpen, Lightbulb } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Projeto Educacional Inovador</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Conheça o <span className="text-primary">DECA</span>, seu novo amigo de estudos
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Um robô educacional desenvolvido para auxiliar no aprendizado de crianças, 
              tornando o estudo mais interativo, divertido e acessível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#sobre">
                  Conheça o Projeto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#produto">
                  Saiba Mais
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Interativo</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">+Fun</p>
                <p className="text-sm text-muted-foreground">Aprendizado</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">Kids</p>
                <p className="text-sm text-muted-foreground">Focado</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-accent/20 rounded-3xl -rotate-6" />
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">D</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Robô DECA</h3>
                    <p className="text-muted-foreground">Aprendizado Inteligente</p>
                  </div>
                  <div className="flex justify-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
