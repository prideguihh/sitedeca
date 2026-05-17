import { Target, Lightbulb, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Target,
    title: "Foco no Aprendizado",
    description: "O DECA foi projetado para manter as crianças focadas e engajadas durante todo o processo de aprendizado.",
  },
  {
    icon: Lightbulb,
    title: "Metodologia Inovadora",
    description: "Utilizamos técnicas pedagógicas modernas combinadas com tecnologia para maximizar a absorção do conhecimento.",
  },
  {
    icon: Users,
    title: "Inclusão Educacional",
    description: "O robô foi desenvolvido pensando em acessibilidade, permitindo que todas as crianças tenham acesso a um ensino de qualidade.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprovados",
    description: "Crianças que utilizam o DECA demonstram maior interesse pelos estudos e melhor desempenho escolar.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sobre o Projeto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Transformando a educação através da tecnologia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O projeto DECA nasceu da necessidade de tornar o aprendizado mais acessível e 
            envolvente para crianças. Nosso robô educacional combina inteligência artificial, 
            design amigável e metodologias pedagógicas comprovadas para criar uma experiência 
            de ensino única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">O Problema que Buscamos Resolver</h3>
            <p className="text-muted-foreground leading-relaxed">
              Muitas crianças enfrentam dificuldades no aprendizado tradicional. A falta de 
              interatividade, recursos limitados e metodologias desatualizadas contribuem para 
              o desinteresse pelos estudos. O DECA surge como uma solução inovadora para 
              resgatar a curiosidade natural das crianças e transformar o aprendizado em uma 
              experiência prazerosa.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Como o DECA Auxilia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Através de interações personalizadas, jogos educativos e feedback em tempo real, 
              o DECA adapta o conteúdo ao ritmo de cada criança. Ele identifica pontos de 
              dificuldade, reforça conceitos importantes e celebra cada conquista, criando um 
              ambiente positivo e motivador para o aprendizado.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
