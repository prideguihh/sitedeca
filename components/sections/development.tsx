import { Lightbulb, PenTool, Wrench, TestTube, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const timeline = [
  {
    icon: Lightbulb,
    phase: "Fase 1",
    title: "Ideação e Pesquisa",
    description: "Identificamos a necessidade de um robô educacional e realizamos pesquisas com professores, pais e crianças para entender as principais dificuldades no aprendizado.",
  },
  {
    icon: PenTool,
    phase: "Fase 2",
    title: "Design e Prototipagem",
    description: "Desenvolvemos o design amigável do DECA, focando em criar uma aparência que atraia as crianças e transmita confiança aos pais e educadores.",
  },
  {
    icon: Wrench,
    phase: "Fase 3",
    title: "Desenvolvimento Técnico",
    description: "Implementamos os sistemas de hardware e software, incluindo reconhecimento de voz, processamento de linguagem natural e biblioteca de conteúdos.",
  },
  {
    icon: TestTube,
    phase: "Fase 4",
    title: "Testes e Validação",
    description: "Realizamos testes com grupos de crianças em diferentes ambientes para validar a eficácia educacional e a usabilidade do robô.",
  },
  {
    icon: Rocket,
    phase: "Fase 5",
    title: "Lançamento e Expansão",
    description: "Preparamos o DECA para o mercado, com foco inicial em escolas e famílias interessadas em tecnologia educacional inovadora.",
  },
]



const technologies = [
  "Python para processamento de linguagem",
  "Raspberry Pi como unidade central",
  "Sensores de proximidade e toque",
  "Sistema de áudio integrado",
  "Conectividade Wi-Fi",
  "Aplicativo mobile para monitoramento",
]

export function DevelopmentSection() {
  return (
    <section id="desenvolvimento" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Desenvolvimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            A Jornada de Criação do DECA
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conheça todo o processo de desenvolvimento do nosso robô educacional, 
            desde a concepção da ideia até os testes finais.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Etapas do Projeto
          </h3>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                          {item.phase}
                        </span>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 z-10">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Tecnologias Utilizadas
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                O desenvolvimento do DECA envolveu diversas tecnologias modernas, 
                combinando hardware e software para criar uma experiência educacional completa.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
