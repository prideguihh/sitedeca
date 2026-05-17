import { Bot, MessageSquare, BookOpen, Gamepad2, Volume2, Wifi, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: MessageSquare,
    title: "Comunicação Interativa",
    description: "Responde perguntas e mantém conversas educativas com as crianças.",
  },
  {
    icon: BookOpen,
    title: "Conteúdo Educacional",
    description: "Biblioteca com diversos assuntos adaptados para diferentes idades.",
  },
  {
    icon: Gamepad2,
    title: "Jogos Educativos",
    description: "Atividades lúdicas que transformam o aprendizado em diversão.",
  },
  {
    icon: Volume2,
    title: "Áudio Interativo",
    description: "Sistema de som para histórias, músicas e feedback sonoro.",
  },
  {
    icon: Wifi,
    title: "Conectividade",
    description: "Atualizações de conteúdo e monitoramento por aplicativo.",
  },
  {
    icon: Bot,
    title: "IA Adaptativa",
    description: "Aprende o ritmo da criança e personaliza o ensino.",
  },
]

const applications = [
  "Reforço escolar em casa",
  "Apoio em sala de aula",
  "Educação especial e inclusiva",
  "Bibliotecas e espaços educacionais",
  "Clínicas de acompanhamento infantil",
]

export function ProductSection() {
  return (
    <section id="produto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            O Produto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Robô DECA: Seu Companheiro de Aprendizado
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desenvolvido com tecnologia de ponta e design pensado para crianças, 
            o DECA é mais do que um robô - é um amigo que torna cada momento de 
            estudo uma aventura educativa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border h-full">
                <div className="h-full flex flex-col items-center justify-center space-y-6">
                  <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">DECA</h3>
                    <p className="text-sm text-muted-foreground">Robô Educacional Interativo</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Interativo
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
                      Educativo
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Amigável
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interação Natural com Crianças
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                O DECA foi projetado para criar uma conexão genuína com as crianças. 
                Com expressões faciais amigáveis, voz suave e respostas personalizadas, 
                ele se torna um companheiro de estudos que as crianças adoram interagir.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border bg-secondary/30">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Aplicações do DECA
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O robô DECA foi desenvolvido para ser versátil e pode ser utilizado 
                  em diversos ambientes educacionais, sempre com o objetivo de melhorar 
                  a experiência de aprendizado das crianças.
                </p>
              </div>
              <div className="space-y-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
